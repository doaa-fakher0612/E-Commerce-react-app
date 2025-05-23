import React from "react";
import { Link } from "react-router-dom";
import ContactPage from "../Pages/ContactPage";

export default function NavList() {
  return (
    <>
      <ul className="list hidden items-center justify-between gap-3 md:flex">
        <li>
          <Link
            to="/"
            id = "home"
            className=" break-words text-xs transition-colors md:text-base md:text-secondaryLight"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/AboutPage"
            id = "about"
            className=" break-words text-xs transition-colors hover:text-secondaryLight md:text-base"
          >
            About
          </Link>
        </li>

        <li>
          <Link
            to="/ContactPage"
            id = "contact"
            className=" break-words text-xs transition-colors hover:text-secondaryLight md:text-base"
          >
            Contact
          </Link>
        </li>
      </ul>
    </>
  );
}

