"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div
      className={`navbar-container fixed w-full z-50 ${
        scrolled ? "bg-opacity-95 " : ""
      }`}
    >
      <div
        className={`flex justify-between transition-all duration-500 shadow-2xl bg-white ${
          scrolled
            ? "bg-opacity-95 py-6 px-4 sm:px-40 drop-shadow-xl"
            : "py-5 px-4 sm:px-7 mx-4 sm:mx-40 drop-shadow-xl rounded-xl mt-4"
        }`}
      >
        <div className="flex transition-all duration-500">
          <Image
            src="/vercel.svg"
            alt="logo"
            width={scrolled ? 40 : 50}
            height={scrolled ? 80 : 100}
            className={`transition-all duration-500 w-auto h-auto `}
          />
          <h1
            className={`text-${
              scrolled ? "2xl" : "3xl"
            } transition-all duration-500`}
          >
            Learn
          </h1>
        </div>
        <div className={`hidden sm:flex lg:flex gap-9`}>
          <Link href="/">
            <button
              className={`hover:bg-black hover:text-white rounded-md transition-all duration-500 ${
                scrolled ? "w-full h-8 sm:w-16" : "w-full h-10 sm:w-20"
              }`}
            >
              Home
            </button>
          </Link>
          <Link href="/about">
            <button
              className={`hover:bg-black hover:text-white rounded-md transition-all duration-500 ${
                scrolled ? "w-full h-8 sm:w-24" : "w-full h-10 sm:w-28"
              }`}
            >
              About Us
            </button>
          </Link>
          <Link href="/services">
            <button
              className={`hover:bg-black hover:text-white rounded-md transition-all duration-500 ${
                scrolled ? "w-full h-8 sm:w-24" : "w-full h-10 sm:w-28"
              }`}
            >
              Services
            </button>
          </Link>
          <button
            className={`hover:bg-black hover:text-white rounded-md transition-all duration-500 ${
              scrolled ? "w-full h-8 sm:w-16" : "w-full h-10 sm:w-20"
            }`}
          >
            Teams
          </button>
        </div>
        {/* Button untuk toggle menu di smartphone */}
        <button className="sm:hidden text-2xl" onClick={toggleMenu}>
          ☰
        </button>
      </div>
      {/* Container baru untuk tombol-tombol menu */}
      <div
        className={`lg:hidden sm:flex-row gap-5   
        ${menuOpen ? "sm:flex bg-white shadow-2xl " : "hidden"}
        ${scrolled ? "" : "mx-3 rounded-2xl"}`}
      >
        <Link href="/">
          <button
            className={`hover:bg-black hover:text-white rounded-md transition-all duration-500 ${
              scrolled ? "w-full h-8 sm:w-16" : "w-full h-10 sm:w-20"
            }`}
          >
            Home
          </button>
        </Link>
        <Link href="/about">
          <button
            className={`hover:bg-black hover:text-white rounded-md transition-all duration-500 ${
              scrolled ? "w-full h-8 sm:w-24" : "w-full h-10 sm:w-28"
            }`}
          >
            About Us
          </button>
        </Link>
        <Link href="/services">
          <button
            className={`hover:bg-black hover:text-white rounded-md transition-all duration-500 ${
              scrolled ? "w-full h-8 sm:w-24" : "w-full h-10 sm:w-28"
            }`}
          >
            Services
          </button>
        </Link>
        <button
          className={`hover:bg-black hover:text-white rounded-md transition-all duration-500 ${
            scrolled ? "w-full h-8 sm:w-16" : "w-full h-10 sm:w-20"
          }`}
        >
          Teams
        </button>
      </div>
    </div>
  );
};

export default Navbar;
