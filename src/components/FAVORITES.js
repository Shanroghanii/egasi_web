import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/Group 3321.svg";
import NavbarImage1 from "../images/Group 11680.png";
import NavbarImage2 from "../images/Group 11819.png";
import NavbarImage3 from "../images/gil.svg";

import Room from "../images/Room.png";
import like from "../images/1.png";
import comment from "../images/2.png";
import reply from "../images/3.png";
import card from "../images/Group 3347.png";
import car from "../images/car.png";
import bcar from "../images/b car.png";

import bag from "../images/bag.png";
import enginpower from "../images/enginpower.svg";
import km from "../images/km.svg";
import facebook from "../images/facebook.svg";
import Google from "../images/google.svg";
import twitter from "../images/twitter.svg";
import instagram from "../images/instagram.svg";
import paragraph from "../images/paragraph.svg";
import phone from "../images/phone.svg";
import sms from "../images/sms.svg";
import Heartts from "../images/Heartts.svg";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Group401 from "../images/Group 401.svg";
import Group402 from "../images/Group 402.svg";
import Group403 from "../images/Group 403.svg";

const FAVORITES = () => {



  const [toggle, setToggle] = useState(false);
  return (
    <>
      {/*Navbar start*/}
      <div className=" p-1">
        <div className="container  py-[17px] items-center   flex justify-between  mx-auto">
          {/*logo image*/}
          <div className="w-5xl text-3xl">
            <Link to="/home">
              <img className="w-48" src={logo} alt="" />
            </Link>
          </div>

          {toggle ? (
            <AiOutlineClose
              onClick={() => setToggle(!toggle)}
              className="text-gray text-2xl md:hidden block"
            />
          ) : (
            <AiOutlineMenu
              onClick={() => setToggle(!toggle)}
              className="text-gray text-2xl md:hidden block"
            />
          )}

          {/*ul section*/}

          <ul className="hidden md:flex gap-4  ms-auto me-3 pt-2">
            <li className="pt-3">
              <Link to="/home">
                <button className="text-black">Home</button>
              </Link>
            </li>
            <li>
              <Link to="" className="text-white ">
                <button className="bg-orange-500 mt-1 p-3  rounded-full">
                  Created Ad
                </button>
              </Link>
            </li>
          </ul>

          <div className=" hidden md:flex justify-center items-center">
            <img className="w-16 h-16 " src={NavbarImage1} alt="" />
            <img className="w-20 mt-3 " src={NavbarImage3} alt="" />
            <img className="w-16 h-16" src={NavbarImage2} alt="" />
          </div>

          {/*Responsive */}

          <ul
            className={`duration-300 md:hidden w-full  text-white fixed bg-gray-300 top-[92px]
        ${toggle ? "left-[0]" : "left-[-100%]"}
        `}
          >
            <li className="px-2 pt-2">Home</li>
            <li className="p-1">
              <Link to="" className="text-white ">
                <button className="bg-orange-500 mt-2 p-3 mt-4 rounded-full">
                  Created Ad
                </button>
              </Link>
            </li>

            <li className="p-1">
              <img className="w-16 " src={NavbarImage1} alt="" />
            </li>
            <li className="p-1">
              <img className="w-16" src={NavbarImage2} alt="" />
            </li>

            <li className="p-1">
              <img className="w-16 mt-1" src={NavbarImage3} alt="" />
            </li>
          </ul>
        </div>
      </div>
      {/*Navbar end*/}

      {/* Modal */}

      <div className="container mx-auto">
        <h6 className="text-center">FAVORITES</h6>
      </div>

      {/*Recmonded*/}
      <div className="container mx-auto mt-4">
        <div className="grid grid-cols-1   lg:grid-cols-4 xl:grid-cols-4 md:grid-cols-3 md:gap-4  lg:gap-3 justify-items-center">
          <div className="mt-3   shadow-md shadow-white">
            <div className="relative ">
              <img
                className="absolute items-content-end"
                src={Heartts}
                alt=""
                style={{ right: "1px" }}
              />
              <img className="" src={bcar} alt="" />
            </div>
            <div className="bg-white px-2 py-2 ">
              <div className="flex justify-between px-2 gap-3">
                <p className=" text-black" style={{ fontSize: "13px" }}>
                  Toyota for sale
                </p>
                <h6 className="text-orange-300 ">$65,000</h6>
              </div>
              <p
                className="px-2"
                style={{ fontSize: "11px", opacity: "0.3", color: "black" }}
              >
                Lorem ipsum address, New York
              </p>

              <div className="flex justify-between px-2 mb-1">
                <img className="w-4 h-4" src={km} alt="" />
                <spans
                  className=""
                  style={{ fontSize: "10px", opacity: "0.3", color: "black" }}
                >
                  2022
                </spans>
                <img className="w-4 h-4" src={enginpower} alt="" />
                <spans
                  style={{ fontSize: "10px", opacity: "0.3", color: "black" }}
                >
                  5478 sqft
                </spans>
                <img className="w-4 h-4" src={bag} alt="" />
                <spans
                  style={{ fontSize: "8px", opacity: "0.3", color: "black" }}
                >
                  1234 km
                </spans>
              </div>
            </div>
          </div>

          <div className="mt-3   shadow-md shadow-white">
            <div className="relative ">
              <img
                className="absolute items-content-end"
                src={Heartts}
                alt=""
                style={{ right: "1px" }}
              />
              <img className="" src={car} alt="" />
            </div>
            <div className="bg-white px-2 py-2 ">
              <div className="flex justify-between px-2 gap-3">
                <p className=" text-black" style={{ fontSize: "13px" }}>
                  Honda for sale
                </p>
                <h6 className="text-orange-300 ">$65,000</h6>
              </div>
              <p
                className="px-2"
                style={{ fontSize: "11px", opacity: "0.3", color: "black" }}
              >
                Lorem ipsum address, New York
              </p>

              <div className="flex justify-between px-2 mb-1">
                <img className="w-4 h-4" src={km} alt="" />
                <spans
                  className=""
                  style={{ fontSize: "10px", opacity: "0.3", color: "black" }}
                >
                  2022
                </spans>
                <img className="w-4 h-4" src={enginpower} alt="" />
                <spans
                  style={{ fontSize: "10px", opacity: "0.3", color: "black" }}
                >
                  5478 sqft
                </spans>
                <img className="w-4 h-4" src={bag} alt="" />
                <spans
                  style={{ fontSize: "8px", opacity: "0.3", color: "black" }}
                >
                  1234 km
                </spans>
              </div>
            </div>
          </div>

          <div className="mt-3   shadow-md shadow-white">
            <div className="relative ">
              <img
                className="absolute items-content-end"
                src={Heartts}
                alt=""
                style={{ right: "1px" }}
              />
              <img className="" src={bcar} alt="" />
            </div>
            <div className="bg-white px-2 py-2 ">
              <div className="flex justify-between px-2 gap-3">
                <p className=" text-black" style={{ fontSize: "13px" }}>
                  Toyota for sale
                </p>
                <h6 className="text-orange-300 ">$65,000</h6>
              </div>
              <p
                className="px-2"
                style={{ fontSize: "11px", opacity: "0.3", color: "black" }}
              >
                Lorem ipsum address, New York
              </p>

              <div className="flex justify-between px-2 mb-1">
                <img className="w-4 h-4" src={km} alt="" />
                <spans
                  className=""
                  style={{ fontSize: "10px", opacity: "0.3", color: "black" }}
                >
                  2022
                </spans>
                <img className="w-4 h-4" src={enginpower} alt="" />
                <spans
                  style={{ fontSize: "10px", opacity: "0.3", color: "black" }}
                >
                  5478 sqft
                </spans>
                <img className="w-4 h-4" src={bag} alt="" />
                <spans
                  style={{ fontSize: "8px", opacity: "0.3", color: "black" }}
                >
                  1234 km
                </spans>
              </div>
            </div>
          </div>

          <div className="mt-3   shadow-md shadow-white">
            <div className="relative ">
              <img
                className="absolute items-content-end"
                src={Heartts}
                alt=""
                style={{ right: "1px" }}
              />
              <img className="" src={car} alt="" />
            </div>
            <div className="bg-white px-2 py-2 ">
              <div className="flex justify-between px-2 gap-3">
                <p className=" text-black" style={{ fontSize: "13px" }}>
                  Honda for sale
                </p>
                <h6 className="text-orange-300 ">$65,000</h6>
              </div>
              <p
                className="px-2"
                style={{ fontSize: "11px", opacity: "0.3", color: "black" }}
              >
                Lorem ipsum address, New York
              </p>

              <div className="flex justify-between px-2 mb-1">
                <img className="w-4 h-4" src={km} alt="" />
                <spans
                  className=""
                  style={{ fontSize: "10px", opacity: "0.3", color: "black" }}
                >
                  2022
                </spans>
                <img className="w-4 h-4" src={enginpower} alt="" />
                <spans
                  style={{ fontSize: "10px", opacity: "0.3", color: "black" }}
                >
                  5478 sqft
                </spans>
                <img className="w-4 h-4" src={bag} alt="" />
                <spans
                  style={{ fontSize: "8px", opacity: "0.3", color: "black" }}
                >
                  1234 km
                </spans>
              </div>
            </div>
          </div>

          <div className="mt-3   shadow-md shadow-white">
            <div className="relative ">
              <img
                className="absolute items-content-end"
                src={Heartts}
                alt=""
                style={{ right: "1px" }}
              />
              <img className="" src={bcar} alt="" />
            </div>
            <div className="bg-white px-2 py-2 ">
              <div className="flex justify-between px-2 gap-3">
                <p className=" text-black" style={{ fontSize: "13px" }}>
                  Toyota for sale
                </p>
                <h6 className="text-orange-300 ">$65,000</h6>
              </div>
              <p
                className="px-2"
                style={{ fontSize: "11px", opacity: "0.3", color: "black" }}
              >
                Lorem ipsum address, New York
              </p>

              <div className="flex justify-between px-2 mb-1">
                <img className="w-4 h-4" src={km} alt="" />
                <spans
                  className=""
                  style={{ fontSize: "10px", opacity: "0.3", color: "black" }}
                >
                  2022
                </spans>
                <img className="w-4 h-4" src={enginpower} alt="" />
                <spans
                  style={{ fontSize: "10px", opacity: "0.3", color: "black" }}
                >
                  5478 sqft
                </spans>
                <img className="w-4 h-4" src={bag} alt="" />
                <spans
                  style={{ fontSize: "8px", opacity: "0.3", color: "black" }}
                >
                  1234 km
                </spans>
              </div>
            </div>
          </div>

          <div className="mt-3   shadow-md shadow-white">
            <div className="relative ">
              <img
                className="absolute items-content-end"
                src={Heartts}
                alt=""
                style={{ right: "1px" }}
              />
              <img className="" src={car} alt="" />
            </div>
            <div className="bg-white px-2 py-2 ">
              <div className="flex justify-between px-2 gap-3">
                <p className=" text-black" style={{ fontSize: "13px" }}>
                  Honda for sale
                </p>
                <h6 className="text-orange-300 ">$65,000</h6>
              </div>
              <p
                className="px-2"
                style={{ fontSize: "11px", opacity: "0.3", color: "black" }}
              >
                Lorem ipsum address, New York
              </p>

              <div className="flex justify-between px-2 mb-1">
                <img className="w-4 h-4" src={km} alt="" />
                <spans
                  className=""
                  style={{ fontSize: "10px", opacity: "0.3", color: "black" }}
                >
                  2022
                </spans>
                <img className="w-4 h-4" src={enginpower} alt="" />
                <spans
                  style={{ fontSize: "10px", opacity: "0.3", color: "black" }}
                >
                  5478 sqft
                </spans>
                <img className="w-4 h-4" src={bag} alt="" />
                <spans
                  style={{ fontSize: "8px", opacity: "0.3", color: "black" }}
                >
                  1234 km
                </spans>
              </div>
            </div>
          </div>

          <div className="mt-3   shadow-md shadow-white">
            <div className="relative ">
              <img
                className="absolute items-content-end"
                src={Heartts}
                alt=""
                style={{ right: "1px" }}
              />
              <img className="" src={bcar} alt="" />
            </div>
            <div className="bg-white px-2 py-2 ">
              <div className="flex justify-between px-2 gap-3">
                <p className=" text-black" style={{ fontSize: "13px" }}>
                  Toyota for sale
                </p>
                <h6 className="text-orange-300 ">$65,000</h6>
              </div>
              <p
                className="px-2"
                style={{ fontSize: "11px", opacity: "0.3", color: "black" }}
              >
                Lorem ipsum address, New York
              </p>

              <div className="flex justify-between px-2 mb-1">
                <img className="w-4 h-4" src={km} alt="" />
                <spans
                  className=""
                  style={{ fontSize: "10px", opacity: "0.3", color: "black" }}
                >
                  2022
                </spans>
                <img className="w-4 h-4" src={enginpower} alt="" />
                <spans
                  style={{ fontSize: "10px", opacity: "0.3", color: "black" }}
                >
                  5478 sqft
                </spans>
                <img className="w-4 h-4" src={bag} alt="" />
                <spans
                  style={{ fontSize: "8px", opacity: "0.3", color: "black" }}
                >
                  1234 km
                </spans>
              </div>
            </div>
          </div>

          <div className="mt-3   shadow-md shadow-white">
            <div className="relative ">
              <img
                className="absolute items-content-end"
                src={Heartts}
                alt=""
                style={{ right: "1px" }}
              />
              <img className="" src={car} alt="" />
            </div>
            <div className="bg-white px-2 py-2 ">
              <div className="flex justify-between px-2 gap-3">
                <p className=" text-black" style={{ fontSize: "13px" }}>
                  Honda for sale
                </p>
                <h6 className="text-orange-300 ">$65,000</h6>
              </div>
              <p
                className="px-2"
                style={{ fontSize: "11px", opacity: "0.3", color: "black" }}
              >
                Lorem ipsum address, New York
              </p>

              <div className="flex justify-between px-2 mb-1">
                <img className="w-4 h-4" src={km} alt="" />
                <spans
                  className=""
                  style={{ fontSize: "10px", opacity: "0.3", color: "black" }}
                >
                  2022
                </spans>
                <img className="w-4 h-4" src={enginpower} alt="" />
                <spans
                  style={{ fontSize: "10px", opacity: "0.3", color: "black" }}
                >
                  5478 sqft
                </spans>
                <img className="w-4 h-4" src={bag} alt="" />
                <spans
                  style={{ fontSize: "8px", opacity: "0.3", color: "black" }}
                >
                  1234 km
                </spans>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*footer*/}
      <div className="container mx-auto" style={{ marginTop: "100px" }}>
        <div className=" bg-gray-200 grid lg:grid-cols-3    md:grid-cols-3  sm:grid-cols-1 px-5 pt-4">
          <div className="sm:px-5 md:px-5 lg:md-5">
            <h6 className="px-5">Contact Us</h6>
            <div className="flex justify-center">
              <img className="me-3" src={paragraph} alt="" />
              <p style={{ fontSize: "12px", marginTop: "20px" }}>
                Lorem ipsum dolor sit amet, Cras pretium, consectetur adipiscing
                elit.
              </p>
            </div>

            <div className="flex">
              <img className="w-6" src={phone} alt="" />
              <div className="mt-2 ">
                <p className="px-3 ">(+92-433943444)</p>
                <p className="px-3">(+92-433943444)</p>
              </div>
            </div>

            <div className="flex">
              <img className="sm:w-6 md:w-6 lg:w-6" src={sms} alt="" />
              <div className="mt-2">
                <p className="px-3">esols@gmail.com</p>
                <p className="px-3">esols@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="px-5 ">
            <h6>Quick Links</h6>
            <p className="mt-4">Home</p>
            <p>Real State</p>
            <p>Vehicles</p>
            <p>About Us</p>
          </div>
          <div className="px-5">
            <h6>Follow Us</h6>

            <div className="flex gap-2 mt-4">
              <img className="w-8 " src={facebook} alt="" />

              <img className="w-8 " src={Google} alt="" />
              <img className="w-8 " src={twitter} alt="" />
              <img className="w-8 " src={instagram} alt="" />
            </div>
          </div>
        </div>

        <div className="pb-2 bg-gray-200 container mx-auto">
          <h6 className="text-center   sm:text-center md:text-center  sm:text-sm">
            © 2021 All rights reserved. Created by Lorem Ipsum
          </h6>
        </div>
      </div>
    </>
  );
};

export default FAVORITES;
