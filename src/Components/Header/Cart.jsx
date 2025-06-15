import React from "react";
import CartMenu from "./CartMenu";
import { FaCartShopping } from "react-icons/fa6";

export default function Cart({cart,setCart}) {
  let [showCartMenu, setShowCartMenu] = React.useState(false);
  // initial set for set cart counter


  return (
    <>
      <div
        id="cart"
        className="relative"
        onMouseEnter={() => setShowCartMenu(true)}
        onMouseLeave={() => setShowCartMenu(false)}
      >
        <FaCartShopping className="cart m-5 md:text-2xl" />

    {console.log( cart)}
        <div id="cart-counter"
             className="absolute top-1 right-0 z-50 flex h-4 w-4 items-center justify-center rounded-full bg-orange-500 text-center text-xs text-white md:left-9 md:top-1 md:h-5 md:w-5 md:text-sm"
        >
      {cart?.length || 0}
        </div>

        {showCartMenu && <CartMenu cart={cart} setCart={setCart} />}
      </div>
    </>
  );
}
