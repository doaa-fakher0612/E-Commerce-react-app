import React from "react";
import Cart from "./Cart";
import NavList from "./NavList";
import { IoIosMenu } from "react-icons/io";

export default function Navbar() {
  return (
    <>
      <nav className="flex items-center gap-4 text-base md:text-lg">
        <NavList />
        <Cart />

        <div id="nav-menu" className="nav-menu flex md:hidden relative ">
          <IoIosMenu />
          <div
            id="nav-menu-content"
            className="absolute -left-14 top-4 hidden w-20 bg-white rounded p-2 shadow-lg shadow-gray-700">
            <NavList/>
          </div>
        </div>
      </nav>
    </>
  );
}
