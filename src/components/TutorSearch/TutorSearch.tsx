import React, { useState } from "react";
import Header from "./Header";
import FilterSection from "./FilterSection";
import TutorList from "./TutorList";
import { useQuery } from "react-query";
import getTutors from "@/api/getTutors";
import { PageSection } from "./PageSection";

const TutorSearch: React.FC = () => {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  //Aqui debemos de pasar el numero de la pagina a la query para manejar la paginacion real
  const {
    data: tutors,
    error,
    isLoading,
    refetch,
  } = useQuery(["tutors", currentPage, name, subject], () =>
    getTutors(currentPage - 1, name, subject)
  );

  return (
    <div className="flex flex-col justify-center bg-white w-full mb-16">
      <Header />
      <main className="flex flex-col px-3.5 mt-9 w-full max-w-[960px] mx-auto">
        <h1 className="text-3xl font-bold text-neutral-900 max-md:max-w-full">
          Encuentra un tutor
        </h1>
        <FilterSection
          onButtonPressed={(name, subject) => {
            console.log(name, subject);
            setName(name);
            setSubject(subject);
          }}
        />
        {isLoading ? (
          <div>Cargando...</div>
        ) : error ? (
          <div>Error: {error.message}</div>
        ) : (
          <TutorList
            data={tutors.tutorForListDtoList}
            error={error}
            isLoading={isLoading}
          />
        )}
        <PageSection
          totalItems={tutors?.totalElements}
          itemsPerPage={20}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </main>
    </div>
  );
};

export default TutorSearch;
