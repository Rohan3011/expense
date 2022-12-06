import apiClient from "../utils/axiosConfig";

export async function postUser(data) {
  return await apiClient.post("/api/users", data);
}
