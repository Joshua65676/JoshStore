"use client";
import { useContext } from "react";
import { CartContext } from "@/context/CartContext";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { FaTrash } from "react-icons/fa";
import CartSum from "@/components/CartSum";

const CartPage = () => {
  const cartContext = useContext(CartContext);

  if (!cartContext) {
    throw new Error("CartContext must be used within a CartProvider");
  }

  const { cart, removeFromCart, updateQuantity, clearCart } = cartContext;

  const cartProductCount = cart.reduce(
    (total, product) => total + product.quantity,
    0
  );

  return (
    <section className="w-full max-w-7xl container md:py-32 mx:py-40">
      {cart.length > 0 && (
        <h1 className="text-2xl font-kumbh font-bold py-1">
          Your Cart ({cartProductCount})
        </h1>
      )}
      <main className="flex md:flex-row mx:flex-col justify-between mx:gap-10">
        <div className="flex flex-col border rounded-lg shadow-lg md:w-[55rem] p-8 gap-8">
          {cart.length > 0 ? (
            cart.map((product) => (
              <div key={product._id} className="p- flex flex-col gap-5">
                <div className="flex justify-between">
                  <div className="flex items-center gap-3">
                    <Image
                      src={product.image}
                      alt={product.title}
                      width={100}
                      height={100}
                      className="object-cover rounded-md"
                    />
                    <span>
                      <h3 className="md:text-lg font-semibold">
                        {product.title}
                      </h3>
                      <p className="mt-1 text-gray-700">{product.category}</p>
                      <p className=" text-gray-700 md:hidden"> ${product.price}</p>
                      <p className=" text-gray-500 line-through md:hidden">
                        ${product.oldPrice}
                      </p>
                    </span>
                  </div>

                  <span className="mx:hidden md:flex flex-col">
                    <p className="mt-1 text-gray-700"> ${product.price}</p>
                    <p className="mt-1 text-gray-500 line-through">
                      ${product.oldPrice}
                    </p>
                  </span>
                </div>

                <div className="flex flex-row items-center justify-between">
                  <button
                    onClick={() => removeFromCart(product._id)}
                    className="flex flex-row gap-2 text-Orange hover:text-red-700"
                  >
                    <FaTrash />
                    <span className=" text-sm font-kumbh font-semibold">
                      Remove
                    </span>
                  </button>

                  <div className="flex flex-row gap-5 items-center">
                    <Button
                      onClick={() =>
                        updateQuantity(product._id, product.quantity - 1)
                      }
                      disabled={product.quantity <= 1}
                      className="w-10 h-10 rounded-lg text-5xl text-center text-Black pb-2 bg-Orange border-none hover:bg-BgOrange"
                    >
                      -
                    </Button>

                    <p className=" text-Grayishblue text-lg font-mono font-medium">
                      {product.quantity}
                    </p>

                    <Button
                      onClick={() =>
                        updateQuantity(product._id, product.quantity + 1)
                      }
                      className="w-10 h-10 rounded-lg text-4xl text-center text-Black bg-Orange border-none hover:bg-BgOrange"
                    >
                      +
                    </Button>
                  </div>
                </div>
                <div className="">
                  <hr className="border" />
                </div>
              </div>
            ))
          ) : (
            <main className="text-center flex flex-col gap-10 py-40 md:px-40">
              <div className="flex flex-col gap-3">
                <p className="font-kumbh font-semibold text-xl">
                  Your cart is empty!
                </p>
                <p className="text-base font-mono font-semibold">
                  Browse our categories and discover our best deals!
                </p>
              </div>
              <Link href="/">
                <Button className="bg-Orange hover:bg-BgOrange border-none rounded-xl w-[10rem] h-[3rem]">
                  <span className="text-Black text-sm font-kumbh font-semibold uppercase">
                    Start Shopping
                  </span>
                </Button>
              </Link>
            </main>
          )}
          {cart.length > 0 && (
            <main className="flex flex-row gap-3 ">
              <Button
                onClick={clearCart}
                className=" bg-red-600 hover:bg-red-800 rounded-lg border-none"
              >
                <span className="text-Black text-sm font-kumbh font-semibold">
                  Remove All
                </span>
              </Button>
              <Link href="/">
                <Button className="bg-Orange hover:bg-BgOrange border-none rounded-xl w-[10rem] h-[3rem]">
                  <span className="text-Black text-sm font-kumbh font-semibold">
                    Continue Shopping
                  </span>
                </Button>
              </Link>
            </main>
          )}
        </div>

        <div>{cart.length > 0 && <CartSum />}</div>
      </main>
    </section>
  );
};

export default CartPage;
