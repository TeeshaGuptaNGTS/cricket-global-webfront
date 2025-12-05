"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import authInstance from "@/api/auth/auth.api";

export default function EventHistory() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      const res = await authInstance.getEventHistory();
      setEvents(res?.data || []);
      setLoading(false);
    };
    load();
  }, []);

  if (loading)
    return (
      <div className="min-h-screen flex justify-center items-center text-white">
        Loading event history...
      </div>
    );
  console.log("Fetched event history:", events);

  return (
    <div className="min-h-screen bg-white py-10 px-5">
      <h2 className="text-3xl font-bold text-center text-[#22366e] drop-shadow-md mb-10">
        My Event History
      </h2>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((item) => (
          <div
            key={item._id}
            className="relative bg-[#243b80] rounded-2xl shadow-xl border border-[#1E2A55] overflow-hidden 
                 transform hover:scale-[1.02] transition duration-300
                 hover:shadow-[0_0_35px_#00E67655]"
          >

            {/* TICKET CUT DESIGN */}
            {/* <div className="absolute left-0 top-1/2 -translate-y-1/2 w-6 h-6 bg-[#0A1128] rounded-full shadow-inner"></div>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-6 h-6 bg-[#0A1128] rounded-full shadow-inner"></div> */}

            {/* STADIUM SPOTLIGHT EFFECT */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-0 left-1/4 w-40 h-40 bg-gradient-to-b from-blue-300/20 to-transparent blur-2xl rotate-45"></div>
              <div className="absolute top-0 right-1/4 w-40 h-40 bg-gradient-to-b from-blue-300/20 to-transparent blur-2xl -rotate-45"></div>
            </div>

            {/* Banner Section */}
            <div className="relative h-40 sm:h-48 w-full overflow-hidden">

              {/* {console.log("banner image-----",item.event.bannerImage)}; */}

              <img

                src={item.event.bannerImage}

                alt="Event"
                fill
                className="object-cover opacity-90 transition-all duration-500 hover:scale-105"
              />

              {/* CATEGORY BADGE — GLOW */}
              <span className="absolute top-4 left-4 px-4 py-1 rounded-full text-xs font-bold 
                    bg-[#00E676] text-black shadow-[0_0_10px_#00E676]">
                {item?.event?.category}
              </span>

              {/* STATUS BADGE — GLOW */}
              <span
                className={`absolute top-4 right-4 px-4 py-1 rounded-full text-xs font-bold shadow-lg
                 ${item.payment.status === "paid"
                    ? "bg-[#00E676] text-black shadow-[0_0_12px_#00E676]"
                    : "bg-red-500 text-white shadow-[0_0_10px_red]"
                  }`}
              >
                {item.payment.status.toUpperCase()}
              </span>

              {/* DARK GRADIENT --> FOR TEXT READABILITY */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F1A3C] via-transparent to-transparent"></div>
            </div>

            {/* Content Section */}
            <div className="p-4 text-gray-200 space-y-4
">

              {/* Title + Venue */}
              <div>
                <h3 className="text-2xl font-extrabold text-white drop-shadow-[0_0_5px_#00E676]">
                  {item.event.title}
                </h3>
                <p className="text-gray-300 mt-1">{item.event.venue}</p>
                <p className="text-gray-300 text-sm">
                  {new Date(item.event.startDate).toLocaleString()} –{" "}
                  {new Date(item.event.endDate).toLocaleString()}
                </p>
              </div>
              <div className="border-t border-[#1E2A55] pt-4">
                <h4 className="text-lg font-semibold text-[#00E676] mb-3 drop-shadow-[0_0_6px_#00E676aa]">
                  Ticket Details
                </h4>

                <div className="space-y-3">
                  {item?.tickets?.length > 0 ? (
                    item.tickets.map((ticket, idx) => (
                      <div
                        key={idx}
                        className={`grid grid-cols-2 md:${item?.payment?.eventType !== "free"?"grid-cols-4":"grid-cols-3"} gap-2 bg-[#1b2b60] px-3 py-2 rounded-lg text-sm text-gray-200`}
                      >
                        <p>
                          <span className="capitalize font-semibold text-white"> {ticket.type}     Ticket</span>{" "}
                       
                        </p>
                        <p className="flex">
                          <span className="font-semibold text-white">Qty: {ticket.quantity}</span>{" "}
                          
                        </p>
                        {item?.payment?.eventType !== "free" ? (
                          <>
                            <p>
                              <span className="font-semibold text-white">Unit Price:   ₹ {ticket.unitPrice}</span>{" "}
                            
                            </p>
                            <p>
                              <span className="font-semibold text-white">Total:</span>{" "}
                              ₹ {ticket.total}
                            </p>
                          </>
                        ):(
                           <p>
                              <span className="font-semibold text-white">Free</span>{" "}
                            
                            </p>
                        )}
                      </div>
                    ))
                  ) : (
                    <p className="text-gray-400 text-sm">No tickets found.</p>
                  )}
                </div>

                {/* Totals Summary */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-5 text-sm">
                  <p>
                    <span className="font-semibold text-white">Tickets Total:</span>{" "}
                    ₹{item.payment.totalTicketPrice}
                  </p>
                  <p>
                    <span className="font-semibold text-white">Add-ons:</span>{" "}
                    ₹{item.payment.totalProductPrice}
                  </p>
                  <p>
                    <span className="font-semibold text-white">Grand Total:</span>{" "}
                    ₹{item.payment.totalAmount}
                  </p>
                </div>
              </div>

              {/* Ticket Info */}
              {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-sm">

                <h4 className="text-lg font-semibold text-[#00E676] mb-2 drop-shadow-[0_0_6px_#00E676aa]">
                  Ticket Details
                </h4>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
                  <p><span className="font-semibold text-white">Type:</span> {item?.event?.category}</p>
                  <p><span className="font-semibold text-white">Qty:</span> {item?.tickets?.reduce((sum, value) => sum + value, 0)}</p>
                  {
                    item?.payment?.eventtype == "free" ? null :
                      <p><span className="font-semibold text-white">Unit Price:</span> {item?.ticket?.unitPrice}</p>
                  }

                  <p><span className="font-semibold text-white">Ticket Total:</span> {item.payment.totalTicketPrice}</p>
                  <p><span className="font-semibold text-white">Add-ons:</span> {item.payment.totalProductPrice}</p>
                  <p><span className="font-semibold text-white">Grand Total:</span> {item.payment.totalAmount}</p>
                </div>
              </div> */}

              {/* Product Add-ons */}
              {item.product && (
                <div className="border-t border-[#1E2A55] pt-4">
                  <h4 className="text-lg font-semibold text-[#00E676] mb-3 drop-shadow-[0_0_6px_#00E676]">
                    Product Add-ons
                  </h4>

                  <div className="flex items-center gap-6">
                    <div className="relative w-20 h-20 rounded-lg overflow-hidden shadow-[0_0_12px_#00E67688] border border-[#00E676]">
                      <Image
                        src={item.product.coverImage}
                        alt="Product"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="text-sm">
                      <p className="text-white font-semibold">{item.product.name}</p>
                      <p className="text-gray-400">
                        ₹{item.product.unitPrice} × {item.product.quantity} = ₹
                        {item.product.total}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Footer */}
              <div className="border-t border-[#1E2A55] pt-4 text-sm text-gray-400">
                Purchased On:
                <span className="text-white">
                  {new Date(item.createdAt).toLocaleString()}
                </span>
              </div>
            </div>
          </div>

        ))}
      </div>
    </div>
  );
}
