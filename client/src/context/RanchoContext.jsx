import { createContext, useState } from "react";

// Crea el contexto
export const RanchoContext = createContext();

// Componente proveedor del contexto
export const RanchoProvider = ({ children }) => {
  const [ranchos, setRanchos] = useState([]);

  return (
    <RanchoContext.Provider value={{ ranchos, setRanchos }}>
      {children}
    </RanchoContext.Provider>
  );
};