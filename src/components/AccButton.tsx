import React, { useEffect, useState } from "react";
import {
  IoIosArrowUp,
  IoIosArrowDown,
  FaUserTie,
  FaBoxOpen,
  FaLock,
} from "@/assets";
import { auth, db } from "@/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { Button } from "./ui/Button";
import Link from "next/link";
import { doc, getDoc } from "firebase/firestore";

const AccountButton = () => {
  const [isActive, setIsActive] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [loadingAdmin, setLoadingAdmin] = useState(false);
  const [admin, setAdmin] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
    setIsVisible(!isVisible);
  };

  const handleAdminClick = async () => {
    setLoadingAdmin(true);
    // Simulate loading delay
    await new Promise((resolve) => setTimeout(resolve, 5000));
    setLoadingAdmin(false);
    // Navigate to admin dashboard
  };

  const [user, loading] = useAuthState(auth);

  useEffect(() => {
    if (user) {
      const fetchAdminStatus = async () => {
        const userDoc = await getDoc(doc(db, "users", user.uid));
        if (userDoc.exists()) {
          setAdmin(userDoc.data().isAdmin);
        }
      };
      fetchAdminStatus();
    }
  });

  return (
    <div>
      <button
        className={`flex flex-row gap-2 text-GrayishBlue ${
          isActive ? " text-Orange" : ""
        } hover:text-Orange`}
        onClick={handleClick}
      >
        <div>
          <FaUserTie className="w-8 h-6" />
        </div>
        <div className="md:flex mx:hidden">
          {!loading && !user && (
            <>
              <p>Account</p>
            </>
          )}
          {user && (
            <>
              <div>Hi, {user.displayName}!</div>
            </>
          )}
        </div>
        <div className="md:flex mx:hidden">
          {isActive ? (
            <IoIosArrowUp className="h-7" />
          ) : (
            <IoIosArrowDown className="h-7" />
          )}
        </div>
      </button>

      {isVisible && (
        <div className="absolute border shadow-lg rounded-lg w-[14rem] md:-ml-12 mx:-ml-[8rem] mt-3 py-5 flex flex-row bg-LightGrayishBlue z-40">
          {!loading && !user && (
            <div className="pl-5 w-full flex flex-col gap-2">
              <Link href={{ pathname: `/login` }}>
                <Button className="bg-Orange w-[11.5rem] rounded-lg border-none hover:bg-BgOrange">
                  <div className="text-lg font-semibold font-sans uppercase">
                    Log in
                  </div>
                </Button>
              </Link>
              <Link href={{ pathname: `/signup` }}>
                <div className="text-center uppercase -ml-4">
                  <span className="text-blue-500 text-sm text-center">
                    Sign Up
                  </span>
                </div>
              </Link>
            </div>
          )}
          {user && (
            <div className="flex flex-col gap-5 w-full">
              <div className="">
                <Link href={{ pathname: `/myaccount` }}>
                  <div className="flex flex-row gap-5 hover:bg-GrayishBlue h-10 p-2">
                    <FaUserTie className="w-5 h-6" />
                    <span>My Account</span>
                  </div>
                </Link>
                <Link href={{ pathname: `/` }}>
                  <div className="flex flex-row gap-5 hover:bg-GrayishBlue h-10 p-2">
                    <FaBoxOpen className="w-5 h-6" />
                    <span>Orders</span>
                  </div>
                </Link>
                {admin && (
                  <Link
                    href={{ pathname: `/admindashboard` }}
                    onClick={handleAdminClick}
                  >
                    <Button className="bg-Orange hover:bg-BgOrange border-none text-White px-3 py-1 rounded-md font-medium transition duration-300 ease-in-out w-full flex items-center gap-2">
                      <FaLock className="w-4 h-6 inline-block" />
                      <span className="text-lg">Dashboard</span>
                      {loadingAdmin && (
                        <span className="ml-2">Loading...</span>
                      )}
                      {/* Loading state */}
                    </Button>
                  </Link>
                )}
              </div>
              <hr className="border w-[14rem]" />
              <div className="text-center">
                <button
                  onClick={() => auth.signOut()}
                  className="text-red-700 hover:text-red-600 uppercase font-mono"
                >
                  Log out
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default AccountButton;
