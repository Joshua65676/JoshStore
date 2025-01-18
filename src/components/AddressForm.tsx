"use client";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "@/firebase";
import { setDoc, doc } from "firebase/firestore";

const AddressForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [deliveryAddress, setDeliveryAddress] = useState("");
  const [additionalInfo, setAdditionalInfo] = useState("");
  const [region, setRegion] = useState("");
  const [city, setCity] = useState("");
  const [user, loading] = useAuthState(auth);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!user) {
      setError("User is not logged in");
      return;
    }

    const addressData = {
      name,
      phone,
      deliveryAddress,
      additionalInfo,
      region,
      city,
    };

    try {
      await setDoc(doc(db, "addresses", user.uid), addressData);
      setError(null);
      alert("Address saved successfully!");
    } catch (error) {
      setError("Error saving address: " + (error as Error).message);
    }
  };

  return (
    <section className="md:w-[50rem] border md:py-10 mx:py-16 md:p-10 mx:p-7 shadow-lg rounded-lg">
      <form onSubmit={handleSubmit} className="space-y-4 md:w-[45rem]">
        {error && <p className="text-red-500">{error}</p>}
        <main className="flex md:flex-row mx:flex-col justify-between w-full mx:gap-[1rem]">
          <div className="md:w-[23rem] mx:w-[20rem]">
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="name"
            >
              First Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-Orange focus:border-Orange sm:text-sm"
              required
              placeholder="Enter your first name"
            />
          </div>

          <div className="w-[20rem]">
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="name"
            >
              Last Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-Orange focus:border-Orange sm:text-sm"
              required
              placeholder="Enter your Last name"
            />
          </div>
        </main>
        {/* phone number */}
        <main className="flex md:flex-row mx:flex-col justify-between w-full mx:gap-[1rem]">
          <div className="md:w-[23rem] mx:w-[20rem]">
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="phone"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-Orange focus:border-Orange sm:text-sm"
              required
              placeholder="Enter your phone number"
            />
          </div>

          <div className="w-[20rem]">
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="phone"
            >
              2nd Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-Orange focus:border-Orange sm:text-sm"
              required
              placeholder="Enter your second phone number"
            />
          </div>
        </main>

        <div>
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="deliveryAddress"
          >
            Delivery Address
          </label>
          <input
            type="text"
            id="deliveryAddress"
            value={deliveryAddress}
            onChange={(e) => setDeliveryAddress(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-Orange focus:border-Orange sm:text-sm"
            required
            placeholder="Enter your delivery address"
          />
        </div>
        <div>
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="additionalInfo"
          >
            Additional Information
          </label>
          <textarea
            id="additionalInfo"
            value={additionalInfo}
            onChange={(e) => setAdditionalInfo(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-Orange focus:border-Orange sm:text-sm"
            rows={3}
            placeholder="Enter any additional information"
          />
        </div>

        {/* region & city */}
        <main className="flex md:flex-row mx:flex-col w-full justify-between mx:gap-[1rem]">
            {/* region */}
          <div className="md:w-[23rem] mx:w-[20rem]">
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="region"
            >
              Region
            </label>
            <input
              type="text"
              id="region"
              value={region}
              onChange={(e) => setRegion(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-Orange focus:border-Orange sm:text-sm"
              required
              placeholder="Enter your region"
            />
          </div>
             {/* city */}
          <div className="w-[20rem]">
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="city"
            >
              City
            </label>
            <input
              type="text"
              id="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-Orange focus:border-Orange sm:text-sm"
              required
              placeholder="Enter your city"
            />
          </div>
        </main>

        <div>
          <button
            type="submit"
            className="bg-Orange hover:bg-BgOrange text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Save Address
          </button>
        </div>
      </form>
    </section>
  );
};

export default AddressForm;
