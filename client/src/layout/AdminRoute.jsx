import React, { useEffect } from "react";
import { useSession } from "../hooks/useSession";
import { useNavigate } from "react-router-dom";

const AdminRoute = ({ children }) => {
  const { perfil, logout } = useSession();
  const navigate = useNavigate();

  useEffect(() => {
    if (perfil.rol !== "admin") return navigate("/");
  }, []);

  return (
    <>
      {children}
    </>
  );
};

export default AdminRoute;
