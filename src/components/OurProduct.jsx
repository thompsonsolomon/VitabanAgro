// import React, { useEffect, useState } from "react";
// import Product from "../components/Product/Product";
// import { Grain } from "../assets/images";
// import Slider from 'react-slick';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const OurProduct = () => {

//   const images = [
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs96gZuJ9hfyX8mAU3SdKE8Je9EP_x-CxppUmiZWwXs4snbO_u&s",
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhzjhC1QP5IYOIfxlq_poa3KsOyJOrlkcc8H11hCTV6J501lc&s",
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDMb-XmF_8E7WgWsKnd2Ih-vZFQcWqNMr2gtwvOmEYhhCOxnE&s",
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDMb-XmF_8E7WgWsKnd2Ih-vZFQcWqNMr2gtwvOmEYhhCOxnE&s",
//     "https://firebasestorage.googleapis.com/v0/b/vitabanagrow.appspot.com/o/files%2Fbeans-edited.jpg?alt=media&token=6751ee8a-a69a-4df8-81c2-edc39841e85a",
//   ];

//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 5000,
//     fade: true,
//   };

//   const [currentImage, setCurrentImage] = useState("");
//   useEffect(() => {
//     // Function to pick a random image from the array
//     const changeImage = () => {
//       const randomImage = images[Math.floor(Math.random() * images.length)];
//       setCurrentImage(randomImage);
//     };

//     // Set the initial image
//     changeImage();

//     // Change image every 5 seconds
//     const intervalId = setInterval(changeImage, 5000);

//     // Cleanup the interval when the component unmounts
//     return () => clearInterval(intervalId);
//   }, []); // Run once when the component mounts


//   return (
//     <div className="bg-white">
//       {/* <div className="relative   LandingPage">  
//         <img
//           src={Grain}
//           alt=""
//           width="1000"
//           loading="eager"
//           sizes="100vw"
//           className="banner__image1 block height-[100dvh] "
//         ></img>
//         <div className="w-full banner__box absolute right-0 text-black bg-[rgb(245,245,245)] z-20 bottom-0 rounded-tl-[180px] animate animate--step-in animate--loaded text-right ">
//           <div className="flex flex-col gap-4">
//             <h2 className="text-[2.56rem] leading-tight text-black font-serif font-normal">
//               Our Products
//             </h2>
//             <div style={{ "--i": 2 }} className=" type--accent text-black copy--medium ">
//               FOR 100% ORGANIC + PASTURE RAISED + CORN FREE + SOY FREE MEATS
//             </div>
//             <div className="text-[1.25rem] font-normal text-black max-w-[45rem]">
//               Delivered to your doorstep nationwide
//             </div>
//             <div className="content-box__buttons text-black" style={{ '--i': 4 }}>

//               <a
//                 href="#Products"
//                 className="button button--secondary"
//               >
//                 Best Shopping experience
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//          */}


//       <div id="Products" className="bg-white ">
//         <Product />
//       </div>

//     </div>
//   );
// };

// export default OurProduct;


import React from "react";
import Product from "../components/Product/Product";
import { Grain, ProductImage } from "../assets/images";

const OurProduct = () => {
  return (
    <div className="bg-white">
      <div className="relative h-[60vh]">
        <img
          src={ProductImage}
          alt="Agricultural background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-80"></div>
        <div className="absolute flex justify-center  items-center  w-full h-full  top-0   text-center">
          {/*
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl leading-tight text-black font-serif font-normal">
              Our Products
            </h2>
            <div className="text-sm md:text-base lg:text-lg text-black font-medium">
              FOR 100% ORGANIC + PASTURE RAISED + CORN FREE + SOY FREE MEATS
            </div>
            <div className="text-base md:text-lg lg:text-xl font-normal text-black">
              Delivered to your doorstep nationwide
            </div>
            <div className="mt-4">
              <a
                href="#Products"
                className="inline-block bg-green-600 text-white px-6 py-3 rounded-full text-sm md:text-base font-semibold hover:bg-green-700 transition duration-300"
              >
                Best Shopping Experience
              </a>
            </div>
          </div>
          */}
          <div>
            <h2>Buy cheaper, fresher, traceable farm produce!
            </h2>
            <p>Have it delivered in 24 to 48 hours</p>
            <div className="mt-4">
              <a
                href="#Products"
                className="inline-block bg-green-600 text-white px-6 py-3 rounded-full text-sm md:text-base font-semibold hover:bg-green-700 transition duration-300"
              >
                Best Shopping Experience
              </a>
            </div>
          </div>

        </div>
      </div>

      <div id="Products" className="bg-white">
        <Product />
      </div>
    </div>
  );
};

export default OurProduct;