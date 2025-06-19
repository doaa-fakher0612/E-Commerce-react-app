import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import img from "../../assets/eCommerceLogo.jpg";

console.log(img);
export default function AboutPage({cartState}) {
    const { cart, setCart } = cartState;
    
  return (
    <div
      id="main-container"
      className=" mx-auto flex min-h-screen w-full flex-col gap-2"
    >
      <Header cart={cart} setCart={setCart}></Header>

      <div className=" flex w-full min-h-screen flex-row items-center justify-between bg-white p-3">
        <div className="text">
          <h1 className="p-3 text-base font-bold text-black md:text-3xl">
            Hello To The World Of E-Commerce
          </h1>

          <p className="p-3 text-base md:text-xl">
            Here Iam gonna share everything about my life. Books Iam reading,
            Games Iam Playing, Stories and Events
          </p>
        </div>

        <div className="flex flex-grow items-center justify-center h-full">
          <img
            className="h-full w-full md:object-contain"
            src={img}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
