import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import logo from "../images/Group 3321.svg";
import NavbarImage1 from "../images/Group 11680.png";
import NavbarImage2 from "../images/Group 11819.png";
import NavbarImage3 from "../images/gil.svg";
import AdInformation from "../images/AdInformation.svg";
// Navbar Start

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";



// Navbar End
import facebook from "../images/facebook.svg";
import Google from "../images/google.svg";
import twitter from "../images/twitter.svg";
import instagram from "../images/instagram.svg";
import paragraph from "../images/paragraph.svg";
import phone from "../images/phone.svg";
import sms from "../images/sms.svg";
import Edit from "../images/Edit.svg";
import car from "../images/car.png";
import review from "../images/Review.svg";

import Revieworange from "../images/Revieworange.svg";

const ImgBasicInformation = () => {
  const [data, setData] = useState([]);


  
  useEffect(() => {
    axios
      .get("http://192.168.18.40:1337/api/v1/adds/brands")
      .then((res) => {
        console.log("Getting from .....", res.data);
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const arr = data.map((data, index) => {
    return <></>;
  });
 
  return (
    <>
      {arr}
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

      {/* Section 2*/}

      <div>
        <h4 className="text-center">CREATED AD</h4>
      </div>

      <div className=" flex justify-center mt-4">
        <div>
          <img className="w-16" src={AdInformation} alt="" />
          <p style={{ color: "#F37521", fontSize: "12px", fontWeight: "bold" }}>
            A Information
          </p>
        </div>
        <div>
          <p
            flex
            className=" bg-red-400 w-36 mt-4  text"
            style={{ height: "1px" }}
          ></p>
        </div>

        <div>
          <img className="w-16" src={Revieworange} alt="" />
          <p style={{ color: "#F37521", fontSize: "14px", fontWeight: "bold" }}>
            Reviews
          </p>
        </div>
        <div>
          <p
            flex
            className=" bg-red-400 w-36 mt-4  text"
            style={{ height: "1px" }}
          ></p>
        </div>

        <div>
          <img className="w-16" src={review} alt="" />
          <p className="text-gray-400">Package</p>
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
            <img className="w-48" src={car} alt="" />
            <img className="w-48" src={car} alt="" />
            <img className="w-48" src={car} alt="" />
            <img className="w-48" src={car} alt="" />
            <img className="w-48" src={car} alt="" />
          </div>

          <div className="flex justify-content-between m-3 px-2">
            <h6>Basic Information</h6>
            <img className="w-8" src={Edit} alt="" />
          </div>

          <div className="flex justify-content-between m-3 px-2 bg-gray-300  h-6">
            <p>Purpose</p>
            <p>Lorem Ipsum</p>
          </div>

          <div className="flex justify-content-between m-2 px-2 mb-3  h-6">
            <p>Category</p>
            <p>Lorem Ipsum</p>
          </div>

          <div className="flex justify-content-between m-3 px-2 bg-gray-300  h-6">
            <p>Year</p>
            <p>Lorem Ipsum</p>
          </div>

          <div className="flex justify-content-between m-2 px-2 mb-3  h-6">
            <p>Brand</p>
            <p>Lorem Ipsum</p>
          </div>

          <div className="flex justify-content-between m-3 px-2 bg-gray-300  h-6">
            <p>Model</p>
            <p>Lorem Ipsum</p>
          </div>

          <div className="flex justify-content-between m-2 px-2 mb-3  h-6">
            <p>Series</p>
            <p>Lorem Ipsum</p>
          </div>

          <div className="flex justify-content-between m-3 px-2 bg-gray-300  h-6">
            <p>Fuel Type</p>
            <p>Lorem Ipsum</p>
          </div>

          <div className="flex justify-content-between m-2 px-2 mb-3  h-6">
            <p>Transmission Type</p>
            <p>Lorem Ipsum</p>
          </div>

          <div className="flex justify-content-between m-3 px-2 bg-gray-300  h-6">
            <p>Wheel Drive</p>
            <p>Lorem Ipsum</p>
          </div>

          <div className="flex justify-content-between m-2 px-2 mb-3  h-6">
            <p>Wheel Drive</p>
            <p>Lorem Ipsum</p>
          </div>

          <div className="flex justify-content-between m-3 px-2 bg-gray-300  h-6">
            <p>Mileage</p>
            <p>Lorem Ipsum</p>
          </div>

          <div className="flex justify-content-between m-2 px-2 mb-3  h-6">
            <p>Description</p>
            <p>Lorem Ipsum</p>
          </div>

          <div className="flex justify-content-between m-3 px-2 bg-gray-300  h-6">
            <p>Price</p>
            <p>Lorem Ipsum</p>
          </div>

          <div className="flex justify-content-between m-2 px-2 mb-3  h-6">
            <p>KM</p>
            <p>Lorem Ipsum</p>
          </div>

          <div className="flex justify-content-between m-3 px-2 bg-gray-300  h-6">
            <p>Condition</p>
            <p>Lorem Ipsum</p>
          </div>

          <div className="flex justify-content-between m-2 px-2 mb-3  h-6">
            <p>Body Type</p>
            <p>Lorem Ipsum</p>
          </div>

          <div className="flex justify-content-between m-3 px-2 bg-gray-300  h-6">
            <p>Color</p>
            <p>Lorem Ipsum</p>
          </div>

          <div className="flex justify-content-between m-2 px-2 mb-3  h-6">
            <p>From</p>
            <p>Lorem Ipsum</p>
          </div>

          <div className="flex justify-content-between m-3 px-2 bg-gray-300  h-6">
            <p>Warranty</p>
            <p>Lorem Ipsum</p>
          </div>

          <div className="flex justify-content-between m-2 px-2 mb-3  h-6">
            <p>Barter</p>
            <p>Lorem Ipsum</p>
          </div>

          <div className="flex justify-content-between m-3 px-2 bg-gray-300  h-6">
            <p>Video Call</p>
            <p>Lorem Ipsum</p>
          </div>

          <div className="flex justify-content-between m-2 px-2 mb-3  h-6">
            <p>Location</p>
            <p>Lorem Ipsum</p>
          </div>

          <div className="flex justify-content-between m-3 px-2 bg-gray-300  h-6">
            <p>Country</p>
            <p>Lorem Ipsum</p>
          </div>

          <div className="flex justify-content-between m-2 px-2 mb-3  h-6">
            <p>Category</p>
            <p>Lorem Ipsum</p>
          </div>

          <div className="flex justify-content-between m-3 px-2 bg-gray-300  h-6">
            <p>Purpose</p>
            <p>Lorem Ipsum</p>
          </div>

          <div className="flex justify-content-between m-2 px-2 mb-3  h-6">
            <p>City</p>
            <p>Lorem Ipsum</p>
          </div>

          <div className="flex justify-content-between m-3 px-2 bg-gray-300  h-6">
            <p>District</p>
            <p>Lorem Ipsum</p>
          </div>

          <div className="flex justify-content-between m-2 px-2 mb-3  h-6">
            <p>Neighborhood</p>
            <p>Lorem Ipsum</p>
          </div>

          {/*internal features*/}
          <div className="mt-5">
            <h6 className="px-3">Internal Features</h6>
          </div>

          <div className="container mx-auto">
            <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-7 gap-3">
              <div className="flex  gap-2">
                <p className="bg-orange-400 w-2 h-2 rounded-full mt-2"></p>
                <p style={{ fontSize: "12px ", paddingTop: "2px" }}>
                  Bi Xenon Headlights
                </p>
              </div>

              <div className="flex  gap-2">
                <p className="bg-orange-400 w-2 h-2 rounded-full mt-2"></p>
                <p style={{ fontSize: "12px ", paddingTop: "2px" }}>
                  Headlight Washing
                </p>
              </div>

              <div className="flex  gap-2">
                <p className="bg-orange-400 w-2 h-2 rounded-full mt-2"></p>
                <p style={{ fontSize: "12px ", paddingTop: "2px" }}>
                  Alloy Wheel
                </p>
              </div>

              <div className="flex  gap-2">
                <p className="bg-orange-400 w-2 h-2 rounded-full mt-2"></p>
                <p style={{ fontSize: "12px ", paddingTop: "2px" }}>
                  Fog Light
                </p>
              </div>

              <div className="flex  gap-2">
                <p className="bg-orange-400 w-2 h-2 rounded-full mt-2"></p>
                <p style={{ fontSize: "12px ", paddingTop: "2px" }}>Sun Roof</p>
              </div>

              <div className="flex  gap-2">
                <p className="bg-orange-400 w-2 h-2 rounded-full mt-2"></p>
                <p style={{ fontSize: "12px ", paddingTop: "2px" }}>
                  Rain Sensor
                </p>
              </div>

              <div className="flex  gap-2">
                <p className="bg-orange-400 w-2 h-2 rounded-full mt-2"></p>
                <p style={{ fontSize: "12px ", paddingTop: "2px" }}>
                  Trailer Drawer
                </p>
              </div>

              <div className="flex  gap-2">
                <p className="bg-orange-400 w-2 h-2 rounded-full mt-2"></p>
                <p style={{ fontSize: "12px ", paddingTop: "2px" }}>
                  Heated Mirror
                </p>
              </div>

              <div className="flex  gap-2">
                <p className="bg-orange-400 w-2 h-2 rounded-full mt-2"></p>
                <p style={{ fontSize: "12px ", paddingTop: "2px" }}>
                  Parking Assistant
                </p>
              </div>

              <div className="flex  gap-2">
                <p className="bg-orange-400 w-2 h-2 rounded-full mt-2"></p>
                <p style={{ fontSize: "12px ", paddingTop: "2px" }}>
                  Electronic Mirrors
                </p>
              </div>
            </div>
          </div>

          {/*>External features*/}
          <div className="">
            <h6 className="px-3">External Features</h6>
          </div>

          <div className="container mx-auto">
            <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-8 gap-3">
              <div className="flex  gap-2">
                <p className="bg-orange-400 w-2 h-2 rounded-full mt-2"></p>
                <p style={{ fontSize: "12px ", paddingTop: "2px" }}>
                  Leather Seats
                </p>
              </div>

              <div className="flex  gap-2">
                <p className="bg-orange-400 w-2 h-2 rounded-full mt-2"></p>
                <p style={{ fontSize: "12px ", paddingTop: "2px" }}>
                  7 Speed gear
                </p>
              </div>

              <div className="flex  gap-2">
                <p className="bg-orange-400 w-2 h-2 rounded-full mt-2"></p>
                <p style={{ fontSize: "12px ", paddingTop: "2px" }}>
                  Seats Memory
                </p>
              </div>

              <div className="flex  gap-2">
                <p className="bg-orange-400 w-2 h-2 rounded-full mt-2"></p>
                <p style={{ fontSize: "12px ", paddingTop: "2px" }}>
                  Seats Cooler
                </p>
              </div>

              <div className="flex  gap-2">
                <p className="bg-orange-400 w-2 h-2 rounded-full mt-2"></p>
                <p style={{ fontSize: "12px ", paddingTop: "2px" }}>
                  Trip Computer
                </p>
              </div>

              <div className="flex  gap-2">
                <p className="bg-orange-400 w-2 h-2 rounded-full mt-2"></p>
                <p style={{ fontSize: "12px ", paddingTop: "2px" }}>
                  Fabric Seats
                </p>
              </div>

              <div className="flex  gap-2">
                <p className="bg-orange-400 w-2 h-2 rounded-full mt-2"></p>
                <p style={{ fontSize: "12px ", paddingTop: "2px" }}>
                  Cruise Control
                </p>
              </div>

              <div className="flex  gap-2">
                <p className="bg-orange-400 w-2 h-2 rounded-full mt-2"></p>
                <p style={{ fontSize: "12px ", paddingTop: "2px" }}>Radio</p>
              </div>

              <div className="flex  gap-2">
                <p className="bg-orange-400 w-2 h-2 rounded-full mt-2"></p>
                <p style={{ fontSize: "12px ", paddingTop: "2px" }}>
                  DVD Player
                </p>
              </div>

              <div className="flex  gap-2">
                <p className="bg-orange-400 w-2 h-2 rounded-full mt-2"></p>
                <p style={{ fontSize: "12px ", paddingTop: "2px" }}>
                  Bluethooth
                </p>
              </div>
            </div>
          </div>

          {/*Saftey features*/}
          <div className="">
            <h6 className="px-3">Saftey Features</h6>
          </div>

          <div className="container mx-auto">
            <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-8 gap-3">
              <div className="flex  gap-2">
                <p className="bg-orange-400 w-2 h-2 rounded-full mt-2"></p>
                <p style={{ fontSize: "12px ", paddingTop: "2px" }}>Airbags</p>
              </div>

              <div className="flex  gap-2">
                <p className="bg-orange-400 w-2 h-2 rounded-full mt-2"></p>
                <p style={{ fontSize: "12px ", paddingTop: "2px" }}>
                  Seatbelts
                </p>
              </div>

              <div className="flex  gap-2">
                <p className="bg-orange-400 w-2 h-2 rounded-full mt-2"></p>
                <p style={{ fontSize: "12px ", paddingTop: "2px" }}>ABS</p>
              </div>

              <div className="flex  gap-2">
                <p className="bg-orange-400 w-2 h-2 rounded-full mt-2"></p>
                <p style={{ fontSize: "12px ", paddingTop: "2px" }}>
                  Brake Assist
                </p>
              </div>

              <div className="flex  gap-2">
                <p className="bg-orange-400 w-2 h-2 rounded-full mt-2"></p>
                <p style={{ fontSize: "12px ", paddingTop: "2px" }}>
                  Jack Safety
                </p>
              </div>

              <div className="flex  gap-2">
                <p className="bg-orange-400 w-2 h-2 rounded-full mt-2"></p>
                <p style={{ fontSize: "12px ", paddingTop: "2px" }}>Armored</p>
              </div>

              <div className="flex  gap-2">
                <p className="bg-orange-400 w-2 h-2 rounded-full mt-2"></p>
                <p style={{ fontSize: "12px ", paddingTop: "2px" }}>
                  Child Lock
                </p>
              </div>

              <div className="flex  gap-2">
                <p className="bg-orange-400 w-2 h-2 rounded-full mt-2"></p>
                <p style={{ fontSize: "12px ", paddingTop: "2px" }}>
                  Traction Control
                </p>
              </div>

              <div className="flex  gap-2">
                <p className="bg-orange-400 w-2 h-2 rounded-full mt-2"></p>
                <p style={{ fontSize: "12px ", paddingTop: "2px" }}>
                  Blind Spot
                </p>
              </div>

              <div className="flex  gap-2">
                <p className="bg-orange-400 w-2 h-2 rounded-full mt-2"></p>
                <p style={{ fontSize: "12px ", paddingTop: "2px" }}>
                  Tire Failure
                </p>
              </div>
            </div>
          </div>

          {/*Body part*/}
          <div className="flex justify-content-between m-3 ">
            <h6>Body Parts</h6>
          </div>

          <div className="flex justify-content-between m-3 px-2 bg-gray-300  h-6">
            <p>Front Bumper</p>
            <p>Lorem Ipsum</p>
          </div>

          <div className="flex justify-content-between m-2 px-2 mb-3  h-6">
            <p>Engine Bonnet</p>
            <p>Lorem Ipsum</p>
          </div>

          <div className="flex justify-content-between m-3 px-2 bg-gray-300  h-6">
            <p>Ceiling</p>
            <p>Lorem Ipsum</p>
          </div>

          <div className="flex justify-content-between m-2 px-2 mb-3  h-6">
            <p>Right Front Fendor</p>
            <p>Lorem Ipsum</p>
          </div>

          <div className="flex justify-content-between m-3 px-2 bg-gray-300  h-6">
            <p>Right Front Door</p>
            <p>Lorem Ipsum</p>
          </div>

          <div className="flex justify-content-between m-2 px-2 mb-3  h-6">
            <p>Right Rear Door</p>
            <p>Lorem Ipsum</p>
          </div>

          <div className="flex justify-content-between m-3 px-2 bg-gray-300  h-6">
            <p>Right Rear Fendor</p>
            <p>Lorem Ipsum</p>
          </div>

          <div className="flex justify-content-between m-2 px-2 mb-3  h-6">
            <p>Left Front Fendor</p>
            <p>Lorem Ipsum</p>
          </div>

          <div className="flex justify-content-between m-3 px-2 bg-gray-300  h-6">
            <p>Left Front Door</p>
            <p>Lorem Ipsum</p>
          </div>

          <div className="flex justify-content-between m-2 px-2 mb-3  h-6">
            <p>Left Rear Fendor</p>
            <p>Lorem Ipsum</p>
          </div>

          <div className="flex justify-content-between m-3 px-2 bg-gray-300  h-6">
            <p>Tailgate</p>
            <p>Lorem Ipsum</p>
          </div>

          <div className="flex justify-content-between m-2 px-2 mb-3  h-6">
            <p>Rear Bumper</p>
            <p>Lorem Ipsum</p>
          </div>

          <div className="px-3 pt-3">
            <input
              type="checkbox"
              class="form-check-input"
              id="exampleCheck1"
            />
            <label class="form-check-label px-3" for="exampleCheck1">
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

export default ImgBasicInformation;
