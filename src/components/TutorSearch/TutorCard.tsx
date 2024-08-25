/**
 * This code was generated by Builder.io.
 */
import React from "react";
import { Button } from "../ui/button";

interface TutorProps {
  tutor: {
    name: string;
    rating: number;
    languages: string[];
    image: string;
  };
}

const TutorCard: React.FC<TutorProps> = ({ tutor }) => {
  return (
    <div className="flex gap-4 justify-between mt-4  px-4 py-2 w-full bg-slate-50 max-md:flex-wrap max-md:max-w-full">
      <div className="flex gap-4">
        <img
          loading="lazy"
          src={tutor.image}
          className="shrink-0 w-14 aspect-square"
          alt={`${tutor.name}'s profile`}
        />
        <div className="flex flex-col justify-center my-auto">
          <div className="text-base font-medium text-zinc-900">
            {tutor.name} • {tutor.rating}
          </div>
          <div className="text-sm text-slate-500">
            {tutor.languages.join(" • ")}
          </div>
        </div>
      </div>
      <Button className="btn btn-sm text-white my-auto bg-blue-600 ">
        Agendar
      </Button>
    </div>
  );
};

export default TutorCard;