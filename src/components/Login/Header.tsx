import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";

const Header: React.FC = () => {
  return (
    <header className="flex gap-5 justify-between px-10 py-3 w-full font-bold border-b border-gray-200 max-md:flex-wrap max-md:px-5 max-md:max-w-full">
      <div className="flex gap-4 my-auto text-lg text-neutral-900">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/559240774ca61a648e61a63939052e484c6b01defefb1d35aac35f1d6e1ff8d5?apiKey=d014db5933b042d7872678898cc44b5e&&apiKey=d014db5933b042d7872678898cc44b5e"
          className="shrink-0 self-start w-5 aspect-square"
          alt=""
        />
        <div>Tutor UAM</div>
      </div>
      <Link to="../crear-cuenta">
        <Button className="btn bg-blue-600 text-white">Registrarte</Button>
      </Link>
    </header>
  );
};

export default Header;
