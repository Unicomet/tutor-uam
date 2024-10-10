import "./App.css";
import CreateAccount from "./components/CreateAccount/CreateAccount";
import Footer from "./components/Footer";
import Login from "./components/Login/Login";
import TutorSearch from "./components/TutorSearch/TutorSearch";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CommunityForm from "./components/JoinCommunity/CommunityForm";
import RegistrateSubjects from "./components/RegistrateSubjects/RegistrateSubjects";
import { QueryClient, QueryClientProvider } from "react-query";
import Scheduler from "./components/Schedule/Scheduler";
import MyTutorships from "./components/MyTutorships/MyTutorships";
import FeedbackForm from "./components/FeedbackSession/FeedbackForm";
import ProtectedRoutes from "./ProtectedRoutesTutoree";
import ProtectedRoutesTutoree from "./ProtectedRoutesTutoree";
import ProtectedRoutesTutor from "./ProtectedRoutesTutor";
import EditProfile from "./components/EditProfile/EditProfile";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <div id="page-container">
          <div id="content-wrap">
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/iniciar-sesion" element={<Login />} />
              <Route path="/crear-cuenta" element={<CreateAccount />} />
              <Route element={<ProtectedRoutesTutoree />}>
                <Route path="/buscar-tutor" element={<TutorSearch />} />
                <Route
                  path="/comunidad-formulario"
                  element={<CommunityForm />}
                />
                <Route
                  path="/registro-materias-disponibilidad"
                  element={<RegistrateSubjects />}
                />
                <Route path="/agendar/:tutorId" element={<Scheduler />} />
                <Route
                  path="/mis-asesorias"
                  element={<MyTutorships isTutor={false} />}
                />
                <Route
                  path="/calificar-asesoria/:asesoriaId"
                  element={<FeedbackForm />}
                />
              </Route>
              <Route
                path="/mis-asesorias-tutor"
                element={<MyTutorships isTutor={true} />}
              />
              <Route path="/editar-perfil" element={<EditProfile />} />
              <Route element={<ProtectedRoutesTutor />}></Route>
            </Routes>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </QueryClientProvider>
  );
};
export default App;
