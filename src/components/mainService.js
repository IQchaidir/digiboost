"use client";
import { useState } from "react";
import {
  FcSearch,
  FcAdvertising,
  FcMultipleDevices,
  FcStatistics,
} from "react-icons/fc";
import ContentSeo from "./content.SEO";
import ContentSocial from "./contentSocial";
import ContentPaid from "./contentPaid";
import ContentAnalytic from "./contentAnalytic";

const MainService = () => {
  const [clickedIndex, setClickedIndex] = useState(0);

  const handleClick = (index) => {
    setClickedIndex(index);
  };
  const data = [
    { text: "SEO Optimization", icon: FcSearch },
    { text: "Content Production", icon: FcMultipleDevices },
    { text: "Paid Advertising", icon: FcAdvertising },
    { text: "Performance Analysis", icon: FcStatistics },
  ];

  const contentMap = [
    <ContentSeo key="seo" />,
    <ContentSocial key="socialmedia" />,
    <ContentPaid key="paidad" />,
    <ContentAnalytic key="report" />,
  ];

  return (
    <div className=" text-center bg-white pt-28">
      <p className="text-lg lg:text-2xl inline-block  border-b-4 border-red-400 ">
        OUR SERVICES
      </p>
      <h1 className="text-4xl lg:text-5xl font-bold pt-5">
        What Our Agency Provides
      </h1>
      <div className=" justify-center space-x-7 flex pt-10">
        {data.map((item, index) => (
          <button
            key={index}
            onClick={() => handleClick(index)}
            className={` flex flex-col items-center text-center px-5 py-5${
              clickedIndex === index
                ? "bg-gray-200 rounded-xl shadow-2xl transition duration-300"
                : ""
            }`}
          >
            <div className=" w-24 h-24">
              <item.icon className="w-24 h-24" />
            </div>
            <p className="font-semibold text-2xl">{item.text}</p>
          </button>
        ))}
      </div>
      <div className="py-5 flex justify-center ">
        <div className="flex bg-white  w-3/4  py-2 px-5 rounded-3xl shadow-2xl ">
          {contentMap[clickedIndex]}
        </div>
      </div>
    </div>
  );
};

export default MainService;
