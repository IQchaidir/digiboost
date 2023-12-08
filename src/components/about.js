/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

export default function About() {
  return (
    <>
      <div className="pt-36">
        <div
          className="flex pt-15 justify-center px-36 gap-20
      "
        >
          <div>
            <Image
              src="/aboutmain.webp"
              alt="about img"
              width={500}
              height={500}
              className="w-auto h-auto"
            />
          </div>
          <div className=" lg:text-left lg:w-1/2 pt-16">
            <p className="text-lg text-red-400">ABOUT US</p>
            <h1 className="text-4xl lg:text-6xl font-bold pt-4">
              Who Is DigiMedia Agency
            </h1>
            <p className="text-lg lg:text-2xl pt-6 ">
              Welcome to [Company Name], the creative solution for your
              marketing and business development needs. As an innovative Digital
              Media Agency, we have a mission to deliver extraordinary marketing
              experiences and exceptional results for our clients.
            </p>
          </div>
        </div>
        <div className="flex pt-32 justify-center px-36 gap-20">
          <div className=" lg:text-left lg:w-1/2">
            <h1 className="text-4xl lg:text-6xl font-bold pt-5">
              Where It All Started
            </h1>
            <p className="text-lg lg:text-2xl pt-6 ">
              "In 2017, a visionary named Yuki Tauman embarked on a bold journey
              to establish [Company Name], a digital media agency focused on
              providing creative and innovative solutions to meet the needs of
              esteemed clients."
            </p>
          </div>
          <div>
            <Image
              src="/aboutmain.webp"
              alt="about img"
              width={500}
              height={500}
              className="w-auto h-auto"
            />
          </div>
        </div>
      </div>
    </>
  );
}
