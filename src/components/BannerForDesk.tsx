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
const BannerForDesk = ({ fetchAll }: { fetchAll: boolean }) => {
  const [products, setProducts] = useState<Product[]>([]);
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

  const handleLinkClick = () => {
    setLinkLoading(true);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64 xl:flex md:hidden mx:hidden xm:hidden">
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
    <main className="md:py-28 mx:py-[10rem] container w-full max-w-7xl flex flex-col gap-10 mx:-mb-[10rem] md:-mb-[5rem] xl:flex md:hidden mx:hidden xm:hidden">
      <div className="">
        <h1 className="text-4xl font-kumbh font-bold">Category deals</h1>
      </div>
      <div className="flex flex-row justify-between pt-5">
        {products.length > 0 ? (
          products.map((product) => (
            <div
              key={product._id}
              className="hover:bg-LightGrayishBlue hover:shadow-2xl w-[11rem] h-[12rem] -mt-5 hover:border hover:rounded-xl"
            >
              <div className="flex flex-col gap-3 ml-3 mt-3">
                <Link
                  href={{
                    pathname: `/category/${encodeURIComponent(
                      product.category
                    )}`,
                  }}
                  passHref
                >
                  <div
                    onClick={handleLinkClick}
                    className="block w-full h-full"
                  >
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
                      <>
                        <>
                          <Image
                            src={product.image}
                            alt={product.title}
                            width={150}
                            height={10}
                            className="object-cover rounded-xl"
                          />
                        </>
                        <h3 className=" text-base font-mono text-center font-semibold">
                          {product.category}
                        </h3>
                      </>
                    )}
                  </div>
                </Link>
              </div>
            </div>
          ))
        ) : (
          <div className="flex items-center justify-center">
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
    </main>
  );
};
export default BannerForDesk;
