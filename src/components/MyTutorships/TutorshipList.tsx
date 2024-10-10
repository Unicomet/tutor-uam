import React from "react";
import TutorshipCardCard from "./TutorshipCard";

interface Tutorship {
  tutor: {
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

interface TutorshipListProps {
  data: Array<Tutorship>;
  error: Error;
  isLoading: boolean;
  isTutor: boolean;
}

const TutorshipList: React.FC<TutorshipListProps> = ({
  data,
  error,
  isLoading,
  isTutor,
}) => {
  console.log(isTutor);
  console.log(data);

  return (
    <section className="flex flex-col  pt-4 pb-2 mt-8 w-full leading-[150%] max-w-[960px] max-md:max-w-full">
      {isTutor === true
        ? data.tutorships.map((tutorship) => (
            <TutorshipCardCard
              key={tutorship.id}
              person={tutorship.tutoree}
              tutorship={tutorship}
            />
          ))
        : data.tutorships.map((tutorship) => (
            <TutorshipCardCard
              key={tutorship.id}
              person={tutorship.tutor}
              tutorship={tutorship}
            />
          ))}
    </section>
  );
};

export default TutorshipList;
