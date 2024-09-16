import React from "react";
import TutorCard from "./TutorCard";

interface Tutor {
  id: number;
  name: string;
  score: number;
  subjectNames: string[];
}

interface TutorListProps {
  data: Array<Tutor>;
  error: Error;
  isLoading: boolean;
}

const TutorList: React.FC<TutorListProps> = ({ data, error, isLoading }) => {
  return (
    <section className="flex flex-col  pt-4 pb-2 mt-8 w-full leading-[150%] max-w-[960px] max-md:max-w-full">
      <h2 className="text-xl font-bold text-neutral-900 max-md:max-w-full ">
        Resultados de la búsqueda
      </h2>
      {data.map((tutor: Tutor) => (
        <TutorCard key={tutor.id} tutor={tutor} />
      ))}
    </section>
  );
};

export default TutorList;
