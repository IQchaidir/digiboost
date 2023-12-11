const events = [
  {
    year: "2017",
    title: "Founding Moment",
    description:
      "John Doe establishes DigiBoost with a vision to revolutionize the digital marketing landscape. Drawing on his background in marketing and technology, he assembles a dedicated team to provide innovative digital marketing services.",
  },
  {
    year: "2018",
    title: "Client Expansion",
    description:
      "With a growing reputation for delivering results, DigiBoost expands its client base and establishes itself as a trusted partner for businesses seeking to enhance their online presence.",
  },
  {
    year: "2019",
    title: "Adoption of New Technologies ",
    description:
      "DigiBoost stays ahead of the curve by incorporating the latest technologies into its digital marketing strategies, ensuring clients benefit from the most advanced tools available.",
  },
  {
    year: "2020",
    title: "Resilience Amidst Challenges",
    description:
      "DigiBoost demonstrates resilience during challenging times, adapting strategies to navigate uncertainties while maintaining a commitment to client success.",
  },
  {
    year: "2021",
    title: "Innovation Hub",
    description:
      "DigiBoost establishes an innovation hub within the company, fostering a culture of continuous improvement and creative thinking.",
  },
  {
    year: "2022",
    title: "International Presence ",
    description:
      "DigiBoost takes its services global, establishing a presence in key international markets and catering to a diverse clientele.",
  },
  {
    year: "2023",
    title: "Technological Prowess",
    description:
      "DigiBoost continues to stay at the forefront of technological advancements, incorporating artificial intelligence and other emerging technologies into its strategies.",
  },
];

const AboutTimeline = () => {
  return (
    <div className="px-4 md:px-8 lg:px-36 pt-52 pb-10 flex flex-col justify-center text-center">
      <div className="mb-6">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white bg-black rounded-xl p-4 inline-block">
          Timeline History
        </h1>
      </div>
      <div className="flex flex-col items-center justify-center mt-6 md:mt-10 space-y-6 md:space-y-8 relative">
        {events.map((event, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center space-y-0 md:space-y-0 ${
              index % 2 === 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            <div className="md:w-3/5 relative z-10">
              <div className="p-4 md:p-6 bg-white rounded-md shadow-md text-left">
                <span className="text-base md:text-lg font-semibold text-black">
                  {event.year}
                </span>
                <p className="text-black text-sm md:text-lg">
                  {event.description}
                </p>
              </div>
            </div>
            <div className="md:w-2/5">
              <div className="  md:block h-full w-1 bg-red-400 absolute top-0 left-1/2 transform -translate-x-1/2"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutTimeline;
