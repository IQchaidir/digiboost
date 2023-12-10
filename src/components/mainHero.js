/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import { CiClock1 } from "react-icons/ci";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { IoPricetagsOutline } from "react-icons/io5";
import { RiServiceLine } from "react-icons/ri";

const MainHero = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row pt-28 md:pt-32 mx-2 sm:mx-6 xl:mx-28 lg:mx-16 md:mx-10 justify-center ">
        <div className="text-black text-left w-full sm:w-full md:w-2/3 lg:w-2/3">
          <div className="bg-black p-2 inline-block">
            <h2 className="text-4xl sm:4xl md:text-5xl lg:text-5xl xl:text-6xl font-extrabold text-white">
              BOOST...!
            </h2>
          </div>
          <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-extrabold pt-4 lg:pt-8 pr-4 lg:pr-8">
            We Help You Grow
          </h1>
          <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-extrabold pt-2 lg:pt-4 pr-4 lg:pr-8">
            Your Business
          </h1>
          <p className=" text-lg sm:text-lg md:text-xl lg:text-xl xl:text-2xl  pt-4">
            Place your trust in us, and we'll provide significant growth for
            your business. Like other great agencies, we are committed to
            delivering only the best results.
          </p>
          <div className="pt-4 lg:pt-3">
            <button className="bg-black hidden lg:flex text-xs sm:text-xs md:text-lg lg:text-xl rounded-lg text-white px-2 py-2">
              Our Service
            </button>
          </div>
        </div>
        <div className="flex justify-center">
          <Image
            src="/heroimg.webp"
            alt="Hero Image"
            width={400}
            height={400}
            className="w-auto h-auto"
            priority
          />
        </div>
      </div>
      <div className="flex flex-row py-5  px-5 md:px-5 lg:px-24  justify-between mx-2 sm:mx-6 xl:mx-28 lg:mx-16 md:mx-10 rounded-xl h-auto bg-black">
        <div className="flex flex-col justify-center items-center text-white">
          <div className=" w-12 h-12 lg:w-16 lg:h-16 bg-white rounded-full flex items-center justify-center p-2">
            <CiClock1 className="w-full h-full text-black" />
          </div>
          <p className="text-[8px] sm:text-sm md:text-xl font-bold pt-2 md:pt-6">
            24/7 Availability
          </p>
        </div>
        <div className="flex flex-col justify-center items-center text-white">
          <div className=" w-12 h-12 lg:w-16 lg:h-16 bg-white rounded-full flex items-center justify-center p-2">
            <AiOutlineThunderbolt className="w-full h-full text-black" />
          </div>
          <p className="text-[8px] sm:text-sm md:text-xl font-bold pt-2 md:pt-6">
            Quick Response
          </p>
        </div>
        <div className="flex flex-col justify-center items-center text-white">
          <div className=" w-12 h-12 lg:w-16 lg:h-16 bg-white rounded-full flex items-center justify-center p-2">
            <IoPricetagsOutline className="w-full h-full text-black" />
          </div>
          <p className="text-[8px] sm:text-sm md:text-xl font-bold pt-2 md:pt-6">
            Price Affordable
          </p>
        </div>
        <div className="flex flex-col justify-center items-center text-white">
          <div className=" w-12 h-12 lg:w-16 lg:h-16 bg-white rounded-full flex items-center justify-center p-2">
            <RiServiceLine className="w-full h-full text-black" />
          </div>
          <p className="text-[8px] sm:text-sm md:text-xl font-bold pt-2 md:pt-6">
            Trusted Service
          </p>
        </div>
      </div>
    </>
  );
};

export default MainHero;
