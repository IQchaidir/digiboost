/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";

const AboutCulture = () => {
  return (
    <div className="flex flex-col md:flex-row gap-6 sm:gap-8 md:gap-10 px-4 sm:px-6 md:px-12 lg:px-36 pt-10 sm:pt-14">
      {/* Left Column */}
      <div className="bg-red-400 text-white rounded-xl p-6 sm:p-10 lg:p-12 shadow-2xl w-full md:w-1/2 md:flex-shrink-0">
        <p className="text-lg font-semibold">How we Work</p>
        <h1 className="text-xl lg:text-3xl font-bold pt-3 sm:pt-4 lg:pt-5">
          Providing a Voice To Your Brand
        </h1>
        <div className="pt-4 sm:pt-6 md:pt-8">
          <Image
            src="/aboutmain.webp"
            alt="cultureimg"
            width={500}
            height={500}
            className="w-full h-auto"
          />
        </div>
        <p className="text-sm pt-4 sm:pt-5">
          Choose a level of HubSpot services that fits your unique needs,
          including training, consulting, managed services, or growth services,
          which consists of ongoing marketing and sales strategy development and
          implementation.
        </p>
      </div>

      {/* Right Column */}
      <div className="bg-white text-black border border-red-400 rounded-xl p-6 sm:p-10 lg:p-12 w-full md:w-1/2 md:flex-shrink-0 mt-6 sm:mt-0">
        <p className="text-lg font-semibold">Main Initiative</p>
        <h1 className="text-xl lg:text-3xl font-bold pt-3 sm:pt-4 lg:pt-5">
          "Elevate, Captivate, Dominate."
        </h1>
        <p className="text-sm pt-4 sm:pt-5">
          Choose a level of HubSpot services that fits your unique needs,
          including training, consulting, managed services, or growth services,
          which consists of ongoing marketing and sales strategy development and
          implementation.
        </p>

        {/* Vision */}
        <div className="flex flex-col sm:flex-row items-center gap-2 pt-4 sm:pt-5">
          <FaCheckCircle className="h-12 w-12 sm:h-20 sm:w-20" />
          <div>
            <p className="text-lg font-semibold pt-1 sm:pt-2">Our Vision</p>
            <p className="text-sm pt-2 sm:pt-2">
              Choose a level of HubSpot services that fits your unique needs,
              including training, consulting, managed services, or growth
              services, which consists of ongoing marketing and sales strategy
              development and implementation.
            </p>
          </div>
        </div>

        {/* Solution */}
        <div className="flex flex-col sm:flex-row items-center gap-2 pt-4 sm:pt-5">
          <FaCheckCircle className="h-12 w-12 sm:h-20 sm:w-20" />
          <div>
            <p className="text-lg font-semibold pt-1 sm:pt-2">Our Solution</p>
            <p className="text-sm pt-2 sm:pt-2">
              Choose a level of HubSpot services that fits your unique needs,
              including training, consulting, managed services, or growth
              services, which consists of ongoing marketing and sales strategy
              development and implementation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCulture;
