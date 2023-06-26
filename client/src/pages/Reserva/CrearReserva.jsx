import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useParams } from "react-router-dom";
import { useSession } from "../../hooks/useSession";
import axios, { AxiosError } from "axios";

const CrearReserva = () => {
  const [rancho, setRancho] = useState({});
  const [mensaje, setMensaje] = useState("");
  const { register, handleSubmit, formState, setError } = useForm();
  const { headers } = useSession();
  const { id } = useParams();

  const enviarDatos = async (data) => {
    try {
      await axios.post("http://localhost:5000/reservas/" + id, data, headers);

      setMensaje("Reserva Creada !");
    } catch (error) {
      setError("fecha_inicio");
      if(error instanceof AxiosError){
        setMensaje(error.response.data.message)
      }
    }
  };

  const obtenerRancho = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:5000/ranchos/" + id,
        headers
      );
      setRancho(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    obtenerRancho();
  }, []);

  return (
    <>
      <div className="flex justify-between items-center mb-4 p-6">
        <Link
          to={"/reservar"}
          className="text-blue-500 hover:text-blue-600 font-bold"
        >
          &lt; Volver
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start p-4">
        <div className="bg-white p-6 rounded-lg border border-gray-300">
          <h1 className="text-2xl font-semibold mb-4">
            {rancho.nombre_rancho}
          </h1>
          <p className="mb-2">Descripción: {rancho.descripcion}</p>
          <p className="mb-2">Dirección: {rancho.direccion}</p>
          <p className="mb-2">Precio por noche: ${rancho.precio_por_noche}</p>
          <p className="mb-2">Máximo de huéspedes: {rancho.cantidad_huesped}</p>
        </div>

        <div className="bg-white p-6 rounded-lg border border-gray-300">
          <h2 className="text-2xl font-semibold mb-4">Prepara tu reserva</h2>
          {mensaje && (
            <div className="bg-yellow-200 text-yellow-800 py-2 px-4 mb-4">
              {mensaje}
            </div>
          )}

          <form onSubmit={handleSubmit(enviarDatos)}>
            <div className="flex flex-col mb-4">
              <label htmlFor="fecha_inicio" className="mb-2">
                Fecha de inicio:
              </label>
              <input
                {...register("fecha_inicio")}
                type="date"
                id="fecha_inicio"
                className="p-2 border border-gray-300 rounded-md"
              />
            </div>

            <div className="flex flex-col mb-4">
              <label htmlFor="fecha_fin" className="mb-2">
                Fecha de final:
              </label>
              <input
                {...register("fecha_fin")}
                type="date"
                id="fecha_fin"
                className="p-2 border border-gray-300 rounded-md"
              />
            </div>

            <div className="flex flex-col mb-4">
              <label htmlFor="cantidad_huesped" className="mb-2">
                Cantidad de Huéspedes:
              </label>
              <input
                {...register("cantidad_huesped")}
                type="number"
                id="cantidad_huesped"
                className="p-2 border border-gray-300 rounded-md"
              />
            </div>

            <button
              disabled={formState.isSubmitSuccessful}
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md"
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default CrearReserva;
