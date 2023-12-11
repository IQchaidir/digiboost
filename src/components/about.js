/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

export default function About() {
  return (
    <div className="pt-36">
      <div className="mb-16">
        <div className="flex flex-col items-center text-4xl md:text-5xl pt-5 md:pt-10 pb-10 mx-2 sm:mx-6 xl:mx-28 lg:mx-16">
          <h1>-ABOUT US-</h1>
        </div>
        <div className=" pt-1 flex flex-col lg:flex-row mx-2 sm:mx-6 xl:mx-28 lg:mx-16 md:mx-10 gap-10">
          <div className="text-center w-full ">
            <h1 className="text-3xl text-black xl:text-5xl lg:text-3xl md:text-3xl font-bold pt-4">
              Who Is Digiboost Agency
            </h1>
            <p className="text-xl xl:text-2xl lg:text-xl pt-6 text-black">
              Welcome to DigiBoost, your ultimate destination for innovative
              solutions to meet all your marketing and business development
              needs. At DigiBoost, we don't just provide services; we craft
              experiences that leave a lasting impact. As a forward-thinking
              Digital Media Agency, we are on a mission to redefine the
              standards of excellence in the digital realm, delivering not just
              ordinary but extraordinary marketing experiences coupled with
              exceptional results for our esteemed clients.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
