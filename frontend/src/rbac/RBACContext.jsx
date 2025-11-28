import { createContext, useState, useContext } from "react";
import { ROLES } from "./roles";

const RBACContext = createContext();

export function RBACProvider({ children }) {
  const [currentRole, setCurrentRole] = useState("viewer");

  function hasPermission(permission) {
    return ROLES[currentRole].permissions.includes(permission);
  }

  return (
    <RBACContext.Provider value={{ currentRole, setCurrentRole, hasPermission }}>
      {children}
    </RBACContext.Provider>
  );
}

export function useRBAC() {
  return useContext(RBACContext);
}

