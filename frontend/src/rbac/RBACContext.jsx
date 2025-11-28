import React, { createContext, useContext, useState } from "react";

const RBACContext = createContext();

export const RBACProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (userData) => setUser(userData);
  const logout = () => setUser(null);

  return (
    <RBACContext.Provider value={{ user, login, logout }}>
      {children}
    </RBACContext.Provider>
  );
};

export const useRBAC = () => useContext(RBACContext);
