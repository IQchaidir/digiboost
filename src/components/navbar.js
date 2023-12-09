/* eslint-disable react/no-unescaped-entities */
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
            ? "bg-opacity-95 py-6 px-4 md:px-40 drop-shadow-xl"
            : "py-5 px-4 md:px-7 mx-4 md:mx-2 lg:mx-40 drop-shadow-xl rounded-xl mt-4"
        }`}
      >
        <div className="flex transition-all duration-500 items-center">
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
            } transition-all duration-500 ml-2 md:ml-4`}
          >
            Learn
          </h1>
        </div>
        <div className={`hidden lg:flex gap-6 items-center`}>
          <Link href="/">
            <button
              className={`nav-button hover:bg-black hover:text-white rounded-xl p-2`}
            >
              Home
            </button>
          </Link>
          <Link href="/about">
            <button
              className={`nav-button hover:bg-black hover:text-white rounded-xl p-2`}
            >
              About Us
            </button>
          </Link>
          <Link href="/services">
            <button
              className={`nav-button hover:bg-black hover:text-white rounded-xl p-2`}
            >
              Services
            </button>
          </Link>
          <button
            className={`nav-button hover:bg-black hover:text-white rounded-xl p-2`}
          >
            Teams
          </button>
        </div>
        {/* Button untuk toggle menu di smartphone */}
        <button className="lg:hidden md:flex text-2xl" onClick={toggleMenu}>
          ☰
        </button>
      </div>
      {/* Container baru untuk tombol-tombol menu */}
      <div
        className={`lg:hidden  
        ${
          menuOpen
            ? "flex flex-col text-center bg-white shadow-2xl p-4 justify-center "
            : "hidden"
        }
        ${
          scrolled
            ? "py-6 px-4 shadow-xl"
            : "py-5 px-4 shadow-xl mx-4 rounded-lg"
        }`}
      >
        <Link href="/">
          <button
            className={`nav-button hover:bg-black hover:w-full hover:text-white rounded-xl p-2`}
          >
            Home
          </button>
        </Link>
        <Link href="/about">
          <button
            className={`nav-button hover:bg-black hover:w-full hover:text-white rounded-xl p-2`}
          >
            About Us
          </button>
        </Link>
        <Link href="/services">
          <button
            className={`nav-button hover:bg-black hover:w-full hover:text-white rounded-xl p-2`}
          >
            Services
          </button>
        </Link>
        <button
          className={`nav-button hover:bg-black hover:w-full hover:text-white rounded-xl p-2`}
        >
          Teams
        </button>
      </div>
    </div>
  );
};

export default Navbar;
