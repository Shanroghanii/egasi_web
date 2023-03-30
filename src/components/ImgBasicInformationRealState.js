import React, { useState } from "react";
import { Link } from "react-router-dom";

import logo from "../images/Group 3321.svg";
import NavbarImage1 from "../images/Group 11680.png";
import NavbarImage2 from "../images/Group 11819.png";
import NavbarImage3 from "../images/gil.svg";
import AdInformation from "../images/AdInformation.svg";
import bimagerealstate from '../images/bimagerealstate.png';
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Revieworange from '../images/Revieworange.svg';
import review from "../images/Review.svg";

import facebook from "../images/facebook.svg";
import Google from "../images/google.svg";
import twitter from "../images/twitter.svg";
import instagram from "../images/instagram.svg";
import paragraph from "../images/paragraph.svg";
import phone from "../images/phone.svg";
import sms from "../images/sms.svg";
import Edit from "../images/Edit.svg";

const ImgBasicInformationRealState = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      {/*Navbar start*/}
      <div className=" ps-1">
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
            <li className="pt-4">
              <Link to="/home">
                <button className="text-black">Home</button>
              </Link>
            </li>
            <li>
              <Link to="" className="text-white ">
                <button className="bg-orange-500 mt-2 p-3 rounded-full">
                  Created Ad
                </button>
              </Link>
            </li>
          </ul>

          <div className=" hidden md:flex justify-center">
            <img className="w-16 h-16 " src={NavbarImage1} alt="" />

            <img className="w-16 h-16 mt-1" src={NavbarImage3} alt="" />
            <img className="w-16 h-16" src={NavbarImage2} alt="" />
          </div>

          {/*Responsive */}

          <ul
            className={`duration-300 md:hidden w-full  text-white fixed bg-gray-300 top-[92px]
        ${toggle ? "left-[0]" : "left-[-100%]"}
        `}
          >
            <li className="px-2 pt-2">
              <Link to="/home">
                <button className="text-black">Home</button>
              </Link>
            </li>
            <li className="ps-1">
              <Link to="" className="text-white ">
                <button className="bg-orange-500 mt-2 p-3 rounded-full">
                  Created Ad
                </button>
              </Link>
            </li>

            <li className="ps-1">
              <img className="w-16 " src={NavbarImage1} alt="" />
            </li>
            <li className="ps-1">
              <img className="w-16" src={NavbarImage2} alt="" />
            </li>

            <li className="ps-1">
              <img className="w-16 mt-1" src={NavbarImage3} alt="" />
            </li>
          </ul>
        </div>
      </div>
      {/*Navbar end*/}

      {/* Section 2*/}

      <div className="container">
        <div className="flex justify-center">
          <h4>CREATED AD</h4>
        </div>

        <div className="flex justify-center mt-4">
          <div>
            <img className="w-16 ms-4" src={AdInformation} alt="" />
            <p
              style={{ color: "#F37521", fontSize: "14px", fontWeight: "bold" }}
            >
              Ad Information
            </p>
          </div>

          <div
            className="mt-4 "
            style={{
              width: "14%",

              background: "#F37521",
              height: "1px",
            }}
          >
            <p></p>
          </div>
          <div>
            <img className="w-16" src={Revieworange} alt="" />
            <p
              style={{ color: "#F37521", fontSize: "14px", fontWeight: "bold" }}
            >
              Reviews
            </p>
          </div>
          <div
            className="mt-4 "
            style={{
              width: "14%",
              background: "#F37521",
              height: "1px",
            }}
          >
            <p></p>
          </div>
          <div>
            <img className="w-16" src={review} alt="" />
            <p
              style={{ color: "#F37521", fontSize: "14px", fontWeight: "bold" }}
            >
              Package
            </p>
          </div>
        </div>
      </div>

      {/*Section 3*/}
      <div className="container mx-auto px-4 mt-5">
        <div className="bg-white rounded-lg">
          <div className="flex justify-content-between pt-5 p-4">
            <h6>Images</h6>
            <img className="w-8" src={Edit} alt="" />
          </div>

          <div className=" grid   grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 m-3">
            <img className="w-48" src={bimagerealstate} alt="" />
            <img className="w-48" src={bimagerealstate} alt="" />
            <img className="w-48" src={bimagerealstate} alt="" />
            <img className="w-48" src={bimagerealstate} alt="" />
            <img className="w-48" src={bimagerealstate} alt="" />
          </div>

          <div className="flex justify-content-between m-3 px-2">
            <h6>Basic Information</h6>
            <img className="w-8" src={Edit} alt="" />
          </div>

          <div className="flex justify-content-between m-3 px-2 bg-gray-300  h-6">
            <p>Purpose</p>
            <p>Sale</p>
          </div>

          <div className="flex justify-content-between m-2 px-2 mb-3  h-6">
            <p>Category</p>
            <p>test</p>
          </div>

          <div className="flex justify-content-between m-3 px-2 bg-gray-300  h-6">
            <p>Sub-Category</p>
            <p>R</p>
          </div>

          <div className="flex justify-content-between m-2 px-2 mb-3  h-6">
            <p>Title</p>
            <p>e</p>
          </div>

          <div className="flex justify-content-between m-3 px-2 bg-gray-300  h-6">
            <p>Description</p>
            <p>Floor location</p>
          </div>

          <div className="flex justify-content-between m-2 px-2 mb-3  h-6">
            <p>From whom</p>
            <p>fromwhom 2</p>
          </div>

          <div className="flex justify-content-between m-3 px-2 bg-gray-300  h-6">
            <p>Saloon</p>
            <p>2</p>
          </div>

          <div className="flex justify-content-between m-2 px-2 mb-3  h-6">
            <p>Bedroom</p>
            <p>1</p>
          </div>

          <div className="flex justify-content-between m-3 px-2 bg-gray-300  h-6">
            <p>Bathrooms</p>
            <p>1</p>
          </div>

          <div className="flex justify-content-between m-2 px-2 mb-3  h-6">
            <p>Furnished</p>
            <p>true</p>
          </div>

          <div className="flex justify-content-between m-3 px-2 bg-gray-300  h-6">
            <p>Balcony</p>
            <p>Yes</p>
          </div>

          <div className="flex justify-content-between m-2 px-2 mb-3  h-6">
            <p>Usage Status</p>
            <p> usage status</p>
          </div>

          <div className="flex justify-content-between m-3 px-2 bg-gray-300  h-6">
            <p>Facade</p>
            <p>facace 1</p>
          </div>

          <div className="flex justify-content-between m-2 px-2 mb-3  h-6">
            <p>Inside Complex</p>
            <p>true</p>
          </div>

          <div className="flex justify-content-between m-3 px-2 bg-gray-300  h-6">
            <p>Heating System</p>
            <p>heating system</p>
          </div>

          <div className="flex justify-content-between m-2 px-2 mb-3  h-6">
            <p>Building Age</p>
            <p>building age 1</p>
          </div>

          <div className="flex justify-content-between m-3 px-2 bg-gray-300  h-6">
            <p>Building Floors</p>
            <p>building floor1</p>
          </div>

          <div className="flex justify-content-between m-2 px-2 mb-3  h-6">
            <p>Title Deed Status</p>
            <p>deed2</p>
          </div>

          <div className="flex justify-content-between m-3 px-2 bg-gray-300  h-6">
            <p>Eligible for Mortage</p>
            <p>true</p>
          </div>

          <div className="flex justify-content-between m-2 px-2 mb-3  h-6">
            <p>Barter / Exchange</p>
            <p>1</p>
          </div>

          <div className="flex justify-content-between m-3 px-2 bg-gray-300  h-6">
            <p>Contact</p>
            <p>[WhatsApp]</p>
          </div>

          <div className="flex justify-content-between m-2 px-2 mb-3 mt-5  h-6">
            <h5>Location</h5>
            <img src={Edit} alt="" />
          </div>

          <div className="flex justify-content-between m-3    h-6">
            <p>Country</p>
            <p>France</p>
          </div>

          <div className="flex justify-content-between m-2 px-2 mb-3 bg-gray-300 h-6">
            <p>City</p>
            <p>Zicavo</p>
          </div>

          <div className="flex justify-content-between m-3    h-6">
            <p>District</p>
            <p>d</p>
          </div>

          <div className="flex justify-content-between m-2 px-2 mb-3 bg-gray-300 h-6">
            <p>Neighborhood</p>
            <p>d</p>
          </div>

          <div className="flex justify-content-between m-3   h-6">
            <p>Complex</p>
            <p>d</p>
          </div>

          <div className="flex justify-content-between m-2 px-2 mb-3 bg-gray-300  h-6">
            <p>Open Address</p>
            <p>r</p>
          </div>

          {/*internal features*/}
          <div className="container mt-3">
            <h6 className="">Internal Features</h6>
          </div>

          <div className="container mx-auto mt-3">
            <div className="flex gap-3 flex-wrap">
              <div className="flex gap-2 drop-shadow-lg rounded-xl ">
                <p className="bg-red-400 w-2 h-2 rounded-full mt-2"></p>

                <p className="ps-1 text-center " style={{ fontSize: "14px" }}>
                  Fire Alarm
                </p>
              </div>

              <div className="flex gap-2   drop-shadow-lg rounded-xl ">
                <p className="bg-red-400 w-2 h-2 rounded-full mt-2"></p>

                <p className="ps-2 text-center " style={{ fontSize: "14px" }}>
                  Kitchen
                </p>
              </div>

              <div className="flex gap-2 drop-shadow-lg rounded-xl ">
                <p className="bg-red-400 w-2 h-2 rounded-full mt-2"></p>
                <p className="ps-1 text-center " style={{ fontSize: "14px" }}>
                  Washing Machine
                </p>
              </div>

              <div className="flex gap-2 drop-shadow-lg rounded-xl ">
                <p className="bg-red-400 w-2 h-2 rounded-full mt-2"></p>
                <p className="ps-1 text-center " style={{ fontSize: "14px" }}>
                  Shower
                </p>
              </div>

              <div className="flex gap-2 drop-shadow-lg rounded-xl ">
                <p className="bg-red-400 w-2 h-2 rounded-full mt-2"></p>
                <p className="ps-1 text-center " style={{ fontSize: "14px" }}>
                  Heater
                </p>
              </div>
            </div>
          </div>

          {/*>External features*/}
          <div className="">
            <h6 className="px-3">External Features</h6>
          </div>

          <div className="container mx-auto mt-3">
            <div className="flex gap-3 flex-wrap">
              <div className="flex gap-2 drop-shadow-lg rounded-xl ">
                <p className="bg-red-400 w-2 h-2 rounded-full mt-2"></p>

                <p className="ps-1 text-center " style={{ fontSize: "14px" }}>
                  Camera
                </p>
              </div>
              <div className="flex gap-2 drop-shadow-lg rounded-xl ">
                <p className="bg-red-400 w-2 h-2 rounded-full mt-2"></p>

                <p className="ps-1 text-center " style={{ fontSize: "14px" }}>
                  Parking
                </p>
              </div>

              <div className="flex gap-2   drop-shadow-lg rounded-xl ">
                <p className="bg-red-400 w-2 h-2 rounded-full mt-2"></p>

                <p className="ps-2 text-center " style={{ fontSize: "14px" }}>
                  Gaurd
                </p>
              </div>

              <div className="flex gap-2 drop-shadow-lg rounded-xl ">
                <p className="bg-red-400 w-2 h-2 rounded-full mt-2"></p>
                <p className="ps-1 text-center " style={{ fontSize: "14px" }}>
                  Garage
                </p>
              </div>

              <div className="flex gap-2 drop-shadow-lg rounded-xl ">
                <p className="bg-red-400 w-2 h-2 rounded-full mt-2"></p>
                <p className="ps-1 text-center " style={{ fontSize: "14px" }}>
                  Lift
                </p>
              </div>

              <div className="flex gap-2 drop-shadow-lg rounded-xl ">
                <p className="bg-red-400 w-2 h-2 rounded-full mt-2"></p>
                <p className="ps-1 text-center " style={{ fontSize: "14px" }}>
                  Pool
                </p>
              </div>
            </div>
          </div>

          {/*Saftey features*/}
          <div className="container">
            <h6 className="">Access to Transportation</h6>
          </div>

          <div className="container mx-auto mt-3">
            <div className="flex gap-3 flex-wrap">
              <div className="flex gap-2 drop-shadow-lg rounded-xl ">
                <p className="bg-red-400 w-2 h-2 rounded-full mt-2"></p>

                <p className="ps-1 text-center " style={{ fontSize: "14px" }}>
                  Metro
                </p>
              </div>
              <div className="flex gap-2 drop-shadow-lg rounded-xl ">
                <p className="bg-red-400 w-2 h-2 rounded-full mt-2"></p>

                <p className="ps-1 text-center " style={{ fontSize: "14px" }}>
                  Bus
                </p>
              </div>

              <div className="flex gap-2   drop-shadow-lg rounded-xl ">
                <p className="bg-red-400 w-2 h-2 rounded-full mt-2"></p>

                <p className="ps-2 text-center " style={{ fontSize: "14px" }}>
                  Highway
                </p>
              </div>
            </div>
          </div>

          {/*Neighborhood*/}
          <div className="container">
            <h6 className="">Neighborhood</h6>
          </div>

          <div className="container mx-auto mt-3">
            <div className="flex gap-3 flex-wrap">
              <div className="flex gap-2 drop-shadow-lg rounded-xl ">
                <p className="bg-red-400 w-2 h-2 rounded-full mt-2"></p>

                <p className="ps-1 text-center " style={{ fontSize: "14px" }}>
                  Gym
                </p>
              </div>
              <div className="flex gap-2 drop-shadow-lg rounded-xl ">
                <p className="bg-red-400 w-2 h-2 rounded-full mt-2"></p>

                <p className="ps-1 text-center " style={{ fontSize: "14px" }}>
                  Park
                </p>
              </div>

              <div className="flex gap-2   drop-shadow-lg rounded-xl ">
                <p className="bg-red-400 w-2 h-2 rounded-full mt-2"></p>

                <p className="ps-2 text-center " style={{ fontSize: "14px" }}>
                  School
                </p>
              </div>

              <div className="flex gap-2   drop-shadow-lg rounded-xl ">
                <p className="bg-red-400 w-2 h-2 rounded-full mt-2"></p>

                <p className="ps-2 text-center " style={{ fontSize: "14px" }}>
                  Market
                </p>
              </div>
            </div>
          </div>

          <div className="px-3 pt-3">
            <input
              type="checkbox"
              className="form -check-input"
              id="exampleCheck1"
            />
            <label className="form -check-label px-3" for="exampleCheck1">
              <div className="flex">
                <p> I accept the</p>{" "}
                <p className="text-orange-400 ps-2">Ad Posting Rules</p>
              </div>
            </label>
          </div>

          <div className="flex justify-center ">
            <Link to="/selectpayment">
              <button className="bg-orange-400 p-3 rounded-full text-white sm:w-72 md:w-80 w-64 mb-5 mt-4">
                Next
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/*footer*/}
      <div className="container mx-auto  px-4 mt-5 ">
        <div className=" bg-gray-200 grid lg:grid-cols-3   md:grid-cols-3  sm:grid-cols-1 px-5 pt-4">
          <div className="sm:px-5 md:px-5 lg:md-5">
            <h6 className="px-5">Contact Us</h6>
            <div className="flex justify-center">
              <img className="me-3" src={paragraph} alt="" />
              <p style={{ fontSize: "12px", marginTop: "20px" }}>
                dolor sit amet, Cras pretium, consectetur adipiscing elit.
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
            © 2021 All rights reserved. Created by
          </h6>
        </div>
      </div>
    </>
  );
};

export default ImgBasicInformationRealState;
