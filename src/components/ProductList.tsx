
"use client";
import React, { useState } from "react";
import EditProduct from "./EditProduct";
import Image from "next/image";
import { Trash, FaEdit, Star } from "@/assets";

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

interface ProductListProps {
  products: Product[];
  onUpdate: (updatedProduct: Product) => void;
  onDelete: (_id: number) => void;
}

const ProductList: React.FC<ProductListProps> = ({
  products,
  onUpdate,
  onDelete,
}) => {
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);

  return (
    <main className="bg-gray-800 shadow-lg rounded-lg overflow-hidden max-w-4xl mx-auto">
      {editingProduct ? (
        <EditProduct
          product={editingProduct}
          onUpdate={(updatedProduct) => {
            onUpdate(updatedProduct);
            setEditingProduct(null);
          }}
          onCancel={() => setEditingProduct(null)}
        />
      ) : (
        <table className=" min-w-full divide-y divide-gray-700">
          <thead className="bg-gray-700">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider"
              >
                Product
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider"
              >
                Price
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider"
              >
                Category
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider"
              >
                Rating
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider"
              >
                Actions
              </th>
            </tr>
          </thead>

          <tbody className="bg-gray-800 divide-y divide-gray-700">
            {products.map((product) => (
              <tr key={product._id} className="hover:bg-gray-700">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10">
                      <Image
                        className="h-10 w-10 rounded-full object-cover"
                        width={10}
                        height={10}
                        src={product.image}
                        alt={product.title}
                      />
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-white">
                        {product.title.substring(0, 20)}...
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-300">
                    ${product.price.toFixed(2)}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-300">
                    {product.category}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="font-medium font-kumbh text-gray-300 flex gap-2">
                    <Star className="h-5 w-5 text-yellow-400" />
                    {product.rating}
                  </div>
                </td>

                <div className="flex gap-3 pl-7">
                  <td className=" py-8 whitespace-nowrap text-sm font-medium">
                    <button
                      onClick={() => setEditingProduct(product)}
                      className="text-red-400 hover:text-red-300"
                    >
                      <FaEdit className="h-5 w-5" />
                    </button>
                  </td>

                  <td className=" py-8 whitespace-nowrap text-sm font-medium">
                    <button
                      onClick={() => onDelete(product._id)}
                      className="text-red-400 hover:text-red-300"
                    >
                      <Trash className="h-5 w-5" />
                    </button>
                  </td>
                </div>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </main>
  );
};

export default ProductList;
