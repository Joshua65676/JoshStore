"use client";
import AddressForm from "@/components/AddressForm";
import PaymentButton from "@/components/paymentbutton";
import React, { useContext } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { CartContext } from "@/context/CartContext";
import convertToSubcurrency from "@/lib/convertToSubcurrency";

if (process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY === undefined) {
  throw new Error("NEXT_PUBLIC_STRIPE_PUBLIC_KEY is not defined");
}

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

const Page = () => {
  const cartContext = useContext(CartContext);
  // const [clientSecret, setClientSecret] = useState<string>("");

  if (!cartContext) {
    throw new Error("CartContext must be used within a CartProvider");
  }

  const { cart } = cartContext;

  const totalPrice = cart.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );

  // useEffect(() => {
  //   fetch("/api/create-payment-intent", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ amount: convertToSubcurrency(totalPrice) }),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log("Received data:", data); // Debugging log
  //       if (data.clientSecret) {
  //         setClientSecret(data.clientSecret);
  //       } else {
  //         console.error("Client secret not found in response:", data);
  //       }
  //     })
  //     .catch((error) => console.error("Error fetching payment intent:", error));
  // }, [totalPrice]);

  return (
    <Elements
      stripe={stripePromise}
      options={{
        mode: "payment",
        amount: convertToSubcurrency(totalPrice),
        currency: "usd",
      }}
    >
      <div className="flex md:flex-row mx:flex-col gap-[5rem] py-28 container w-full">
        <AddressForm />
        <PaymentButton />
      </div>
    </Elements>
  );
};

export default Page;
