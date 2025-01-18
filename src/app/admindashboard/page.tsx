"use client"
import React, { useEffect, useState } from "react";
import { useRouter, useSearchParams } from 'next/navigation';
import { auth } from "@/firebase";
import ProductManager from "@/components/ProductManager";

const Adminpage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(true);
  const redirect = searchParams.get('redirect') || '/';

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (!user) {
        router.push(redirect); // Redirect to login page
      } else {
        setLoading(false);
      }
    });
    return () => unsubscribe();
  }, [router, redirect]);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="flex">
      <div className=" flex-1">
        <ProductManager />
      </div>
    </div>
  );
};

export default Adminpage;
