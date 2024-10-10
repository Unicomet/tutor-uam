import axios from "axios";
import { QueryFunction } from "react-query";

export const getAvailabilityTutors = async (
  id: number
): Promise<QueryFunction> => {
  const response = await axios.get(
    "http://localhost:8080/tutors/" + id + "/availabilities",
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );

  return response.data;
};
