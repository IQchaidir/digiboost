"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaLinkedin, FaInstagramSquare, FaTwitterSquare } from "react-icons/fa";

const Teams = () => {
  const [leadershipTeam, setLeadershipTeam] = useState([]);
  const [otherTeamMembers, setOtherTeamMembers] = useState([]);

  useEffect(() => {
    const fetchTeamMembers = async () => {
      try {
        const response = await fetch("https://randomuser.me/api/?results=12");
        const data = await response.json();

        // Manually adding professions to team members
        const professions = [
          "CEO",
          "COO",
          "CFO",
          "CTO",
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

        // Separate leadership team and other team members
        const leadership = updatedTeamMembers.slice(0, 3);
        const otherMembers = updatedTeamMembers.slice(3);

        setLeadershipTeam(leadership);
        setOtherTeamMembers(otherMembers);
      } catch (error) {
        console.error("Error fetching team members:", error);
      }
    };

    fetchTeamMembers();
  }, []);

  return (
    <div className="pt-32 px-4 md:px-20 lg:px-44 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Our Team</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-6 mb-8 justify-center">
        {leadershipTeam.map((member, index) => (
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
              <FaLinkedin size={24} />
              <FaInstagramSquare size={24} />
              <FaTwitterSquare size={24} />
            </div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-6 justify-center">
        {otherTeamMembers.map((member, index) => (
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
              <FaLinkedin size={24} />
              <FaInstagramSquare size={24} />
              <FaTwitterSquare size={24} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Teams;
