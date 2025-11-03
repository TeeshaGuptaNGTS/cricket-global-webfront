"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import authInstance from "@/api/auth/auth.api";
import { getTokenLocal } from "@/utils/localStorage.util";

const EventHistory = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const token = getTokenLocal();

  useEffect(() => {
    const fetchEventHistory = async () => {
      try {
        setLoading(true);
        const res = await authInstance.getEventHistory();
        console.log("Event history response:", res);

        if (res?.data) {
          setEvents(res.data);
        } else {
          setEvents([]);
        }
      } catch (err) {
        console.error("Error fetching event history:", err);
        setError("Failed to load event history.");
      } finally {
        setLoading(false);
      }
    };

    fetchEventHistory();
  }, [token]);

  if (loading)
    return (
      <div className="min-h-screen flex justify-center items-center text-gray-600">
        Loading your event history...
      </div>
    );

  if (error)
    return (
      <div className="min-h-screen flex justify-center items-center text-red-500">
        {error}
      </div>
    );

  if (!events.length)
    return (
      <div className="min-h-screen flex justify-center items-center text-gray-500">
        No event history found.
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6">
      <h2 className="text-2xl font-bold text-[#001B5E] mb-8 text-center">
        My Event History
      </h2>

      <div className="max-w-5xl mx-auto space-y-6">
        {events.map((item) => (
          <div
            key={item._id}
            className="bg-white shadow-md rounded-2xl overflow-hidden border border-gray-200 hover:shadow-lg transition"
          >
            {/* Event Banner */}
            <div className="relative h-56 w-full">
              <Image
                src={item?.event?.bannerImage}
                alt={item?.event?.title}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute top-0 left-0 bg-black/50 text-white px-4 py-1 rounded-br-xl text-sm">
                {item.event.category}
              </div>
            </div>

            {/* Event Info */}
            <div className="p-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                <h3 className="text-xl font-semibold text-gray-800">
                  {item.event.title}
                </h3>
                <span
                  className={`px-3 py-1 text-sm font-medium rounded-full ${
                    item.payment.status === "paid"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {item.payment.status.toUpperCase()}
                </span>
              </div>

              <p className="text-gray-600 mt-2">{item.event.venue}</p>
              <p className="text-sm text-gray-500 mt-1">
                {new Date(item.event.startDate).toLocaleString()} –{" "}
                {new Date(item.event.endDate).toLocaleString()}
              </p>

              {/* Ticket Info */}
              <div className="mt-5 border-t border-gray-200 pt-4">
                <h4 className="text-lg font-medium text-gray-800 mb-2">
                  Ticket Details
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm">
                  <p>
                    <span className="font-semibold">Type:</span>{" "}
                    {item.ticket.type}
                  </p>
                  <p>
                    <span className="font-semibold">Quantity:</span>{" "}
                    {item.ticket.quantity}
                  </p>
                  <p>
                    <span className="font-semibold">Unit Price:</span> ₹
                    {item.ticket.unitPrice}
                  </p>
                  <p>
                    <span className="font-semibold">Total Ticket Price:</span> ₹
                    {item.payment.totalTicketPrice}
                  </p>
                  <p>
                    <span className="font-semibold">Product Add-ons:</span> ₹
                    {item.payment.totalProductPrice}
                  </p>
                  <p>
                    <span className="font-semibold">Grand Total:</span> ₹
                    {item.payment.totalAmount}
                  </p>
                </div>
              </div>

              {/* Product Info */}
              {item.product && (
                <div className="mt-5 border-t border-gray-200 pt-4">
                  <h4 className="text-lg font-medium text-gray-800 mb-2">
                    Product Add-ons
                  </h4>
                  <div className="flex items-center gap-4">
                    <div className="relative w-20 h-20 rounded-md overflow-hidden">
                      <Image
                        src={item.product.coverImage}
                        alt={item.product.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="text-sm">
                      <p className="font-semibold text-gray-700">
                        {item.product.name}
                      </p>
                      <p className="text-gray-500">
                        ₹{item.product.unitPrice} × {item.product.quantity} = ₹
                        {item.product.total}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Purchase Info */}
              <div className="mt-5 border-t border-gray-200 pt-4 text-sm text-gray-600">
                <p>
                  <span className="font-semibold">Purchased On:</span>{" "}
                  {new Date(item.createdAt).toLocaleString()}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventHistory;
