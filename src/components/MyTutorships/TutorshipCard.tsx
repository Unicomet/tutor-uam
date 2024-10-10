import React from "react";
import { Button } from "../ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { Avatar, AvatarFallback } from "@radix-ui/react-avatar";

interface TutorshipCardProps {
  person: {
    name: string;
    score: number;
    // image: string;
  };
  tutorship: {
    id: number;
    hour: string;
    date: string;
    place?: string;
    rated: boolean;
  };
}

const TutorshipCard: React.FC<TutorshipCardProps> = ({ person, tutorship }) => {
  const dateTime: Date = new Date(tutorship.dateTime);
  console.log(tutorship);

  return (
    <div className="flex gap-4 justify-between items-center mt-5  px-4 py-2 w-full md:h-20 bg-slate-50 max-md:flex-wrap max-md:max-w-full">
      <div className="flex gap-4">
        <Avatar className="flex justify-center items-center bg-slate-400 w-12 h-12 rounded-full p-2">
          {/* <AvatarImage
            src="/placeholder.svg?height=32&width=32"
            alt="User Avatar"
          /> */}
          <AvatarFallback>
            {person.user.firstName[0] + person.user.lastName[0]}
          </AvatarFallback>
        </Avatar>
        <div className="flex flex-col justify-center my-auto">
          <div className="text-base font-medium text-zinc-900">
            {person.user.firstName + " " + person.user.lastName} •{" "}
            {person.score}{" "}
            <FontAwesomeIcon
              icon={faStar}
              size="lg"
              style={{ color: "#FFD43B" }}
            />
          </div>
          <div className="text-sm flex gap-2 text-slate-500">
            {dateTime.toISOString().split("T")[0]} a las{" "}
            {dateTime.toTimeString().split(" ")[0]} •{" "}
            {tutorship.isTutorshipInPerson === true ? (
              <p> Lugar: {tutorship.tutor.tutorshipPlace} </p>
            ) : (
              <p>En línea</p>
            )}
          </div>
        </div>
      </div>
      {tutorship.rated ?? (
        <NavLink to={"/calificar-asesoria/" + tutorship.id}>
          <Button className="btn btn-sm text-white my-auto bg-blue-600">
            Calificar
          </Button>
        </NavLink>
      )}
    </div>
  );
};

export default TutorshipCard;
