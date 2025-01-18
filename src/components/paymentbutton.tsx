"use client";
import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuthState } from "react-firebase-hooks/auth";
import { CartContext } from "@/context/CartContext";
import { Button } from "./ui/Button";
import { auth } from "@/firebase";
import {
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";
import convertToSubcurrency from "@/lib/convertToSubcurrency";

const PaymentButton: React.FC = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [errorMessage, setErrorMessage] = useState<string>();
  const [clientSecret, setClientSecret] = useState<string>("");
  const [paymentLoading, setPaymentLoading] = useState(false);

  const cartContext = useContext(CartContext);

  if (!cartContext) {
    throw new Error("CartContext must be used within a CartProvider");
  }

  const { cart } = cartContext;
  const router = useRouter();
  const [user] = useAuthState(auth);

  const totalPrice = cart.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );

  const cartProductCount = cart.reduce(
    (total, product) => total + product.quantity,
    0
  );

  useEffect(() => {
    fetch("/api/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: convertToSubcurrency(totalPrice) }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Received data:", data);
        if (data.clientSecret) {
          setClientSecret(data.clientSecret);
        } else {
          console.error("Client secret not found in response:", data);
        }
      })
      .catch((error) => console.error("Error fetching payment intent:", error));
  }, [totalPrice]);
  

  const handleCheckout = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setPaymentLoading(true);

    if (!stripe || !elements) {
      setErrorMessage("Stripe.js has not loaded yet.");
      setPaymentLoading(false);
      return;
    }

    if (!user) {
      router.push("/login?redirect=/checkout");
      return;
    }

    const { error: submitError } = await elements.submit();

    if (submitError) {
      setErrorMessage(submitError.message);
      setPaymentLoading(false);
      return;
    }

    const { error } = await stripe.confirmPayment({
      elements,
      clientSecret,
      confirmParams: {
        return_url: `http://www.localhost:3000/success`,
      },
    });

    if (error) {
      setErrorMessage(error.message);
      setPaymentLoading(false);
    } else {
      setErrorMessage(undefined);
    }

    setPaymentLoading(false);
  };

  // if (!clientSecret || !stripe || !elements) {
  //   return (
  //     <div className="flex items-center justify-center">
  //       <div
  //         className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"
  //         role="status"
  //       >
  //         <span className="text-black">
  //           Loading...
  //         </span>
  //       </div>
  //     </div>
  //   );
  // }

  return (
    <main className="border shadow-lg rounded-lg md:w-[20rem]">
      <div className="flex flex-col">
        <span className="p-2 font-sans font-semibold">Order Summary</span>
        <hr className="" />
        <div className="flex-col flex gap-">
          <div className="text-[15px] font-kumbh font-medium flex justify-between p-2">
            <span className="">Items total ({cartProductCount})</span>
            <span className="">${totalPrice.toFixed(2)}</span>
          </div>
          <hr className="" />
          <div className="text-[15px] font-kumbh font-medium flex justify-between p-2">
            <span className="">Total</span>
            <span className="text-[18px]">${totalPrice.toFixed(2)}</span>
          </div>
          <hr className="" />
          <p className="text-[13px] font-serif p-2">
            Delivery fees not included!
          </p>
        </div>
        <hr className="" />
        {/* payment card stripe */}
        <form onSubmit={handleCheckout} className="p-2 items-center w-full">
          {clientSecret && <PaymentElement />}

          {errorMessage && <div>{errorMessage}</div>}
          <Button
            disabled={!stripe || paymentLoading}
            className="bg-Orange hover:bg-BgOrange border-none rounded-xl w-full h-[3rem]"
          >
            <span className="text-Black text-sm font-kumbh font-semibold uppercase flex gap-2">
              {!paymentLoading ? "Confirm Payment" : "Processing..."}
            </span>
          </Button>
        </form>

        <div className="text-center pb-2">
          <span className="text-[12px] font-sans font-semibold">
            Complete the steps in order to proceed!
          </span>
        </div>
      </div>
    </main>
  );
};

export default PaymentButton;
