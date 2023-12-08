"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaLinkedin, FaInstagramSquare, FaTwitterSquare } from "react-icons/fa";

const Teams = () => {
  const [leadershipTeam, setLeadershipTeam] = useState([]);
  const [otherTeamMembers, setOtherTeamMembers] = useState([]);

  const CACHE_KEY = "teamMembersCache";
  const CACHE_EXPIRATION = 3 * 24 * 60 * 60 * 1000; // 3 hari dalam milidetik

  useEffect(() => {
    const fetchTeamMembers = async () => {
      try {
        // Cek apakah data ada di local storage dan masih valid
        const cachedData = localStorage.getItem(CACHE_KEY);
        const cachedTimestamp = localStorage.getItem(`${CACHE_KEY}_timestamp`);

        if (cachedData && cachedTimestamp) {
          const currentTime = new Date().getTime();
          if (currentTime - parseInt(cachedTimestamp, 10) < CACHE_EXPIRATION) {
            // Gunakan data dari cache jika masih valid
            const cachedTeamMembers = JSON.parse(cachedData);
            setLeadershipTeam(cachedTeamMembers.leadership);
            setOtherTeamMembers(cachedTeamMembers.otherMembers);
            return;
          }
        }

        // Fetch data jika tidak ada data di cache atau sudah kadaluarsa
        const response = await fetch("https://randomuser.me/api/?results=12");
        const data = await response.json();

        // ... (kode lainnya sama seperti sebelumnya)

        // Cache data di local storage
        const cachedDataToStore = {
          leadership,
          otherMembers,
        };
        localStorage.setItem(CACHE_KEY, JSON.stringify(cachedDataToStore));
        localStorage.setItem(
          `${CACHE_KEY}_timestamp`,
          new Date().getTime().toString()
        );
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
