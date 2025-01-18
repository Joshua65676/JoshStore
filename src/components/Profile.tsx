import React from "react";
import {
  FaUserTie,
  FaRegQuestionCircle,
  MdAddShoppingCart,
  FaBox,
} from "@/assets";
import Link from "next/link";

const Profile = () => {
  return (
    <div className="flex flex-col gap-5">
      <h2 className="text-White font-semibold text-lg">Profile</h2>
      <div>
        <Link href={{ pathname: `/myaccount` }} className="flex flex-row gap-3 text-GrayishBlue hover:text-BgOrange">
          <FaUserTie className="mt-1"/>
          <span>my account</span>
        </Link>
      </div>
      <div>
        <Link href={{ pathname: `/` }} className="flex flex-row gap-3 text-GrayishBlue hover:text-BgOrange">
          <FaRegQuestionCircle className="mt-1"/>
          <span>help & support</span>
        </Link>
      </div>
      <div>
        <Link href={{ pathname: `/` }} className="flex flex-row gap-3 text-GrayishBlue hover:text-BgOrange">
          <MdAddShoppingCart className="mt-1"/>
          <span>checkout</span>
        </Link>
      </div>
      <div>
        <Link href={{ pathname: `/` }} className="flex flex-row gap-3 text-GrayishBlue hover:text-BgOrange">
          <FaBox className="mt-1"/>
          <span>order tracking</span>
        </Link>
      </div>
    </div>
  );
};

export default Profile;
