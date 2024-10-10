import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoutesTutor = () => {
  const user = localStorage.getItem("isTutor");
  return user ? (
    <Outlet />
  ) : (
    <Navigate
      to="/iniciar-sesion
  "
    />
  );
};

export default ProtectedRoutesTutor;
