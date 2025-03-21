import React from "react";
import img1 from "../../assets/carousel2.jpg";
import img2 from "../../assets/carousel3.jpg";
import img3 from "../../assets/carousel4.jpg";
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";
export default function Carousel() {
  
  const [carouselImg, setCarouselImg] = React.useState(img1);

  let carouselImgs = [img1, img2, img3];

  return (
    <>
     <div id="carousel" class="relative h-96 w-full bg-red-300">
            <div class="prev absolute flex h-full w-20 items-center justify-center hover:text-primaryLight">
                <button class="group flex size-10 items-center justify-center rounded-full bg-gray-300">
                    <FaArrowLeft  class ="text-blue-950 group-hover:text-primaryLight" />
                </button>
            </div>

            <div class="h-full w-full">
                <img id="carousel_image" src={img1} class="h-full w-full object-cover"/>
            </div>

            <div class="next absolute right-0 top-0 z-30 flex h-full w-20 items-center justify-center">
                <button class="group flex size-10 items-center justify-center rounded-full bg-gray-300">
                <FaArrowRight  class ="text-blue-950 group-hover:text-primaryLight" />
                </button>
            </div>
        </div>
    </>
  );
}
