import React from "react";
import { Outlet } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
// import Navbar from "../components/Navbar";

const Layout = () => {
  return (
    <div className="flex flex-col justify-between h-[100vh] ">
      <header>
        <Navbar/>
      </header>
      {/* <main> */}
      <Outlet />
      {/* </main> */}
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
