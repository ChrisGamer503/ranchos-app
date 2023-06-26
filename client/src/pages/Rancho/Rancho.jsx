import { useEffect, useState } from "react";
import { useSession } from "../../hooks/useSession";
import axios from "axios";
import { useRancho } from "../../hooks/useRancho";
import { Link } from "react-router-dom";

const Rancho = () => {
  const { ranchos, setRanchos } = useRancho();
  const { headers, logout } = useSession();

  const obtenerRanchos = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:5000/ranchos",
        headers
      );
      setRanchos(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    obtenerRanchos();
  }, []);

  return (
    <>
      <header className="flex justify-between items-center bg-gray-100 px-4 py-6 border-b border-gray-300">
        <h1 className="text-3xl font-bold text-gray-800">Aceptar Ranchos</h1>
        <button onClick={logout} className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-md">
          Cerrar Sesión
        </button>
      </header>

      <div className="grid grid-cols-3 gap-4 p-4">
        {ranchos.map((rancho) => (
          <RanchoComponent key={rancho.id} rancho={rancho} />
        ))}
      </div>
    </>
  );
};

const RanchoComponent = ({ rancho }) => {
  const { headers } = useSession();
  const [verificado, setVerificado] = useState(rancho.verificado);
  const { ranchos, setRanchos } = useRancho();

  const toggleVerificar = async () => {
    try {
      await axios.get(
        "http://localhost:5000/ranchos/verificar/" + rancho.id,
        headers
      );

      setVerificado(!verificado);
    } catch (error) {
      console.log(error);
    }
  };

  const eliminarRancho = async () => {
    try {
      await axios.delete("http://localhost:5000/ranchos/" + rancho.id, headers);

      const ranchoEliminado = ranchos.filter(
        (ranchoData) => ranchoData.id !== rancho.id
      );

      setRanchos(ranchoEliminado);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="bg-gray-100 p-4">
          <h2 className="text-2xl font-semibold">{rancho.nombre_rancho}</h2>
        </div>

          <div className="flex p-4 gap-2">
            <Link to={"/rancho/editar/" + rancho.id}>
              <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md">
                Editar
              </button>
            </Link>
            <button
              onClick={eliminarRancho}
              className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-md"
            >
              Eliminar
            </button>
            {verificado ? (
              <button
                className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded-md"
                onClick={toggleVerificar}
              >
                Desverificar
              </button>
            ) : (
              <button
                className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md"
                onClick={toggleVerificar}
              >
                Verificar
              </button>
            )}
          </div>

      </div>
    </>
  );
};

export default Rancho;
