import Image from "next/image";

const ContentPaid = () => {
  return (
    <>
      <div className=" w-3/4 pr-8 text-left">
        <p className="text-2xl font-semibold mb-3">Paid Advertising</p>
        <p className="text-black text-xl">
          Elevate your brand with precision! Our Paid Advertising services are
          designed to take your business to new heights. From targeted campaigns
          to measurable results, we ensure your message reaches the right
          audience at the right time. Ready to boost your online presence?
        </p>

        <div className="pt-4">
          <button className="bg-red-400 h-auto w-auto p-1 rounded-md text-white">
            Learn More
          </button>
        </div>
      </div>
      <div>
        <Image
          src="/paidad.webp"
          alt="Sample Image"
          className="rounded-lg w-auto h-auto"
          height={250}
          width={250}
        />
      </div>
    </>
  );
};

export default ContentPaid;
