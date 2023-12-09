import {
  FcSearch,
  FcAdvertising,
  FcMultipleDevices,
  FcStatistics,
} from "react-icons/fc";

const ServiceCard = ({ icon, title, description, list }) => {
  return (
    <div className=" border shadow-xl text-black rounded-xl w-auto md:w-auto text-left p-4 md:p-7 transition-transform hover:text-white hover:bg-red-400 hover:scale-105 mb-8">
      {icon}
      <h1 className="text-lg md:text-xl font-bold mt-4">{title}</h1>
      <p className="text-sm md:text-base pt-2">{description}</p>
      <ul className="text-sm md:text-base pt-4 list-disc pl-4">
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

const Services = () => {
  const services = [
    {
      icon: <FcSearch className="w-12 h-12 md:w-20 md:h-20" />,
      title: "SEO Optimization",
      description:
        "SEO, or Search Engine Optimization, is a set of practices aimed at improving a website's visibility and ranking on search engine results pages (SERPs).",
      list: [
        "Keyword Research",
        "On-Page SEO",
        "Quality Content",
        "Backlink Building",
        "Technical SEO",
      ],
    },
    {
      icon: <FcMultipleDevices className="w-12 h-12 md:w-20 md:h-20" />,
      title: "Responsive Design",
      description:
        "Ensure your website looks great on all devices, from desktops to smartphones.",
      list: ["Mobile-Friendly", "Cross-Browser Compatibility", "Fluid Layout"],
    },
    {
      icon: <FcAdvertising className="w-12 h-12 md:w-20 md:h-20" />,
      title: "Digital Marketing",
      description:
        "Promote your brand through various digital channels, such as social media and online advertising.",
      list: ["Social Media Marketing", "Email Campaigns", "PPC Advertising"],
    },
    {
      icon: <FcStatistics className="w-12 h-12 md:w-20 md:h-20" />,
      title: "Analytics and Reporting",
      description:
        "Track and analyze user behavior on your website to make informed decisions.",
      list: ["Google Analytics", "Custom Reports", "Conversion Tracking"],
    },
  ];

  return (
    <>
      <div className="text-center bg-white pt-24 md:pt-36 lg:pt-48">
        <p className="text-lg md:text-2xl inline-block border-b-4 border-red-400 ">
          OUR SERVICES
        </p>
        <h1 className="text-2xl md:text-5xl font-bold pt-5">
          What Our Agency Provides
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center gap-4 md:gap-10 mx-4 md:mx-8 lg:mx-16 xl:mx-40 pt-6">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default Services;
