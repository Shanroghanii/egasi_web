import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/Group 3321.svg";
import NavbarImage1 from "../images/Group 11680.png";
import NavbarImage2 from "../images/Group 11819.png";
import NavbarImage3 from "../images/gil.svg";

import facebook from "../images/facebook.svg";
import Google from "../images/google.svg";
import twitter from "../images/twitter.svg";
import instagram from "../images/instagram.svg";
import paragraph from "../images/paragraph.svg";
import phone from "../images/phone.svg";
import sms from "../images/sms.svg";

import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const ReportProblem = () => {
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

      <div className="container mx-auto">
        <h6 className="text-center">REPORT PROBLEM</h6>
      </div>
      <div className="container mx-auto">
        <h6>User information</h6>
      </div>

      <div className="container mx-auto">
        <div className="w-64 lg:w-96 md:w-96 flex justify-between mt-3">
          <p>Name</p>
          <spanr>Lorem Ipsum</spanr>
        </div>

        <div className="w-64 lg:w-96 md:w-96 flex justify-between mt-1">
          <p>Email</p>
          <spanr>Lorem Ipsum</spanr>
        </div>

        <div className="w-64 lg:w-96 md:w-96 flex justify-between mt-1">
          <p>Mobile Number</p>
          <spanr>Lorem Ipsum</spanr>
        </div>
      </div>

      <div className="container mx-auto mt-4">
        <h6>Reports Details</h6>

        <div className="bg-white p-3 rounded-lg h-32 mt-4 shadow-md w-64 lg:w-96 md:w-96 ">
          <p>Writing Something</p>
        </div>
      </div>

      <div className="container mx-auto mt-4">
        <h6>Add Screenshot</h6>

        <div className="bg-white p-3 grid grid:cols-1 justify-items-center rounded-lg h-32 mt-4 shadow-md w-64 lg:w-96 md:w-96 ">
          <p className="text-center" style={{ opacity: "0.3" }}>
            Add Vehicle Image
          </p>
          <div className="flex justify-center ">
            <button className="bg-orange-400 text-white w-32 h-12 rounded-xl">
              Add images
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto mt-5">
        <div className="flex justify-center">
          <button className="bg-orange-400 text-white w-64 lg:w-80 md:w-72 p-3 rounded-full">
            Submit
          </button>
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

export default ReportProblem;
