const { AiOutlineThunderbolt } = require("react-icons/ai");
const { CiClock1 } = require("react-icons/ci");
const { IoPricetagsOutline } = require("react-icons/io5");
const { RiServiceLine } = require("react-icons/ri");

const ServicesPlus = () => {
  return (
    <>
      <div className="justify-center w-full md:w-3/4 lg:w-4/5 mx-auto ">
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

export default ServicesPlus;
