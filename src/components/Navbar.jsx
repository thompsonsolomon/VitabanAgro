import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { BiShoppingBag, BiUser } from "react-icons/bi";
import Card from "./Navbar/Card";
import { Logo } from "../assets/images";
import { useUser } from "../Context/userContext";
import { useNavigate, useParams } from "react-router";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [cardOpen, setCardOpen] = useState(false);
  const [ProfileOpen, setProfileOpen] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  const navigate = useNavigate()
  const params = window.location.pathname;
  useEffect(() => {
    if (params.includes("admin")) {
      setIsAdmin(true)
    }

  }, [params])
  const openCard = () => {
    setCardOpen((prev) => !prev);
  };
  const openMenu = () => {
    setMenuOpen((prev) => !prev);
  };
  const OpenProfile = () => {
    setProfileOpen((prev) => !prev);
  };
  const ReRoute = () => {
    navigate("/signup")
  }

  const quantity = useSelector((state) => state.cart.totalQuantity);
  if (quantity > 0) {
    localStorage.setItem("Quantity", JSON.stringify(quantity));
  }

  let _Quantity = JSON.parse(localStorage.getItem("Quantity"));
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else if (params.includes("/contact")) {
        setIsScrolled(true);
      } else if (params.includes("/checkout")) {
        setIsScrolled(true);
      } else if (params.includes("/products")) {
      setIsScrolled(true);
    } 
    else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      {cardOpen ? (
        <Card
          openCard={openCard}
        // total={total}
        />
      ) : (
        ""
      )}
      {ProfileOpen ? (
        <Profile
          openProfile={OpenProfile}
        // total={total}
        />
      ) : (
        ""
      )}

      <div
        className={`fixed top-0 left-0 w-full ${isAdmin && "hidden"} z-50 py-3 px-2 xd:px-8 transition-colors respoWhite duration-300 ${isScrolled
          ? "bg-white text-black drop-shadow-xl"
          : "bg-transparent text-white"
          }`}
      >
        <div className="relative max-w-7xl m-auto flex items-center justify-between">
          <button
            className={`respoWhite ${isScrolled ? " text-black drop-shadow-xl block md:hidden" : " text-white block md:hidden"
              }`}
            onClick={openMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
          <div className="flex items-center justify-center bg-red">
            <a href="/home">
              <img src={Logo} className="w-[100px]" alt="logo" />
            </a>
          </div>
          <div className="hidden md:flex items-center  justify-center  space-x-8">
            <a href="/home" className=" text-lg">
              Home
            </a>
            <a href="/about-us" className=" text-lg">
              About us
            </a>
            {/* <a href="#services" className=" text-lg">
              Services
            </a> */}
            <a href="/" className=" text-lg">
              Our Products
            </a>
            <a href="/contact" className=" text-lg">
              Contact
            </a>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            {
              params === "/" ? "" :

                <a
                  href="/"
                  className="bg-[#4caf50]  py-2 px-4 rounded-full flex items-center justify-center"
                >
                  <span className="mr-2 text-white">Shop Now</span>
                  <i className="fas fa-arrow-right"></i>
                </a>
            }
            <div
              onClick={openCard}
              className="flex cursor-pointer items-start mr-[20px] "
            >
              <BiShoppingBag size={27} />
              <span>{_Quantity}</span>
            </div>
          </div>
          <div className="md:hidden flex items-center">



            <div
              onClick={openCard}
              className="flex cursor-pointer items-start "
            >
              <BiShoppingBag size={27} />
              <span>{quantity}</span>
            </div>
          </div>
        </div>
      </div>


      {/* Mobile  */}
      <div
        onClick={openMenu}
        className={`fixed top-0 left-0 inset-0 z-40 w-full bg-black bg-opacity-90 transform ${menuOpen ? "translate-y-0" : "-translate-y-full"
          } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <div
          onClick={openMenu}
          className="flex flex-col items-center space-y-6 justify-center m-auto h-full py-8"
        >
          <a href="/home" className="text-[#8cc63f] text-lg">
            Home
          </a>
          <a href="/about-us" className="text-white text-lg">
            About us
          </a>
          {/* <a href="#services" className="text-white text-lg">
            Services
          </a> */}
          <a href="/" className="text-white text-lg">
            Our Products
          </a>
          <a href="/contact" className="text-white text-lg">
            Contact
          </a>

        </div>
      </div>
    </>
  );
};

export default Navbar;
