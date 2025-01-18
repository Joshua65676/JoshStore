"use client";
import React, { useState, useEffect } from "react";
import { GiHamburgerMenu } from "@/assets";
import { fetchProductData } from "../utils/fetchProductData";
import Link from "next/link";
// import { FaSection } from "react-icons/fa6";

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

const Category = ({ fetchAll }: { fetchAll: boolean }) => {
  const [isActive, setIsActive] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);

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

  const handleClick = () => {
    setIsVisible(!isVisible);
  };

const handleActiveClick = (category: string) => {
   setIsActive(category)
};

  return (
    <section>
      <button className="pt-2" onClick={handleClick}>
        <GiHamburgerMenu className="w-7 h-6 text-GrayishBlue" />
      </button>

      {isVisible && (
        <main className="flex flex-col text-Black absolute bg-LightGrayishBlue w-[15rem] md:-ml-20 mt-2 shadow-2xl pl-6 py-8 gap-8 rounded-xl z-40">
          <div className="flex flex-row gap-2">
            <GiHamburgerMenu className="w-5 h-6 text-Black" />
            <h3 className="text-lg font-semibold font-kumbh">All Categories</h3>
          </div>
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
                      className={`text-sm font-kumbh font-thin hover:text-Orange ${
                        isActive ? " text-Orange" : ""
                      }`}
                      onClick={() => handleActiveClick(product.category)}
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
        </main>
      )}
    </section>
  );
};

export default Category;
