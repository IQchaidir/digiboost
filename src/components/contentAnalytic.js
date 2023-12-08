import Image from "next/image";

const ContentAnalytic = () => {
  return (
    <>
      <div className=" w-3/4 pr-8 text-left">
        <p className="text-2xl font-semibold mb-3">Performance Analysis</p>
        <p className="text-black text-xl">
          Enhance your digital strategy! With our Performance Analysis services,
          we unlock the unlimited potential of your Paid Advertising, SEO, and
          Content Production campaigns. Through in-depth data, we provide
          critical insights to improve and maximize every aspect of your digital
          marketing.
        </p>
        <div className="pt-4">
          <button className="bg-red-400 h-auto w-auto p-1 rounded-md text-white">
            Learn More
          </button>
        </div>
      </div>
      <div>
        <Image
          src="/report.webp"
          alt="Sample Image"
          className="rounded-lg h-auto w-auto"
          height={250}
          width={250}
        />
      </div>
    </>
  );
};

export default ContentAnalytic;
