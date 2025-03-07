import React, { useState, useEffect } from "react";
import Foot from "./Footer/Footer";

const Footer = () => {
  const [IsTrue, setTrue] = useState(false)
  const params = window.location.pathname;
  useEffect(() => {
    if (params.includes("ordercompleted")) {
      setTrue(true)
    }
    if (params.includes("admin")) {
      setTrue(true)
    }

    if (params.includes("checkout")) {
      setTrue(true)
    }
  }, [params])
  return (
    <>
      <div className=" bg-[#4caf50] h-4 w-full"></div>
      <div style={{ display: `${IsTrue ? "none" : ""}` }}>
        <Foot />
      </div>
    </>
  );
};

export default Footer;
