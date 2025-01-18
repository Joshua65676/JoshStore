"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { fetchProductData } from "../utils/fetchProductData";
import Link from "next/link";

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

const Banner = ({ fetchAll }: { fetchAll: boolean }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [linkLoading, setLinkLoading] = useState(false);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const productData = await fetchProductData(fetchAll);
        setProducts(productData);
      } catch (error) {
        console.error("Error fetching product data:", error);
      } finally {
        setLoading(false);
      }
    };

    getProducts();
  }, [fetchAll]);

  useEffect(() => {
    if (products.length > 0) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
      }, 5000); // Change product every 5 seconds

      return () => clearInterval(interval);
    }
  }, [products]);

  const handleLinkClick = () => {
    setLinkLoading(true);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64 xl:hidden md:flex mx:flex xm:flex">
        <div
          className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-Black"
          role="status"
        >
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)] text-Black">
            Loading...
          </span>
        </div>
      </div>
    );
  }

  return (
    <main className="md:py-28 mx:py-[10rem] container w-full max-w-7xl flex flex-col gap-10 mx:-mb-[10rem] md:-mb-[5rem] xl:hidden md:flex">
      <span>
        <h1 className="text-4xl font-kumbh font-bold">Category deals</h1>
      </span>
      <div className="relative xl:w-full xl:h-64 mx:h-[18rem] overflow-hidden flex">
        {products.length > 0 ? (
          products.map((product, index) => (
            <div
              key={product._id}
              className={`absolute w-full h-full transition-transform duration-1000 ease-in-out ${
                index === currentIndex
                  ? "transform translate-x-0"
                  : "transform translate-x-full"
              }`}
            >
              <Link
                href={{
                  pathname: `/category/${encodeURIComponent(product.category)}`,
                }}
                passHref
              >
                <div onClick={handleLinkClick} className="block w-full h-full">
                  {linkLoading ? (
                    <div className="flex items-center justify-center h-full">
                      <div
                        className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-Black"
                        role="status"
                      >
                        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)] text-Black">
                          Loading...
                        </span>
                      </div>
                    </div>
                  ) : (
                    <div className="flex flex-col gap-2">
                      <Image
                        src={product.image}
                        alt={product.title}
                        width={250}
                        height={20}
                        // layout="fill"
                        objectFit="cover"
                        className="object-cover rounded-xl w-full h-[15rem]"
                      />
                      <h3 className="text-xl font-mono text-center font-semibold mt-2">
                        {product.category}
                      </h3>
                    </div>
                  )}
                </div>
              </Link>
            </div>
          ))
        ) : (
          <div className="flex items-center justify-center text-center">
            <div
              className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-Black"
              role="status"
            >
              <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)] text-Black">
                Loading...
              </span>
            </div>
          </div>
        )}
      </div>
      <div className="flex justify-center mt-4">
        {products.map((_, index) => (
          <label key={index} className="cursor-pointer mx-2">
            <input
              type="radio"
              name="banner-slide"
              placeholder="Select a slide"
              checked={currentIndex === index}
              onChange={() => setCurrentIndex(index)}
              className="hidden"
            />
            <span
              className={`w-3 h-3 rounded-full inline-block ${
                currentIndex === index ? "bg-black" : "bg-gray-400"
              }`}
            ></span>
          </label>
        ))}
      </div>
    </main>
  );
};

export default Banner;
