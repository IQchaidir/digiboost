import Image from "next/image";

const TeamHero = () => {
  return (
    <div className="mx-6 sm:mx-28 xl:mx-40 lg:mx-32 pt-40">
      <div className="flex flex-col md:flex-row items-center justify-between ">
        <div className="flex flex-col">
          <h1 className="text-7xl">Meet The Team</h1>
          <h1 className="text-7xl">Our Professionals</h1>
        </div>
        <Image
          src="/teamhero.jpg"
          alt="teamhero"
          width={200}
          height={100}
          className="w-auto h-auto"
        />
      </div>
    </div>
  );
};

export default TeamHero;
