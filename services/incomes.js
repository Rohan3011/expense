import apiClient from "../utils/axiosConfig";

export async function getIncomeTags(data) {
  return await apiClient.get("/api/users", data);
}
