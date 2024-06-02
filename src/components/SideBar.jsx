"use client";

import { signIn, signOut, useSession } from "next-auth/react";

import Link from "next/link";
import { FaXTwitter } from "react-icons/fa6";
import { HiHome, HiDotsHorizontal } from "react-icons/hi";

const SideBar = () => {
  const { data: session } = useSession();
  return (
    <div className="flex flex-col gap-4 p-3 h-screen justify-between">
      <div>
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

      {session && (
        <div className="text-gray-700 text-sm flex items-center cursor-pointer p-3 hover:bg-gray-100 rounded-full transition-all duration-200">
          <img
            src={session.user.image}
            alt="user image"
            className="h-10 w-10 rounded-full xl:mr-2"
          />
          <div className="hidden xl:inline">
            <h4 className="font-bold">{session.user.name}</h4>
            <p className="text-gray-500">{session.user.username}</p>
          </div>
          <HiDotsHorizontal className="h-5 xl:ml-8 hidden xl:inline" />
        </div>
      )}
    </div>
  );
};

export default SideBar;
