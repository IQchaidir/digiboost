/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";

const AboutCulture = () => {
  return (
    <div className="flex flex-col md:flex-row gap-6 sm:gap-8 md:gap-10 px-4 sm:px-6 md:px-12 lg:px-36 pt-10 sm:pt-14">
      {/* Left Column */}
      <div className="bg-red-400 text-white rounded-xl p-6 sm:p-10 lg:p-12 shadow-2xl w-full md:w-1/2 md:flex-shrink-0">
        <p className="text-lg lg:text-2xl font-semibold">How we Work</p>
        <h1 className="text-xl lg:text-3xl font-bold pt-3 sm:pt-4 lg:pt-5">
          Providing a Voice To Your Brand
        </h1>
        <div className="pt-4 sm:pt-6 md:pt-8">
          <Image
            src="/teamlandscape.webp"
            alt="cultureimg"
            width={400}
            height={400}
            className="w-full h-auto"
          />
        </div>
        <p className="text-sm md:text-lg pt-4 sm:pt-5">
          At DigiBoost, we give your brand a powerful voice. Through
          collaboration and innovation, we tailor strategies to amplify your
          unique message in the digital space. Our creative solutions ensure
          authentic resonance, fostering meaningful connections with your
          audience.
        </p>
      </div>

      {/* Right Column */}
      <div className="bg-white text-black border border-red-400 rounded-xl p-6 sm:p-10 lg:p-12 w-full md:w-1/2 md:flex-shrink-0 mt-6 sm:mt-0">
        <p className="text-lg lg:text-2xl font-semibold">Main Initiative</p>
        <h1 className="text-xl lg:text-3xl font-bold pt-3 sm:pt-4 lg:pt-5">
          "Elevate, Captivate, Dominate."
        </h1>
        <p className="text-sm md:text-lg pt-4 sm:pt-5">
          Initiative: Continuously innovate and develop cutting-edge digital
          marketing solutions that leverage emerging technologies, ensuring our
          clients stay ahead in the ever-evolving online landscape.
        </p>

        {/* Vision */}
        <div className="flex flex-col sm:flex-row items-center gap-2 pt-4 sm:pt-5">
          <div>
            <p className="text-xl font-semibold pt-1 sm:pt-2">Our Vision</p>
            <p className="text-base pt-2 sm:pt-2">
              To be the unrivaled catalyst for digital success, empowering
              businesses worldwide to transcend their potential through
              innovative and transformative digital marketing solutions.
              DigiBoost envisions a future where every client achieves
              unparalleled growth and lasting success in the dynamic and
              ever-evolving digital landscape. Our vision is to be the forefront
              of industry innovation, setting the standard for excellence and
              making a positive impact on businesses, communities, and the
              digital realm.
            </p>
          </div>
        </div>

        {/* Solution */}
        <div className="flex flex-col sm:flex-row items-center gap-2 pt-4 sm:pt-5">
          <div>
            <p className="text-xl font-semibold pt-1 sm:pt-2">Our Solution</p>
            <p className="text-base pt-2 sm:pt-2">
              DigiBoost offers tailored, innovative solutions to propel
              businesses forward in the digital era. From strategic marketing to
              advanced technology integration, our solutions drive growth,
              ensuring clients thrive in the competitive online landscape. We
              are more than a service provider; we are your dedicated partner in
              achieving digital success.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCulture;
