"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { FaXTwitter } from "react-icons/fa6";
import { HiHome } from "react-icons/hi";

const SideBar = () => {
  const { data: session } = useSession();
  return (
    <div className="flex flex-col gap-4 p-3">
      <Link href="/">
        <FaXTwitter className="w-16 h-16 cursor-pointer p-3 hover:bg-gray-100 rounded-full transition-all duration-200" />
      </Link>

      <Link
        href="/"
        className="flex items-center  p-3 hover:bg-gray-100 transition-all duration-200 rounded-full gap-2 w-fit"
      >
        <HiHome className="w-7 h-7" />
        <span className="hidden xl:inline font-bold">Home</span>
      </Link>

      {session ? (
        <button
          onClick={() => signOut()}
          className="bg-blue-500 text-white rounded-full hover:brightness-95 transition-all duration-200 w-48 h-9 shadow-md font-semibold"
        >
          Sign Out
        </button>
      ) : (
        <button
          onClick={() => signIn()}
          className="bg-blue-500 text-white rounded-full hover:brightness-95 transition-all duration-200 w-48 h-9 shadow-md font-semibold"
        >
          Sign In
        </button>
      )}
    </div>
  );
};

export default SideBar;
