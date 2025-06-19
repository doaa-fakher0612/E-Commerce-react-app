import React from "react";
import logo from "../../assets/eCommerceLogo.jpg"
export default function Logo() {
  return (
    <>
      <div id="logo-container" className="logo-container h-10 w-10 md:h-20 md:w-20">
        <a href="#header">
          <img
            src= {logo}
            className="h-full w-full cursor-pointer object-contain"
          />
        </a>

      </div>
    </>
  );
}
