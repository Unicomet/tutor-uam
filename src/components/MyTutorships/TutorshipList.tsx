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
}

const TutorshipList: React.FC<TutorshipListProps> = ({
  data,
  error,
  isLoading,
}) => {
  return (
    <section className="flex flex-col  pt-4 pb-2 mt-8 w-full leading-[150%] max-w-[960px] max-md:max-w-full">
      {data.tutorships.map((tutorship) => (
        <TutorshipCardCard
          key={tutorship.id}
          tutor={tutorship.tutor}
          tutorship={tutorship}
        />
      ))}
    </section>
  );
};

export default TutorshipList;
