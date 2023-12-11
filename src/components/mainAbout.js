/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

const MainAbout = () => {
  return (
    <>
      <div className="pt-20 bg-black">
        <div className="flex flex-col lg:flex-row mx-2 sm:mx-6 xl:mx-28 lg:mx-16 md:mx-10  gap-10">
          <div>
            <Image
              src="/about.webp"
              alt="about img"
              width={800}
              height={800}
              className="h-auto w-full"
            />
          </div>
          <div className="text-left w-full lg:w-1/2">
            <p className="text-lg text-white font-semibold">ABOUT US</p>
            <h1 className="text-3xl text-white xl:text-5xl lg:text-3xl md:text-3xl font-bold pt-4">
              Who Is Digiboost Agency
            </h1>
            <p className="text-xl xl:text-2xl lg:text-xl pt-6 text-white">
              Welcome to DigiBoost, your ultimate destination for innovative
              solutions to meet all your marketing and business development
              needs. At DigiBoost, we don't just provide services; we craft
              experiences that leave a lasting impact.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center bg-black pt-20">
          <div className="grid grid-cols-2 mx-2 sm:mx-6 xl:mx-28 lg:mx-16 md:mx-10 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10">
            <div className="flex flex-col justify-center items-center bg-white text-black p-8 sm:p-14 md:p-14 h-auto w-auto">
              <p className="text-base">Clients</p>
              <p className="text-2xl sm:text-2xl md:text-4xl font-extrabold pt-4">
                6,028+
              </p>
            </div>
            <div className="flex flex-col justify-center items-center bg-white text-black p-8 sm:p-14 md:p-14 h-auto w-auto">
              <p className="text-base">Projects</p>
              <p className="text-2xl sm:text-2xl md:text-4xl font-extrabold pt-4">
                2,200+
              </p>
            </div>
            <div className="flex flex-col justify-center items-center bg-white text-black p-8 sm:p-14 md:p-14 h-auto w-auto">
              <p className="text-base">Follower</p>
              <p className="text-2xl sm:text-2xl md:text-4xl font-extrabold pt-4">
                96,000+
              </p>
            </div>
            <div className="flex flex-col justify-center items-center bg-white text-black p-8 sm:p-14 md:p-14 h-auto w-auto">
              <p className="text-base">Success</p>
              <p className="text-2xl sm:text-2xl md:text-4xl font-extrabold pt-4">
                100%
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainAbout;
