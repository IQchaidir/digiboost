import Image from "next/image";
import { RiThumbUpLine } from "react-icons/ri";
import { FaStar } from "react-icons/fa";

const MainTestimoni = () => {
  const testimonials = [
    {
      id: 1,
      content:
        "Real estate demands a strong online presence, and [Company Name] delivered exactly that. Their digital marketing efforts attracted more leads, and their strategic approach helped me close deals efficiently. Great team!",
      author: "John Doe",
      profession: " Real Estate Agent",
    },
    {
      id: 2,
      content:
        "Working with [Company Name] was a game-changer for my small business. Their digital marketing strategies brought in more customers, and their creative approach made our brand stand out. Truly impressed!",
      author: "Sarah Williams",
      profession: "Small Business Owner",
    },
    {
      id: 3,
      content:
        "In the competitive world of e-commerce, [Company Name] stood out. Their tailored digital solutions boosted our online presence, increased sales, and gave us a clear edge. Highly recommended!",
      author: "Alex Rodriguez",
      profession: "E-commerce Entrepreneur",
    },
  ];

  return (
    <div className="pt-10 px-6 mx-auto block  pb-9  sm:px-16 lg:px-32">
      <section className="text-black p-6">
        <div className="flex flex-col mb-6">
          <h2 className=" flex text-xl lg:text-3xl sm:text-xl font-bold ">
            Our Client Testimony
            <span>
              <RiThumbUpLine className="ml-2 w-7 h-7 lg:w-10 lg:h-10" />
            </span>
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="border h-[330px]  rounded-sm p-4 lg:h-[200px] sm:h-[330px] relative transform hover:scale-105 transition-transform duration-200 hover:shadow-sm"
            >
              <p className="mb-4">{testimonial.content}</p>
              <div className="absolute bottom-4 left-4 flex items-center">
                <Image
                  src="/profil.webp"
                  alt="profil"
                  className="h-auto w-auto rounded-full mr-2"
                  width={40}
                  height={40}
                />
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm">{testimonial.profession}</p>
                </div>
              </div>
              <div className="flex justify-end mt-2">
                <FaStar className="w-5 h-5 text-yellow-400" />
                <FaStar className="w-5 h-5 text-yellow-400" />
                <FaStar className="w-5 h-5 text-yellow-400" />
                <FaStar className="w-5 h-5 text-yellow-400" />
                <FaStar className="w-5 h-5 text-yellow-400" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default MainTestimoni;
