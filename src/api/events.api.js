import { Search } from "lucide-react";
import HttpClient from "./index.api";  // adjust path if needed


const baseURL = process.env.NEXT_PUBLIC_API_URL;

class EventApi extends HttpClient {
  constructor() {
    super(baseURL);
  }

  // ✅ Get all events with filters
  getAllEvents = async ({ page = 1, limit = 10, search = "", category = "Sports" }) => {
    return await this.instance.get(
      `/event/get-all-events`,
      {
        params: { page, limit, search, category }
      }
    );
  };

  // ✅ Get event by ID
  getEventById = async (id) => {
    return await this.instance.get(`/event/get-event/${id}`);
  };

  // ✅ Create new event (POST)
  createEvent = async (payload) => {
    return await this.instance.post(`/event`, payload);
  };

  // ✅ Update event (PUT or PATCH depending on backend)
  updateEvent = async (id, payload) => {
    return await this.instance.put(`/event/${id}`, payload);
  };

  // ✅ Delete event
  deleteEvent = async (id) => {
    return await this.instance.delete(`/event/${id}`);
  };
}

// Create instance
const eventApi = new EventApi();
export default eventApi;
