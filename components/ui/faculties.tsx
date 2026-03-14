import Image from "next/image";

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
    <section className="bg-[#F5F7FA] py-6 md:py-20 px-2.5">
      <div className="max-w-7xl mx-auto">
        {/* title */}
        <div className="text-center mb-6 md:mb-16">
          <h2 className="text-2xl md:text-5xl font-semibold">
            Our University Faculties
          </h2>
          <p className=" text-sm md:text-lg mt-2.5 md:mt-5 max-w-2xl mx-auto">
            Our university offers diverse academic faculties delivering
            specialized programs with strong academic foundations and real-world
            learning..
          </p>
        </div>

        {/* cards */}
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-2.5 md:gap-5 items-start">
          {faculties.map((item, index) => (
            <div
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
