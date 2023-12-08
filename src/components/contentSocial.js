/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

const ContentSocial = () => {
  return (
    <>
      <div className=" w-3/4 pr-8 text-left">
        <p className="text-2xl font-semibold mb-3">Content Production</p>
        <p className="text-black text-xl">
          Unleash creativity meets strategic content! Explore the full potential
          of our innovative Content Production services. From idea development
          to implementation, we deliver captivating content to elevate
          visibility and capture your audience's hearts.
        </p>

        <div className="pt-4">
          <button className="bg-red-400 h-auto w-auto p-1 rounded-md text-white">
            Learn More
          </button>
        </div>
      </div>
      <div>
        <Image
          src="/media.webp"
          alt="Sample Image"
          className="rounded-lg w-auto h-auto"
          height={250}
          width={250}
        />
      </div>
    </>
  );
};

export default ContentSocial;
