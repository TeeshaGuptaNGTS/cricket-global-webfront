// import React from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// const EventPage = () => {
//   const events = [
//     {
//       date: "SAT",
//       day: "4",
//       title: "2026 IND vs ENG (M) T20 International",
//       venue: "Old Trafford Cricket Ground",
//       location:
//         "Talbot Rd, Old Trafford, Stretford, Manchester, United Kingdom",
//       description:
//         "Join Cricket Lovers Global on 4 July 2026 for an unforgettable night of cricket as India Men face England Men in a thrilling T20 clash. This isn’t just about the match — it’s about the experience. Come with family and friends, cheer together in matching Cricket Lovers Global T-shirts, and be part of a united spirit.",
//       price: "£998.00 – £999.00",
//       ticketsLeft: "100 tickets left",
//       link: "#",
//       time: "July 4, 2026 @ 2:00 pm - 6:00 pm",
//     },
//     {
//       date: "SAT",
//       day: "11",
//       title: "2026 IND vs ENG (M) T20 International",
//       venue: "Utilita Bowl Cricket Ground",
//       location:
//         "Botley Rd, West End, Southampton, Hampshire, United Kingdom",
//       description:
//         "Join Cricket Lovers Global on 11 July 2026 for an unforgettable night of cricket as India Men face England Men in a thrilling T20 clash. This isn’t just about the match — it’s about the experience. Come with family and friends, cheer together in matching Cricket Lovers Global T-shirts, and be part of a united spirit.",
//       price: "£998.00 – £999.00",
//       ticketsLeft: "100 tickets left",
//       link: "#",
//       time: "July 11, 2026 @ 6:00 pm - 10:00 pm",
//     },
//   ];

//   return (
//     <section className="min-h-full bg-[#fafbff] text-[#111] px-4 md:px-24 py-12">
//       {/* Header */}
//       <div className="flex items-center justify-between border-b border-gray-300 pb-2 mb-8">
//         <h2 className="text-xl md:text-2xl font-medium">July 2026</h2>
//         {/* <div className="flex items-center gap-2">
//           <button className="p-2 rounded-full hover:bg-gray-100">
//             <ChevronLeft size={22} />
//           </button>
//           <button className="p-2 rounded-full hover:bg-gray-100">
//             <ChevronRight size={22} />
//           </button>
//         </div> */}
//       </div>

//       {/* Event List */}
//       <div className="space-y-10">
//         {events.map((event, index) => (
//           <div
//             key={index}
//             className="flex flex-col md:flex-row gap-6 border-b border-gray-200 pb-8"
//           >
//             {/* Left: Date */}
//             <div className="flex flex-col items-center md:w-[80px] text-gray-600">
//               <p className="uppercase text-sm">{event.date}</p>
//               <p className="text-3xl md:text-4xl font-semibold">{event.day}</p>
//             </div>

//              {/* Right: Event Info  */}
//             <div className="flex-1">
//               <p className="text-sm text-gray-500">{event.time}</p>
//               <h3 className="text-lg md:text-xl font-semibold text-[#0A0A2A] mt-1">
//                 {event.title}
//               </h3>
//               <p className="text-sm font-semibold mt-2 text-gray-800">
//                 {event.venue}{" "}
//                 <span className="font-normal text-gray-600">
//                   {event.location}
//                 </span>
//               </p>
//               <p className="text-sm text-gray-600 mt-3 leading-relaxed">
//                 {event.description}
//               </p>

//               {/* Ticket Info */}
//               <div className="flex items-center gap-3 mt-4">
//                 <a
//                   href={event.link}
//                   className="text-blue-600 font-semibold text-sm hover:underline"
//                 >
//                   Get Tickets
//                 </a>
//                 <span className="text-sm text-gray-600">{event.price}</span>
//                 <span className="text-xs text-gray-500">
//                   {event.ticketsLeft}
//                 </span>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default EventPage;


"use client";
import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Search, CalendarDays } from "lucide-react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import eventApi from "@/api/events.api";

const EventList = () => {
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [filterType, setFilterType] = useState("all");
  const [searchText, setSearchText] = useState("");
  const [page, setpage] = useState(1);
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);

  function formatDate(dateString) {
  const date = new Date(dateString);

  const day = date.toLocaleDateString("en-US", { weekday: "short" }); // Mon
  const dayNumber = date.getDate(); // 2
  const monthYear = date.toLocaleDateString("en-US", { month: "short", year: "numeric" }); // Nov 2026

  return {
    dayNumber,
    day,
    monthYear,
  };
}

function formatEventTime(startStr, endStr) {
  const start = new Date(startStr);
  const end = new Date(endStr);


  const date = start.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric"
  });

  const startTime = start.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric"
  });

  const endTime = end.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric"
  });

  return `${date} @ ${startTime.toLowerCase()} - ${endTime.toLowerCase()}`;
}

useEffect(() => {
  fetchEvents();
}, []); 

const fetchEvents= async (searchValue = "")=>{
  try {
    if(searchValue==""){
      console.log("searchValue is empty so set searchText",searchText)
      searchValue=searchText
    }
    const res = await eventApi.getAllEvents({ page: page, limit: 10, search: searchValue});
    

    if (res?.status.toLowerCase() != "success") return alert(res?.message || "Something went wrong, please try again later❌");
    const currentEvent=res.data
    
    for(let i=0 ;i<currentEvent.length;i++){
      const formatedDate= formatDate(currentEvent[i].startDate)
      currentEvent[i].day=formatedDate.day
      currentEvent[i].date=formatedDate.dayNumber
      currentEvent[i].monthYear=formatedDate.monthYear
      currentEvent[i].dateTime=formatEventTime(currentEvent[i].startDate, currentEvent[i].endDate)
    }
    setEvents(currentEvent)
    applyFilters(currentEvent)
  } catch(error) {
    console.log("Error fetching events:", error);
        alert("Something went wrong ❌");
  }
}

const applyFilters = (eventsList, ftype) => {
  if (!eventsList || eventsList.length === 0) {
    eventsList = events;
  }
  let updatedEvents = [...eventsList];
  ftype = ftype || filterType;
  //filter by type
  if (ftype === "free") {
    updatedEvents = updatedEvents.filter(event => event.eventType.toLowerCase() !== "paid");
  } else if (ftype === "paid") {
    updatedEvents = updatedEvents.filter(event => event.eventType.toLowerCase() === "paid");
  }
  setFilteredEvents(updatedEvents);
}
const handleSearch = (e) => {
  const value = e.target.value;
  setSearchText(value);
  fetchEvents(value); 
};

  // Handle Filter Change
  const handleFilterChange = (value) => {
    setFilterType(value);

    // API call yaha lagega ✅
    console.log("Selected Filter:", value);
    applyFilters(null, value);
    

  };

  return (
    <section className="min-h-full bg-white px-4 md:px-16 py-10 text-gray-800 relative">
      
      {/* Search */}
      <div className="flex flex-col md:flex-row items-center justify-between border border-gray-300 rounded-lg shadow-sm py-3 px-4 gap-4">
        <div className="flex items-center w-full md:w-2/3 border border-gray-300 rounded-lg px-3 py-2">
          <Search className="text-gray-400 mr-2" size={18} />
          <input 

            type="text"
            value={searchText}
            onChange={handleSearch}
            placeholder="Search for events"
            className="w-full outline-none text-sm md:text-base"
          />
        </div>
        <button className="bg-[#551FFF] text-white px-5 py-2 rounded-md text-sm md:text-base hover:bg-[#4513e0] transition cursor-pointer"
        onClick={() => {fetchEvents("")}}>
          Find Events
        </button>
      </div>

      {/* Filter & Calendar */}
      <div className="flex items-center justify-between mt-6 border-b border-gray-300 pb-2 relative">
        <div className="flex items-center gap-4">
          <button className="p-2 rounded-full hover:bg-gray-100">
            <ChevronLeft size={20} />
          </button>
          <button className="p-2 rounded-full hover:bg-gray-100">
            <ChevronRight size={20} />
          </button>

          {/* ✅ Filter Dropdown */}
          <select
            className="border px-3 py-1 rounded-md text-sm hover:bg-gray-100 cursor-pointer"
            value={filterType}
            onChange={(e) => handleFilterChange(e.target.value)}
          >
            <option value="all">All Entry</option>
            <option value="free">Free Entry</option>
            <option value="paid">Paid Entry</option>
          </select>
        </div>

        <div
          className="flex items-center gap-2 cursor-pointer relative"
          onClick={() => setShowCalendar(!showCalendar)}
        >
          <h2 className="text-xl md:text-2xl font-semibold">Upcoming</h2>
          <CalendarDays size={20} className="text-gray-600" />
          <span className="text-gray-500 text-lg">{showCalendar ? "▴" : "▾"}</span>

          {showCalendar && (
            <div className="absolute top-10 right-0 bg-white border border-gray-200 rounded-lg shadow-lg z-50 p-2">
              <Calendar
                onChange={setSelectedDate}
                value={selectedDate}
                className="rounded-lg"
              />
            </div>
          )}
        </div>
      </div>

      {/* Event List */}
      <div className="mt-5 border-t border-gray-200 pt-4">
        {filteredEvents.map((event) => (
          <div key={event._id} className="mb-10 border-b border-gray-200 pb-6">
            <p className="text-gray-500 text-sm md:text-base mb-4">{event.monthYear}</p>

            <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10">
              <div className="flex flex-col items-center w-20">
                <p className="uppercase text-xs text-gray-500">{event.day}</p>
                <h3 className="text-3xl font-bold text-gray-800">{event.date}</h3>
              </div>

              <div className="flex-1">
                <p className="text-sm text-gray-500">{event.dateTime}</p>
                <a href={event.ticketsLink} className="text-lg md:text-2xl font-semibold mt-2 mb-4 text-gray-900 hover:underline">
                  {event.title}
                </a>
                <p className="text-sm md:text-base text-gray-700 mt-3">
                  <strong>{event.venue.split("—")[0]}</strong> — {event.venue.split("—")[1]}
                </p>
                <p className="text-sm md:text-base text-gray-600 mt-2 leading-relaxed tracking-normal">{event.description}</p>

                <a href={`/ticketdetails/${event._id}`} className="inline-block mt-3 text-blue-600 font-medium hover:underline">
                  Get Tickets
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EventList;
