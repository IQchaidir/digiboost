/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

const MainHero = () => {
  return (
    <div className="flex flex-col md:flex-row pt-40 mx-2 sm:mx-6 xl:mx-0 lg:mx-16 md:mx-10 justify-center">
      <div className="text-black text-left w-full sm:w-full md:w-1/2 lg:w-1/2">
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
          Place your trust in us, and we'll provide significant growth for your
          business. Like other great agencies, we are committed to delivering
          only the best results.
        </p>
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
  );
};

export default MainHero;
