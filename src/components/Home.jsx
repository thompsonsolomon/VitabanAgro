import React from "react";
import Header from "./Header";
import FAQitem from "./FAQItem";
import { Grain, image3, image4, Oil, Rubber } from "../assets/images";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div>
        <Header />
        <div className=" max-w-7xl mx-auto px-4">
          <div className="WhatWEDoContainer invest">
            <div className="imageCon">
              <img src={image4} alt="WhatWeBring" />
            </div>
            <div className="tetCon">
              <div className="heading">
                <hr />
                <h3>what to benefit from us</h3>
              </div>
              <h2>
                Investment Opportunities
              </h2>
              <p>
                VITABAN AGRO SUPPLIERS LTD (VTB-Agro) has built a successful investment model that enables discerning investors take advantage of the thriving agricultural sector.

                To participate in our investment program, just select the option that suits you, fill out the following form and a live business support officer will start communicating with you. You make your investment and we do the rest.
              </p>

              <Link to="/contact" className="mt-6 px-3 py-1.5 bg-[#4caf50] text-[white] font-semibold rounded-[4px]">
                Learn More
              </Link>
            </div>
          </div>
        </div>

        <div className="whyYouNeedUs   max-w-7xl mx-auto px-4">
          <div className="WhatWEDoContainer">
            <div className="tetCon">
              <div className="heading">
                <hr />
                <h3>Why you need us </h3>
              </div>
              <h2>
                PROVIDING EXCEPTIONAL LANDSCAPING
              </h2>
              <p>
                We are not talking about just any “Landscaping”, we are depicting what it means to provide exceptional agricultural landscaping in improving your business and way of life.
              </p>
              <Link to="/contact" className="mt-6 px-3 py-1.5 bg-[#4caf50] text-[white] font-semibold rounded-[4px]">
                Learn More
              </Link>
            </div>
            <div className="imageCon">
              <img src={image3} alt="WhatWeBring" />
            </div>
          </div>
        </div>
        {/* Why you need us  */}
        {/* investMebnt Opp
         */}
        <section className="bg-[#f5f5f5] py-12">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 xs:w-[90%] sm:w-[80%] m-auto md:w-full">
              <div className="relative">
                <img
                  src="https://thumbs.dreamstime.com/b/white-sheep-blue-paint-marks-white-sheep-blue-painted-marks-field-99537198.jpg"
                  alt="Photo Gallery"
                  className="w-full h-[400px] object-cover rounded-[8px]"
                />
                <div className=" absolute bottom-14 right-0 text-xl text-[#4caf50] p-4 rounded-[8px] bg-white">
                  {" "}
                  Sheep Coming Soon
                </div>
              </div>
              <div className="bg-white">
                <FAQitem />
              </div>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default Home;
