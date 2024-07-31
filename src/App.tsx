import { createRoot } from "react-dom/client";
import "./App.css";
import CreateAccount from "./components/CreateAccount/CreateAccount";
import Footer from "./components/Footer";
import Login from "./components/Login/Login";
import TutorSearch from "./components/TutorSearch/TutorSearch";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div id="page-container">
        <div id="content-wrap">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/iniciar-sesion" element={<Login />} />
            <Route path="/crear-cuenta" element={<CreateAccount />} />
            <Route path="/buscar-tutor" element={<TutorSearch />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
