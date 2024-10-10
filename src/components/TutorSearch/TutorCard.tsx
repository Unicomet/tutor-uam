import React from "react";
import { Button } from "../ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

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
    <div className="flex justify-between mt-4 px-6 py-4 items-center  w-full bg-slate-50 rounded-md max-md:flex-wrap max-md:max-w-full">
      <div className="flex items-center space-x-4 w-full">
        {/* <img
          loading="lazy"
          // src={tutor.image}
          className="shrink-0 w-14 aspect-square"
          alt={`${tutor.name}'s profile`}
        /> */}
        <Avatar className="flex justify-center items-center bg-slate-400 w-12 h-12 rounded-full p-2">
          {/* <AvatarImage
            src="/placeholder.svg?height=32&width=32"
            alt="User Avatar"
          /> */}
          <AvatarFallback>
            {tutor.name[0] + tutor.name.split(" ")[1][0]}
          </AvatarFallback>
        </Avatar>
        <div className="flex flex-col justify-center my-auto w-full">
          <div className="text-base font-medium text-zinc-900">
            {tutor.name} • {tutor.score}{" "}
            <FontAwesomeIcon
              icon={faStar}
              size="lg"
              style={{ color: "#FFD43B" }}
            />
          </div>
          <div className="text-sm text-slate-500 ">
            {tutor.subjectNames.join(" • ")}
          </div>
        </div>
        <div>
          <NavLink to={"/agendar/" + tutor.id}>
            <Button className="btn btn-sm text-white my-auto bg-blue-600">
              Agendar
            </Button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default TutorCard;
