import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/Group 3321.svg";
// Navbar Start

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

import NavbarImage1 from "../images/Group 11680.png";
import NavbarImage2 from "../images/Group 11819.png";
import NavbarImage3 from "../images/gil.svg";
// Navbar End
import AdInformation from "../images/AdInformation.svg";
import Review from "../images/Review.svg";
import Packageorange from "../images/packageorange.svg";
import Revieworange from "../images/Revieworange.svg";
import Package from "../images/Package.svg";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import facebook from "../images/facebook.svg";
import Google from "../images/google.svg";
import twitter from "../images/twitter.svg";
import instagram from "../images/instagram.svg";
import paragraph from "../images/paragraph.svg";
import phone from "../images/phone.svg";
import sms from "../images/sms.svg";
import Lock from '../images/Lock.svg'
import p from "../images/p.svg";
import mastercard from "../images/MasterCard.png";
import visa from "../images/visa.svg";





const SelectPaymentMethod = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      {/*Navbar Start*/}
      <Navbar collapseOnSelect expand="lg">
        <Container>
          <Navbar.Brand href="">
            <Link to="/home">
              <img className="w-48" src={logo} alt="" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav className="ms-auto mt-2">
              <Nav.Link
                className="mt-4  fs-5 me-2 "
                style={{ color: "#f37521" }}
                to="/home"
              >
                <Link to="/home">
                  <button className="text-orange-400">Home</button>
                </Link>
              </Nav.Link>
              <Nav.Link eventKey={2} href="#mspanses">
                <button
                  className="rounded-full mt-3  text-white h-12 w-28"
                  style={{ background: "#f37521" }}
                >
                  Create Ad
                </button>
              </Nav.Link>

              <div className="flex ">
                <img
                  className="mt-3"
                  src={NavbarImage1}
                  alt=""
                  style={{ height: "60px" }}
                />
                <img
                  className="mt-3"
                  src={NavbarImage3}
                  alt=""
                  style={{ height: "70px" }}
                />
                <img
                  className="mt-3"
                  src={NavbarImage2}
                  alt=""
                  style={{ height: "60px" }}
                />
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/*Navbar End*/}

      {/*.......................section 2...................................*/}

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
            <img className="w-16" src={Packageorange} alt="" />
            <p
              style={{ color: "#F37521", fontSize: "14px", fontWeight: "bold" }}
            >
              Package
            </p>
          </div>
        </div>
      </div>

      {/*section 3*/}
      <div class="container mx-auto px-4 mt-5 ">
        <div className="bg-white shadow-md  rounded-md">
          <h6 className="p-4">Select Payment Method</h6>

          <div className="flex gap-2 px-4">
            <div className="bg-white shadow-md w-24 p-4 px-4">
              <img
                className="w-10 items-center text-center"
                src={Lock}
                alt=""
              />
            </div>

            <div className="bg-white shadow-md w-24 p-4 px-4">
              <img
                className="w-10 mt-3 items-center text-center"
                src={visa}
                alt=""
              />
            </div>

            <div className="bg-white shadow-md w-24 p-4 px-4">
              <img className="w-10 items-center text-center" src={p} alt="" />
            </div>

            <div className="bg-white shadow-md w-24 p-4 px-4">
              <img
                className="w-10 mt-3 items-center text-center"
                src={mastercard}
                alt=""
              />
            </div>
          </div>

          <div>
            <h6 className="p-4">Enter Card Details</h6>
          </div>

          <div className="grid grid:cols-3 lg:grid-cols-3 md:grid-cols-2 px-4 lg:gap-3 ">
            <div className="mt-2">
              <input
                className="border-2 w-72 p-3 rounded-full"
                type="text"
                placeholder="card holder name"
              />
            </div>

            <div className="mt-2">
              <input
                className="border-2 w-72 p-3 rounded-full"
                type="text"
                placeholder="card number "
              />
            </div>

            <div className=" mt-2">
              <input
                className="border-2 w-72 p-3 rounded-full"
                type="text"
                placeholder="Expiry"
              />
            </div>

            <div className="mt-2">
              <input
                className="border-2 w-72   p-3 rounded-full"
                type="text"
                placeholder="ccv"
              />
            </div>
          </div>

          <div className="mt-3 flex justify-center">
            <Link to="/requestsubmit">
              <button className="w-72 bg-orange-500 p-3 mb-4 text-white rounded-full">
                Next
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/*footer*/}
      <div className="container mx-auto  px-4 mt-5 ">
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

export default SelectPaymentMethod;


