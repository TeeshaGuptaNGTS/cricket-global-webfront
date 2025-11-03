import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const EventPage = () => {
  const events = [
    {
      date: "SAT",
      day: "4",
      title: "2026 IND vs ENG (M) T20 International",
      venue: "Old Trafford Cricket Ground",
      location:
        "Talbot Rd, Old Trafford, Stretford, Manchester, United Kingdom",
      description:
        "Join Cricket Lovers Global on 4 July 2026 for an unforgettable night of cricket as India Men face England Men in a thrilling T20 clash. This isn’t just about the match — it’s about the experience. Come with family and friends, cheer together in matching Cricket Lovers Global T-shirts, and be part of a united spirit.",
      price: "£998.00 – £999.00",
      ticketsLeft: "100 tickets left",
      link: "#",
      time: "July 4, 2026 @ 2:00 pm - 6:00 pm",
    },
    {
      date: "SAT",
      day: "11",
      title: "2026 IND vs ENG (M) T20 International",
      venue: "Utilita Bowl Cricket Ground",
      location:
        "Botley Rd, West End, Southampton, Hampshire, United Kingdom",
      description:
        "Join Cricket Lovers Global on 11 July 2026 for an unforgettable night of cricket as India Men face England Men in a thrilling T20 clash. This isn’t just about the match — it’s about the experience. Come with family and friends, cheer together in matching Cricket Lovers Global T-shirts, and be part of a united spirit.",
      price: "£998.00 – £999.00",
      ticketsLeft: "100 tickets left",
      link: "#",
      time: "July 11, 2026 @ 6:00 pm - 10:00 pm",
    },
  ];

  return (
    <section className="min-h-full bg-[#fafbff] text-[#111] px-4 md:px-24 py-12">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-gray-300 pb-2 mb-8">
        <h2 className="text-xl md:text-2xl font-medium">July 2026</h2>
        {/* <div className="flex items-center gap-2">
          <button className="p-2 rounded-full hover:bg-gray-100">
            <ChevronLeft size={22} />
          </button>
          <button className="p-2 rounded-full hover:bg-gray-100">
            <ChevronRight size={22} />
          </button>
        </div> */}
      </div>

      {/* Event List */}
      <div className="space-y-10">
        {events.map((event, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row gap-6 border-b border-gray-200 pb-8"
          >
            {/* Left: Date */}
            <div className="flex flex-col items-center md:w-[80px] text-gray-600">
              <p className="uppercase text-sm">{event.date}</p>
              <p className="text-3xl md:text-4xl font-semibold">{event.day}</p>
            </div>

             {/* Right: Event Info  */}
            <div className="flex-1">
              <p className="text-sm text-gray-500">{event.time}</p>
              <h3 className="text-lg md:text-xl font-semibold text-[#0A0A2A] mt-1">
                {event.title}
              </h3>
              <p className="text-sm font-semibold mt-2 text-gray-800">
                {event.venue}{" "}
                <span className="font-normal text-gray-600">
                  {event.location}
                </span>
              </p>
              <p className="text-sm text-gray-600 mt-3 leading-relaxed">
                {event.description}
              </p>

              {/* Ticket Info */}
              <div className="flex items-center gap-3 mt-4">
                <a
                  href={event.link}
                  className="text-blue-600 font-semibold text-sm hover:underline"
                >
                  Get Tickets
                </a>
                <span className="text-sm text-gray-600">{event.price}</span>
                <span className="text-xs text-gray-500">
                  {event.ticketsLeft}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EventPage;
