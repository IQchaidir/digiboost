"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { FaInstagramSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";

const TeamsFetching = () => {
  const [teamMembers, setTeamMembers] = useState([]);

  const professions = [
    "Developer",
    "Designer",
    "Product Manager",
    "Marketing Specialist",
    "Data Scientist",
    "Customer Support",
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const cachedData = localStorage.getItem("teamMembers");
        const expirationTime = localStorage.getItem("teamMembersExpiration");

        if (
          cachedData &&
          expirationTime &&
          new Date().getTime() < Number(expirationTime)
        ) {
          setTeamMembers(JSON.parse(cachedData));
        } else {
          const response = await fetch("https://randomuser.me/api/?results=6");
          const data = await response.json();

          // Assign random professions to team members
          const teamWithProfessions = data.results.map((member, index) => ({
            ...member,
            profession: professions[index],
          }));

          setTeamMembers(teamWithProfessions);
          localStorage.setItem(
            "teamMembers",
            JSON.stringify(teamWithProfessions)
          );

          const newExpirationTime =
            new Date().getTime() + 3 * 24 * 60 * 60 * 1000;
          localStorage.setItem(
            "teamMembersExpiration",
            newExpirationTime.toString()
          );
        }
      } catch (error) {
        console.error("Error fetching team members:", error);
      }
    };

    fetchData();
  }, []);

  return (
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
            <p className="text-lg font-semibold mb-2 text-center ">
              {`${member.name.first} ${member.name.last}`}
            </p>
            <p className="text-sm mb-2 text-center">{member.email}</p>
            <p className="text-sm mb-2 text-center">{member.profession}</p>
            <div className="flex gap-4">
              <Link href="https://id.linkedin.com/" aria-label="LinkedIn">
                <FaLinkedin size={24} className="hover:scale-105" />{" "}
              </Link>
              <Link href="https://www.instagram.com/" aria-label="Instagram">
                {" "}
                <FaInstagramSquare size={24} className="hover:scale-105" />{" "}
              </Link>
              <Link href="https://twitter.com/?lang=id" aria-label="Twitter">
                {" "}
                <FaTwitterSquare size={24} className="hover:scale-105" />{" "}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamsFetching;
