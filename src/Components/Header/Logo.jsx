import React from "react";

export default function Logo() {
  return (
    <>
      <div id="logo-container" className="logo-container h-10 w-10 md:h-20 md:w-20">
        <a href="#header">
          <img
            src="src\assets\eCommerce-logo.jpg"
            className="h-full w-full cursor-pointer object-contain"
          />
        </a>

      </div>
    </>
  );
}
