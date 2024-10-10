import axios from "axios";
import { QueryFunction } from "react-query";

export const getTutorshipsForTutoree = async (): Promise<QueryFunction> => {
  const response = await axios.get(
    "http://localhost:8080/tutorships/tutorships-for-tutoree",
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );
  return response.data;
};

export const getTutorshipsForTutor = async (): Promise<QueryFunction> => {
  const response = await axios.get(
    "http://localhost:8080/tutorships/tutorships-for-tutor",
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );
  return response.data;
};
