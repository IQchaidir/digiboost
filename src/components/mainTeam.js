import Image from "next/image";

const MainTeam = () => {
  const teamMembers = [
    {
      id: 1,
      name: "John Doe",
      position: "CEO",
      image: "/profil1.webp",
      socialMedia: {
        linkedin: "/linkedin.png",
        twitter: "/twitter.png",
        instagram: "/instagram.png",
      },
    },
    {
      id: 2,
      name: "Jhon Dix",
      position: "CTO",
      image: "/profil2.webp",
      socialMedia: {
        linkedin: "/linkedin.png",
        twitter: "/twitter.png",
        instagram: "/instagram.png",
      },
    },
    {
      id: 3,
      name: "Mark Wien",
      position: "CFO",
      image: "/profil3.webp",
      socialMedia: {
        linkedin: "/linkedin.png",
        twitter: "/twitter.png",
        instagram: "/instagram.png",
      },
    },
    {
      id: 4,
      name: "Louis Sam",
      position: "COO",
      image: "/profil4.webp",
      socialMedia: {
        linkedin: "/linkedin.png",
        twitter: "/twitter.png",
        instagram: "/instagram.png",
      },
    },
  ];

  return (
    <div className="flex flex-col items-center pt-16 sm:pt-24 md:pt-32 lg:pt-36 pb-12 bg-black">
      <div className="text-center text-white">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-semibold">
          Leader Team
        </h2>
        <p className="text-sm sm:text-base pt-4 sm:pt-8 mb-8 sm:mb-14">
          Benefit from our expertise in designing and managing
          conversion-centered
        </p>
        <div className="grid grid-cols-2  sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className=" bg-white text-black w-full sm:w-60 h-auto py-1 px-1 rounded-md  flex flex-col items-center transition-transform hover:text-white hover:bg-red-400 hover:scale-105"
            >
              <div>
                <Image
                  src={member.image}
                  alt={member.name}
                  width={200}
                  height={200}
                  className=" w-auto h-auto"
                />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mt-2">
                {member.name}
              </h3>
              <p className="text-sm sm:text-base">{member.position}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainTeam;
