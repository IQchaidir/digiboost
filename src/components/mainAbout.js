/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import MainHero from "./mainHero";

const MainAbout = () => {
  return (
    <>
      <div className="pt-20">
        <div className="flex flex-col md:flex-row pt-24 justify-center bg-black px-6 md:px-12 lg:px-36 gap-6 md:gap-20">
          <div className="md:w-1/2">
            <Image
              src="/aboutmain.webp"
              alt="about img"
              width={500}
              height={500}
              className="h-auto w-full"
            />
          </div>
          <div className="lg:text-left md:w-1/2 pt-6 md:pt-16">
            <p className="text-lg text-red-400">ABOUT US</p>
            <h1 className="text-4xl text-white lg:text-6xl  md:text-2xl font-bold pt-4">
              Who Is DigiMedia Agency
            </h1>
            <p className="text-lg lg:text-2xl md:text-xl  pt-6 text-white">
              Welcome to [Company Name], the creative solution for your
              marketing and business development needs. As an innovative Digital
              Media Agency, we have a mission to deliver extraordinary marketing
              experiences and exceptional results for our clients.
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center bg-black pt-20">
          <div className="grid grid-cols-2 mx-1 sm:mx-2 md:mx-2 lg:mx-10 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10">
            <div className="flex flex-col justify-center items-center bg-red-400 text-white p-8 sm:p-14 md:p-14 h-auto w-auto">
              <p className="text-base">Clients</p>
              <h3 className="text-2xl sm:text-2xl md:text-4xl font-extrabold pt-4">
                6,028+
              </h3>
            </div>
            <div className="flex flex-col justify-center items-center bg-orange-400 text-white p-8 sm:p-14 md:p-14 h-auto w-auto">
              <p className="text-base">Projects</p>
              <h3 className="text-2xl sm:text-2xl md:text-4xl font-extrabold pt-4">
                2,200+
              </h3>
            </div>
            <div className="flex flex-col justify-center items-center bg-yellow-400 text-white p-8 sm:p-14 md:p-14 h-auto w-auto">
              <p className="text-base">Follower</p>
              <h3 className="text-2xl sm:text-2xl md:text-4xl font-extrabold pt-4">
                96,000+
              </h3>
            </div>
            <div className="flex flex-col justify-center items-center bg-green-400 text-white p-8 sm:p-14 md:p-14 h-auto w-auto">
              <p className="text-base">Success</p>
              <h3 className="text-2xl sm:text-2xl md:text-4xl font-extrabold pt-4">
                100%
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainAbout;
