/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";

const ContentSeo = () => {
  return (
    <>
      <div className="w-full text-left sm:w-3/4  pt-8">
        <p className="text-black text-base sm:text-base md:text-xl lg:text-2xl">
          Track and optimize your success with our Performance Analytics
          services! Unlock valuable insights into your digital strategy,
          understand audience behavior, and fine-tune your campaigns for maximum
          impact.
        </p>

        <div className=" pt-8">
          <Link href="/services">
            <button className="bg-red-400 h-auto w-auto p-1 rounded-md text-white text-base sm:text-base md:text-xl lg:text-xl">
              Learn More
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ContentSeo;
