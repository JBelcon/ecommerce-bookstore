import React from "react";
import { Logo } from "./Logo";
import { Navbar } from "./Navbar";
import { User } from "./User";

const Header = () => {
  return (
    <header className="">
      <section className="border-b-2 border-black h-16 flex justify-between items-center px-8">
        <Logo />
        <Navbar />
        <User />
      </section>
    </header>
  );
};

export { Header };
