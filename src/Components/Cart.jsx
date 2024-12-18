import React from "react";
import { FaCartShopping } from "react-icons/fa6";

export default function Cart() {
  return (
    <>
      <div id="cart-container" className="relative">
      <FaCartShopping className="cart m-5 md:text-2xl" />
        <div
          id="cart-counter"
          class="absolute top-1 right-0 z-50 flex h-4 w-4 items-center justify-center rounded-full bg-orange-500 text-center text-xs text-white md:left-9 md:top-1 md:h-5 md:w-5 md:text-sm"
        >
          0
        </div>
      </div>
    </>
  );
}
