/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";

const ContentSeo = () => {
  return (
    <>
      <div className="w-full text-left sm:w-3/4  pt-8">
        <p className="text-black text-base sm:text-base md:text-xl lg:text-2xl">
          Boost your brand to new heights with our targeted Social Paid Ads!
          Reach your ideal audience with precision and drive conversions. Our
          expert team crafts compelling ad copies and eye-catching visuals to
          ensure your message stands out. Ready to elevate your online presence?
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
