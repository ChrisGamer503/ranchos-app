import axios, { AxiosError } from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useSession } from "../hooks/useSession";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const { setToken } = useSession();
  const navigate = useNavigate();

  const enviarLogin = async (datos) => {
    try {
      const { data } = await axios.post(
        "https://api-ranchos.onrender.com/usuarios/login",
        datos
      );

      localStorage.setItem("token", data.token);

      setToken(data.token);

      setMensaje("Login Exitoso !");

      return navigate("/redirect");
    } catch (error) {
      if (error instanceof AxiosError) {
        setMensaje(error.response.data.message);
      }
    }
  };
  return (
    <div className="grid grid-cols-2 min-h-screen">
      <div className="bg-white flex justify-center items-center">
        <div className="text-2xl font-noto-sans text-black flex flex-col">
          <h1 className="text-center font-bold">Inicio de sesión</h1>

          <form
            onSubmit={handleSubmit(enviarLogin)}
            className="flex rounded-lg shadow-button flex-col w-96 p-5 border-2 border-solid border-gray-100 mt-2 transition duration-300"
          >
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
              type="submit"
              className="bg-blue-500 py-2 mt-4 text-lg text-center text-white border border-blue-500 rounded-md hover:bg-blue-600 disabled:bg-gray-400 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              Iniciar sesión
            </button>

            <p className="mt-4 text-sm text-gray-600 text-center">
              ¿No tienes cuenta? <Link to="/registro">Registrate</Link>
            </p>
          </form>
        </div>
      </div>

      <div className="bg-[url('/rancho.png')] bg-cover"></div>
    </div>
  );
};


export default Login;
