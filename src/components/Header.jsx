import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { Hero } from "../assets/images";


const Header = () => {
  return (
    <header className="relative h-[80vh]">
      <div className="absolute inset-0 bg-black opacity-20 md:bg-opacity-40 z-10"></div>
      <div
        className="absolute inset-0  md:block sm:bg-cover bg-center z-0"
        style={{
          backgroundImage:
            `url(${Hero})`,
        }}
      >
        <img
          src={Hero}
          alt=""
          width="1000"
          height="1500"
          loading="eager"
          sizes="100vw"
          className="block md:hidden banner__image"
        ></img>
      </div>
      {/* Fixed Navigation Bar with Conditional Background */}
      <Navbar />

      <div className="w-full banner__box absolute text-black bg-[rgb(245,245,245)] z-20 bottom-0 element--border-top-right-arch animate animate--step-in animate--loaded content-box--text-align-left">
        <div className="flex flex-col gap-4">
          <h2 className="text-[2.56rem] leading-tight text-black font-serif font-normal">
            WE Grow The Best Fruits
          </h2>
          <div style={{ "--i": 2 }} className=" type--accent text-black copy--medium ">
            WITH 100% DEDICATION TO BRING FRESH PRODUCE FROM  FARM TO YOUR TABLE 
          </div>
          <div className="text-[1.25rem] font-normal text-black max-w-[45rem]">
            Place Order Nation Wide
          </div>
          <div className="content-box__buttons text-black" style={{ '--i': 4 }}>
            {/* <a
              href="/products/primalbox"
              className="button"
              data-samitapbl-handle="primalbox"
            >
              Choose Your Plan
            </a> */}
            <a
              href="/our-products"
              className="button button--secondary"
            >
              Shop All
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
    </header>
  );
};

export default Header;
