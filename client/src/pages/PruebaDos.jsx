import React from "react";

const PruebaDos = () => {
  return (
    <div class="bg-gray-100 min-h-screen flex items-center justify-center">
      <div class="bg-white p-8 shadow-md rounded-lg max-w-md">
        <h2 class="text-3xl font-bold text-center text-gray-800 mb-8">
          Regístrate
        </h2>
        <form>
          <div class="mb-6">
            <label
              class="block text-gray-800 text-sm font-bold mb-2"
              for="username"
            >
              Nombre de usuario
            </label>
            <input
              class="form-input"
              type="text"
              id="username"
              placeholder="Ingrese su nombre de usuario"
            />
          </div>
          <div class="mb-6">
            <label
              class="block text-gray-800 text-sm font-bold mb-2"
              for="email"
            >
              Correo electrónico
            </label>
            <input
              class="form-input"
              type="email"
              id="email"
              placeholder="Ingrese su correo electrónico"
            />
          </div>
          <div class="mb-6">
            <label
              class="block text-gray-800 text-sm font-bold mb-2"
              for="password"
            >
              Contraseña
            </label>
            <input
              class="form-input"
              type="password"
              id="password"
              placeholder="Ingrese su contraseña"
            />
          </div>
          <div class="mb-6">
            <label
              class="block text-gray-800 text-sm font-bold mb-2"
              for="confirmPassword"
            >
              Confirmar Contraseña
            </label>
            <input
              class="form-input"
              type="password"
              id="confirmPassword"
              placeholder="Confirme su contraseña"
            />
          </div>
          <div class="mb-6 flex items-center">
            <input type="checkbox" id="terms" class="form-checkbox" />
            <label for="terms" class="text-gray-800 text-sm ml-2">
              Acepto los términos y condiciones
            </label>
          </div>
          <div class="flex justify-center">
            <button
              class="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600"
              type="submit"
            >
              Registrarse
            </button>
          </div>
        </form>
        <p class="text-gray-600 text-sm mt-4">
          ¿Ya tienes una cuenta?{" "}
          <a href="#" class="text-blue-500">
            Inicia sesión
          </a>
        </p>
      </div>
    </div>
  );
};

export default PruebaDos;
