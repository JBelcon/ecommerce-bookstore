import React, { createContext, useState } from "react";

export const authContext = createContext();

const Auth = ({ children }) => {
  const [user, setUser] = useState({
    logged: false,
    user: {},
  });

  return (
    <authContext.Provider
      value={{ user: user.user, logged: user.logged, setUser }}
    >
      {children}
    </authContext.Provider>
  );
};

export { Auth };
