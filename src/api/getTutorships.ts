import axios from "axios";
import { QueryFunction } from "react-query";

const getTutorships = async (): Promise<QueryFunction> => {
  const response = await axios.get("http://localhost:8080/tutorships", {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  return response.data;
};

export default getTutorships;
