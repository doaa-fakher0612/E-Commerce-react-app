import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
export default function ContactPage() {
  return (

   
    <div
      id="main-container"
      className=" mx-auto flex min-h-screen w-full flex-col gap-2"
    >
       <Header />

       <div
       id="main-content"
        className="flex flex-grow flex-col items-center justify-start gap-4 p-4"
      >
         <h1 className="p-3 text-base font-bold text-black md:text-3xl">
           Contact_Us
        </h1>

       <form id="myForm" className="flex flex-col items-center gap-4">
         <input
            id="name"
             required
             type="text"
             placeholder="Name"
            className="w-56 border-b-2 border-gray-400 bg-gray-100 p-2 outline-none md:w-80 md:p-3"
          />
          <span className="erroe" id="name-error"></span>
          <input
            type="email"
          required
            id="email"
             placeholder="Email"
            className="w-56 border-b-2 border-gray-400 bg-gray-100 p-1 outline-none md:w-80 md:p-2"
          />
         <span class="error" id="email-error"></span>
           <input
            type="password"
            id="password"
            placeholder="Password"
            required
            minlength="8"
            className="w-56 border-b-2 border-gray-400 bg-gray-100 p-2 outline-none md:w-80 md:p-2"
          />
          <span className="error" id="password-error"></span>

          <textarea
            placeholder="How may we help you?"
            id="msg"
            required
            maxlength="500"
            className="h-56 w-56 border-b-2 border-gray-400 bg-gray-100 p-1 outline-none md:w-80 md:p-3"
          ></textarea>
        <span className="error" id="message-error"></span>

          <button
            id="submit"
            onclick="handelSubmit()"
            className="w-56 cursor-pointer bg-orange-500 p-1 text-white outline-none active:bg-orange-700 md:w-80 md:p-2"
            type="submit"
          >
          Contact-Us
           </button>
       </form>
     </div>

      <Footer />
   </div>
  );
}
