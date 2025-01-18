"use client";
import React, { useState } from "react";
import { Button } from "./ui/Button";

interface CreateProductProps {
  onCreate: (newProduct: Product) => void;
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
}

const categories = [
  "Fashion",
  "Electronics",
  "Home Decoration",
  "Equipments",
  "Beauty Products",
];

const CreateProduct: React.FC<CreateProductProps> = ({ onCreate }) => {
  const [newProduct, setNewProduct] = useState<Product>({
    _id: Date.now(),
    title: "",
    description: "",
    oldPrice: 0,
    price: 0,
    brand: "",
    image: "",
    isNew: false,
    category: "",
    soldOut: 0,
  });

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewProduct({ ...newProduct, image: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = () => {
    onCreate({ ...newProduct, _id: Date.now() });
    setNewProduct({
      _id: Date.now(),
      title: "",
      description: "",
      oldPrice: 0,
      price: 0,
      brand: "",
      image: "",
      isNew: false,
      category: "",
      soldOut: 0,
    });
  };

  return (
    <div className="shadow-lg rounded-lg p-8 mb-8 max-w-xl mx-auto bg-gray-100">
      <h2 className="text-2xl font-semibold mb-6 text-BgOrange">
        Create New Products
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
            value={newProduct.title}
            onChange={(e) =>
              setNewProduct({ ...newProduct, title: e.target.value })
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
            value={newProduct.description}
            onChange={(e) =>
              setNewProduct({ ...newProduct, description: e.target.value })
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
            value={newProduct.brand}
            onChange={(e) =>
              setNewProduct({ ...newProduct, brand: e.target.value })
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
            value={newProduct.category}
            onChange={(e) =>
              setNewProduct({ ...newProduct, category: e.target.value })
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
            value={newProduct.price}
            onChange={(e) =>
              setNewProduct({ ...newProduct, price: Number(e.target.value) })
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
            value={newProduct.oldPrice}
            onChange={(e) =>
              setNewProduct({ ...newProduct, oldPrice: Number(e.target.value) })
            }
            step={0.01}
            className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            required
          />
        </div>
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
            value={newProduct.soldOut}
            onChange={(e) =>
              setNewProduct({ ...newProduct, soldOut: Number(e.target.value) })
            }
            className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            required
          />
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
          {newProduct.image && (
            <span className="ml-3 text-sm text-gray-400">
              {newProduct.image}
            </span>
          )}
        </div>
        <Button
          onClick={handleSubmit}
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-Orange hover:bg-BgOrange focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-Orange disabled:opacity-50"
        >
          Create Product
        </Button>
      </form>
    </div>
  );
};

export default CreateProduct;
