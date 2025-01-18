// "use client";
// import React, { useEffect, useState, useCallback } from "react";
// import { fetchProductData } from "../utils/fetchProductData";
// import Link from "next/link";
// import { FaSearch } from "@/assets";
// // import { Button } from "./ui/Button";

// type Product = {
//   _id: number;
//   title: string;
//   description: string;
//   oldPrice: number;
//   price: number;
//   brand: string;
//   image: string;
//   isNew: boolean;
//   category: string;
// };

// const SearchMobile: React.FC<{ fetchAll: boolean }> = ({ fetchAll }) => {
//   const [products, setProducts] = useState<Product[]>([]);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

//   useEffect(() => {
//     const getProducts = async () => {
//       try {
//         const productData = await fetchProductData(fetchAll);
//         setProducts(productData);
//       } catch (error) {
//         console.error("Error fetching product data:", error);
//       }
//     };

//     getProducts();
//   }, [fetchAll]);

//   const handleSearch = useCallback(() => {
//     const lowercasedQuery = searchQuery.toLowerCase();
//     const filtered = products.filter(
//       (product) =>
//         product.title.toLowerCase().includes(lowercasedQuery) ||
//         product.category.toLowerCase().includes(lowercasedQuery) ||
//         product.brand.toLowerCase().includes(lowercasedQuery)
//     );
//     setFilteredProducts(filtered);
//   }, [searchQuery, products]);

//   useEffect(() => {
//     handleSearch();
//   }, [handleSearch]);

//   const handleSelect = (title: string) => {
//     setSearchQuery(title);
//     setFilteredProducts([]);
//   };

//   const handleSubmit = (event: React.FormEvent) => {
//     event.preventDefault();
//     handleSearch();
//   };
//   return <div></div>;
// };

// export default SearchMobile;
