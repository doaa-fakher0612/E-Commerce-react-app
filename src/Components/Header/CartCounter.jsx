import React from "react";


export default function CartCounter({sharedCounter}){
  console.log("CartCounter Props: ", { sharedCounter });

    return(
        <>
          <div
                  id="cart-counter"
                  className="absolute top-1 right-0 z-50 flex h-4 w-4 items-center justify-center rounded-full bg-orange-500 text-center text-xs text-white md:left-9 md:top-1 md:h-5 md:w-5 md:text-sm"
                >
                  {sharedCounter !== undefined ? sharedCounter : 0}
                </div>
        </>
    )
}