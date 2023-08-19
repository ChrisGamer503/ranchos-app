import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSession } from "../../hooks/useSession";
import axios from "axios";

const Reserva = () => {
  const [ranchos, setRanchos] = useState([]);
  const { headers, logout } = useSession();

  const obtenerRanchos = async () => {
    try {
      const { data } = await axios.get(
        "https://api-ranchos.onrender.com/ranchos",
        headers
      );


      setRanchos(data.filter(rancho => rancho.verificado));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    obtenerRanchos();
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-white rounded-t-md">
        <div className="container mx-auto py-6 px-4">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold">Selección de Ranchos</h1>
            <div className="space-x-4">
              <Link
                to={"/misreservas"}
                className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded-md"
              >
                Mis Reservas
              </Link>
              <Link
                to={"/ranchos/crear"}
                className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md"
              >
                Publicar Rancho
              </Link>
              <button
                onClick={logout}
                className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-md"
              >
                Cerrar Sesión
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto py-10">
        <div className="grid grid-cols-4 p-4 gap-6">
          {ranchos.map((rancho) => (
            <Rancho key={rancho.id} rancho={rancho} />
          ))}
        </div>
      </main>
    </div>
  );
};

{
  /* <>
<Link to={"/ranchos/crear"}>Publica tu rancho !</Link>
<h1>Selecciona un rancho para reservar</h1>
{ranchos.filter(rancho => rancho.verificado).map(rancho => <Rancho key={rancho.id} rancho={rancho} />)}
</> */
}

const Rancho = ({ rancho }) => {
  return (
    <>
      <div className="bg-white shadow-md rounded-lg">
        <div className="p-4">
          <h2 className="text-xl font-semibold">{rancho.nombre_rancho}</h2>
        </div>
        <div className="p-4 bg-gray-100 border-t border-gray-200">
          <Link
            to={"/reservar/" + rancho.id}
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md w-full"
          >
            Reservar
          </Link>
        </div>
      </div>
    </>
  );
};

export default Reserva;
