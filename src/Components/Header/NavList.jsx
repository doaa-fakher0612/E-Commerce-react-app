import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function NavList() {
  const location = useLocation();

  const links = [
    { path: "/", label: "Home", id: "home" },
    { path: "/about-page", label: "About", id: "about" },
    { path: "/contact-page", label: "Contact", id: "contact" },
  ];

  return (
    <ul className="list hidden items-center justify-between gap-3 md:flex">
      {links.map((link) => {
        const isSelected = location.pathname === link.path;

 
       
        return (
          <li key={link.id}>
            <Link
              to={link.path}
              id={link.id}
              className={`break-words text-xs transition-colors md:text-base hover:text-secondaryLight
                 ${isSelected ? "bg-orange-100 text-orange-500 font-semibold rounded px-2 py-1" : "text-black"}`}
            >
              {link.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
