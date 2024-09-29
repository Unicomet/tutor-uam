import React from "react";
import { Button } from "../ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

interface TutorProps {
  tutor: {
    id: number;
    name: string;
    score: number;
    subjectNames: string[];
    // image: string;
  };
}

const TutorCard: React.FC<TutorProps> = ({ tutor }) => {
  return (
    <div className="flex gap-4 justify-between mt-4  px-4 py-2 w-full bg-slate-50 max-md:flex-wrap max-md:max-w-full">
      <div className="flex gap-4">
        <img
          loading="lazy"
          // src={tutor.image}
          className="shrink-0 w-14 aspect-square"
          alt={`${tutor.name}'s profile`}
        />
        <div className="flex flex-col justify-center my-auto">
          <div className="text-base font-medium text-zinc-900">
            {tutor.name} • {tutor.score}{" "}
            <FontAwesomeIcon
              icon={faStar}
              size="lg"
              style={{ color: "#FFD43B" }}
            />
          </div>
          <div className="text-sm text-slate-500">
            {tutor.subjectNames.join(" • ")}
          </div>
        </div>
      </div>
      <NavLink to={"/agendar/" + tutor.id}>
        <Button className="btn btn-sm text-white my-auto bg-blue-600">
          Agendar
        </Button>
      </NavLink>
    </div>
  );
};

export default TutorCard;
