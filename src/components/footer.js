/* eslint-disable react/no-unescaped-entities */
"use client";
import { useState } from "react";
import { FaLinkedin, FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import Link from "next/link";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [showNotification, setShowNotification] = useState(false);
  const [emailError, setEmailError] = useState("");

  const handleSubscribe = (event) => {
    event.preventDefault();

    if (!email.trim()) {
      setEmailError("Email cannot be empty");
      return;
    }

    setShowNotification(true);

    setTimeout(() => {
      setShowNotification(false);
    }, 3000);

    setEmail("");
    setEmailError("");
  };

  return (
    <>
      <div className="pt-10">
        <footer className="text-black p-6 bg-gray-100">
          <div className="mx-2 md:mx-28 flex flex-col md:flex-row justify-between">
            <div className="flex flex-col md:flex-row">
              <div className="mt-4 md:mt-0 ">
                <p className="text-xl font-semibold">DigiBoost</p>
                <p>123 Main Street, City</p>
                <p>Email: info@digiboost.com</p>
                <p>Phone: (123) 456-7890</p>
              </div>
              <div className="flex flex-col ml-0 lg:ml-28 mt-4 md:mt-0">
                <h2 className="text-xl font-bold pb-2">Company Site</h2>
                <Link href="/teams">
                  <p className="hover:scale-105">Team</p>
                </Link>
                <Link href="/about">
                  <p className="hover:scale-105">About Us</p>
                </Link>
                <Link href="/services">
                  <p className="hover:scale-105">Services</p>
                </Link>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="mt-4 md:mt-0 ">
                <h2 className="text-xl font-bold pb-2">Stay Connected</h2>
                <form
                  onSubmit={handleSubscribe}
                  className="md:border p-1 rounded-md"
                >
                  <input
                    type="email"
                    placeholder="Your email"
                    className={`border-transparent p-1 flex-grow rounded-l-md ${
                      emailError ? "border-red-400" : ""
                    }`}
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setEmailError("");
                    }}
                  />
                  <button
                    type="submit"
                    className="bg-black text-white p-1 rounded-r-md"
                    disabled={!!emailError}
                  >
                    Subscribe
                  </button>

                  {emailError && (
                    <div className=" text-red-500">{emailError}</div>
                  )}
                </form>
                {showNotification && (
                  <div className=" text-green-600 mt-2">
                    Thanks for subscribing!
                  </div>
                )}
              </div>
              <div className="mt-4 flex items-center gap-1 pt-2">
                <Link href="https://id.linkedin.com/" aria-label="LinkedIn">
                  <FaLinkedin className="w-8 h-8 hover:scale-105" />
                </Link>
                <Link href="https://www.instagram.com/" aria-label="Instagram">
                  <FaInstagramSquare className="w-8 h-8 hover:scale-105" />
                </Link>
                <Link href="https://twitter.com/?lang=id" aria-label="Twitter">
                  <FaSquareXTwitter className="w-8 h-8 hover:scale-105" />
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
