/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

const ContentAnalytic = () => {
  return (
    <>
      <div className="w-full text-left sm:w-3/4 sm:pr-8">
        <p className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-3">
          SEO Optimization
        </p>
        <p className="text-black text-lg sm:text-xl md:text-2xl">
          Enhance your online visibility! With our SEO optimization services,
          not only will you achieve higher rankings on search engines, but
          you'll also boost your business opportunities.
        </p>

        <div className="pt-4">
          <button className="bg-red-400 h-auto w-auto p-1 rounded-md text-white">
            Learn More
          </button>
        </div>
      </div>
      <div className="hidden sm:block">
        <Image
          src="/seo.webp"
          alt="Sample Image"
          className="rounded-lg w-auto h-auto"
          height={250}
          width={250}
        />
      </div>
    </>
  );
};

export default ContentAnalytic;
