import React from "react";
import CartCounter from "./CartCounter";
import CartMenu from "./CartMenu";
import { FaCartShopping } from "react-icons/fa6";


export default function Cart({ sharedCounter, setSharedCounter }) {
  let [showCartMenu, setShowCartMenu] = React.useState(false);

  console.log("Cart Props: ", { sharedCounter, setSharedCounter });

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

        <CartCounter
          sharedCounter={sharedCounter}
          setSharedCounter={setSharedCounter}
        ></CartCounter>

        {showCartMenu && <CartMenu />}
      </div>
    </>
  );
}
