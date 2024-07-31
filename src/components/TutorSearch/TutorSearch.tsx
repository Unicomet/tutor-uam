/**
 * This code was generated by Builder.io.
 */
import React from "react";
import Header from "./Header";
import SearchBar from "./SearchBar";
import FilterSection from "./FilterSection";
import TutorList from "./TutorList";

const TutorSearch: React.FC = () => {
  return (
    <div className="flex flex-col justify-center bg-white w-full">
      <Header />
      <main className="flex flex-col px-3.5 mt-9 w-full max-w-[960px] mx-auto">
        <h1 className="text-3xl font-bold text-neutral-900 max-md:max-w-full">
          Encuentra un tutor
        </h1>
        <SearchBar />
        <FilterSection />
        <TutorList />
      </main>
    </div>
  );
};

export default TutorSearch;
