import React from "react";
import Logo from "./Logo"
import Nav from "./Nav"

export default function Header(){
    return(
      <header id = "header" className="fixed top-0 z-50 flex h-10 w-full items-center justify-between gap-1 bg-white px-3 py-6 md:h-20 md:px-8">
        <Logo></Logo>
        <Nav></Nav>
      </header>
    )
}