"use client";
import React, { useEffect, useState, useCallback } from "react";
import { fetchProductData } from "../utils/fetchProductData";
import Link from "next/link";
import { Button } from "./ui/Button";
import { FaSearch } from "@/assets";
// import Image from "next/image";

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

const SearchInput: React.FC<{ fetchAll: boolean }> = ({ fetchAll }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

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

  const handleSearch = useCallback(() => {
    const lowercasedQuery = searchQuery.toLowerCase();
    const filtered = products.filter(
      (product) =>
        product.title.toLowerCase().includes(lowercasedQuery) ||
        product.category.toLowerCase().includes(lowercasedQuery) ||
        product.brand.toLowerCase().includes(lowercasedQuery)
    );
    setFilteredProducts(filtered);
  }, [searchQuery, products]);

  useEffect(() => {
    handleSearch();
  }, [handleSearch]);

  const handleSelect = (title: string) => {
    setSearchQuery(title);
    setFilteredProducts([]);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    handleSearch();
  };

  return (
    <section className="flex flex-col items-center justify-center md:p-5 mx:p-0">
      <main className="md:w-[40rem] mx:w-[21.5rem] xm:w-[24rem] max-w-lg relative">
        <form onSubmit={handleSubmit}>
          <div className="flex items-center flex-row">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by title, brand, and category!"
              className="md:w-full mx:w-full p-2 border border-GrayishBlue rounded-lg focus:outline-none focus:ring-2 focus:ring-Grayishblue"
            />
            <button type="submit" className="md:hidden mx:flex absolute right-0 mr-3">
              <FaSearch className="w-8 h-6 text-GrayishBlue"/>
            </button>
            <Button
              type="submit"
              className="ml-2 p-2 bg-Orange text-white rounded-lg hover:bg-BgOrange focus:outline-none border-none h-10 md:flex mx:hidden"
            >
              Search
            </Button>
          </div>
        </form>
        {searchQuery && filteredProducts.length > 0 && (
          <div className="absolute left-0 right-0 mt-2 bg-white border border-GrayishBlue rounded-lg shadow-lg max-h-60 overflow-y-auto z-10">
            {filteredProducts.map((product) => {
              const isCategorySearch = product.category
                .toLowerCase()
                .includes(searchQuery.toLowerCase());
              return (
                <Link
                  key={product._id}
                  href={
                    isCategorySearch
                      ? `/category/${encodeURIComponent(product.category)}`
                      : `/product/${product._id}`
                  }
                  passHref
                >
                  <span
                    className="block p-2 border-b border-GrayishBlue hover:bg-GrayishBlue cursor-pointer"
                    onClick={() => handleSelect(product.title)}
                  >
                    {product.title}
                  </span>
                </Link>
              );
            })}
          </div>
        )}
      </main>
    </section>
  );
};

export default SearchInput;
