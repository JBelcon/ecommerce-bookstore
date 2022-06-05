import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { authContext } from "../../context/Auth";
import { LogOut } from "./LogOut";

const User = () => {
  const { user, logged } = useContext(authContext);
  return (
    <div className="flex gap-5">
      {/* User */}
      <div className="group relative">
        <button className="outline-none focus:outline-none flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>
            <svg
              className="fill-current h-4 w-4 transform group-hover:-rotate-180
        transition duration-150 ease-in-out"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </span>
        </button>
        <ul className="bg-white border transform scale-0 group-hover:scale-100 absolute transition duration-150 ease-in-out top-7 right-0 text-center">
          {!logged ? (
            <>
              <li className=" px-3 py-1 hover:bg-gray-100 w-40">
                <NavLink
                  className="outline-none focus:outline-none"
                  to="/login"
                >
                  Login
                </NavLink>
              </li>
              <li className=" px-3 py-1 hover:bg-gray-100 w-40">
                <NavLink
                  className="outline-none focus:outline-none"
                  to="/signup"
                >
                  Sign Up
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li className=" px-3 py-1 hover:bg-gray-100 w-40">
                Hola, {user.name}
              </li>
              <li className=" px-3 py-1 hover:bg-gray-100 w-40">
                <LogOut />
              </li>
            </>
          )}
        </ul>
      </div>
      {/* Cart */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
        />
      </svg>
    </div>
  );
};

export { User };
