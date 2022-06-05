import React, { useContext, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { get } from "./api";
import { Header } from "./components/Header/Header";
import { authContext } from "./context/Auth";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { SignUp } from "./pages/SignUp";

function App() {
  const { setUser } = useContext(authContext);
  const location = useLocation();

  //Recuperar sesion del usuario
  useEffect(() => {
    get("/api/auth/validate")
      .then((result) => setUser({ logged: true, user: result.user }))
      .catch((error) => console.log(error));
  }, [setUser]);

  return (
    <>
      {location.pathname === "/" && <Header />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
