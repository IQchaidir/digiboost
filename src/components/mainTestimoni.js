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
    {
      id: 4,
      content:
        "As a healthcare consultant, I needed a digital agency that understood my industry. [Company Name] not only understood but delivered targeted marketing that significantly expanded my reach. Fantastic results!",
      author: "Dr. Emily Thompson",
      profession: " Healthcare Consultant",
    },
    {
      id: 5,
      content:
        "Launching a tech startup is challenging, but [Company Name] made it smoother. Their innovative digital strategies and dynamic team played a pivotal role in establishing our brand. Couldn't be happier!",
      author: " David Lee",
      profession: " Tech Startup Founder",
    },
    {
      id: 6,
      content:
        "[Company Name] brings a fresh perspective to digital marketing. Their team is not just knowledgeable but also collaborative. Our campaigns have seen a remarkable improvement, and their insights are invaluable.",
      author: "Jessica Martinez",
      profession: "Marketing Manager",
    },
  ];

  return (
    <>
      <div className=" pt-10 px-40 mx-auto block items-center pb-9">
        <section className="text-black  p-6">
          <div className="flex gap-4 items-center mb-6 ">
            <h2 className="text-3xl font-bold text-left">
              Our Client Testimony
            </h2>
            <RiThumbUpLine className="w-10 h-10" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="border rounded-md p-4 min-h-[250px] relative transform hover:scale-105 transition-transform duration-200 hover:shadow-md"
              >
                <p className="mb-4">{testimonial.content}</p>
                <div className="absolute bottom-4 left-4 flex">
                  <Image
                    src="/profil.jpeg"
                    alt="profil"
                    className="rounded-full mr-2"
                    width={40}
                    height={40}
                  />
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm">{testimonial.profession}</p>
                  </div>
                </div>
                <div className="flex">
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
    </>
  );
};

export default MainTestimoni;
