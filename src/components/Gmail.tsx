"use client"
import React, { useState } from 'react';

const SubscriptionForm: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Simulate a successful subscription
    if (email) {
      setMessage('Successfully subscribed!');
    } else {
      setMessage('Please enter a valid email.');
    }
  };

  return (
    <div className=" shadow-lg rounded-lg w-[20rem]">
      <h2 className="text-lg font-bold mb-4 text-White">Subscribe to our Monthly Newsletter</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='Enter your email'
          required
          className="px-4 py-2 border border-Grayishblue rounded-md focus:outline-none focus:ring-2 focus:ring-BgOrange"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-Orange text-white rounded-md hover:bg-BgOrange"
        >
          Subscribe
        </button>
      </form>
      {message && <p className="mt-4 text-center text-green-600">{message}</p>}
    </div>
  );
};

export default SubscriptionForm;
