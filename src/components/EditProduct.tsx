"use client";
import React, { useState, useEffect } from "react";
import { Button } from "./ui/Button";

interface EditProductProps {
  product: Product;
  onUpdate: (updatedProduct: Product) => void;
  onCancel: () => void;
}

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

const categories = [
  "Fashion",
  "Electronics",
  "Home Decoration",
  "Equipments",
  "Beauty Products",
];

const EditProduct: React.FC<EditProductProps> = ({
  product,
  onUpdate,
  onCancel,
}) => {
  const [updatedProduct, setUpdatedProduct] = useState<Product>(product);

  useEffect(() => {
    setUpdatedProduct(product);
  }, [product]);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUpdatedProduct({
          ...updatedProduct,
          image: reader.result as string,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = () => {
    onUpdate(updatedProduct);
  };

  return (
    <div className="shadow-lg rounded-lg p-8 mb-8 max-w-4xl mx-auto bg-gray-100">
      <h2 className="text-2xl font-semibold mb-6 text-emerald-300">
        Update Products
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-300"
          >
            Product Title
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Product Title"
            value={updatedProduct.title}
            onChange={(e) =>
              setUpdatedProduct({ ...updatedProduct, title: e.target.value })
            }
            className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-2	focus:ring-emerald-500 focus:border-emerald-500"
            required
          />
        </div>
        <div>
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-300"
          >
            Product Description
          </label>
          <textarea
            id="description"
            name="description"
            placeholder="Product Description"
            value={updatedProduct.description}
            onChange={(e) =>
              setUpdatedProduct({
                ...updatedProduct,
                description: e.target.value,
              })
            }
            rows={4}
            className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500  focus:border-emerald-500"
            required
          />
        </div>
        <div>
          <label
            htmlFor="brand"
            className="block text-sm font-medium text-gray-300"
          >
            Product Brand
          </label>
          <input
            type="text"
            placeholder="Product Brand"
            value={updatedProduct.brand}
            onChange={(e) =>
              setUpdatedProduct({ ...updatedProduct, brand: e.target.value })
            }
            className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            required
          />
        </div>
        <div>
          <label
            htmlFor="category"
            className="block text-sm font-medium text-gray-300"
          >
            Product Category
          </label>
          <select
            id="category"
            name="category"
            value={updatedProduct.category}
            onChange={(e) =>
              setUpdatedProduct({ ...updatedProduct, category: e.target.value })
            }
            className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            required
          >
            <option value="">select a category</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        <div className="flex justify-between">
          <div>
            <label
              htmlFor="price"
              className="block text-sm font-medium text-gray-300"
            >
              Product Price
            </label>
            <input
              type="number"
              id="price"
              name="price"
              placeholder="Product Price"
              value={updatedProduct.price}
              onChange={(e) =>
                setUpdatedProduct({
                  ...updatedProduct,
                  price: Number(e.target.value),
                })
              }
              step={0.01}
              className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              required
            />
          </div>
          <div>
            <label
              htmlFor="oldPrice"
              className="block text-sm font-medium text-gray-300"
            >
              Old Price
            </label>
            <input
              type="number"
              id="price"
              name="price"
              placeholder="Old Price"
              value={updatedProduct.oldPrice}
              onChange={(e) =>
                setUpdatedProduct({
                  ...updatedProduct,
                  oldPrice: Number(e.target.value),
                })
              }
              step={0.01}
              className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              required
            />
          </div>
        </div>

        <div className="flex justify-between">
          <div>
            <label
              htmlFor="SoldOut"
              className="block text-sm font-medium text-gray-300"
            >
              Sold Out
            </label>
            <input
              type="number"
              id="Sold"
              name="Sold"
              placeholder="Quantity Sold Out"
              value={updatedProduct.soldOut}
              onChange={(e) =>
                setUpdatedProduct({
                  ...updatedProduct,
                  soldOut: Number(e.target.value),
                })
              }
              className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              required
            />
          </div>
          <div>
            <label
              htmlFor="Rating"
              className="block text-sm font-medium text-gray-300"
            >
              Rating
            </label>
            <input
              type="number"
              id="Rating"
              name="Rating"
              placeholder="Rating"
              value={updatedProduct.rating}
              onChange={(e) =>
                setUpdatedProduct({
                  ...updatedProduct,
                  rating: Number(e.target.value),
                })
              }
              className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              required
            />
          </div>
        </div>
        <div className="mt-1 flex items-center">
          <input
            type="file"
            id="image"
            className="sr-only"
            onChange={handleFileChange}
            accept="image/*"
          />
          <label
            htmlFor="image"
            className="cursor-pointer bg-gray-700 py-2 px-3 border border-gray-600 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-300 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
          >
            Upload Image
          </label>
          {updatedProduct.image && (
            <span className="ml-3 text-sm text-gray-400">Image uploaded</span>
          )}
        </div>
        <div className="flex gap-[10rem]">
          <Button
            onClick={handleSubmit}
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-Orange hover:bg-BgOrange focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-Orange disabled:opacity-50"
          >
            Update Product
          </Button>
          <Button
            onClick={onCancel}
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-Orange hover:bg-BgOrange focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-Orange disabled:opacity-50"
          >
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
};

export default EditProduct;
