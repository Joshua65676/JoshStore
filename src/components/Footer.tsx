import { FaGithub, FaLinkedin, FaXTwitter, PiPhoneCallFill, FcGoogle } from "@/assets";
import Link from "next/link";
import React from "react";
import Profile from "./Profile";
import SubscriptionForm from "./Gmail";

const Footer = () => {
  return (
    <section className="w-full mx-auto  bg-Black  py-10">
      <main className="max-w-7xl container flex xl:flex-row xl:justify-between mx-auto mx:flex-col mx:gap-[3rem]">
        <div className="flex flex-col gap-5">
          {/* Logo */}
          <Link href="/">
            <span className="text-3xl font-semibold">
              <span className="text-White font-kumbh">Josh</span>
              <span className="font-mono text-Orange">Store</span>
            </span>
          </Link>

          {/* Scocial links */}
          <div className="flex flex-row gap-5">
            <Link href="">
              <FaGithub className="text-White hover:text-BgOrange w-6 h-7" />
            </Link>
            <Link href="">
              <FaXTwitter className="text-White hover:text-BgOrange w-6 h-7" />
            </Link>
            <Link href="">
              <FaLinkedin className="text-blue-600 hover:text-BgOrange w-6 h-7" />
            </Link>
          </div>
        </div>
        {/* Locate Us */}
        <div className="flex flex-col gap-2">
          <h2 className="text-White font-semibold text-lg">Locate Us</h2>
          <p className="text-GrayishBlue text-sm w-[20rem]">
            123, Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
            quod, voluptates quia, nulla, voluptatem.
          </p>
          <span className="flex flex-row gap-2">
            <PiPhoneCallFill className="text-Grayishblue mt-1" />
            <span className="text-GrayishBlue">+234 7047685490</span>
          </span>
          <span className="flex flex-row gap-2">
            <FcGoogle className="text-Grayishblue mt-1" />
            <span className="text-GrayishBlue">Joshua65676@gmail.com</span>
          </span>
        </div>
        {/* Profile */}
        <div>
          <Profile />
        </div>
        {/* Gmail */}
        <div>
          <SubscriptionForm />
        </div>
      </main>
    </section>
  );
};

export default Footer;
