"use client";
import React, { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { auth } from "@/firebase";
import ProductManager from "@/components/ProductManager";

const Adminpage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(true);
  const redirect = searchParams.get("redirect") || "/";

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (!user) {
        router.push(redirect);
      } else {
        setLoading(false);
      }
    });
    return () => unsubscribe();
  }, [router, redirect]);

  return (
    <div className="flex-1">
      {loading ? (
        <div className="flex items-center justify-center h-64 xl:hidden md:flex mx:flex xm:flex py-40">
          <div
            className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-Black"
            role="status"
          >
            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)] text-Black">
              Loading...
            </span>
          </div>
        </div>
      ) : (
        <ProductManager />
      )}
    </div>
  );
};

export default Adminpage;
