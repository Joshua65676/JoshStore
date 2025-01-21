import React, { useState, useEffect } from "react";
import { fetchProductData } from "../utils/fetchProductData";
import Link from "next/link";
import {
  FaArrowAltCircleLeft,
  FaArrowAltCircleRight,
  FaBox,
  FaRegQuestionCircle,
  FaUserTie,
  MdAddShoppingCart,
} from "@/assets";

type Product = {
  _id: number;
  title: string;
  description: string;
  oldPrice: number;
  price: number;
  brand: string;
  image: string;
  isNew: boolean;
  category: string;
};

const SideBar = ({ fetchAll }: { fetchAll: boolean }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isListVisible, setIsListVisible] = useState<boolean>(false);
  const [stickyClass, setStickyClass] = useState<boolean>(false);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const productData = await fetchProductData(fetchAll);
        setProducts(productData);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    getProducts();
  }, [fetchAll]);

  const toggleList = () => {
    setIsListVisible(!isListVisible);
  };

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

  return (
    <section className="">
      <main className="" onClick={toggleList}>
        {isListVisible ? (
          <FaArrowAltCircleLeft className="h-7 w-8 text-Grayishblue" />
        ) : (
          <FaArrowAltCircleRight className="h-7 w-8 text-Grayishblue" />
        )}
      </main>

      {isListVisible && (
        <main
          className={`absolute w-[15rem] h-screen left-0 z-20 ${
            stickyClass
              ? " bg-white/20 backdrop-blur-sm border-b border-slate-300 shadow-lg "
              : "bg-Black"
          }`}
        >
          <main className="flex flex-col gap-10 p-8 pl-8 py-8">
            <div
              className={`flex flex-col gap-5 text-xl font-kumbh font-semibold ${
                stickyClass ? "text-black" : "text-white"
              }`}
            >
              <h2 className="text-Orange font-semibold text-lg font-serif">
                Profile
              </h2>
              <div>
                <Link
                  href={{ pathname: `/myaccount` }}
                  className="flex flex-row gap-3  hover:text-BgOrange"
                >
                  <FaUserTie className="mt-1" />
                  <span>my account</span>
                </Link>
              </div>
              <div>
                <Link
                  href={{ pathname: `/` }}
                  className="flex flex-row gap-3 hover:text-BgOrange"
                >
                  <FaRegQuestionCircle className="mt-1" />
                  <span>help & support</span>
                </Link>
              </div>
              <div>
                <Link
                  href={{ pathname: `/` }}
                  className="flex flex-row gap-3 hover:text-BgOrange"
                >
                  <MdAddShoppingCart className="mt-1" />
                  <span>checkout</span>
                </Link>
              </div>
              <div>
                <Link
                  href={{ pathname: `/` }}
                  className="flex flex-row gap-3 hover:text-BgOrange"
                >
                  <FaBox className="mt-1" />
                  <span>order tracking</span>
                </Link>
              </div>
            </div>

            <div className="flex flex-col gap-5">
              <h3 className="text-lg font-semibold font-serif text-Orange">
                All Categories
              </h3>
              <div className="flex flex-col gap-5">
                {products.length > 0 ? (
                  products.map((product) => (
                    <div key={product._id}>
                      <Link
                        href={{
                          pathname: `/category/${encodeURIComponent(
                            product.category
                          )}`,
                        }}
                      >
                        <h3
                          className={`text-xl font-kumbh font-semibold hover:text-Orange ${
                            stickyClass ? "text-black" : "text-white"
                          }`}
                        >
                          {product.category}
                        </h3>
                      </Link>
                    </div>
                  ))
                ) : (
                  <p>Loading...</p>
                )}
              </div>
            </div>
          </main>
        </main>
      )}
    </section>
  );
};

export default SideBar;
