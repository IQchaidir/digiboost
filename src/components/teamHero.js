/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Link from "next/link";

const TeamHero = () => {
  return (
    <div className="flex flex-col pt-40 justify-center items-center text-black">
      <h1 className="text-4xl sm:text-6xl md:text-6xl font-bold pt-4">
        Meet The Team
      </h1>
      <h1 className="text-4xl sm:text-6xl md:text-6xl font-bold pb-5">
        Our Professional
      </h1>

      <div className="pt-2 pb-5">
        <Image
          src="/teamhero.webp"
          alt="heroimg"
          width={400}
          height={300}
          className="h-[300px] w-[400px]"
        ></Image>
      </div>
    </div>
  );
};

export default TeamHero;
