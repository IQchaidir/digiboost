import Image from "next/image";

const AboutTeam = () => {
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
    <div className="flex flex-col items-center pt-10 md:pt-20 pb-12">
      <div className="text-center text-black">
        <h2 className="text-3xl md:text-5xl font-semibold">Team Members</h2>
        <p className="text-sm md:text-base pt-4 md:pt-8 mb-6 md:mb-12">
          Benefit from our expertise in designing and managing
          conversion-centered
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 shadow-2xl">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="relative bg-white text-black rounded-xl p-6 md:p-10 flex flex-col items-center transition-transform hover:text-white hover:bg-red-400  hover:scale-105"
            >
              <div className="relative w-24 h-24 md:w-32 md:h-32 mb-4 md:mb-6">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={100}
                  height={100}
                  className="rounded-full w-full h-full"
                />
              </div>

              <h3 className="text-lg md:text-xl font-semibold">
                {member.name}
              </h3>
              <p className="text-sm md:text-base">{member.position}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutTeam;
