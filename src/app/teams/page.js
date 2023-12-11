"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaLinkedin, FaInstagramSquare, FaTwitterSquare } from "react-icons/fa";

const Teams = () => {
  const leader = [
    {
      id: 1,
      name: "John Doe",
      position: "CEO",
      image: "/profil1.webp",
      email: "JohnDoe@gmail.com",
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
      email: "JohnDix@gmail.com",
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
      email: "MarkWien@gmail.com",
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
      email: "LouisSam.com",
      socialMedia: {
        linkedin: "/linkedin.png",
        twitter: "/twitter.png",
        instagram: "/instagram.png",
      },
    },
  ];
  const [teamMembers, setTeamMembers] = useState([]);

  useEffect(() => {
    const fetchTeamMembers = async () => {
      try {
        const response = await fetch("https://randomuser.me/api/?results=12");
        const data = await response.json();

        // Manually adding professions to team members
        const professions = [
          "Designer",
          "Developer",
          "Marketing Specialist",
          "Content Writer",
          "Project Manager",
          "Sales Representative",
          "Customer Support",
          "Graphic Designer",
        ];

        const updatedTeamMembers = data.results.map((member, index) => ({
          ...member,
          profession: professions[index % professions.length],
        }));

        setTeamMembers(updatedTeamMembers);
      } catch (error) {
        console.error("Error fetching team members:", error);
      }
    };

    fetchTeamMembers();
  }, []);

  return (
    <>
      <div className="flex flex-col items-center mx-2 pt-32 sm:pt-32 md:pt-32 lg:pt-32 pb-12 ">
        <div className="text-center text-black">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-semibold">
            Leader Team
          </h2>
          <p className="text-sm sm:text-base pt-4 sm:pt-8 mb-8 sm:mb-14">
            Benefit from our expertise in designing and managing
            conversion-centered
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6 mb-8 justify-center">
            {leader.map((member) => (
              <div
                key={member}
                className="bg-white p-6 rounded-md shadow-md flex flex-col items-center transition-all duration-300 hover:bg-red-400 hover:text-white hover:scale-105"
              >
                <Image
                  src={member.image}
                  alt={`${member.name}`}
                  width={120}
                  height={120}
                  className="w-32 h-44 mx-auto mb-4"
                />
                <h3 className="text-lg font-semibold mb-2 text-center ">
                  {`${member.name} `}
                </h3>
                <p className="text-sm mb-2 text-center">{member.email}</p>
                <p className="text-sm mb-4 text-center">{member.position}</p>
                <div className="flex gap-4">
                  <Link href="https://id.linkedin.com/">
                    <FaLinkedin size={24} />{" "}
                  </Link>
                  <Link href="https://www.instagram.com/">
                    {" "}
                    <FaInstagramSquare size={24} />{" "}
                  </Link>
                  <Link href="https://twitter.com/?lang=id">
                    {" "}
                    <FaTwitterSquare size={24} />{" "}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="pt-32 px-4 md:px-20 lg:px-44 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">Other Team</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-6 mb-8 justify-center">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-md shadow-md flex flex-col items-center transition-all duration-300 hover:bg-red-400 hover:text-white hover:scale-105"
            >
              <Image
                src={member.picture.large}
                alt={`${member.name.first} ${member.name.last}`}
                width={120}
                height={120}
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="text-lg font-semibold mb-2 text-center ">
                {`${member.name.first} ${member.name.last}`}
              </h3>
              <p className="text-sm mb-2 text-center">{member.email}</p>
              <p className="text-sm mb-4 text-center">{member.profession}</p>
              <div className="flex gap-4">
                <Link href="https://id.linkedin.com/">
                  <FaLinkedin size={24} />{" "}
                </Link>
                <Link href="https://www.instagram.com/">
                  {" "}
                  <FaInstagramSquare size={24} />{" "}
                </Link>
                <Link href="https://twitter.com/?lang=id">
                  {" "}
                  <FaTwitterSquare size={24} />{" "}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Teams;
