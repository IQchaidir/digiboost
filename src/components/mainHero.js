/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import { CiClock1 } from "react-icons/ci";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { IoPricetagsOutline } from "react-icons/io5";
import { RiServiceLine } from "react-icons/ri";

const MainHero = () => {
  return (
    <>
      <div className="flex pt-40 justify-center h-auto px-40 ">
        <div className="text-black text-left w-1/2 pt-7">
          <div className="bg-black p-2 inline-block">
            <h2 className="text-4xl font-extrabold text-white">BOOST...!</h2>
          </div>
          <h1 className="text-5xl font-extrabold pt-8 pr-8">
            We Help You Grow
          </h1>
          <h1 className="text-5xl font-extrabold pt-4 pr-8">Your Business</h1>
          <p className="text-xl pt-6">
            Place your trust in us, and we'll provide significant growth for
            your business. Like other great agencies, we are committed to
            delivering only the best results.
          </p>
          <div className="pt-5">
            <button className="bg-red-400 text-x rounded-lg text-white px-2 py-2">
              Our Service
            </button>
          </div>
        </div>
        <div>
          <Image
            src="/heroimg.webp"
            alt="Hero Image"
            width={665}
            height={665}
            className="w-auto h-auto"
          />
        </div>
      </div>
      <div className="flex justify-center mt-[-40px] ml-96">
        <div className=" flex justify-between items-center bg-black w-auto gap-9 h-auto rounded-xl px-12 py-6">
          <div className="flex flex-col justify-center items-center text-white">
            <div className="w-auto h-auto bg-white rounded-full flex items-center justify-center p-2">
              <CiClock1 className=" w-12 h-12 text-black" />
            </div>
            <p className="text-xl font-bold pt-6">24/7 Availabilty</p>
          </div>
          <div className="flex flex-col justify-center items-center text-white">
            <div className="w-auto h-auto bg-white rounded-full flex items-center justify-center p-2">
              <AiOutlineThunderbolt className=" w-12 h-12 text-black" />
            </div>
            <p className="text-xl font-bold pt-6">Quick Response</p>
          </div>
          <div className="flex flex-col justify-center items-center text-white">
            <div className="w-auto h-auto bg-white rounded-full flex items-center justify-center p-2">
              <IoPricetagsOutline className=" w-12 h-12 text-black" />
            </div>
            <p className="text-xl font-bold pt-6">Price Affordable</p>
          </div>
          <div className="flex flex-col justify-center items-center text-white">
            <div className="w-auto h-auto bg-white rounded-full flex items-center justify-center p-2">
              <RiServiceLine className=" w-12 h-12 text-black" />
            </div>

            <p className="text-xl font-bold pt-6">Trusted Service</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainHero;
