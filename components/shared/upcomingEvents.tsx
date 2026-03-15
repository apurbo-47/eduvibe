"use client";

import { useState } from "react";
import Image from "next/image";

const initialEvents = [
  {
    id: 1,
    img: "/images/news6.png",
    location: "⏱ New York, US",
    time: "⏱ 10:00 am - 4:00 pm",
    title: "Campus Orientation",
    date: "02 Jan 2026",
  },
  {
    id: 2,
    img: "/images/news2.png",
    location: "⏱ Berlin, DE",
    time: "⏱ 11:00 am - 5:00 pm",
    title: "Workshop Activities",
    date: "06 Jan 2026",
  },
  {
    id: 3,
    img: "/images/event.png",
    location: "⏱ London, US",
    time: "⏱ 8.00 am - 6.00 pm",
    title: "Week long Welcoming New Students, Including Tours",
    date: "10 Jan 2026",
  },
  {
    id: 4,
    img: "/images/arts.png",
    location: "⏱ Paris, FR",
    time: "⏱ 2:00 pm - 7:00 pm",
    title: "Art Class Exhibition",
    date: "15 Jan 2026",
  },
  {
    id: 5,
    img: "/images/news3.png",
    location: "⏱ Rome, IT",
    time: "⏱ 1:00 pm - 5:00 pm",
    title: "Leadership Seminar",
    date: "18 Jan 2026",
  },
];

export default function UpcomingEvents() {
  const [events, setEvents] = useState(initialEvents);

  const next = () => {
    const first = events[0];
    const rest = events.slice(1);
    setEvents([...rest, first]);
  };

  const prev = () => {
    const last = events[events.length - 1];
    const rest = events.slice(0, events.length - 1);
    setEvents([last, ...rest]);
  };

  const activeEvent = events[2]; // center card

  return (
    <section className="max-w-330 mx-auto relative py-6 md:py-20 overflow-hidden  ">
      {/* Background Decorative Elements */}
      <div className="absolute top-7 -left-2 lg:top-40 lg:left-0 ">
        <Image
          src="/images/b.png"
          alt="books"
          width={100}
          height={100}
          className="w-16 h-16 md:w-32 md:h-32 object-contain opacity-70"
        />
      </div>
      <div className="absolute top-5 right-0 md:top-20 md:right-30 rotate-23 ">
        <Image
          src="/images/cap.png"
          alt="graduation cap"
          width={100}
          height={100}
          className="w-16 h-16 md:w-28 md:h-28 object-contain opacity-70"
        />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-10 md:mb-16 m-3 ">
          <h2 className="text-2xl md:text-4xl font-bold">
            {" "}
            <span className="relative inline-block">
              Upcoming Events
              <span>
                <Image
                  src="/Line1547.svg"
                  alt="line"
                  width={300}
                  height={5}
                  className="w-48 md:w-75"
                />
              </span>
            </span>
          </h2>
          <p className="text-center text-sm md:text-lg mt-3 max-w-2xl mx-auto">
            Explore upcoming academic, cultural, and campus events at our
            university. Stay connected with seminars, workshops, and activities
            designed to enrich student life.
          </p>
        </div>

        {/* Cards */}
        <div className="relative flex items-center justify-center">
          <button
            onClick={prev}
            className="absolute left-0 z-10 bg-[#7A60FF] text-white cursor-pointer shadow w-10 h-10 rounded-full"
          >
            ←
          </button>

          <div className="flex items-center gap-6">
            {events.map((event, i) => {
              const isCenter = i === 2;

              return (
                <div
                  key={event.id}
                  className={`
                  ${isCenter ? "w-[320px] scale-100" : "w-45 scale-90 "}
                  `}
                >
                  <div className="relative h-65 overflow-hidden">
                    <Image
                      src={event.img}
                      alt="image"
                      fill
                      className="object-cover rounded-xl md:rounded-2xl"
                    />
                  </div>

                  {isCenter && (
                    <div className="bg-white p-4 shadow ">
                      <div className="flex justify-between md:text-base text-sm mb-2 md:mb-4">
                        <p>{event.location}</p>
                        <p>{event.time}</p>
                      </div>
                      <h3 className="font-semibold">{event.title}</h3>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <button
            onClick={next}
            className="absolute right-0 z-10 bg-[#7A60FF] text-white cursor-pointer shadow w-10 h-10 rounded-full"
          >
            →
          </button>
        </div>

        {/* Timeline */}
        <div className="flex justify-center items-center gap-5 md:gap-10 mt-8 md:mt-12">
          {events.map((event, i) => {
            const isActive = i === 2;

            return (
              <div key={event.id} className="flex flex-col items-center">
                <div
                  className={`w-4 h-4 rounded-full
                  ${isActive ? "bg-[#7A60FF] scale-125" : "bg-gray-300"}
                  `}
                />

                <span
                  className={`text-xs md:text-sm text-center mt-2
                  ${isActive ? "text-white font-semibold" : "text-[#7A60FF]"}
                  `}
                >
                  {event.date}
                </span>
              </div>
            );
          })}
        </div>

        {/* Center Date */}
        <div className="text-center">
          <span className="px-4 py-2 bg-[#7A60FF] text-white rounded-full text-sm">
            {activeEvent.date}
          </span>
        </div>
      </div>
    </section>
  );
}
