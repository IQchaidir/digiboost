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

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div
      className={`navbar-container fixed w-full z-50 ${
        scrolled ? "bg-opacity-95 " : ""
      }`}
    >
      <div
        className={`flex justify-between items-center transition-all duration-500 shadow-2xl bg-white ${
          scrolled
            ? "bg-opacity-95 py-1 px-5 lg:px-28 drop-shadow-xl"
            : "py-3 px-5 lg:px-20 mx-2 xl:mx-28 lg:mx-16 md:mx-10 sm:mx-6 drop-shadow-xl rounded-xl mt-4"
        }`}
      >
        <Link href="/">
          <Image
            src="/logo.png"
            alt="logo"
            width={scrolled ? 100 : 120}
            height={scrolled ? 100 : 120}
            className={`transition-all duration-500 ${
              scrolled ? "w-8 h-8 lg:w-16 lg:h-14" : "w-10 h-10 lg:w-20 lg:h-16"
            } `}
          />
        </Link>
        <div className={`hidden lg:flex md:flex xl:flex gap-6 items-center `}>
          <Link href="/">
            <button
              onClick={closeMenu}
              className={`nav-button transition-all duration-500 hover:bg-black hover:text-white rounded-xl ${
                scrolled ? "p-2" : "p-4"
              } `}
            >
              Home
            </button>
          </Link>
          <Link href="/about">
            <button
              onClick={closeMenu}
              className={`nav-button transition-all duration-500 hover:bg-black hover:text-white rounded-xl ${
                scrolled ? "p-2" : "p-4"
              } `}
            >
              About Us
            </button>
          </Link>
          <Link href="/services">
            <button
              onClick={closeMenu}
              className={`nav-button transition-all duration-500 hover:bg-black hover:text-white rounded-xl ${
                scrolled ? "p-2" : "p-4"
              } `}
            >
              Services
            </button>
          </Link>
          <Link href="/teams">
            <button
              onClick={closeMenu}
              className={`nav-button transition-all duration-500 hover:bg-black hover:text-white rounded-xl ${
                scrolled ? "p-2" : "p-4"
              } `}
            >
              Teams
            </button>
          </Link>
        </div>
        <button className="flex md:hidden text-3xl py-2" onClick={toggleMenu}>
          ☰
        </button>
      </div>
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
            : "py-5 px-4 shadow-xl mx-2 xl:mx-28 lg:mx-16 md:mx-10 sm:mx-6 rounded-lg"
        }`}
      >
        <Link href="/">
          <button
            onClick={closeMenu}
            className={`nav-button hover:bg-black hover:w-full hover:text-white rounded-xl p-2`}
          >
            Home
          </button>
        </Link>
        <Link href="/about">
          <button
            onClick={closeMenu}
            className={`nav-button hover:bg-black hover:w-full hover:text-white rounded-xl p-2`}
          >
            About Us
          </button>
        </Link>
        <Link href="/services">
          <button
            onClick={closeMenu}
            className={`nav-button hover:bg-black hover:w-full hover:text-white rounded-xl p-2`}
          >
            Services
          </button>
        </Link>
        <Link href="/teams">
          <button
            onClick={closeMenu}
            className={`nav-button hover:bg-black hover:w-full hover:text-white rounded-xl p-2`}
          >
            Teams
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
