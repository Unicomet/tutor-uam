import React, { useState } from "react";

import { useQuery } from "react-query";
import getTutors from "@/api/getTutors";
import TutorshipList from "./TutorshipList";
import Header from "../CreateAccount/Header";
import getTutorships from "@/api/getTutorships";

const MyTutorships: React.FC = () => {
  //Aqui debemos de pasar el numero de la pagina a la query para manejar la paginacion real
  const {
    data: tutorships,
    error,
    isLoading,
    refetch,
  } = useQuery(["tutorships"], () => getTutorships());

  return (
    <div className="flex flex-col justify-center bg-white w-full mb-16">
      <Header />
      <main className="flex flex-col px-3.5 mt-9 w-full max-w-[960px] mx-auto items-center">
        <h1 className="text-3xl font-bold text-neutral-900">
          Consulta tus asesorías
        </h1>
        {isLoading ? (
          <div>Cargando...</div>
        ) : error ? (
          <div>Error: {error.message}</div>
        ) : (
          <TutorshipList
            data={tutorships}
            error={error}
            isLoading={isLoading}
          />
        )}
      </main>
    </div>
  );
};

export default MyTutorships;
