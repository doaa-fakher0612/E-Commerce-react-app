import React from "react";

 export default function NavList(){
return(
    <>
     <ul className="list hidden items-center  justify-between gap-3 md:flex">
                <li>
                    <a href = "#" className="home break-words text-xs transition-colors md:text-base md:text-secondaryLight">Home</a>
                </li>
                <li>
                    <a href = "#" className="about break-words text-xs transition-colors hover:text-secondaryLight md:text-base">About</a>
                </li>
                <li>
                    <a href= "#" className="contact break-words text-xs transition-colors hover:text-secondaryLight md:text-base" >Contact</a>
                </li>
            </ul>       
    </>
)
}