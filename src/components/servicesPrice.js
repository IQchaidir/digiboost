const ServicesPrice = () => {
  return (
    <div className="pt-10 flex flex-col text-center mx-44">
      <div className="bg-red-400 p-4 text-white rounded-full inline-block">
        <h1 className="text-4xl font-medium">Price Table</h1>
      </div>
      <h1 className="text-6xl font-bold pt-7">Our Pricing</h1>
      <div className="flex justify-center gap-4 pt-8">
        <div className=" flex flex-col shadow-2xl rounded-xl justify-center text-center p-10 ">
          <h1 className="text-4xl font-semibold">BASIC</h1>
          <h2 className="text-6xl pt-7 font-bold">
            $999<span className="text-xl">/month</span>
          </h2>
          <ul className="pt-10 text-2xl font-medium">
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
          <div className="pt-20">
            <button className="bg-red-400 text-white text-xl p-3 rounded-xl">
              Choose This Package
            </button>
          </div>
        </div>
        <div className=" flex flex-col shadow-2xl rounded-xl justify-center text-center p-10 ">
          <h1 className="text-4xl font-semibold">ADVANCED</h1>
          <h2 className="text-6xl pt-7 font-bold">
            $1999<span className="text-xl">/month</span>
          </h2>
          <ul className="pt-10 text-2xl font-medium">
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
            <div className="pt-20">
              <button className="bg-red-400 text-white text-xl p-3 rounded-xl">
                Choose This Package
              </button>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ServicesPrice;
