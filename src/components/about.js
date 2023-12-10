/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

export default function About() {
  return (
    <div className="pt-40">
      <div className="mb-10">
        <div className="flex flex-col lg:flex-row mx-2 sm:mx-6 xl:mx-28 lg:mx-16 md:mx-10 gap-10">
          <div>
            <Image
              src="/about.webp"
              alt="about img"
              width={500}
              height={500}
              className="h-auto w-full"
            />
          </div>
          <div className="text-left w-full lg:w-1/2">
            <p className="text-lg text-black font-semibold">ABOUT US</p>
            <h1 className="text-3xl text-black xl:text-5xl lg:text-3xl md:text-3xl font-bold pt-4">
              Who Is DigiMedia Agency
            </h1>
            <p className="text-xl xl:text-2xl lg:text-xl pt-6 text-black">
              Welcome to DigiBoost, the creative solution for your marketing and
              business development needs. As an innovative Digital Media Agency,
              we have a mission to deliver extraordinary marketing experiences
              and exceptional results for our clients.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
