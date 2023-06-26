import React, { useEffect } from "react";
import { useSession } from "../hooks/useSession";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { perfil, logout} = useSession();
  const navigate = useNavigate();

  useEffect(() => {
    if (!perfil.id) return navigate("/");
  }, []);

  return (
    <>
      {/* <button
        onClick={() => {
          logout();
          navigate("/");
        }}
      >
        Cerrar Sesion
      </button> */}
      {children}
    </>
  );
};

export default ProtectedRoute;
