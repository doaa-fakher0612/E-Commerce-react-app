import React from "react";
import Logo from "./Logo";
import Navbar from "./Navbar";

export default function Header({ sharedCounter, setSharedCounter }) {
  return (
    <header
      id="header"
      className="fixed top-0 z-50 flex h-10 w-full items-center justify-between gap-1 bg-red-200 px-3 py-6 md:h-20 md:px-8"
    >
      <Logo />
      <Navbar
        sharedCounter={sharedCounter}
        setSharedCounter={setSharedCounter}
      ></Navbar>
    </header>
  );
}
