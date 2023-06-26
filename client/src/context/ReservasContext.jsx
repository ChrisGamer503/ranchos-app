import { createContext, useState } from "react";

// Crea el contexto
export const ReservaContext = createContext();

// Componente proveedor del contexto
export const ReservaProvider = ({ children }) => {
  const [reservas, setReservas] = useState([]);

  return (
    <ReservaContext.Provider value={{ reservas, setReservas }}>
      {children}
    </ReservaContext.Provider>
  );
};