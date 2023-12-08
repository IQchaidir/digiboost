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
    <div className="flex flex-col items-center pt-36 pb-12 bg-black">
      <div className="text-center text-white">
        <h2 className="text-5xl font-semibold ">Leadership Team</h2>
        <p className="text-xs pt-8 mb-14">
          Benefit from our expertise in designing and managing conversion
          centered
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="relative bg-white text-black  w-60 h-auto py-10 flex flex-col items-center transition-transform hover:text-white hover:bg-red-400  hover:scale-105"
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

              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-base">{member.position}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainTeam;
