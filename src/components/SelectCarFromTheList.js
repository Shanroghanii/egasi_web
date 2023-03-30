import React from 'react';
// Navbar Start

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../images/Group 3321.svg";
import NavbarImage1 from "../images/Group 11680.png";
import NavbarImage2 from "../images/Group 11819.png";
import NavbarImage3 from "../images/gil.svg";
// Navbar End
import Group3337 from '../images/Group 3347.png'
import { Link } from "react-router-dom";
import AdInformation from "../images/AdInformation.svg";
import Review from "../images/Review.svg";
import Package from "../images/Package.svg";
import facebook from "../images/facebook.svg";
import Google from "../images/google.svg";
import twitter from "../images/twitter.svg";
import instagram from "../images/instagram.svg";
import paragraph from '../images/paragraph.svg';
import phone from "../images/phone.svg";
import sms from "../images/sms.svg";


const SelectCarFromTheList = () => {
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
                className="mt-3  fs-5 me-2 "
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

      <div className="container">
        <div className="flex justify-center">
          <h4>Created Ad</h4>
        </div>

        <div className="flex justify-center mt-4">
          <div>
            <img className="w-16 ms-4" src={AdInformation} alt="" />
            <h6>A Information</h6>
          </div>

          <div
            class="mt-4"
            style={{
              width: "14%",

              background: "orange",
              height: "1px",
            }}
          >
            <p></p>
          </div>
          <div>
            <img className="w-16" src={Review} alt="" />
            <h6>Review</h6>
          </div>
          <div
            class="mt-4"
            style={{
              width: "14%",
              background: "grey",
              height: "1px",
              opacity: "0.3",
            }}
          >
            <p></p>
          </div>
          <div>
            <img className="w-16" src={Package} alt="" />
            <h6>Package</h6>
          </div>
        </div>
      </div>

      {/*section 3*/}

      <div className="container bg-white rounded-lg shadow-xl mx-auto  p-5 md:p-8 py-12 mt-5">
        <h6>Select from the car list</h6>
        <div className="grid  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3   gap-6 mt-4">
          <div className="shadow-xl p-3 mt-4 border rounded-2xl shadow-slate-200 border-indigo-600">
            <h6>Audi A6</h6>
            <div
              className="flex justify-between mt-3"
              style={{ fontSize: "10px" }}
            >
              <p className="text-orange-400">
                Year:<spans className="text-black">2022</spans>
              </p>
              <p className="text-orange-600">
                TransmitionType:<spans className="text-black">2022</spans>
              </p>
              <p className="text-orange-600">
                Model:<spans className="text-black">Lorem</spans>
              </p>
            </div>

            <div className="flex justify-between " style={{ fontSize: "10px" }}>
              <p className="text-orange-400">
                Brand:<spans className="text-black">Lorem</spans>
              </p>
              <p className="text-orange-600 pe-4">
                EngineSize:<spans className="text-black ">Lorem</spans>
              </p>
              <p className="text-orange-600 pe-2">
                Fuel:<spans className="text-black">petrol</spans>
              </p>
            </div>

            <div className="flex  justify-between" style={{ fontSize: "10px" }}>
              <p className="text-orange-400">
                Package:<spans className="text-black">Lorem</spans>
              </p>
            </div>
          </div>

          <div className="shadow-xl p-3 mt-4 border rounded-2xl shadow-slate-200 border-indigo-600">
            <h6>Audi A6</h6>
            <div
              className="flex justify-between mt-3"
              style={{ fontSize: "10px" }}
            >
              <p className="text-orange-400">
                Year:<spans className="text-black">2022</spans>
              </p>
              <p className="text-orange-600">
                TransmitionType:<spans className="text-black">2022</spans>
              </p>
              <p className="text-orange-600">
                Model:<spans className="text-black">Lorem</spans>
              </p>
            </div>

            <div className="flex justify-between " style={{ fontSize: "10px" }}>
              <p className="text-orange-400">
                Brand:<spans className="text-black">Lorem</spans>
              </p>
              <p className="text-orange-600 pe-4">
                EngineSize:<spans className="text-black ">Lorem</spans>
              </p>
              <p className="text-orange-600 pe-2">
                Fuel:<spans className="text-black">petrol</spans>
              </p>
            </div>

            <div className="flex  justify-between" style={{ fontSize: "10px" }}>
              <p className="text-orange-400">
                Package:<spans className="text-black">Lorem</spans>
              </p>
            </div>
          </div>

          <div className="shadow-xl p-3 mt-4 border rounded-2xl shadow-slate-200 border-indigo-600">
            <h6>Audi A6</h6>
            <div
              className="flex justify-between mt-3"
              style={{ fontSize: "10px" }}
            >
              <p className="text-orange-400">
                Year:<spans className="text-black">2022</spans>
              </p>
              <p className="text-orange-600">
                TransmitionType:<spans className="text-black">2022</spans>
              </p>
              <p className="text-orange-600">
                Model:<spans className="text-black">Lorem</spans>
              </p>
            </div>

            <div className="flex justify-between " style={{ fontSize: "10px" }}>
              <p className="text-orange-400">
                Brand:<spans className="text-black">Lorem</spans>
              </p>
              <p className="text-orange-600 pe-4">
                EngineSize:<spans className="text-black ">Lorem</spans>
              </p>
              <p className="text-orange-600 pe-2">
                Fuel:<spans className="text-black">petrol</spans>
              </p>
            </div>

            <div className="flex  justify-between" style={{ fontSize: "10px" }}>
              <p className="text-orange-400">
                Package:<spans className="text-black">Lorem</spans>
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-5">
          <Link to="/imgbasicinformation">
            <button className="bg-orange-400 p-3 rounded-full text-white w-80 md:w-96 sm:w-96  mt-4">
              Next
            </button>
          </Link>
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
}

export default SelectCarFromTheList
