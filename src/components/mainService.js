"use client";
import { useState } from "react";
import { FaArrowDown } from "react-icons/fa";
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
  const [clickedIndex, setClickedIndex] = useState(null);

  const handleClick = (index) => {
    setClickedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const data = [
    { text: "SEO Optimization", icon: FcSearch, content: <ContentSeo /> },
    {
      text: "Content Production",
      icon: FcMultipleDevices,
      content: <ContentSocial />,
    },
    { text: "Paid Advertising", icon: FcAdvertising, content: <ContentPaid /> },
    {
      text: "Performance Analysis",
      icon: FcStatistics,
      content: <ContentAnalytic />,
    },
  ];

  return (
    <div className="text-center bg-white pt-20">
      <p className="text-2xl inline-block border-b-4 border-red-400">
        OUR SERVICES
      </p>
      <h1 className="text-4xl font-bold pt-5">What Our Agency Provides</h1>
      <div className="block pt-10 justify-center">
        {data.map((item, index) => (
          <div key={index} className="flex flex-col px-5 md:px-10 pt-7 ">
            <button
              onClick={() => handleClick(index)}
              className={`flex justify-between items-center ${
                // Use w-full on mobile and w-3/4 on desktop
                "w-full md:w-3/4"
              } mx-auto px-5 md:px-10 text-left py-5 bg-gray-200 rounded-xl shadow-2xl transition duration-300 ${
                clickedIndex === index ? "transform scale-105" : ""
              }`}
            >
              <div className="flex">
                <item.icon className="w-16 h-16 md:w-24 md:h-24" />
                <p className="font-semibold text-lg md:text-2xl">{item.text}</p>
              </div>
              <FaArrowDown className="w-4 h-4 md:w-5 md:h-5" />
            </button>
            {clickedIndex === index && (
              <div className="flex mt-3">
                <div
                  className={`flex justify-between bg-white ${
                    // Use w-full on mobile and w-3/4 on desktop
                    "w-full md:w-3/4"
                  } mx-auto py-2 px-3 md:px-5 rounded-3xl shadow-2xl`}
                >
                  {item.content}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainService;
