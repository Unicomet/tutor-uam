import React, { useState } from "react";

import { useQuery } from "react-query";
import TutorshipList from "./TutorshipList";
import Header from "../Header";
import {
  getTutorshipsForTutor,
  getTutorshipsForTutoree,
} from "@/api/getTutorships";
import { is } from "date-fns/locale";

interface MyTutorshipsProps {
  isTutor: boolean;
}

const MyTutorships: React.FC<MyTutorshipsProps> = ({
  isTutor,
}: MyTutorshipsProps) => {
  //Aqui debemos de pasar el numero de la pagina a la query para manejar la paginacion real

  const {
    data: tutorships,
    error,
    isLoading,
    refetch,
  } = useQuery(["tutorships"], () => {
    if (isTutor === true) {
      return getTutorshipsForTutor();
    }
    return getTutorshipsForTutoree();
  });

  let routes = [];
  let textButtons = [];

  if (isTutor !== true) {
    routes = ["buscar-tutor"];
    textButtons = ["Buscar Tutor"];
  }
  console.log("🚀 ~ routes:", routes);
  console.log;

  return (
    <div className="flex flex-col justify-center bg-white w-full mb-16">
      <Header routes={routes} textButton={textButtons} />
      <main className="flex flex-col px-3.5 mt-9 w-full max-w-[960px] mx-auto items-center">
        <h1 className="text-3xl font-bold text-neutral-900">
          Consulta tus asesorías
        </h1>
        {isLoading ? (
          <div>Cargando...</div>
        ) : error ? (
          <div>Error: {error.message}</div>
        ) : tutorships.tutorships === null ? (
          <div className="mt-4">No tienes asesorías</div>
        ) : (
          <TutorshipList
            data={tutorships}
            error={error}
            isTutor={isTutor}
            isLoading={isLoading}
          />
        )}
      </main>
    </div>
  );
};

export default MyTutorships;
