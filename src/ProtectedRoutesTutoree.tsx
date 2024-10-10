import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoutesTutoree = () => {
  const user = localStorage.getItem("token");
  return user ? (
    <Outlet />
  ) : (
    <Navigate
      to="/iniciar-sesion
  "
    />
  );
};

export default ProtectedRoutesTutoree;
