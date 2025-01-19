"use client";
import React, { useState, useEffect } from "react";
import CreateProduct from "./CreateProduct";
import ProductList from "./ProductList";
import { fetchProductData } from "@/utils/fetchProductData";
import { Button } from "./ui/Button";

interface Product {
  _id: number;
  title: string;
  description: string;
  oldPrice: number;
  price: number;
  brand: string;
  image: string;
  isNew: boolean;
  category: string;
  soldOut: number;
  rating: number;
}

const tabs = [
  { id: "create", label: "Create Product" },
  { id: "products", label: "Product" },
];

const ProductManager: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState("create");

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      try {
        const productData = await fetchProductData(true);
        setProducts(productData);
      } catch (error) {
        console.error("Error fetching product data:", error);
        setError("Failed to fetch products");
      } finally {
        setLoading(false);
      }
    };

    getProducts();
  }, []);

  const handleCreateProduct = (newProduct: Product) => {
    setLoading(true);
    setError(null);

    try {
      setProducts((prevProducts) => [...prevProducts, newProduct]);
    } catch (err) {
      console.error("Error creating product:", err);
      setError("Failed to create product");
    }

    setLoading(false);
  };

  const handleUpdateProduct = (updatedProduct: Product) => {
    setLoading(true);
    setError(null);

    try {
      const updatedProducts = products.map((product) =>
        product._id === updatedProduct._id ? updatedProduct : product
      );
      setProducts(updatedProducts);
    } catch (err) {
      console.error("Error updating product:", err);
      setError("Failed to update product");
    }
    setLoading(false);
  };

  const handleDeleteProduct = (_id: number) => {
    setLoading(true);
    setError(null);

    try {
      const filteredProducts = products.filter(
        (product) => product._id !== _id
      );
      setProducts(filteredProducts);
    } catch (err) {
      console.error("Error deleting product:", err);
      setError("Failed to delete product");
    }

    setLoading(false);
  };

  return (
    <section className="min-h-screen relative w-full bg-black text-White">
      <main className=" py-[8rem] px-4 relative z-10">
        <h2 className="text-4xl font-bold mb-8 text-center text-emerald-400">Admin Dashboard</h2>

        {loading && <div className="hidden">Loading...</div>}
        {error && <div className="text-red-500">{error}</div>}

        <div className="flex justify-center mb-8">
          {tabs.map((tab) => (
            <Button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center px-4 mx-2 rounded-md transition-colors duration-200 ${
                tab.id === activeTab ? "bg-BgOrange text-white" : "bg-gray-200"
              }`}
            >
              {tab.label}
            </Button>
          ))}
        </div>
        {activeTab === "create" && (
          <CreateProduct onCreate={handleCreateProduct} />
        )}
        {activeTab === "products" && (
          <ProductList
            products={products}
            onUpdate={handleUpdateProduct}
            onDelete={handleDeleteProduct}
          />
        )}
      </main>
    </section>
  );
};

export default ProductManager;
