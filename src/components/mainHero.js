/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Link from "next/link";

const MainHero = () => {
  return (
    <div className="bg-gray-100 ">
      <div className="flex flex-col pt-40 justify-center items-center text-black">
        <div className="bg-black p-2 inline-block">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white">
            BOOST...!
          </h2>
        </div>
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold pt-4">
          Your Business Find
        </h1>
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold pb-5">
          Better Solution.
        </h1>
        <Link href="/services">
          <button className="bg-black text-white rounded-xl px-6 py-3 text-base font-normal ">
            Our Services
          </button>
        </Link>
        <div className="pt-2">
          <Image
            src="/bghero.webp"
            alt="heroimg"
            width={400}
            height={300}
            className="h-[300px] w-[400px]"
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default MainHero;
