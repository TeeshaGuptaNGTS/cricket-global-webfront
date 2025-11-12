import HttpClient from "./index.api";

const baseURL = process.env.NEXT_PUBLIC_API_URL;

class EventApi extends HttpClient {
  constructor() {
    super(baseURL);
  }

  
  // ✅ Get all events with filters
  getAllEvents = async ({ page = 1, limit = 10, search = "", category = "Sports" }) => {
    return await this.instance.get(
      `/user/get-all-events`,
      {
        params: { page, limit, search, category }
      }
    );
  };

  // ✅ Get event by ID
  getEventById = async (id) => {
    return await this.instance.get(`/event/get-event/${id}`);
  };

  // ✅ Create new event
  createEvent = async (payload) => {
    return await this.instance.post(`/user/create-event`, payload);
  };

  // ✅ Update event
  updateEvent = async (id, payload) => {
    return await this.instance.put(`/user/update-event/${id}`, payload);
  };

  // ✅ Delete event
  deleteEvent = async (id) => {
    return await this.instance.delete(`/user/delete-event/${id}`);
  };
}

const eventApi = new EventApi();
export default eventApi;
