import React, { useState } from "react";
import { Button } from "../ui/button";
import FilteredSearch from "../RegistrateSubjects/FilteredSearch";
import SearchBar from "./SearchBar";
import { keysUEA, namesUEA } from "@/data/ueas";

const FilterSection: React.FC = ({ onButtonPressed }) => {
  // const availabilityOptions = [
  //   "Hoy",
  //   "Mañana",
  //   "Esta semana",
  //   "Fines de semana",
  // ];
  const subjects = [
    "Matemáticas",
    "Mecanica",
    "Memo",
    "Memo2",
    "Memo",
    "Memo2",
    "Español",
    "Ciencia",
  ];

  const [name, setName] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  console.log(name, subject);

  return (
    <section className="flex flex-col">
      <SearchBar setName={setName} />
      <h2 className="mt-7 text-lg font-bold leading-6 text-neutral-900 max-md:max-w-full mb-4">
        Filtrar por materia
      </h2>
      <FilteredSearch
        name=""
        placeholder="Busca la materia"
        items={namesUEA}
        setSubject={setSubject}
      />
      {/* <h2 className="mt-7 text-lg font-bold leading-6 text-neutral-900 max-md:max-w-full">
        Filtrar por disponibilidad
      </h2>
      <div className="flex flex-wrap gap-3 content-start py-3 pr-4  mt-2 max-w-full text-sm font-medium leading-5 text-center text-neutral-900 w-[960px] max-md:pr-5">
        {availabilityOptions.map((option, index) => (
          <Button className="btn btn-sm " key={index}>
            {option}
          </Button>
        ))}
      </div> */}
      <Button
        onClick={() => onButtonPressed(name, subject)}
        className="btn btn-md bg-blue-600 text-white mt-4 text-ellipsis w-44"
      >
        Aplicar filtros
      </Button>
    </section>
  );
};

export default FilterSection;
