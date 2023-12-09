/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import { CiClock1 } from "react-icons/ci";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { IoPricetagsOutline } from "react-icons/io5";
import { RiServiceLine } from "react-icons/ri";

const MainHero = () => {
  return (
    <>
      <div className="flex flex-col mx-auto sm:mx-auto lg:mx-20 md:mx-auto lg:flex-row justify-center pt-24 lg:pt-36 md:pt-24 sm:pt-24 h-auto px-4 lg:px-10 xl:px-32">
        <div className="text-black text-center lg:text-left w-full lg:w-1/2 pt-7">
          <div className="bg-black p-2 inline-block">
            <h2 className="text-2xl lg:text-4xl  font-extrabold text-white">
              BOOST...!
            </h2>
          </div>
          <h1 className="text-3xl lg:text-5x md:text-4xl font-extrabold pt-4 lg:pt-8 pr-4 lg:pr-8">
            We Help You Grow
          </h1>
          <h1 className="text-3xl lg:text-5x md:text-4xl font-extrabold pt-2 lg:pt-4 pr-4 lg:pr-8">
            Your Business
          </h1>
          <p className="text-sm lg:text-xl md:text-2xl pt-4 lg:pt-6">
            Place your trust in us, and we'll provide significant growth for
            your business. Like other great agencies, we are committed to
            delivering only the best results.
          </p>
          <div className="pt-4 lg:pt-5">
            <button className="bg-red-400 text-sm lg:text-xl rounded-lg text-white px-2 py-2">
              Our Service
            </button>
          </div>
        </div>
        <div className="flex justify-center">
          <Image
            src="/heroimg.webp"
            alt="Hero Image"
            width={665}
            height={665}
            className="w-full h-auto md:w-[650px] md:h-[650px] lg:w-full lg:h-auto"
          />
        </div>
      </div>
      <div className="justify-center w-full md:w-3/4 mx-auto ">
        <div className="flex flex-row mx-5 sm:mx-5 md:mx-auto lg:mx-auto text-center md:flex-row justify-center lg:justify-between sm:justify-between md:justify-center items-center bg-black  md:w-auto gap-4 md:gap-9 h-auto rounded-xl px-4 md:px-20 py-4 md:py-6">
          <div className="flex flex-col justify-center items-center text-white">
            <div className="w-8 h-8 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center p-2">
              <CiClock1 className="w-full h-full text-black" />
            </div>
            <p className="text-xs md:text-xl font-bold pt-2 md:pt-6">
              24/7 Availability
            </p>
          </div>
          <div className="flex flex-col justify-center items-center text-white">
            <div className="w-8 h-8 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center p-2">
              <AiOutlineThunderbolt className="w-full h-full text-black" />
            </div>
            <p className="text-xs md:text-xl font-bold pt-2 md:pt-6">
              Quick Response
            </p>
          </div>
          <div className="flex flex-col justify-center items-center text-white">
            <div className="w-8 h-8 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center p-2">
              <IoPricetagsOutline className="w-full h-full text-black" />
            </div>
            <p className="text-xs md:text-xl font-bold pt-2 md:pt-6">
              Price Affordable
            </p>
          </div>
          <div className="flex flex-col justify-center items-center text-white">
            <div className="w-8 h-8 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center p-2">
              <RiServiceLine className="w-full h-full text-black" />
            </div>
            <p className="text-xs md:text-xl font-bold pt-2 md:pt-6">
              Trusted Service
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainHero;
