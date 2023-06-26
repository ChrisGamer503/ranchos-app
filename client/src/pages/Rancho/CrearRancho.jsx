import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useSession } from "../../hooks/useSession";
import { Link } from "react-router-dom";

const CrearRancho = () => {
  const { register, handleSubmit, formState, setError } = useForm();
  const [mensaje, setMensaje] = useState("");
  const { headers } = useSession();

  const crearRancho = async (data) => {
    try {
      data.cantidad_huesped = parseInt(data.cantidad_huesped);
      data.precio_por_noche = parseFloat(data.precio_por_noche);

      await axios.post("http://localhost:5000/ranchos", data, headers);
      setMensaje("Rancho Creado !");
    } catch (error) {
      setError("nombre_rancho");
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold">Crear Rancho</h1>
          <Link to="/redirect" className="text-blue-500 hover:text-blue-700">
            Volver
          </Link>
        </div>

        <p className="mb-6 text-gray-600 text-sm">La creación de rancho es solo una solicitud.</p>

        {mensaje && (
          <div className="bg-blue-100 text-base my-4 border border-blue-500 text-blue-700 px-4 py-3 rounded relative" role="alert">
            <h1>{mensaje}</h1>
          </div>
        )}

        <form onSubmit={handleSubmit(crearRancho)}>
          <div className="mb-4">
            <label htmlFor="nombre_rancho" className="text-base text-gray-700">
              Nombre:
            </label>
            <input
              {...register('nombre_rancho')}
              type="text"
              placeholder="Nombre"
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="descripcion" className="text-base text-gray-700">
              Descripción:
            </label>
            <input
              {...register('descripcion')}
              type="text"
              placeholder="Descripción"
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="direccion" className="text-base text-gray-700">
              Dirección:
            </label>
            <input
              {...register('direccion')}
              type="text"
              placeholder="Dirección"
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="precio_por_noche" className="text-base text-gray-700">
              Precio por noche:
            </label>
            <input
              {...register('precio_por_noche')}
              type="number"
              step={"any"}
              placeholder="Precio por noche"
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="cantidad_huesped" className="text-base text-gray-700">
              Cantidad de huéspedes:
            </label>
            <input
              {...register('cantidad_huesped')}
              type="number"
              placeholder="Cantidad de huéspedes"
              className="w-full px-3  py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:border-blue-500"
            />
          </div>

          <button disabled={formState.isSubmitSuccessful} className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-gray-500">
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default CrearRancho;
