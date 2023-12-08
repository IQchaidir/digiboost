"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`navbar-container fixed  w-full z-50  ${
        scrolled ? "bg-opacity-95 " : ""
      }`}
    >
      <div
        className={`flex justify-between items-center transition-all duration-500  shadow-2xl bg-white
      ${
        scrolled
          ? " bg-opacity-95 h-5 py-6 px-40  "
          : " h-4 py-8 px-7 mx-40 drop-shadow-xl rounded-xl mt-4"
      }`}
      >
        <div className="flex items-center transition-all duration-500">
          <Image
            src="/vercel.svg"
            alt="logo"
            width={scrolled ? 40 : 50}
            height={scrolled ? 80 : 100}
            className={`transition-all duration-500 ${
              scrolled
                ? "w-auto h-auto transition-all duration-500"
                : "w-auto h-auto transition-all duration-500"
            }`}
          />
          <h1
            className={`text-${
              scrolled ? "2xl" : "3xl"
            } transition-all duration-500`}
          >
            Learn
          </h1>
        </div>
        <div className={`flex gap-5`}>
          <Link href="/">
            <button
              className={`hover:bg-black hover:text-white rounded-md transition-all duration-500 ${
                scrolled ? "w-16 h-8" : "w-20 h-10"
              }`}
            >
              Home
            </button>
          </Link>
          <Link href="/about">
            <button
              className={`hover:bg-black hover:text-white rounded-md transition-all duration-500 ${
                scrolled ? "w-24 h-8" : "w-28 h-10"
              }`}
            >
              About Us
            </button>
          </Link>
          <Link href="/Services">
            <button
              className={`hover:bg-black hover:text-white rounded-md transition-all duration-500 ${
                scrolled ? "w-24 h-8" : "w-28 h-10"
              }`}
            >
              Services
            </button>
          </Link>
          {/* <Link href="/Teams"> */}
          <button
            className={`hover:bg-black hover:text-white rounded-md transition-all duration-500 ${
              scrolled ? "w-16 h-8" : "w-20 h-10"
            }`}
          >
            Teams
          </button>
          {/* </Link> */}
        </div>
      </div>
    </div>
  );
}
