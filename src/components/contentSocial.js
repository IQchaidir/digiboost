/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";

const ContentSeo = () => {
  return (
    <>
      <div className="w-full text-left sm:w-3/4  pt-8">
        <p className="text-black text-base sm:text-base md:text-xl lg:text-2xl">
          Elevate your brand's digital presence! Our Content Production Service
          delivers engaging and informative content crafted to captivate your
          target audience. From in-depth articles to stunning graphic design,
          we're here to enhance your online business.
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
