import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { get } from "../../api";
import { authContext } from "../../context/Auth";

const LogOut = () => {
  const { setUser } = useContext(authContext);
  const navigate = useNavigate();

  const logOut = () => {
    get("/api/auth/logout").then(
      (result) => navigate("/login"),
      setUser({
        logged: false,
        user: {},
      })
    );
  };
  return <div onClick={logOut}>Log out</div>;
};

export { LogOut };
