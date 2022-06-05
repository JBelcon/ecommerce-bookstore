import React, { useContext, useState } from "react";
import { post } from "../api";
import { NavLink, useNavigate } from "react-router-dom";
import { BtnPrimary } from "../components/BtnPrimary";
import { Errors } from "../components/Errors";
import { authContext } from "../context/Auth";

const SignUp = () => {
  const { setUser } = useContext(authContext);
  const navigate = useNavigate();

  const [errors, setErrors] = useState({
    isErrors: false,
    errors: [],
  });

  const signUp = (e) => {
    e.preventDefault();
    const { email, password, name } = e.target;
    post("/api/auth/signup", {
      name: name.value,
      email: email.value,
      password: password.value,
    })
      .then((response) => {
        setUser({ logged: true, user: response.user });
        navigate("/login");
      })
      .catch((error) => {
        setErrors({
          isErrors: true,
          errors: error.errors.map((e) => e.message),
        });
      });
  };
  return (
    <section className="h-screen grid place-content-center bg-orange-50 relative ">
      {/* Back to home  */}
      <NavLink
        className=" absolute top-6 left-6 outline-none focus:outline-none"
        to="/"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12 hover:text-gray-700"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11 17l-5-5m0 0l5-5m-5 5h12"
          />
        </svg>
      </NavLink>
      {/* Title */}
      <h2 className="text-3xl font-bold">Hi!</h2>
      <p className="mb-8 ">Create a new account.</p>
      {/* Sign Up */}
      <form onSubmit={signUp} className=" grid place-content-center  gap-5">
        {/* Name */}
        <div className="flex flex-row gap-3 items-center   p-1 border-b-2 border-black group ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 group-hover:text-orange-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
          <input
            className="bg-transparent focus:outline-none"
            type="text"
            name="name"
            placeholder="Name"
          />
        </div>
        {/* Email */}
        <div className="flex flex-row gap-3 items-center p-1 border-b-2 border-black group ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 group-hover:text-orange-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
            />
          </svg>
          <input
            className="bg-transparent focus:outline-none"
            type="email"
            name="email"
            placeholder="Email"
          />
        </div>
        {/* Password */}
        <div className="flex flex-row gap-3 items-center p-1 border-b-2 border-black group ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 group-hover:text-orange-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
            />
          </svg>
          <input
            className="bg-transparent focus:outline-none"
            type="password"
            name="password"
            placeholder="Password"
          />
        </div>
        <BtnPrimary>Sign Up</BtnPrimary>
      </form>
      {/* Errors */}
      {/* <Errors errors={errors} /> */}
      {/* Social Media */}
      <article className="flex flex-col items-center">
        <div className="flex items-center justify-between my-5">
          <span className="border-b-2 border-black w-24"></span>
          <p className="text-center  uppercase px-3">or</p>
          <span className="border-b-2 border-black w-24"></span>
        </div>
        <div className=" flex gap-5 ">
          <a
            className="text-3xl hover:text-gray-700 outline-none focus:outline-none"
            href="https://backendnodejstzuzulcode.uw.r.appspot.com/api/auth/google"
          >
            <ion-icon name="logo-google"></ion-icon>
          </a>
          <a
            className="text-3xl hover:text-gray-700 outline-none focus:outline-none"
            href="https://backendnodejstzuzulcode.uw.r.appspot.com/api/auth/facebook"
          >
            <ion-icon name="logo-facebook"></ion-icon>
          </a>
          <a
            className="text-3xl hover:text-gray-700 outline-none focus:outline-none"
            href="https://backendnodejstzuzulcode.uw.r.appspot.com/api/auth/github"
          >
            <ion-icon name="logo-github"></ion-icon>
          </a>
        </div>
      </article>
      {/* Login */}
      <article className="grid place-content-center text-center mt-8">
        <p> ¿Ya tienes cuenta?</p>
        <NavLink className="font-bold outline-none" to="/login">
          Login
        </NavLink>
      </article>
    </section>
  );
};

export { SignUp };
