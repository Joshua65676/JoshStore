"use client";

import Link from "next/link";
import React, { useEffect, useState, useContext } from "react";
// import { Button } from "./ui/Button";
import HelpButton from "./HelpButton";
import AccountButton from "./AccButton";
import Category from "./Category";
import { CartContext } from "@/context/CartContext";
import { MdAddShoppingCart } from "@/assets";
import SearchInput from "./SearchInput";

const Navbar: React.FC = () => {
  const [stickyClass, setStickyClass] = useState<boolean>(false);
  const [linkLoading, setLinkLoading] = useState(false);
  const cartContext = useContext(CartContext);

  if (!cartContext) {
    throw new Error("CartContext must be used within a CartProvider");
  }

  const stickNavbar = () => {
    if (typeof window !== "undefined") {
      const windowHeight = window.scrollY;
      setStickyClass(windowHeight > 50);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);
    return () => window.removeEventListener("scroll", stickNavbar);
  }, []);

  const { cart } = cartContext;
  const cartProductCount = cart.reduce(
    (total, product) => total + product.quantity,
    0
  );

  const handleCartClick = () => {
    setLinkLoading(true);
    setTimeout(() => {
      setLinkLoading(false);
      // Navigate to cart
    }, 5000);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50   ${
        stickyClass
          ? "bg-white/20 backdrop-blur-sm border-b border-slate-300 shadow-lg"
          : "bg-Black"
      }`}
    >
      <section className="max-w-7xl mx-auto w-full mx:p-5 mx:pt-5 md:p-0">
        <main className="flex w-full justify-between md:items-center md:flex-row mx:flex-col mx:items-start mx:gap-3">
          <div className="flex flex-row md:gap-10 mx:gap-[8.5rem] xm:gap-[11rem]">
            <div className="">
              <Link href="/">
                <span className="md:text-3xl mx:text-2xl font-semibold">
                  <span
                    className={` font-kumbh ${
                      stickyClass ? "text-black" : "text-white"
                    }`}
                  >
                    Josh
                  </span>
                  <span className="font-mono text-Orange">Store</span>
                </span>
              </Link>
            </div>

            <div className="flex flex-row gap-5 md:hidden mx:flex">
              <AccountButton />

              <Link href={{ pathname: `/cart` }} passHref>
                <button
                  className="flex flex-row gap-0 hover:text-BgOrange text-GrayishBlue"
                  onClick={handleCartClick}
                  disabled={linkLoading}
                >
                  {linkLoading ? (
                    <div className="flex items-center justify-center h-full">
                      <div
                        className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-BgOrange"
                        role="status"
                      >
                        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)] text-BgOrange">
                          Loading...
                        </span>
                      </div>
                    </div>
                  ) : (
                    <>
                      <MdAddShoppingCart className="h-7 w-8 text-Grayishblu" />
                      {cartProductCount > 0 && (
                        <span className="absolute top-2 ml-2 bg-Orange font-mono text-white rounded-full px-3 py-0.5 text-xs">
                          {cartProductCount}
                        </span>
                      )}
                    </>
                  )}
                </button>
              </Link>
            </div>

            <div className="md:mt-[3px] md:flex mx:hidden">
              <Category fetchAll={false} />
            </div>
          </div>
          {/* Search input */}
          <SearchInput fetchAll={true} />

          <div className="flex flex-row gap-8 md:flex mx:hidden">
            <HelpButton />
            <AccountButton />

            <Link href={{ pathname: `/cart` }} passHref>
              <button
                onClick={handleCartClick}
                disabled={linkLoading}
                className="flex flex-row gap-0 hover:text-BgOrange text-GrayishBlue"
              >
                {linkLoading ? (
                  <div className="flex items-center justify-center h-full">
                    <div
                      className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-BgOrange"
                      role="status"
                    >
                      <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)] text-BgOrange">
                        Loading...
                      </span>
                    </div>
                  </div>
                ) : (
                  <>
                    <MdAddShoppingCart className="h-6 w-7 text-Grayishblu" />
                    {cartProductCount > 0 && (
                      <span className="absolute top-2 ml-2 bg-Orange font-mono text-white rounded-full px-3 py-0.5 text-xs">
                        {cartProductCount}
                      </span>
                    )}
                    <span className="text-Grayishblu relative font-kumbh font-medium md:flex mx:hidden">
                      Cart
                    </span>
                  </>
                )}
              </button>
            </Link>
          </div>
        </main>
      </section>
    </nav>
  );
};

export default Navbar;
