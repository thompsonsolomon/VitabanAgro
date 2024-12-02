import React from "react";
import { Hero } from "../assets/images";
import { Team1, Team2, Team3, Team4 } from "../assets/images";

const Aboutus = () => {
  return (
    <div>
      <div className="relative  AboutusHeader h-[100vh]">
        <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
        <div
          className="absolute inset-0 bg-center bg-cover z-0"
          style={{
            backgroundImage:
              `url(${Hero})`,
          }}
        ></div>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-20">
          <h1 className="text-4xl font-bold mb-6 text-center ">
            AboutUs
          </h1>
          <h2 className="text-3xl font-semibold mb-4 text-center ">
            Welcome to Vitabanagro
          </h2>
        </div>
      </div>
      <div className="flex flex-col items-center  md:py-12 lg:py-20 bg-gray-100">


        <div className="">
          <div className="max-w-7xl mx-auto  py-3 px-2 xd:px-8">


            <div className="">
              <div className="lg:grid lg:grid-cols-1 lg:items-center">
                <div>
                  <h3 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
                    Our Mission
                  </h3>
                  <p className="mt-3 text-lg text-gray-500">
                    “Our mission is to connect the world through agriculture by importing and exporting high-quality, sustainable agricultural products that meet the needs of our customers. We are committed to creating value for our stakeholders by delivering exceptional service, maintaining the highest standards of quality and safety, and promoting sustainable and responsible business practices. We strive to build long-term partnerships with our suppliers and customers based on trust, transparency, and mutual benefit”
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
                    Our Vision
                  </h3>
                  <p className="mt-3 text-lg text-gray-500">
                    “Our vision is to become a leading global player in the agricultural industry by providing high-quality agricultural products and services that meet the needs of our customers. We strive to build a sustainable and profitable business that creates value for our stakeholders while promoting the growth and development of the agricultural sector.
                  </p>
                </div>
              </div>
              <div className="mt-12 lg:mt-20">
                <div className="lg:grid lg:grid-cols-1 lg:items-center">
                  <div className="lg:order-2">
                    <h3 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
                      Meet Our Team
                    </h3>
                    <p className="mt-3 text-lg text-gray-500">
                      Our team is composed of dedicated professionals who are passionate about farming and animal care.
                      We work together to ensure that VTB-AGRO remains a leader in the industry.
                    </p>

                  </div>
                </div>
              </div>
              <div className="mt-12 lg:mt-20">
                <div className="lg:grid lg:grid-cols-1 lg:items-center">
                  <div className="TeamImageAllCon">
                    <div className="ceo">
                      <div className="imageCon">
                        <img src={Team3} alt="ceo" />
                      </div>
                      <div className="tetcon">
                        <span>Vitalis Evan</span> <br />
                        <small><b>Chairman/CEO</b></small>
                      </div>
                    </div>

                    <div className="TeamMembers">
                      <div className="teamCard">
                        <div className="teamImage">
                          <img src={Team1} alt="" />
                        </div>
                        <div className="teamtetcon">
                          <span>Felix Israel</span> <br />
                          <small><b>Managing Director</b></small>
                        </div>
                      </div>
                      <div className="teamCard">
                        <div className="teamImage">
                          <img src={Team2} alt="" />
                        </div>
                        <div className="teamtetcon">
                          <span>Uwakwe Theresa</span> <br />
                          <small><b>Secretary/PRO</b></small>
                        </div>
                      </div>
                      <div className="teamCard">
                        <div className="teamImage">
                          <img src={Team4} alt="" />
                        </div>
                        <div className="teamtetcon">
                          <span>John Elvis Nwanneka</span> <br />
                          <small><b>Sales Manager</b></small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
