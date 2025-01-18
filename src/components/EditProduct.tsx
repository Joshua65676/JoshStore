"use client"
import React, { useState, useEffect } from 'react';

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

const EditProduct: React.FC<EditProductProps> = ({ product, onUpdate, onCancel }) => {
  const [updatedProduct, setUpdatedProduct] = useState<Product>(product);

  useEffect(() => {
    setUpdatedProduct(product);
  }, [product]);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUpdatedProduct({ ...updatedProduct, image: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = () => {
    onUpdate(updatedProduct);
  };

  return (
    <div className="mb-4">
      <input
        type="text"
        placeholder="Product Title"
        value={updatedProduct.title}
        onChange={(e) => setUpdatedProduct({ ...updatedProduct, title: e.target.value })}
        className="border p-2 mr-2"
      />
      <input
        type="text"
        placeholder="Product Description"
        value={updatedProduct.description}
        onChange={(e) => setUpdatedProduct({ ...updatedProduct, description: e.target.value })}
        className="border p-2 mr-2"
      />
      <input
        type="text"
        placeholder="Product Brand"
        value={updatedProduct.brand}
        onChange={(e) => setUpdatedProduct({ ...updatedProduct, brand: e.target.value })}
        className="border p-2 mr-2"
      />
      <input
        type="text"
        placeholder="Product Category"
        value={updatedProduct.category}
        onChange={(e) => setUpdatedProduct({ ...updatedProduct, category: e.target.value })}
        className="border p-2 mr-2"
      />
      <input
        type="number"
        placeholder="Product Price"
        value={updatedProduct.price}
        onChange={(e) => setUpdatedProduct({ ...updatedProduct, price: Number(e.target.value) })}
        className="border p-2 mr-2"
      />
      <input
        type="number"
        placeholder="Old Price"
        value={updatedProduct.oldPrice}
        onChange={(e) => setUpdatedProduct({ ...updatedProduct, oldPrice: Number(e.target.value) })}
        className="border p-2 mr-2"
      />
      <input
        type="text"
        placeholder="Image URL"
        value={updatedProduct.image}
        onChange={(e) => setUpdatedProduct({ ...updatedProduct, image: e.target.value })}
        className="border p-2 mr-2"
      />
      <input
        type="file"
        onChange={handleFileChange}
        className="border p-2 mr-2"
      />
      <input
        type="number"
        placeholder="Quantity Sold Out"
        value={updatedProduct.soldOut}
        onChange={(e) => setUpdatedProduct({ ...updatedProduct, soldOut: Number(e.target.value) })}
        className="border p-2 mr-2"
      />
      <input
        type="number"
        placeholder="Product Rating"
        value={updatedProduct.rating}
        onChange={(e) => setUpdatedProduct({ ...updatedProduct, rating: Number(e.target.value) })}
        className="border p-2 mr-2"
      />
      <button onClick={handleSubmit} className="bg-green-500 text-white p-2">
        Update Product
      </button>
      <button onClick={onCancel} className="bg-gray-500 text-white p-2 ml-2">
        Cancel
      </button>
    </div>
  );
};

export default EditProduct;
