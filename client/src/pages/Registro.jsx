import { useState } from "react";
import axios, { AxiosError } from "axios";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Registro = () => {
  const { register, handleSubmit, formState, setError } = useForm();
  const [mensaje, setMensaje] = useState("");
  const enviarDatos = async (data) => {
    try {
      await axios.post("https://api-ranchos.onrender.com/usuarios/register", data);
      setMensaje("Cuenta Creada");
    } catch (error) {
      if (error instanceof AxiosError) {
        setMensaje(error.response.data.message);
        setError("email");
      }
    }
  };

  return (
    <div className="grid grid-cols-2 min-h-screen">
      <div className="bg-white flex justify-center items-center">
        <div className="text-2xl font-noto-sans text-black flex flex-col">
          <h1 className="text-center font-bold">Registro</h1>

          {mensaje && (
            <div
              className="bg-blue-100 text-base my-4 border border-blue-500 text-blue-700 px-4 py-3 rounded relative"
              role="alert"
            >
              <span className="block sm:inline">{mensaje}</span>
            </div>
          )}

          <form
            onSubmit={handleSubmit(enviarDatos)}
            className="flex rounded-lg shadow-button flex-col w-96 p-5 border-2 border-solid border-gray-100 mt-2 transition duration-300"
          >
            <div className="mb-4">
              <label htmlFor="nombre" className="text-base text-black">
                Nombre:
              </label>
              <input
                type="text"
                {...register("nombre")}
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:border-blue-500"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="apellido" className="text-base text-black">
                Apellido:
              </label>
              <input
                type="text"
                {...register("apellido")}
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:border-blue-500"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="text-base text-black">
                Email:
              </label>
              <input
                type="email"
                {...register("email")}
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:border-blue-500"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="password" className="text-base text-black">
                Contraseña:
              </label>
              <input
                type="password"
                {...register("password")}
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:border-blue-500"
              />
            </div>

            <button
              disabled={formState.isSubmitSuccessful}
              type="submit"
              className="bg-blue-500 py-2 mt-4 text-lg text-center text-white border border-blue-500 rounded-md hover:bg-blue-600 disabled:bg-gray-400 disabled:opacity-60 disabled:border-gray-400 disabled:cursor-not-allowed"
            >
              Crear usuario
            </button>
            <p className="mt-4 text-sm text-gray-600 text-center">
              ¿Ya tienes cuenta? <Link className="underline" to={"/"}>Inicia sesión</Link>
            </p>
          </form>
        </div>
      </div>

      <div className="bg-[url('/rancho.png')] bg-cover"></div>
    </div>
  );
};

{
  /* <>
<Link to={"/"}>incia sesion !</Link>

{mensaje && <h1>{mensaje}</h1>}
<form onSubmit={handleSubmit(enviarDatos)}>
  <input {...register("nombre")} type="text" placeholder="nombre" />
  <input {...register("apellido")} type="text" placeholder="apellido" />
  <input
    {...register("password")}
    type="password"
    placeholder="password"
  />
  <input {...register("email")} type="email" placeholder="email" />
  <button disabled={formState.isSubmitSuccessful} type="submit">
    Enviar
  </button>
</form>
</> */
}

export default Registro;
