"use client";
import React, { useState, useRef } from "react";
import Link from "next/link";

export default function Navbar() {
  // DROPDOWN PROFILE
  const dropdownRef = useRef(null);
  const imageRef = useRef(null);
  const [isDropdown, setIsDropdown] = useState(false);
  const DropdownProfile = ["Account", "Logout"];
  if (typeof window !== "undefined") {
    // CHECK IF WINDOW IS LOADED AND CLOSE DROPDOWN WHEN CLICK OUTSIDE
    window.addEventListener("click", (e) => {
      if (e.target !== imageRef.current && e.target !== dropdownRef.current) {
        setIsDropdown(false);
      }
    });
  }

  return (
    <nav className="bg-white border-gray-200 min-w-[380px] sticky top-0">
      <div className="min-w-screen flex flex-wrap items-center justify-between mx-auto py-2 px-4">
        <div className="flex items-center lg:space-x-4">
          <button className="hidden lg:block">
            <i className="fi fi-br-menu-burger flex w-11 h-11 items-center justify-center rounded-full hover:bg-gray-100"></i>
          </button>
          <h1 className="text-lg font-bold">Practice Web</h1>
        </div>
        <div className="flex items-center space-x-3">
          <button className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300">
            <i className="fi fi-br-bell text-sm flex w-11 h-11 items-center justify-center rounded-full hover:bg-gray-100"></i>
          </button>
          <button>
            <i className="fi fi-br-envelope text-sm flex w-11 h-11 items-center justify-center rounded-full hover:bg-gray-100"></i>
          </button>
          <div className="relative cursor-pointer">
            <button onClick={() => setIsDropdown(!isDropdown)}>
              <img
                ref={imageRef}
                className="w-11 h-11 rounded-full"
                src="https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?w=826&t=st=1716652877~exp=1716653477~hmac=5ec6ded51f54aa879c070471e80d3973dfbaf8b9aace3aac1157678942d93679"
                alt="user photo"
              ></img>
            </button>
            {/*DROPDOWN PROFILE*/}
            {isDropdown && (
              <div
                ref={dropdownRef}
                className="absolute right-0 z-10 mt-5 w-56 py-4 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
              >
                <ul>
                  {DropdownProfile.map((item, index) => (
                    <li
                      className="cursor-pointer px-4 py-1 hover:bg-gray-100"
                      key={index}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <button className="lg:hidden">
            <i className="fi fi-br-menu-burger flex w-11 h-11 items-center justify-center rounded-full hover:bg-gray-100"></i>
          </button>
        </div>
      </div>
    </nav>
  );
}
