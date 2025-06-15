import React from "react";

export default function CartMenu({ cart, setCart }) {
  function handelRemoveItem(cartId) {
    const indexToRemove = cart.findIndex((product) => product.id === cartId);
    // const updatedCart = [...cart]; // copy the original cart
    // updatedCart.splice(indexToRemove, 1); // remove one item at the found index
    // setCart(updatedCart);
   const updatedCart =  cart.filter(product => product.id !== cartId);
   setCart(updatedCart);
  }

  return (
    <div
      id="cart-menu"
      className="absolute -left-32 top-12 z-50  h-44 w-44 flex-col items-center justify-between overflow-auto rounded bg-white p-4 text-sm shadow-lg shadow-gray-700 md:-left-72 md:top-12 md:h-72 md:w-96 md:text-base"
    >
      {!cart.length ? (
        <h4 className="text-center">There is No Items</h4>
      ) : (
        cart.map((product) => (
          <div id="cart-items"  key={product.id} className="flex flex-col gap-2 w-full">
            <div  className= "cart-item flex flex-row gap-4 w-full p-2">
              <div
               
                className="img-div w-32 h-32 md:w-20 md:h-20 rounded flex flex-col gap-2"
              >
                <img
                  className="img w-full h-full rounded object-contain"
                  src={product.image}
                ></img>
              </div>
              <div  className="data flex flex-col justify-center gap-2">
                <h4>{product.title}</h4>
                <h5 className="text-orange-600 font-bold md:text-xl text-base">
                  Price: {product.price}$
                </h5>
              </div>
            </div>
            <button
              className="rounded w-full p-3 bg-orange-500 text-white text-sm hover:bg-orange-600"
              onClick={() => handelRemoveItem(product.id)}
            >
              Remove Item
            </button>
          </div>
        ))
      )}
    </div>
  );
}
