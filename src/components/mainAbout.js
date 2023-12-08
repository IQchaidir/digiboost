/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import MainHero from "./mainHero";

const MainAbout = () => {
  return (
    <>
      <div className="pt-20">
        <div
          className="flex pt-24 justify-center bg-black px-36 gap-20
      "
        >
          <div>
            <Image
              src="/aboutmain.webp"
              alt="about img"
              width={500}
              height={500}
              className="h-auto w-auto"
            />
          </div>
          <div className=" lg:text-left lg:w-1/2 pt-16">
            <p className="text-lg text-red-400">ABOUT US</p>
            <h1 className="text-4xl text-white lg:text-6xl font-bold pt-4">
              Who Is DigiMedia Agency
            </h1>
            <p className="text-lg lg:text-2xl pt-6 text-white">
              Welcome to [Company Name], the creative solution for your
              marketing and business development needs. As an innovative Digital
              Media Agency, we have a mission to deliver extraordinary marketing
              experiences and exceptional results for our clients.
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center bg-black pt-24">
          <div className=" grid grid-cols-4 gap-10">
            <div className="flex flex-col justify-center items-center bg-red-400 text-white p-14 h-auto w-auto">
              <p className="text-base">Clients</p>
              <h3 className="text-4xl font-extrabold pt-4">6,028+</h3>
            </div>
            <div className="flex flex-col justify-center items-center bg-orange-400 text-white p-14 h-auto w-auto">
              <p className="text-base">Delivered Solution</p>
              <h3 className="text-4xl font-extrabold pt-4">2,200+</h3>
            </div>
            <div className="flex flex-col justify-center items-center bg-yellow-400 text-white p-14 h-auto w-auto">
              <p className="text-base">Follower</p>
              <h3 className="text-4xl font-extrabold pt-4">96,000+</h3>
            </div>
            <div className="flex flex-col justify-center items-center bg-green-400 text-white p-14 h-auto w-auto">
              <p className="text-base">Happy Clients</p>
              <h3 className="text-4xl font-extrabold pt-4">100%</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainAbout;
