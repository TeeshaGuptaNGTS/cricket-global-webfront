"use client";

import React, { use, useEffect, useState } from "react";
import eventApi from "@/api/events.api";
import EventDetailsPage from "../_component/details";
import { getTokenLocal } from "@/utils/localStorage.util";
import { toast } from "react-toastify";
import { useParams, useSearchParams } from "next/navigation";
import ProductDetails from "./product";
import Model from "../_component/popupmodel";

export default function TicketPage() {
  const query = useSearchParams();
  const view = query.get("view");

  // ✅ All hooks here
  const [qty, setQty] = useState(1);
  const [option, setOption] = useState("");

  // ✅ Conditional UI here

  // ✅ If GET STARTED clicked → show only SoloMembership

  const [selectedEvent, setSelectedEvent] = useState({});
  // params.id will hold the dynamic value (e.g., "123")
  // const { eventId } = React.use(params);
  // console.log("params mil rhe:", params);

  const { eventId } = useParams();
  // const params = params: { eventId: "67301364f9d5d69c40be3fa5" }
  // const { eventId } = params;
  console.log("eventId mila:", eventId);
  console.log("eventId mila:", eventId);

  const getEventByID = async (id) => {
    try {
      console.log("id--------", id);
      const res = await eventApi.getEventById(id);
      if (res?.status.toLowerCase() != "success")
        return toast.success(
          res?.message || "Something went wrong, please try again later❌"
        );
      const currentEvent = res?.data;
      console.log("selectedEvent-----", res?.data);
      setSelectedEvent(currentEvent);
    } catch (error) {
      console.error("Error fetching event by ID:", error);
    }
  };

  useEffect(() => {
    // if (
    //   getTokenLocal() == null ||
    //   getTokenLocal() == "" ||
    //   getTokenLocal() == undefined
    // ) {
    //   toast("Please login to purchase ticket details.");
    //   window.location.href = "/login";
    //   return;
    // }
    getEventByID(eventId);
  }, [eventId]);

  return (
    <>
      <Model />
      {selectedEvent && <EventDetailsPage event={selectedEvent} />}

      {view === "product" ? <ProductDetails /> : ""}
    </>
  );
}
