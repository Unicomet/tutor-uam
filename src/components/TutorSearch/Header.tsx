import React from "react";
import { BurgerMenu } from "../../assets/icons/BurgerMenu";
import { Link } from "react-router-dom";
const Header: React.FC = () => {
  return (
    <header className="flex justify-between self-stretch px-10 py-3 font-bold border-b border-gray-200 max-md:flex-wrap max-md:px-5">
      <div className="flex gap-4 my-auto text-lg leading-6 text-neutral-900">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/559240774ca61a648e61a63939052e484c6b01defefb1d35aac35f1d6e1ff8d5?apiKey=d014db5933b042d7872678898cc44b5e&&apiKey=d014db5933b042d7872678898cc44b5e"
          className="shrink-0 self-start w-5 aspect-square fill-black"
          alt=""
        />
        <div>Tutor UAM</div>
      </div>
      <nav className="md:hidden ">
        <button>
          <BurgerMenu height={24} width={24} stroke="black" />
        </button>
      </nav>

      <nav className="hidden md:flex items-center justify-end gap-5 pl-20 text-sm leading-5 text-center max-md:flex-wrap ">
        <button className="btn btn-sm">Mis clases</button>
        <Link to="../crear-cuenta">
          <button className="btn btn-sm bg-blue-600  text-white">
            Conviértete en tutor
          </button>
        </Link>

        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a7fdcc33c614fe390b2f654f356f5854c917ae39e300f56b084ca55a6ff8a9b8?apiKey=d014db5933b042d7872678898cc44b5e&&apiKey=d014db5933b042d7872678898cc44b5e"
          className="shrink-0 w-10 aspect-square"
          alt=""
        />
      </nav>
    </header>
  );
};

export default Header;
