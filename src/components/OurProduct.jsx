import React from "react";
import Product from "../components/Product/Product";

const OurProduct = () => {
  return (
    <div className="bg-white">
      <div className="relative   h-[60vh]">
        <div className="absolute inset-0 bg-black bg-opacity-20 z-10"></div>
        <div
          className="absolute inset-0 bg-contain bg-center z-0"
          style={{
            backgroundImage:
              "url('https://kitchendivas.com/wp-content/uploads/2016/03/honey-roasted-chicken-recipe-500x375.jpg')",
          }}
        ></div>
        
        <div className="w-full banner__box absolute right-0 text-black bg-[rgb(245,245,245)] z-20 bottom-0 rounded-tl-[180px] animate animate--step-in animate--loaded text-right ">
        <div className="flex flex-col gap-4">
          <h2 className="text-[2.56rem] leading-tight text-black font-serif font-normal">
            Out Products
          </h2>
          <div style={{ "--i": 2 }} className=" type--accent text-black copy--medium ">
            FOR 100% ORGANIC + PASTURE RAISED + CORN FREE + SOY FREE MEATS
          </div>
          <div className="text-[1.25rem] font-normal text-black max-w-[45rem]">
            Delivered to your doorstep nationwide
          </div>
          <div className="content-box__buttons text-black" style={{'--i': 4}}>
            {/* <a
              href="/products/primalbox"
              className="button"
              data-samitapbl-handle="primalbox"
            >
              Choose Your Plan
            </a> */}
            <a
              href="#Products"
              className="button button--secondary"
            >
              Best Shopping experience
            </a>
          </div>
        </div>
      </div>
     
      </div>
      <div id="Products" className="bg-white ">
         <Product/>
      </div>
        
    </div>
  );
};

export default OurProduct;
