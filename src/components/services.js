/* eslint-disable react/no-unescaped-entities */
import {
  FcSearch,
  FcAdvertising,
  FcMultipleDevices,
  FcStatistics,
} from "react-icons/fc";

const Services = () => {
  return (
    <>
      <div className=" text-center bg-white pt-28">
        <p className="text-lg lg:text-2xl inline-block  border-b-4 border-red-400 ">
          OUR SERVICES
        </p>
        <h1 className="text-4xl lg:text-5xl font-bold pt-5">
          What Our Agency Provides
        </h1>
      </div>
      <div className="grid grid-cols-2 justify-center gap-10 mx-44 pt-10">
        <div className="shadow-xl text-black rounded-xl w-auto h-auto  text-left p-7 transition-transform hover:text-white hover:bg-red-400 hover:scale-105">
          <FcSearch className="w-20 h-20" />
          <h1 className="text-xl font-bold ">
            SEO Optimization (Search Engine Optimization):
          </h1>
          <p className="text-base pt-4">
            SEO, or Search Engine Optimization, is a set of practices aimed at
            improving a website's visibility and ranking on search engine
            results pages (SERPs). The goal is to increase organic (non-paid)
            traffic to a website through search engines like Google, Bing, or
            Yahoo.
          </p>
          <ul className="text-base pt-7 list-disc">
            <li>Keyword Research</li>
            <li>On-Page SEO</li>
            <li>Quality Content</li>
            <li>Backlink Building</li>
            <li>Technical SEO</li>
          </ul>
        </div>
        <div className="shadow-xl text-black rounded-xl w-auto h-auto  text-left p-7 transition-transform hover:text-white hover:bg-red-400 hover:scale-105">
          <FcMultipleDevices className="w-20 h-20" />
          <h1 className="text-xl font-bold ">
            SEO Optimization (Search Engine Optimization):
          </h1>
          <p className="text-base pt-4">
            SEO, or Search Engine Optimization, is a set of practices aimed at
            improving a website's visibility and ranking on search engine
            results pages (SERPs). The goal is to increase organic (non-paid)
            traffic to a website through search engines like Google, Bing, or
            Yahoo.
          </p>
          <ul className="text-base pt-7 list-disc">
            <li>Keyword Research</li>
            <li>On-Page SEO</li>
            <li>Quality Content</li>
            <li>Backlink Building</li>
            <li>Technical SEO</li>
          </ul>
        </div>
        <div className="shadow-xl text-black rounded-xl w-auto h-auto  text-left p-7 transition-transform hover:text-white hover:bg-red-400 hover:scale-105">
          <FcAdvertising className="w-20 h-20" />
          <h1 className="text-xl font-bold ">
            SEO Optimization (Search Engine Optimization):
          </h1>
          <p className="text-base pt-4">
            SEO, or Search Engine Optimization, is a set of practices aimed at
            improving a website's visibility and ranking on search engine
            results pages (SERPs). The goal is to increase organic (non-paid)
            traffic to a website through search engines like Google, Bing, or
            Yahoo.
          </p>
          <ul className="text-base pt-7 list-disc">
            <li>Keyword Research</li>
            <li>On-Page SEO</li>
            <li>Quality Content</li>
            <li>Backlink Building</li>
            <li>Technical SEO</li>
          </ul>
        </div>
        <div className="shadow-xl text-black rounded-xl w-auto h-auto  text-left p-7 transition-transform hover:text-white hover:bg-red-400 hover:scale-105">
          <FcStatistics className="w-20 h-20" />
          <h1 className="text-xl font-bold ">
            SEO Optimization (Search Engine Optimization):
          </h1>
          <p className="text-base pt-4">
            SEO, or Search Engine Optimization, is a set of practices aimed at
            improving a website's visibility and ranking on search engine
            results pages (SERPs). The goal is to increase organic (non-paid)
            traffic to a website through search engines like Google, Bing, or
            Yahoo.
          </p>
          <ul className="text-base pt-7 list-disc">
            <li>Keyword Research</li>
            <li>On-Page SEO</li>
            <li>Quality Content</li>
            <li>Backlink Building</li>
            <li>Technical SEO</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Services;
