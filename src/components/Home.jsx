import React from "react";
import Header from "./Header";
import FAQitem from "./FAQItem";
import { Grain,  image3, image4, Oil, Rubber } from "../assets/images";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div>
        <Header />
        {/* <section className="bg-[rgb(245,245,245)]  py-12 px-2 xd:px-8">
          <div className="max-w-7xl sm:flex space-y-8 sm:space-y-0 items-start m-auto w-[90%]">
            <div className="sm:w-[60%]">
              <h2 className="text-2xl xs:text-[45px] text-[#4caf50] font-bold">
                Become An Investor              </h2>
              <a href="/about-us">
                <button className="mt-6 px-3 py-1.5 bg-[#4caf50] text-[white] font-semibold rounded-[4px]">
                  Learn More
                </button>
              </a>
            </div>
            <div className="sm:w-[70%] space-y-5">
              <p className="xs:text-lg text-black font-bold">
                WE SUPPLY QUALITY COTTON ALL-YEAR ROUND THROUGH OUR NETWORK OF GROWERS.             </p>
              <p className="mt-4 text-black  text-[18px]">
                VTB-AGRO has an integrated ginning process in cotton farming which makes production easier and faster for our farmers. Cotton is a source of income for over 100 million families worldwide, and can be used for production of so many things.


              </p>
              <p className="text-black ">


                Our customers benefit from our broad operations, with a traceable, sustainable source of quality cotton and as a result, we’re chosen as a major supplier by textile mills/industry in all major markets.



                Our cotton farms are resistance to pest which can be transported for longer month and kept without having any issues of spoilage.
              </p>
            </div>
          </div>
        </section> */}

        {/* <section id="services" className="bg-[#f5f5f5] text-black py-12">
          <div className="max-w-7xl mx-auto px-4">
            Showcasing Clairedre Farms' Experience and Offerings
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 xs:w-[90%] m-auto md:w-full">
              <div className="relative">
                <img
                  src="https://primalpastures.com/cdn/shop/files/PrimalPasturesJune2023-133_1.jpg?v=1688620985&width=550"
                  alt="Experience"
                  className="w-full h-[600px] object-cover"
                />
              </div>
              <div className="flex flex-col text-black  justify-center py-8 px-4 md:px-16 space-y-4">
                <h2 className="text-3xl font-bold">
                  The Cleanest Meat in Canada
                </h2>
                <p className="text-lg text-black italic">"You are what you eat eats."</p>
                <p className="text-lg">
                  We've set the gold standard for nutrient density since
                  starting with 50 birds in our SoCal backyard in 2012, and we
                  have never compromised on our values.
                </p>
                <div className="text-md text-black font-medium">
                  SEE HOW OUR CHICKEN STACKS UP BELOW
                </div>
              </div>

              
            </div> 


            <div className="AgroProducts">
              <div className="heading">
                <h2>

                  OUR AGRO PRODUCTS ARE AVAILABLE FOR YOU ANYTIME
                </h2>
                <p>
                  We are always available to deliver any agro-products to you wherever you are around the globe. It takes us nothing to bring them directly to you.
                </p>

              </div>
              <div className="CardContainer">
                <div className="card">
                  <div className="cardImg">
                    <img src={Grain} alt="grain" />
                  </div>
                  <div className="tetCon">
                    <h2>
                      Grain
                    </h2>
                    <p>
                      We produce whole grains & oilseeds supply chain, and

                      <br /> producing added-value products.
                    </p>
                  </div>
                </div>
                <div className="card">
                  <div className="cardImg">
                    <img src={Oil} alt="oil" />
                  </div>
                  <div className="tetCon">
                    <h2>
                      Palm Oil
                    </h2>
                    <p>
                      Combined with our advanced risk management expertise and tools, we’re able to manage supply For Clients All over the World
                    </p>
                  </div>
                </div>
                <div className="card">
                  <div className="cardImg">
                    <img src={Rubber} alt="" />
                  </div>
                  <div className="tetCon">
                    <h2>
                      Rubber                    </h2>
                    <p>
                      We source natural rubber cup lumps and process it technically to meet customer’s satisfaction.                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        {/* <Table /> */}
        <div className="BecomInvestor  max-w-7xl mx-auto px-4">
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

              <Link className="mt-6 px-3 py-1.5 bg-[#4caf50] text-[white] font-semibold rounded-[4px]">
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
              We are not talking about just any “Landscaping”, we are depicting what it means to provide exceptional agricultural landscaping in improving your business and way of life.
              <Link className="mt-6 px-3 py-1.5 bg-[#4caf50] text-[white] font-semibold rounded-[4px]">
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
              <div className="bg-white">
                <FAQitem />
              </div>
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
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default Home;
