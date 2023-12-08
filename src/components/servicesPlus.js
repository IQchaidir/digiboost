const { AiOutlineThunderbolt } = require("react-icons/ai");
const { CiClock1 } = require("react-icons/ci");
const { IoPricetagsOutline } = require("react-icons/io5");
const { RiServiceLine } = require("react-icons/ri");

const ServicesPlus = () => {
  return (
    <>
      <div className="flex justify-center pt-9 mx-44">
        <div className=" flex justify-between items-center bg-black w-full gap-9 h-auto rounded-xl px-12 py-6">
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

export default ServicesPlus;
