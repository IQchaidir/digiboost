/* eslint-disable react/no-unescaped-entities */

import Image from "next/image";

export default function About() {
  return (
    <div className="pt-40 mb-50">
      <div className="bg-mb-16 mx-6 sm:mx-28 xl:mx-40 lg:mx-32">
        <div className="flex flex-col fon items-center text-4xl md:text-4xl font-semibold pb-10">
          <h1>-ABOUT US-</h1>
          <div className="pt-5 h-auto w-auto">
            <Image
              src="/about.webp"
              alt="about image"
              width={600}
              height={200}
              className="h-auto w-auto"
            />
          </div>
        </div>
        <div className="  flex flex-col lg:flex-row ">
          <div className="text-center w-full ">
            <h1 className="text-3xl text-black xl:text-5xl lg:text-4xl md:text-4xl font-bold">
              Who Is Digiboost Agency
            </h1>
            <p className="md-16 lg:md-28 text-base md:text-lg xl:text-2xl lg:text-xl pt-6 text-black">
              Welcome to DigiBoost, your ultimate destination for innovative
              solutions to meet all your marketing and business development
              needs. At DigiBoost, we don't just provide services; we craft
              experiences that leave a lasting impact.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
