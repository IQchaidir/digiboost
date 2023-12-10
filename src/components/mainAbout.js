/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

const MainAbout = () => {
  return (
    <>
      <div className="pt-20 bg-black">
        <div className="flex flex-col lg:flex-row mx-2 sm:mx-6 xl:mx-28 lg:mx-16 md:mx-10  gap-10">
          <div>
            <Image
              src="/hero.png"
              alt="about img"
              width={500}
              height={500}
              className="h-auto w-full"
            />
          </div>
          <div className="text-left w-full lg:w-1/2">
            <p className="text-lg text-white font-semibold">ABOUT US</p>
            <h1 className="text-3xl text-white xl:text-5xl lg:text-3xl md:text-3xl font-bold pt-4">
              Who Is DigiMedia Agency
            </h1>
            <p className="text-xl xl:text-2xl lg:text-xl pt-6 text-white">
              Welcome to [Company Name], the creative solution for your
              marketing and business development needs. As an innovative Digital
              Media Agency, we have a mission to deliver extraordinary marketing
              experiences and exceptional results for our clients.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center bg-black pt-20">
          <div className="grid grid-cols-2 mx-2 sm:mx-6 xl:mx-28 lg:mx-16 md:mx-10 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10">
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
