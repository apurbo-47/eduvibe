import * as motion from "framer-motion/client";
import Image from "next/image";
import { animations } from "../animations/animation";

const faculties = [
  {
    id: 1,
    title: "Faculty of Business",
    img: "/images/business.png",
    desc: "Focused on innovation and technology, this faculty prepares students with practical skills and engineering expertise for a rapidly evolving world",
  },
  {
    id: 2,
    title: "Faculty of Engineer",
    img: "/images/engineering.png",
    desc: "Focused on innovation and technology, this faculty prepares students with practical skills and engineering expertise for a rapidly evolving world",
  },
  {
    id: 3,
    title: "Faculty of Science",
    img: "/images/science.png",
    desc: "Focused on innovation and technology, this faculty prepares students with practical skills and engineering expertise for a rapidly evolving world",
  },
  {
    id: 4,
    title: "Faculty of Arts",
    img: "/images/arts1.png",
    desc: "Focused on innovation and technology, this faculty prepares students with practical skills and engineering expertise for a rapidly evolving world",
  },
  {
    id: 5,
    title: "Faculty of Health",
    img: "/images/health1.png",
    desc: "Focused on innovation and technology, this faculty prepares students with practical skills and engineering expertise for a rapidly evolving world",
  },
  {
    id: 6,
    title: "Faculty of Computer",
    img: "/images/computer.png",
    desc: "Focused on innovation and technology, this faculty prepares students with practical skills and engineering expertise for a rapidly evolving world",
  },
];

export default function Faculties() {
  return (
    <motion.section className="max-w-330 mx-auto rounded-xl bg-[#F5F7FA] py-6 md:py-20 px-2.5">
      <div className="">
        {/* title */}
        <motion.div
          variants={animations.stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-6 md:mb-16"
        >
          <motion.h2
            variants={animations.fadeUp}
            className="text-2xl md:text-5xl font-semibold"
          >
            Our University Faculties
          </motion.h2>
          <motion.p
            variants={animations.fadeUp}
            className=" text-sm md:text-lg mt-2.5 md:mt-5 max-w-2xl mx-auto"
          >
            Our university offers diverse academic faculties delivering
            specialized programs with strong academic foundations and real-world
            learning..
          </motion.p>
        </motion.div>

        {/* cards */}
        <motion.div
          variants={animations.fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-2 lg:grid-cols-6 gap-2.5 md:gap-5 items-start"
        >
          {faculties.map((item, index) => (
            <motion.div
              key={item.id}
              className={`bg-white rounded-2xl p-2.5 md:p-5 shadow-sm text-center transition hover:shadow-md
              
              ${index % 2 !== 0 ? "lg:mt-24" : "lg:mt-0"}
              
              `}
            >
              <h3 className=" text-sm md:text-base font-bold mb-2.5 md:mb-5">
                {item.title}
              </h3>
              <div className="flex justify-center mb-2.5 md:mb-5">
                <Image
                  src={item.img}
                  alt={item.title}
                  width={500}
                  height={140}
                  className="w-full  h-20 md:h-40 object-contain "
                />
              </div>
              <p className="text-xs md:text-sm text-[#4C4C4C]">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
