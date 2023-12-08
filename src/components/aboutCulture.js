/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";

const AboutCulture = () => {
  return (
    <div className="flex gap-10 px-36 pt-28">
      <div className="bg-red-400 text-white rounded-xl w-auto h-auto p-12 shadow-2xl">
        <p className="text-xl font-semibold">How we Work</p>
        <h1 className="text-4xl font-bold pt-5">Providing a Voice To</h1>
        <h1 className="text-4xl font-bold">Your Brand</h1>
        <Image
          src="/aboutmain.webp"
          alt="cultureimg"
          width={250}
          height={150}
          className="pt-8 w-auto h-auto"
        />
        <p className="text-sm pt-5">
          Choose a level of HubSpot services that fits your unique needs,
          including training, consulting, managed services, or growth services,
          which consists of ongoing marketing and sales strategy development and
          implementation.
        </p>
      </div>
      <div className="bg-white text-black border border-red-400 rounded-xl w-auto h-auto p-10 shadow-2xl">
        <p className="text-xl font-semibold">Main Initiative</p>
        <h1 className="text-5xl font-bold pt-5">"Elevate, Captivate,</h1>
        <h1 className="text-5xl font-bold">Dominate."</h1>
        <p className="text-sm pt-5">
          Choose a level of HubSpot services that fits your unique needs,
          including training, consulting, managed services, or growth services,
          which consists of ongoing marketing and sales strategy development and
          implementation.
        </p>
        <div className="flex gap-2">
          <FaCheckCircle className="h-28 w-28" />
          <div>
            <p className="text-xl font-semibold pt-9">Our Vision</p>
            <p className="text-sm pt-2">
              Choose a level of HubSpot services that fits your unique needs,
              including training, consulting, managed services, or growth
              services, which consists of ongoing marketing and sales strategy
              development and implementation.
            </p>
          </div>
        </div>
        <div className="flex gap-2">
          <FaCheckCircle className="h-28 w-28" />
          <div>
            <p className="text-xl font-semibold pt-9">Our Solution</p>
            <p className="text-sm pt-2">
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
