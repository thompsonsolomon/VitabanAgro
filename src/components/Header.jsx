import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { Hero } from "../assets/images";


const Header = () => {
  return (
    <div className="relative h-[60dvh] md:h-screen">
      <img
        src={Hero}
        alt="Agricultural background"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      <div className="absolute flex MobileHeroTextCon md:justify-right   items-right  w-full h-full  top-0   text-center">
        <div className="w-full MobileHeroText banner__box absolute text-black bg-[rgb(245,245,245)] z-20 bottom-0 element--border-top-right-arch animate animate--step-in animate--loaded content-box--text-align-left">
          <div className="flex flex-col gap-4">
            <h2 className="text-[2.56rem] leading-tight text-black font-serif font-normal">
              WE Grow The Best Crops
            </h2>
            <div style={{ "--i": 2 }} className="SmWhite type--accent text-black copy--medium ">
              WITH 100% DEDICATION TO BRING FRESH PRODUCE FROM  FARM TO YOUR TABLE
            </div>
            <div className="text-[1.25rem] SmWhite font-normal text-black max-w-[45rem]">
              Place Order Nation Wide
            </div>
            <div className="content-box__buttons  text-black" style={{ '--i': 4 }}>
              <a
                href="/our-products"
                className="button button--secondary"
              >
                Shop All
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
