const ServicesPrice = () => {
  return (
    <div className="pt-28 flex flex-col justify-center text-center mx-4 sm:mx-6 md:mx-8 lg:mx-16 xl:mx-20">
      <div className="bg-red-400 p-4 text-white rounded-full inline-block">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium">
          Price Table
        </h1>
      </div>
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold pt-5">
        Our Pricing
      </h1>
      <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-8 pt-8  rounded-xl">
        <div className="flex flex-col shadow-xl rounded-xl justify-center text-center border p-6 md:p-10">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
            BASIC
          </h1>
          <h2 className="text-4xl sm:text-6xl pt-4 md:pt-7 font-bold">
            $999<span className="text-lg">/month</span>
          </h2>
          <ul className="pt-6 md:pt-10 text-lg font-medium">
            <li className="flex items-center mb-5 ">
              <span className="inline-block w-4 h-4 mr-2 bg-red-400 rounded-full" />
              Search Engine Optimization (SEO){" "}
            </li>
            <li className="flex items-center mb-5 ">
              <span className="inline-block w-4 h-4 mr-2 bg-red-400 rounded-full" />
              Content Production{" "}
            </li>
            <li className="flex items-center mb-5 ">
              <span className="inline-block w-4 h-4 mr-2 bg-red-400 rounded-full" />
              Image Selection and Optimization
            </li>
            <li className="flex items-center mb-5 ">
              <span className="inline-block w-4 h-4 mr-2 bg-red-400 rounded-full" />
              Advanced SEO
            </li>
            <li className="flex items-center mb-5 line-through ">
              <span className="inline-block w-4 h-4 mr-2 bg-red-400 rounded-full" />
              Enhanced Content Production
            </li>
            <li className="flex items-center mb-5 line-through ">
              <span className="inline-block w-4 h-4 mr-2 bg-red-400 rounded-full" />
              Digital Marketing
            </li>
            <li className="flex items-center line-through ">
              <span className="inline-block w-4 h-4 mr-2 bg-red-400 rounded-full" />
              Performance Analysis
            </li>
          </ul>
          <div className="pt-10">
            <button className="bg-red-400 text-white text-lg md:text-xl p-3 rounded-xl">
              Choose This Package
            </button>
          </div>
        </div>
        <div className="flex flex-col shadow-xl rounded-xl justify-center text-center p-6 md:p-10 border">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
            ADVANCED
          </h1>
          <h2 className="text-4xl sm:text-6xl pt-4 md:pt-7 font-bold">
            $1999<span className="text-lg">/month</span>
          </h2>
          <ul className="pt-6 md:pt-10 text-lg font-medium">
            <li className="flex items-center mb-5 ">
              <span className="inline-block w-4 h-4 mr-2 bg-red-400 rounded-full" />
              Search Engine Optimization (SEO){" "}
            </li>
            <li className="flex items-center mb-5 ">
              <span className="inline-block w-4 h-4 mr-2 bg-red-400 rounded-full" />
              Content Production{" "}
            </li>
            <li className="flex items-center mb-5 ">
              <span className="inline-block w-4 h-4 mr-2 bg-red-400 rounded-full" />
              Image Selection and Optimization
            </li>
            <li className="flex items-center mb-5 ">
              <span className="inline-block w-4 h-4 mr-2 bg-red-400 rounded-full" />
              Advanced SEO
            </li>
            <li className="flex items-center mb-5 ">
              <span className="inline-block w-4 h-4 mr-2 bg-red-400 rounded-full" />
              Enhanced Content Production
            </li>
            <li className="flex items-center mb-5 ">
              <span className="inline-block w-4 h-4 mr-2 bg-red-400 rounded-full" />
              Digital Marketing
            </li>
            <li className="flex items-center ">
              <span className="inline-block w-4 h-4 mr-2 bg-red-400 rounded-full" />
              Performance Analysis
            </li>
          </ul>
          <div className="pt-10">
            <button className="bg-red-400 text-white text-lg md:text-xl p-3 rounded-xl">
              Choose This Package
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPrice;
