/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

export default function About() {
  return (
    <div className="pt-10 md:pt-16 lg:pt-24 px-4 md:px-8 lg:px-36">
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-between space-y-8 md:space-y-0">
        <div className="md:w-1/2 md:mr-8">
          <Image
            src="/aboutmain.webp"
            alt="about img"
            width={500}
            height={500}
            className="w-full h-auto"
          />
        </div>
        <div className="lg:w-1/2 mx-auto md:mx-0">
          {" "}
          {/* Add mx-auto class here */}
          <p className="text-base md:text-lg text-red-400">ABOUT US</p>
          <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold pt-4">
            Who Is DigiMedia Agency
          </h1>
          <p className="text-base md:text-lg lg:text-2xl pt-4">
            Welcome to [Company Name], the creative solution for your marketing
            and business development needs. As an innovative Digital Media
            Agency, we have a mission to deliver extraordinary marketing
            experiences and exceptional results for our clients.
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-between space-y-8 md:space-y-0 mt-8">
        <div className="lg:w-1/2 mx-auto md:mx-0">
          {" "}
          {/* Add mx-auto class here */}
          <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold pt-5">
            Where It All Started
          </h1>
          <p className="text-base md:text-lg lg:text-2xl pt-4">
            "In 2017, a visionary named Yuki Tauman embarked on a bold journey
            to establish [Company Name], a digital media agency focused on
            providing creative and innovative solutions to meet the needs of
            esteemed clients."
          </p>
        </div>
        <div className="md:w-1/2 mt-4 md:mt-0">
          <Image
            src="/aboutmain.webp"
            alt="about img"
            width={500}
            height={500}
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
}
