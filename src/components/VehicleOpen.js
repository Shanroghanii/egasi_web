import React from "react";
import RealState from "../images/Real State.png";
import Dropdown from "react-bootstrap/Dropdown";
import Heartts from "../images/Heartts.svg";
import mmodal from "../images/mmodal.svg";

import purposecar from "../images/Purpose car.png";
import Rs from "../images/Rs.png";
import TrustState from "../images/TrustState.svg";
import Group692 from "../images/Group 11692.svg";
import Group1178 from "../images/Group 11718.svg";
import Group11709 from "../images/Group 11709.svg";
import card from "../images/Group 3347.png";
import search from "../images/whitesearch.svg";
import Room from "../images/Room.png";
import like from "../images/1.png";
import comment from "../images/2.png";
import reply from "../images/3.png";
import NavbarImage3 from "../images/gil.svg";
import Group11921 from "../images/Group 11921.svg";
import Group11922 from "../images/Group 11922.svg";
import Group11923 from "../images/Group 11923.svg";
import Group11924 from "../images/Group 11924.svg";

import pepsi from "../images/Image 2.png";
import burger from "../images/Image 3.png";
import section2image from "../images/sectiontwoimage.png";
import { Link } from "react-router-dom";

// Navbar Start
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
// import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../images/Group 3321.svg";
import NavbarImage1 from "../images/Group 11680.png";
import NavbarImage2 from "../images/Group 11819.png";
// Navbar End

import facebook from "../images/facebook.svg";
import Google from "../images/google.svg";
import twitter from "../images/twitter.svg";
import instagram from "../images/instagram.svg";
import paragraph from "../images/paragraph.svg";
import phone from "../images/phone.svg";
import sms from "../images/sms.svg";


import Form from "react-bootstrap/Form";
import category from "../images/category.svg";

import location from "../images/location.svg";

import car1 from "../images/car1.svg";
import brand from "../images/rec.svg";

import carrs from "../images/carrs.png";
import OffRoad from "../images/Off-Road.png";
import Minivans from "../images/Minivans.png";
import Motorcycles from "../images/Motorcyles.png";
import "../style/Vehicle.css";

const VehicleOpen = () => {
  return (
    <>
      {/*Navbar Start*/}
      <Navbar collapseOnSelect expand="lg">
        <Container>
          <Navbar.Brand to="">
            <Link to="/home">
              <img className="w-48" src={logo} alt="" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav className="ms-auto mt-3">
              <Nav.Link
                className="mt-3  fs-5 me-2 "
                style={{ color: "#f37521" }}
                to="/home"
              >
                <Link to="/home">
                  <button className="text-black">Home</button>
                </Link>
              </Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                <Link to="/createdadvehicle">
                  <Button variant="  " id="created">
                    Create Ad
                  </Button>
                </Link>
              </Nav.Link>

              <Nav.Link to="#deets">
                <img
                  className="w-16 h-16 mt-1"
                  src={NavbarImage1}
                  alt=""
                  id=""
                />
              </Nav.Link>

              <Nav.Link href="#deets">
                <Dropdown className="bg-none">
                  <Dropdown.Toggle
                    className=""
                    style={{
                      background: "none",
                      border: "none ",
                    }}
                  >
                    <img
                      className=" "
                      src={NavbarImage3}
                      alt=""
                      style={{ maxWidth: "100%", width: "72px " }}
                    />
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Link class="dropdown-item mt-1" to="/myprofile">
                      My Profile
                    </Link>
                    <Link class="dropdown-item mt-1" to="/AdMangement">
                      Ad Managment
                    </Link>
                    <Link class="dropdown-item mt-1" to="#">
                      Balance
                      <spanh className="ms-5 ps-3 text-warning">$500</spanh>
                    </Link>
                    <Link class="dropdown-item mt-1" to="/favorites">
                      Favorites
                    </Link>

                    <Link class="dropdown-item mt-1" to="/message">
                      Messages
                    </Link>

                    <Link class="dropdown-item mt-1" to="#">
                      Language
                      <spanh className="ms-5 ps-3 text-warning">Eng</spanh>
                    </Link>
                    <Link class="dropdown-item mt-1" to="/privacypolicy">
                      Privacy Policy
                    </Link>
                    <Link class="dropdown-item mt-1" to="/faq">
                      FAQ's
                    </Link>

                    <Link class="dropdown-item mt-1" to="/termsofuse">
                      Term of Use
                    </Link>

                    <Link class="dropdown-item mt-1" to="/reportproblem">
                      Report Problem
                    </Link>
                    <Link class="dropdown-item mt-1" to="/aboutus">
                      About Us
                    </Link>
                    <Link class="dropdown-item mt-1" to="/">
                      Logout
                    </Link>
                  </Dropdown.Menu>
                </Dropdown>
              </Nav.Link>

              <Nav.Link to="#deets">
                {" "}
                <img
                  className="w-16 h-16 mt-1"
                  src={NavbarImage2}
                  alt=""
                  id=""
                />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/*Navbar End*/}
      <div className="background-image">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-12 col-md-12 col-lg-6">
              <div className="section1">
                <h3
                  className="text-center mt-5 text-white"
                  style={{ fontSize: "40px" }}
                >
                  THE RIGHT PLACE TO FIND YOUR PERFECT PLACE
                </h3>
              </div>
            </div>
          </div>

          {/*search*/}
          <div class="container mx-auto px-4 mt-5">
            <div className="flex justify-center ">
              <div className="bg-white shadow-md items-center p-2 rounded-lg max-w-[1100px]">
                <div className="grid grid-cols-1 gap-2 px-3 md:grid-cols-3 lg:grid-cols-6 mt-1">
                  <div>
                    <div className="flex px-2 ">
                      <img src={location} alt="" style={{ opacity: "0.7" }} />
                      <p className="mt-2 px-2" style={{ opacity: "0.7" }}>
                        location
                      </p>
                    </div>
                    <div>
                      <Form.Select
                        style={{
                          width: "150px",
                          border: "none",
                          fontSize: "20px",
                          marginTop: "-4px",
                        }}
                      >
                        <option>Islamabad</option>
                        <option></option>
                        <option></option>
                        <option></option>
                        <option></option>
                        <option></option>
                        <option></option>
                        <option></option>
                      </Form.Select>
                    </div>
                  </div>

                  <div>
                    <div className="flex px-2 ">
                      <img
                        className="w-8 h-5"
                        src={purposecar}
                        alt=""
                        style={{ marginTop: "10px", opacity: "0.7" }}
                      />
                      <p className="mt-2 px-2" style={{ opacity: "0.7" }}>
                        Purpose
                      </p>
                    </div>
                    <div>
                      <Form.Select
                        style={{
                          width: "150px",
                          border: "none",
                          fontSize: "20px",
                          marginTop: "-4px",
                        }}
                      >
                        <option>Rent</option>
                        <option></option>
                        <option></option>
                        <option></option>
                        <option></option>
                        <option></option>
                        <option></option>
                        <option></option>
                      </Form.Select>
                    </div>
                  </div>

                  <div>
                    <div className="flex px-2 ">
                      <img src={category} alt="" style={{ opacity: "0.7" }} />
                      <p className="mt-2 px-2" style={{ opacity: "0.7" }}>
                        Category
                      </p>
                    </div>
                    <div>
                      <Form.Select
                        style={{
                          width: "150px",
                          border: "none",
                          fontSize: "20px",
                          marginTop: "-4px",
                        }}
                      >
                        <option>Cars</option>
                        <option></option>
                        <option></option>
                        <option></option>
                        <option></option>
                        <option></option>
                        <option></option>
                        <option></option>
                      </Form.Select>
                    </div>
                  </div>

                  <div>
                    <div className="flex px-2 ">
                      <img src={car1} alt="" style={{ opacity: "0.7" }} />
                      <p className="mt-2 px-2" style={{ opacity: "0.7" }}>
                        Brand
                      </p>
                    </div>
                    <div>
                      <Form.Select
                        style={{
                          width: "150px",
                          border: "none",
                          fontSize: "20px",
                          marginTop: "-4px",
                        }}
                      >
                        <option>Audi</option>
                        <option></option>
                        <option></option>
                        <option></option>
                        <option></option>
                        <option></option>
                        <option></option>
                        <option></option>
                      </Form.Select>
                    </div>
                  </div>

                  <div>
                    <div className="flex px-2 ">
                      <img src={mmodal} alt="" style={{ opacity: "0.7" }} />
                      <p className="mt-2 px-2" style={{ opacity: "0.7" }}>
                        Modal
                      </p>
                    </div>
                    <div>
                      <Form.Select
                        style={{
                          width: "150px",
                          border: "none",
                          fontSize: "20px",
                          marginTop: "-4px",
                        }}
                      >
                        <option>Audi 5</option>
                        <option></option>
                        <option></option>
                        <option></option>
                        <option></option>
                        <option></option>
                        <option></option>
                        <option></option>
                      </Form.Select>
                    </div>
                  </div>

                  <Link
                    to="/searchvehicle"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    {" "}
                    <div
                      className="flex ms-3  w-32 h-12 mt-4 items-center rounded-xl gap-2 justify-center "
                      style={{ background: "#F37521" }}
                    >
                      <img className="w-6 h-6 " src={search} alt="" />
                      <p className="mt-2 pt-1 text-white">Search</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="section2">
            <img src={section2image} alt="" />
          </div>
        </div>
      </div>

      {/*......................*/}
      <div className="container">
        <div className="row  d-flex justify-content-between ">
          <div className="col-12 col-md-12 col-lg-6 mt-5">
            <img
              src={pepsi}
              alt=""
              style={{ width: "100%", height: "70%", borderRadius: "10px" }}
            />
          </div>

          <div className="col-12 col-md-12 col-lg-6 mt-5">
            <img
              src={burger}
              alt=""
              style={{ width: "100%", height: "70%", borderRadius: "10px" }}
            />
          </div>
        </div>
      </div>

      {/*CATEGORIES*/}
      <div className="container mt-3">
        <h4>CATEGORIES</h4>
        <div className="row">
          <div className="col-12 col-md-6 col-lg-3 mt-4">
            <Link to="/car" style={{ textDecoration: "none", color: "black" }}>
              <div className="card">
                <img src={carrs} alt="" />
                <h4 className="text-center">Car</h4>
              </div>
            </Link>
          </div>

          <div className="col-12 col-md-6 col-lg-3 mt-4">
            <div className="card">
              <img src={OffRoad} alt="" />
              <h4 className="text-center">Off-Road</h4>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-3 mt-4">
            <div className="card">
              <img src={Minivans} alt="" />
              <h4 className="text-center">Minivans</h4>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-3 mt-4">
            <div className="card">
              <img src={Motorcycles} alt="" />
              <h4 className="text-center">Motorcycles</h4>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto mt-4">
        <h5>RECOMMENDED</h5>
        <div className="grid grid-cols-1 lg:grid-cols-4 xl:grid-cols-4 md:grid-cols-3 md:gap-4  lg:gap-3 justify-items-center">
          <Link to="/beautifulhouseforsale " style={{ textDecoration: "none" }}>
            <div className="mt-3">
              <div className="relative ">
                <img
                  className="absolute items-content-end w-12"
                  src={Heartts}
                  alt=""
                  style={{ right: "-5px" }}
                />
                <img className="" src={card} alt="" />
              </div>
              <div className="bg-white px-2 py-2 ">
                <div className="flex justify-between gap-3 ">
                  <p className=" text-black" style={{ fontSize: "13px" }}>
                    House for sale
                  </p>
                  <h6 className="text-orange-300 ">$400,000</h6>
                </div>
                <p style={{ fontSize: "11px", opacity: "0.4", color: "black" }}>
                  Lorem ipsum address, New York
                </p>

                <div className="flex justify-between mb-1">
                  <img src={like} alt="" />
                  <spans
                    style={{ fontSize: "10px", opacity: "0.4", color: "black" }}
                  >
                    4
                  </spans>
                  <img src={comment} alt="" />
                  <spans
                    style={{ fontSize: "10px", opacity: "0.4", color: "black" }}
                  >
                    5478 sqft
                  </spans>
                  <img src={reply} alt="" />
                  <spans
                    style={{ fontSize: "10px", opacity: "0.4", color: "black" }}
                  >
                    3
                  </spans>
                </div>
              </div>
            </div>
          </Link>

          <Link to="/beautifulhouseforsale " style={{ textDecoration: "none" }}>
            <div className="mt-3">
              <div className="relative ">
                <img
                  className="absolute items-content-end w-12"
                  src={Heartts}
                  alt=""
                  style={{ right: "-5px" }}
                />
                <img className="" src={Room} alt="" />
              </div>
              <div className="bg-white px-2 py-2 ">
                <div className="flex justify-between gap-3 ">
                  <p className=" text-black" style={{ fontSize: "13px" }}>
                    Appartment for sale
                  </p>
                  <h6 className="text-orange-300 ">$400,000</h6>
                </div>
                <p style={{ fontSize: "11px", opacity: "0.4", color: "black" }}>
                  Lorem ipsum address, New York
                </p>

                <div className="flex justify-between mb-1">
                  <img src={like} alt="" />
                  <spans
                    style={{ fontSize: "10px", opacity: "0.4", color: "black" }}
                  >
                    4
                  </spans>
                  <img src={comment} alt="" />
                  <spans
                    style={{ fontSize: "10px", opacity: "0.4", color: "black" }}
                  >
                    5478 sqft
                  </spans>
                  <img src={reply} alt="" />
                  <spans
                    style={{ fontSize: "10px", opacity: "0.4", color: "black" }}
                  >
                    3
                  </spans>
                </div>
              </div>
            </div>
          </Link>

          <Link to="/beautifulhouseforsale " style={{ textDecoration: "none" }}>
            <div className="mt-3">
              <div className="relative ">
                <img
                  className="absolute items-content-end w-12"
                  src={Heartts}
                  alt=""
                  style={{ right: "-5px" }}
                />
                <img className="" src={card} alt="" />
              </div>
              <div className="bg-white px-2 py-2 ">
                <div className="flex justify-between gap-3 ">
                  <p className=" text-black" style={{ fontSize: "13px" }}>
                    House for sale
                  </p>
                  <h6 className="text-orange-300 ">$400,000</h6>
                </div>
                <p style={{ fontSize: "11px", opacity: "0.4", color: "black" }}>
                  Lorem ipsum address, New York
                </p>

                <div className="flex justify-between mb-1">
                  <img src={like} alt="" />
                  <spans
                    style={{ fontSize: "10px", opacity: "0.4", color: "black" }}
                  >
                    4
                  </spans>
                  <img src={comment} alt="" />
                  <spans
                    style={{ fontSize: "10px", opacity: "0.4", color: "black" }}
                  >
                    5478 sqft
                  </spans>
                  <img src={reply} alt="" />
                  <spans
                    style={{ fontSize: "10px", opacity: "0.4", color: "black" }}
                  >
                    3
                  </spans>
                </div>
              </div>
            </div>
          </Link>

          <Link to="/beautifulhouseforsale " style={{ textDecoration: "none" }}>
            <div className="mt-3">
              <div className="relative ">
                <img
                  className="absolute items-content-end w-12"
                  src={Heartts}
                  alt=""
                  style={{ right: "-5px" }}
                />
                <img className="" src={Room} alt="" />
              </div>
              <div className="bg-white px-2 py-2 ">
                <div className="flex justify-between gap-3 ">
                  <p className=" text-black" style={{ fontSize: "13px" }}>
                    Appartment for sale
                  </p>
                  <h6 className="text-orange-300 ">$400,000</h6>
                </div>
                <p style={{ fontSize: "11px", opacity: "0.4", color: "black" }}>
                  Lorem ipsum address, New York
                </p>

                <div className="flex justify-between mb-1">
                  <img src={like} alt="" />
                  <spans
                    style={{ fontSize: "10px", opacity: "0.4", color: "black" }}
                  >
                    4
                  </spans>
                  <img src={comment} alt="" />
                  <spans
                    style={{ fontSize: "10px", opacity: "0.4", color: "black" }}
                  >
                    5478 sqft
                  </spans>
                  <img src={reply} alt="" />
                  <spans
                    style={{ fontSize: "10px", opacity: "0.4", color: "black" }}
                  >
                    3
                  </spans>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>

      {/* section 6 */}

      {/*......6......*/}
      <div
        className="container "
        style={{ background: "white", marginTop: "40px", borderRadius: "10px" }}
      >
        <div className="d-flex justify-content-center">
          <button
            style={{
              width: "220px",
              marginTop: "20px",
              border: "none",
              background: "#F37521",
              padding: "10px",
              color: "white",
              borderRadius: "10px",
            }}
          >
            What you can do!
          </button>
        </div>

        <div className="row section">
          <div className="col-12 col-md-6 col-lg-3 ">
            <img src={Group11921} alt="" />
            <h6
              className="text-center mt-4 fw-bold"
              style={{ fontSize: "12px" }}
            >
              Find your dream place
            </h6>
            <p
              style={{ fontSize: "10px", opacity: "0.6", textAlign: "center" }}
            >
              Lorem ipsum dolor sit amet, consectetur
            </p>
          </div>

          <div className="col-12 col-md-6 col-lg-3 ">
            <img src={Group11922} alt="" />
            <h6
              className="text-center mt-4 fw-bold"
              style={{ fontSize: "12px" }}
            >
              Find your dream Vehicle
            </h6>

            <p
              style={{ fontSize: "10px", opacity: "0.6", textAlign: "center" }}
            >
              Lorem ipsum dolor sit amet, consectetur
            </p>
          </div>

          <div className="col-12 col-md-6 col-lg-3 ">
            <img src={Group11923} alt="" />
            <h6
              className="text-center mt-4 fw-bold"
              style={{ fontSize: "12px" }}
            >
              Rent, Buy & Sell
            </h6>
            <p
              style={{ fontSize: "10px", opacity: "0.6", textAlign: "center" }}
            >
              Lorem ipsum dolor sit amet, consectetur
            </p>
          </div>

          <div className="col-12 col-md-6 col-lg-3 ">
            <img src={Group11924} alt="" />
            <h6
              className="text-center mt-4 fw-bold"
              style={{ fontSize: "12px" }}
            >
              List your Ad
            </h6>
            <p
              style={{ fontSize: "10px", opacity: "0.6", textAlign: "center" }}
            >
              Lorem ipsum dolor sit amet, consectetur
            </p>
          </div>
        </div>
      </div>

      {/* section ..............7....... */}
      <div className="container mt-5">
        <h5 className="p-0 m-0">OUR PARTNERS</h5>
        <div className="grid grid-cols-1 lg:grid-cols-6 mt-4 md:grid-cols-3 md:gap-3 lg:gap-4 justify-items-center">
          <div className="rounded   max-w-sm">
            <img className="w-32" src={TrustState} alt="" />
          </div>

          <div className="rounded   max-w-sm">
            <img className="w-24" src={Group692} alt="" />
          </div>
          <div className="rounded   max-w-sm ">
            <img className="w-36" src={Rs} alt="" />
          </div>

          <div className="rounded   max-w-sm">
            <img className="w-32" src={Group1178} alt="" />
          </div>

          <div className="rounded   max-w-sm">
            <img className="w-32" src={Group11709} alt="" />
          </div>

          <div className="rounded   max-w-sm">
            <img className="w-32" src={RealState} alt="" />
          </div>
        </div>
      </div>

      {/*footer*/}
      <div className="container mx-auto  mt-5 ">
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

export default VehicleOpen;
