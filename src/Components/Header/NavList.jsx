import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function NavList() {
  const location = useLocation();
  console.log(location);

  const [selected, setSelected] = useState(location.pathname);

  useEffect(() => {
    setSelected(location.pathname);
  }, [location.pathname]);

  const links = [
    { path: "/", label: "Home", id: "home" },
    { path: "/AboutPage", label: "About", id: "about" },
    { path: "/ContactPage", label: "Contact", id: "contact" },
  ];

  return (
    <ul className="list hidden items-center justify-between gap-3 md:flex">
      {links.map((link) => {
        const isSelected = selected === link.path;

        console.log("selected : " + selected + "   isSelected:  " + isSelected);
        console.log("current path:", location.pathname);
        console.log("selected state:", selected);
        console.log("link.path:", link.path);
        console.log("__________________________________________")
        return (
          <li key={link.id}>
            <Link
              to={link.path}
              id={link.id}
              className={`break-words text-xs transition-colors md:text-base hover:text-secondaryLight
                 ${isSelected ? "md:text-secondaryLight" : "md:text-base" }`}
            >
              {link.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
