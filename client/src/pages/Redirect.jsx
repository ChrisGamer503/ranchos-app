import React, { useEffect } from "react";
import { useSession } from "../hooks/useSession";
import { useNavigate } from "react-router-dom";

const Redirect = () => {
  const { perfil } = useSession();
  const navigate = useNavigate();

  useEffect(() => {
    if (perfil.rol == "usuario") return navigate("/reservar");
    if (perfil.rol == "admin") return navigate("/rancho");

    return navigate("/");
  }, []);

  return <></>;
};

export default Redirect;
