const { AiOutlineThunderbolt } = require("react-icons/ai");
const { CiClock1 } = require("react-icons/ci");
const { IoPricetagsOutline } = require("react-icons/io5");
const { RiServiceLine } = require("react-icons/ri");

const MainPlus = () => {
  return (
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
  );
};

export default MainPlus;
