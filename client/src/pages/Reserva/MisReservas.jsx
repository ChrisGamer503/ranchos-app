import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSession } from "../../hooks/useSession";
import axios from "axios";
import { useReserva } from "../../hooks/useReserva";

const MisReservas = () => {
  const { headers, logout } = useSession();
  const { reservas, setReservas } = useReserva();

  const obtenerReservas = async () => {
    try {
      const { data } = await axios.get(
        "https://api-ranchos.onrender.com/reservas",
        headers
      );

      setReservas(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    obtenerReservas();
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-white rounded-t-md">
        <div className="container mx-auto py-6 px-4">
          <div className="flex justify-between items-center">
            <Link to={"/redirect"}>
              <h1 className="text-3xl font-bold">Mis Reservas</h1>
            </Link>
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
          {reservas.map((reserva) => (
            <Reserva key={reserva.id} reserva={reserva} />
          ))}
        </div>
      </main>
    </div>
  );
};

const Reserva = ({ reserva }) => {
  const { headers } = useSession();
  const { reservas, setReservas } = useReserva();

  const cancelarReserva = async () => {
    try {
      await axios.delete(
        "https://api-ranchos.onrender.com/reservas/" + reserva.id,
        headers
      );

      setReservas(reservas.filter((reservaDato) => reservaDato.id !== reserva.id));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="bg-white shadow-md rounded-lg">
        <div className="p-4">
          {reserva.rancho ? (
            <>
              <h2 className="text-xl font-semibold mb-4">
                {reserva.rancho.nombre_rancho}
              </h2>
              <p>Fecha inicio: {reserva.fecha_inicio.split("T")[0]}</p>
              <p>Fecha fin: {reserva.fecha_fin.split("T")[0]}</p>
              <p>Precio Total: ${reserva.precio_total}</p>
            </>
          ) : (
            <p className="text-red-500">Rancho no especificado</p>
          )}
        </div>
        <div className="p-4 bg-gray-100 border-t border-gray-200">
          <button
            onClick={cancelarReserva}
            className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-md w-full"
          >
            Cancelar Reserva
          </button>
        </div>
      </div>
    </>
  );
};

export default MisReservas;
