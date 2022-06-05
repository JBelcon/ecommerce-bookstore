import React from "react";

const BtnPrimary = ({ children }) => {
  return (
    <button className="bg-slate-900 text-white uppercase py-3 hover:bg-white hover:text-black hover:border-2 border-black outline-none focus:outline-none ">
      {children}
    </button>
  );
};

export { BtnPrimary };
