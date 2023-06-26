import axios from "axios";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useSession } from "../../hooks/useSession";
import { Link, useParams } from "react-router-dom";

const EditarRancho = () => {
  const { id } = useParams(); // Obtener el ID del rancho de los parámetros de la URL
  const { register, handleSubmit, setError, setValue } = useForm();
  const [mensaje, setMensaje] = useState("");
  const { headers } = useSession();
  
  useEffect(() => {
    // Cargar los datos del rancho existente al cargar el componente
    const cargarRancho = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/ranchos/${id}`,
          headers
        );
        const rancho = response.data;

        // Establecer los valores iniciales en los campos del formulario
        setValue("nombre_rancho", rancho.nombre_rancho);
        setValue("descripcion", rancho.descripcion);
        setValue("direccion", rancho.direccion);
        setValue("precio_por_noche", rancho.precio_por_noche);
        setValue("cantidad_huesped", rancho.cantidad_huesped);
      } catch (error) {
        console.log(error);
      }
    };

    cargarRancho();
  }, [id, headers, setValue]);

  const editarRancho = async (data) => {
    try {
      data.cantidad_huesped = parseInt(data.cantidad_huesped);
      data.precio_por_noche = parseFloat(data.precio_por_noche);
      await axios.patch(`http://localhost:5000/ranchos/${id}`, data, headers);
      setMensaje("Rancho Editado !");
    } catch (error) {
      setError("nombre_rancho");
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold">Editar Rancho</h1>
          <Link to="/redirect" className="text-blue-500 hover:text-blue-700">
            Volver
          </Link>
        </div>

        <p className="mb-6 text-gray-600 text-sm">
          Edita el rancho
        </p>

        {mensaje && (
          <div
            className="bg-blue-100 text-base my-4 border border-blue-500 text-blue-700 px-4 py-3 rounded relative"
            role="alert"
          >
            <h1>{mensaje}</h1>
          </div>
        )}

        <form onSubmit={handleSubmit(editarRancho)}>
          <div className="mb-4">
            <label htmlFor="nombre_rancho" className="text-base text-gray-700">
              Nombre:
            </label>
            <input
              {...register("nombre_rancho")}
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
              {...register("descripcion")}
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
              {...register("direccion")}
              type="text"
              placeholder="Dirección"
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="precio_por_noche"
              className="text-base text-gray-700"
            >
              Precio por noche:
            </label>
            <input
              {...register("precio_por_noche")}
              type="number"
              step={"any"}
              placeholder="Precio por noche"
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="cantidad_huesped"
              className="text-base text-gray-700"
            >
              Cantidad de huéspedes:
            </label>
            <input
              {...register("cantidad_huesped")}
              type="number"
              placeholder="Cantidad de huéspedes"
              className="w-full px-3  py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:border-blue-500"
            />
          </div>

          <button
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-gray-500"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditarRancho;
