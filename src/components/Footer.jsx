import React from "react";
import { Logo } from "../assets/images";

const Footer = () => {
  return (
  <>
  <div className=" bg-[#4caf50] h-4 w-full"></div>
    <div className="relative" id="footer">

      <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
      <div
        className="absolute w-full h-[180vh] sm:h-[170vh] md:h-[80vh] inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage:
            "url('https://www.nationalpoultry.com/wp-content/themes/npc/images/bg_footer.jpg')",
        }}
      >
        <div className="  z-20 w-full py-8 px-2 xd:px-8  ">
          <div className="max-w-7xl m-auto sm:flex justify-between items-center space-y-3 sm:space-x-16">
            <div className="">
            <a href="/">
              <img src={Logo} className="w-12" alt="logo" />
            </a>
            </div>
            <div className="flex items-center sm:space-x-4">
              <i className="fas fa-envelope text-[#FFEB3B] text-3xl"></i>
              <div className="text-white">
                <p>Email Address</p>
                <p>inquiry@vitabanagro.com</p>
              </div>
            </div>

            <div className="flex items-center sm:space-x-4">
              <i className="fas fa-phone text-[#FFEB3B] text-3xl"></i>
              <div className="text-white">
                <p>Call Now</p>
                <p>+2347041720309</p>
                <p>+2349122822074</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-transparent top-10 text-white  z-20 w-full  py-8 px-2 xd:px-8">
          <div className="max-w-7xl mx-auto ">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h2 className=" text-lg font-bold">About</h2>
                <p className=" mt-4">
                Welcome to Vitabanagro
                your source for grains, seeds and more .
                </p>
                <p className=" mt-4 text-10px">
                  Suite 55, Block A, Primal Tek Plaza, 63/65 Egbeda-Idimu Road, <br />
                  by Mokola Bus Stop, Egbeda, Lagos State, Nigeria
                </p>
                <div className="flex space-x-4 mt-4">
                  <i className="fab fa-facebook text-white text-2xl"></i>
                  <i className="fab fa-twitter text-white text-2xl"></i>
                  <i className="fab fa-pinterest text-white text-2xl"></i>
                  <i className="fab fa-instagram text-white text-2xl"></i>
                </div>
              </div>
              <div>
                <h2 className="text-white text-lg font-bold">Links</h2>
                <ul className="mt-4 space-y-2">
                  <li>
                    <a href="/our-products">Our Projects</a>
                  </li>
                  <li>
                    <a href="/about-us">About Us</a>
                  </li>
                  <li>
                    <a href="/about-us">Our Mission</a>
                  </li>
                  <li>
                    <a href="/about-us">Meet the Team</a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="text-white text-lg font-bold">Explore</h2>
                <ul className="mt-4 space-y-2">
                  <li>Site Map</li>
                  <li>Help Center</li>
                  <li>Terms of Use</li>
                  <li>Privacy Policy</li>
                </ul>
              </div>
              <div>
                <h2 className="text-white text-lg font-bold">Newsletter</h2>
                <p className=" mt-4">Sign up now for weekly news and updates</p>
                <div className="mt-4">
                  <input
                    type="email"
                    placeholder="Enter Your Email"
                    className="w-full bg-white text-black p-2 rounded-md"
                  />
                  <button className="bg-[rgb(76,175,80)] w-full mt-2 p-2 rounded-md">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
            <div className="text-center  mt-8">
              <p>© Vitabanagro (c) Vitaban | 2023</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Footer;
