import Image from "next/image";

const TeamMember = ({ name, position, image, experience, socialMedia }) => (
  <div className=" bg-white border p-4 mb-8 rounded-md shadow-md flex flex-col items-center ">
    <Image
      src={image}
      alt={name}
      width={200}
      height={200}
      className=" w-72 h-96 sm:w-72 sm:h-96  lg:w-72 lg:h-96 xl:w-auto xl:h-auto  mb-4"
    />
    <div className="text-center">
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-black">{position}</p>
      <p className="text-sm md:text-sm lg:text-sm xl:text-base text-black mt-2">
        {experience}
      </p>
    </div>
  </div>
);

const TeamSection = () => {
  const teamData = [
    {
      id: 1,
      name: "John Doe",
      position: "CEO",
      image: "/profil1.webp",
      experience:
        "John Doe is a seasoned digital marketing expert with over 10 years of experience. He has successfully led numerous high-profile marketing campaigns, driving significant revenue growth for clients in various industries. His strategic mindset and innovative approach make him a valuable asset to the team.",
    },
    {
      id: 2,
      name: "Jhon Dix",
      position: "CTO",
      image: "/profil2.webp",
      experience:
        "As the Chief Technology Officer, Jhon Dix brings a wealth of knowledge in cutting-edge technology solutions. With a background in software development and a passion for staying ahead of industry trends, Jhon has played a key role in implementing innovative technologies that enhance the company's digital capabilities.",
    },
    {
      id: 3,
      name: "Mark Wien",
      position: "CFO",
      image: "/profil3.webp",
      experience:
        "Mark Wien is the Chief Financial Officer, bringing a wealth of financial expertise to the team. With a proven track record in financial strategy, Mark has successfully guided the company through various financial challenges, ensuring stability and sustainable growth.",
    },
    {
      id: 4,
      name: "Louis Sam",
      position: "COO",
      image: "/profil4.webp",
      experience:
        "Louis Sam, as the Chief Operating Officer, is known for his operational excellence and leadership expertise. With a focus on optimizing business processes and ensuring seamless operations, Louis has played a pivotal role in the company's success. His hands-on approach and commitment to efficiency make him an integral part of the leadership team.",
    },
  ];

  return (
    <div className="flex flex-col items-center py-10">
      <h2 className="text-3xl font-bold mb-8">Our Team</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 max-w-screen-xl mx-2 sm:mx-6 xl:mx-28 lg:mx-16 md:mx-10 ">
        {teamData.map((member) => (
          <TeamMember key={member.id} {...member} />
        ))}
      </div>
    </div>
  );
};

export default TeamSection;
