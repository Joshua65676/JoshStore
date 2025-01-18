import React from 'react';
import Link from 'next/link';

const Success = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-2xl font-bold mb-4">Payment Successful!</h1>
      <p className="text-lg mb-6">Thank you for your purchase. Your order has been successfully processed.</p>
      <Link href="/">
        <button className="bg-Orange hover:bg-BgOrange text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Go to Homepage
        </button>
      </Link>
    </div>
  );
};

export default Success;
