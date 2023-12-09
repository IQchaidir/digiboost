import Image from "next/image";

const MainTeam = () => {
  const teamMembers = [
    {
      id: 1,
      name: "John Doe",
      position: "CEO",
      image: "/profil.webp",
      socialMedia: {
        linkedin: "/linkedin.png",
        twitter: "/twitter.png",
        instagram: "/instagram.png",
      },
    },
    {
      id: 2,
      name: "Jane Doe",
      position: "CTO",
      image: "/profil.webp",
      socialMedia: {
        linkedin: "/linkedin.png",
        twitter: "/twitter.png",
        instagram: "/instagram.png",
      },
    },
    {
      id: 3,
      name: "Jane Doe",
      position: "CFO",
      image: "/profil.webp",
      socialMedia: {
        linkedin: "/linkedin.png",
        twitter: "/twitter.png",
        instagram: "/instagram.png",
      },
    },
    {
      id: 4,
      name: "Jane Doe",
      position: "COO",
      image: "/profil.webp",
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
          Leadership Team
        </h2>
        <p className="text-sm sm:text-base pt-4 sm:pt-8 mb-8 sm:mb-14">
          Benefit from our expertise in designing and managing
          conversion-centered
        </p>
        <div className="grid grid-cols-2 px-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="relative bg-white text-black w-full sm:w-60 h-auto py-6 sm:py-10 flex flex-col items-center transition-transform hover:text-white hover:bg-red-400 hover:scale-105"
            >
              <div className="relative">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={100}
                  height={100}
                  className="rounded-full"
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
