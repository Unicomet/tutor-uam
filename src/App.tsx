import "./App.css";
import CreateAccount from "./components/CreateAccount/CreateAccount";
import Footer from "./components/Footer";
import Login from "./components/Login/Login";
import TutorSearch from "./components/TutorSearch/TutorSearch";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CommunityForm from "./components/JoinCommunity/CommunityForm";
import RegistrateSubjects from "./components/RegistrateSubjects/RegistrateSubjects";

const App = () => {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <div id="page-container">
        <div id="content-wrap">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/iniciar-sesion" element={<Login />} />
            <Route path="/crear-cuenta" element={<CreateAccount />} />
            <Route path="/buscar-tutor" element={<TutorSearch />} />
            <Route path="/comunidad-formulario" element={<CommunityForm />} />
            <Route path="/registro-tutor" element={<RegistrateSubjects />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};
export default App;
