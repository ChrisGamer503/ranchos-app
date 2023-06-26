import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login";
import Registro from "./pages/Registro";
import { SessionProvider } from "./context/SessionContext";
import UnProtectedRoute from "./layout/UnProtectedRoute";
import Rancho from "./pages/Rancho/Rancho";
import AdminRoute from "./layout/AdminRoute";
import ProtectedRoute from "./layout/ProtectedRoute";
import Reserva from "./pages/Reserva/Reserva";
import Redirect from "./pages/Redirect";
import CrearRancho from "./pages/Rancho/CrearRancho";
import CrearReserva from "./pages/Reserva/CrearReserva";
import Pruebas from "./pages/Pruebas";

import "./index.css";
import { RanchoProvider } from "./context/RanchoContext";
import EditarRancho from "./pages/Rancho/EditarRancho";
import PruebaDos from "./pages/PruebaDos";
import MisReservas from "./pages/Reserva/MisReservas";
import { ReservaProvider } from "./context/ReservasContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <UnProtectedRoute>
        <Login />
      </UnProtectedRoute>
    ),
  },
  {
    path: "/redirect",
    element: <Redirect />,
  },
  {
    path: "/registro",
    element: (
      <UnProtectedRoute>
        <Registro />
      </UnProtectedRoute>
    ),
  },
  {
    path: "/rancho",
    element: (
      <AdminRoute>
        <RanchoProvider>
          <Rancho />
        </RanchoProvider>
      </AdminRoute>
    ),
  },
  {
    path: "/rancho/editar/:id",
    element: (
      <AdminRoute>
        <EditarRancho />
      </AdminRoute>
    ),
  },
  {
    path: "/ranchos/crear",
    element: (
      <ProtectedRoute>
        <CrearRancho />
      </ProtectedRoute>
    ),
  },
  {
    path: "/reservar",
    element: (
      <ProtectedRoute>
        <Reserva />
      </ProtectedRoute>
    ),
  },
  {
    path: "/reservar/:id",
    element: (
      <ProtectedRoute>
        <CrearReserva />
      </ProtectedRoute>
    ),
  },
  {
    path: "/misreservas",
    element: (
      <ProtectedRoute>
        <ReservaProvider>
          <MisReservas />
        </ReservaProvider>
      </ProtectedRoute>
    ),
  },
  {
    path: "/pruebas",
    element: <PruebaDos />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <SessionProvider>
    <RouterProvider router={router}></RouterProvider>
  </SessionProvider>
);
