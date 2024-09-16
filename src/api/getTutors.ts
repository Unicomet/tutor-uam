import axios from "axios";
import { QueryFunction } from "react-query";

const getTutors = async (
  currentPage: number
): Promise<QueryFunction<any, number>> => {
  const response = await axios.get("http://localhost:8080/tutors", {
    params: {
      page: currentPage,
      size: 20,
    },
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  return response.data;
};

export default getTutors;
