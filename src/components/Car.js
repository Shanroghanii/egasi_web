import React from "react";
import facebook from "../images/facebook.svg";
import Google from "../images/google.svg";
import twitter from "../images/twitter.svg";
import instagram from "../images/instagram.svg";
import paragraph from "../images/paragraph.svg";
import phone from "../images/phone.svg";
import sms from "../images/sms.svg";
import car from "../images/car.png";
import bcar from "../images/b car.png";
import Llocation from "../images/Group 3062.png";
import adman from "../images/Group 401.svg";
import arrowdown from "../images/Group 403.svg";
import vtype from "../images/vtype.svg";
import Heartts from "../images/Heartts.svg";
// Navbar Start
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../images/Group 3321.svg";
import NavbarImage1 from "../images/Group 11680.png";
import NavbarImage2 from "../images/Group 11819.png";
// Navbar End


import like from "../images/1.png";
import comment from "../images/2.png";
import reply from "../images/3.png";
import { Link } from "react-router-dom";
import NavbarImage3 from "../images/gil.svg";
import category from "../images/category.svg";
import subcategory from "../images/sub category.svg";
import location from "../images/location.svg";
import Homme from "../images/Home.svg";
import search from "../images/search.png";

import "../style/Car.css";

const Car = () => {
  return (
    <>
      {/*Navbar Start*/}
      <Navbar collapseOnSelect expand="lg">
        <Container>
          <Navbar.Brand href="#home">
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

              <Nav.Link eventKey={2} href="#memes">
                <Link to="/createdadvehicle">
                  <Button
                    className="mt-2 w-32  text-white"
                    variant=" "
                    style={{
                      borderRadius: "30px",
                      background: "#f37521",
                      padding: "12px",
                    }}
                  >
                    Create Ad
                  </Button>
                </Link>
              </Nav.Link>
            </Nav>

            <div className="flex items-center mt-3">
              <Nav.Link href="#deets">
                {" "}
                <img className="w-16 h-16" src={NavbarImage1} alt="" />
              </Nav.Link>

              <Nav.Link href="#deets">
                {" "}
                <img
                  className="w-20 h-20 py-1 mt-2"
                  src={NavbarImage3}
                  alt=""
                />
              </Nav.Link>
              <Nav.Link href="#deets">
                {" "}
                <img className="w-16 h-16" src={NavbarImage2} alt="" />
              </Nav.Link>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/*Navbar End*/}

      {/*  */}

      <div className="res">
        <div className="row realstatesearch">
          <div className="col-12 col-md-6 col-lg-2">
            <spanr className="d-flex">
              <img src={location} alt="" />
              <p>location</p>
            </spanr>
            <Form.Select
              style={{
                width: "150px",
                border: "none",
                fontSize: "20px",
                marginTop: "-15px",
              }}
            >
              <option>Residential</option>
              <option></option>
              <option></option>
              <option></option>
              <option></option>
              <option></option>
              <option></option>
              <option></option>
            </Form.Select>
          </div>

          <div className="col-12 col-md-6 col-lg-2">
            <spanr className="d-flex">
              <img src={Homme} alt="" />
              <p>Purpose</p>
            </spanr>

            <Form.Select
              style={{
                width: "150px",
                border: "none",
                fontSize: "20px",
                marginTop: "-15px",
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

          <div className="col-12 col-md-6 col-lg-2">
            <spanr className="d-flex">
              <img src={category} alt="" />
              <p>Category</p>
            </spanr>
            <Form.Select
              style={{
                width: "150px",
                border: "none",
                fontSize: "20px",
                marginTop: "-15px",
              }}
            >
              <option>Residential</option>
              <option></option>
              <option></option>
              <option></option>
              <option></option>
              <option></option>
              <option></option>
              <option></option>
            </Form.Select>
          </div>

          <div className="col-12 col-md-6 col-lg-2">
            <spanr className="d-flex">
              <img src={subcategory} alt="" />
              <p>Subcategory</p>
            </spanr>
            <Form.Select
              style={{
                width: "150px",
                border: "none",
                fontSize: "20px",
                marginTop: "-15px",
              }}
            >
              <option>Villa</option>
              <option></option>
              <option></option>
              <option></option>
              <option></option>
              <option></option>
              <option></option>
              <option></option>
            </Form.Select>
          </div>

          <div className="col-12 col-md-6 col-lg-2">
            <button className="RSbtn">
              <img src={search} alt="" />
              <spanr className="text-white">Search</spanr>
            </button>
          </div>
        </div>
      </div>

      {/*  */}

      <div className="container mx-auto mt-5">
        <div className="flex justify-between items-center flex-col sm:flex-col md:flex-row">
          <h2 className="mt-3 ">Filters</h2>
          <div className=" flex gap-3 justify-end flex-col items-center md:flex-row mt-3">
            <div
              className="flex w-64 md:w-36 justify-center    rounded-full  gap-3 justify-items-center "
              style={{ border: "1px solid black", padding: "10px" }}
            >
              <img className="w-5 h-6 mt-1" src={Llocation} alt="" />
              <button>Map View</button>
            </div>

            <div
              className="flex w-64 md:w-36 justify-between   rounded-full  gap-2 justify-items-center"
              style={{ border: "1px solid black", padding: "12px" }}
            >
              <img className="w-4 " src={adman} alt="" />
              <button>Sort by</button>
              <img className="w-3" src={arrowdown} alt="" />
            </div>

            <div
              className="flex w-64 md:w-36 justify-between h-12 p-1 px-2  rounded-full gap-2 justify-items-center"
              style={{ border: "1px solid black" }}
            >
              <img
                className="w-5 h-4  ms-1"
                src={vtype}
                alt=""
                style={{ marginTop: "11px" }}
              />
              <button>View Type</button>
              <img className="w-3" src={arrowdown} alt="" />
            </div>
          </div>
        </div>
      </div>

      {/* side bar */}

      <div className="container mt-5">
        <div className="mainsearch">
          <div className="sidebar">
            <h4>Location Filter</h4>

            <Form.Select
              className="select rounded-4 mt-3"
              aria-label="Default select example"
            >
              <option>Country</option>
              <option></option>
              <option></option>
              <option></option>
              <option></option>
              <option></option>
              <option></option>
              <option></option>
            </Form.Select>

            <Form.Select
              className="select rounded-4 mt-3"
              aria-label="Default select example"
            >
              <option>City</option>
              <option></option>
              <option></option>
              <option></option>
              <option></option>
              <option></option>
              <option></option>
              <option></option>
            </Form.Select>

            <Form.Select
              className="select rounded-4 mt-3"
              aria-label="Default select example"
            >
              <option>District</option>
              <option></option>
              <option></option>
              <option></option>
              <option></option>
              <option></option>
              <option></option>
              <option></option>
            </Form.Select>

            <Form.Select
              className="select rounded-4 mt-3"
              aria-label="Default select example"
            >
              <option>Neighborhood</option>
              <option></option>
              <option></option>
              <option></option>
              <option></option>
              <option></option>
              <option></option>
              <option></option>
            </Form.Select>
            <hr />

            <h5 style={{ marginTop: "50px", marginInline: "1rem" }}>
              Search Nearby
            </h5>
            <Form.Select
              className="select rounded-4 mt-4"
              aria-label="Default select example"
            >
              <option>Select</option>
              <option></option>
              <option></option>
              <option></option>
              <option></option>
              <option></option>
              <option></option>
              <option></option>
            </Form.Select>

            <h5 style={{ marginTop: "50px", marginInline: "1rem" }}>
              Search Nearby
            </h5>

            <Form.Select
              className="select rounded-4 mt-3"
              aria-label="Default select example"
            >
              <option>select</option>
              <option></option>
              <option></option>
              <option></option>
              <option></option>
              <option></option>
              <option></option>
              <option></option>
            </Form.Select>
            <hr />

            <h6 style={{ marginTop: "30px", marginInline: "1rem" }}>
              Area Range{" "}
            </h6>

            <hr />

            <h6 style={{ marginTop: "30px", marginInline: "1rem" }}>
              Bedrooms{" "}
            </h6>

            <hr />

            <h6 style={{ marginTop: "30px", marginInline: "1rem" }}>
              Bathrooms
            </h6>

            <hr />

            <h6 style={{ marginTop: "30px", marginInline: "1rem" }}>
              Category
            </h6>

            <Form.Select
              className="select rounded-4 mt-3"
              aria-label="Default select example"
            >
              <option>Select</option>
              <option></option>
              <option></option>
              <option></option>
              <option></option>
              <option></option>
              <option></option>
              <option></option>
            </Form.Select>
            <hr />

            <h6 style={{ marginTop: "30px", marginInline: "1rem" }}>
              Sub-Category
            </h6>

            <Form.Select
              className="select rounded-4 mt-3"
              aria-label="Default select example"
            >
              <option>Select</option>
              <option></option>
              <option></option>
              <option></option>
              <option></option>
              <option></option>
              <option></option>
              <option></option>
            </Form.Select>
            <hr />

            <h6 style={{ marginTop: "30px", marginInline: "1rem" }}>
              From Whom
            </h6>

            <Form.Select
              className="select rounded-4 mt-3"
              aria-label="Default select example"
            >
              <option>Select</option>
              <option></option>
              <option></option>
              <option></option>
              <option></option>
              <option></option>
              <option></option>
              <option></option>
            </Form.Select>
            <hr />

            <h6 style={{ marginTop: "30px", marginInline: "1rem" }}>
              From Whom
            </h6>

            <Form.Select
              className="select rounded-4 mt-3"
              aria-label="Default select example"
            >
              <option>Select</option>
              <option></option>
              <option></option>
              <option></option>
              <option></option>
              <option></option>
              <option></option>
              <option></option>
            </Form.Select>
            <hr />

            <h6 style={{ marginTop: "30px", marginInline: "1rem" }}>
              Building Age
            </h6>

            <Form.Select
              className="select rounded-4 mt-3"
              aria-label="Default select example"
            >
              <option>Select</option>
              <option></option>
              <option></option>
              <option></option>
              <option></option>
              <option></option>
              <option></option>
              <option></option>
            </Form.Select>
            <hr />

            <h6 style={{ marginTop: "30px", marginInline: "1rem" }}>
              Building Floor
            </h6>

            <Form.Select
              className="select rounded-4 mt-3"
              aria-label="Default select example"
            >
              <option>Select</option>
              <option></option>
              <option></option>
              <option></option>
              <option></option>
              <option></option>
              <option></option>
              <option></option>
            </Form.Select>
            <hr />

            <h6 style={{ marginTop: "30px", marginInline: "1rem" }}>
              Building Floor
            </h6>

            <Form.Select
              className="select rounded-4 mt-3"
              aria-label="Default select example"
            >
              <option>Select</option>
              <option></option>
              <option></option>
              <option></option>
              <option></option>
              <option></option>
              <option></option>
              <option></option>
            </Form.Select>
            <hr />

            <h6 style={{ marginTop: "30px", marginInline: "1rem" }}>
              Floor Location
            </h6>

            <Form.Select
              className="select rounded-4 mt-3"
              aria-label="Default select example"
            >
              <option>Select</option>
              <option></option>
              <option></option>
              <option></option>
              <option></option>
              <option></option>
              <option></option>
              <option></option>
            </Form.Select>
            <hr />

            <h6 style={{ marginTop: "30px", marginInline: "1rem" }}>
              Eligable for Mortage
            </h6>

            <Form.Select
              className="select rounded-4 mt-3"
              aria-label="Default select example"
            >
              <option>Select</option>
              <option></option>
              <option></option>
              <option></option>
              <option></option>
              <option></option>
              <option></option>
              <option></option>
            </Form.Select>
            <hr />

            <h6 style={{ marginTop: "30px", marginInline: "1rem" }}>
              Title Deed Status
            </h6>

            <Form.Select
              className="select rounded-4 mt-3"
              aria-label="Default select example"
            >
              <option>Select</option>
              <option></option>
              <option></option>
              <option></option>
              <option></option>
              <option></option>
              <option></option>
              <option></option>
            </Form.Select>
            <hr />

            <h6 style={{ marginTop: "30px", marginInline: "1rem" }}>
              Heating Type
            </h6>

            <Form.Select
              className="select rounded-4 mt-3"
              aria-label="Default select example"
            >
              <option>Select</option>
              <option></option>
              <option></option>
              <option></option>
              <option></option>
              <option></option>
              <option></option>
              <option></option>
            </Form.Select>
            <hr />

            <h6 style={{ marginTop: "30px", marginInline: "1rem" }}>
              Inside Complex
            </h6>

            <Form.Select
              className="select rounded-4 mt-3"
              aria-label="Default select example"
            >
              <option>Select</option>
              <option></option>
              <option></option>
              <option></option>
              <option></option>
              <option></option>
              <option></option>
              <option></option>
            </Form.Select>
            <hr style={{ opacity: "0.5" }} />

            <h6 style={{ marginTop: "30px", marginInline: "1rem" }}>Facade</h6>

            <Form.Select
              className="select rounded-4 mt-3"
              aria-label="Default select example"
            >
              <option>Select</option>
              <option></option>
              <option></option>
              <option></option>
              <option></option>
              <option></option>
              <option></option>
              <option></option>
            </Form.Select>
          </div>

          <div className="main-body">
            <div className="col-12 col-md-6 col-lg-3 mt-4">
              <div className="card" style={{ width: "15rem", height: "20rem" }}>
                <div className="relative ">
                  <img
                    className="absolute items-content-end w-12"
                    src={Heartts}
                    alt=""
                    style={{ right: "-5px" }}
                  />
                  <img src={car} alt="" />
                </div>

                <div className="card-body">
                  <h4>Toyota for sale</h4>
                  <p className="card-text">$65,000</p>
                </div>
                <h6>Lorem ipsum address, New York</h6>

                <div className="Three">
                  <spanc className="d-flex">
                    <img src={like} alt="" />
                    <p>4</p>
                  </spanc>

                  <spanc className="d-flex">
                    <img src={reply} alt="" />
                    <p>5478 sqft</p>
                  </spanc>

                  <spanc className="d-flex">
                    <img src={comment} alt="" />
                    <p>3</p>
                  </spanc>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-3 mt-4">
              <div className="card" style={{ width: "15rem", height: "20rem" }}>
                <div className="relative ">
                  <img
                    className="absolute items-content-end w-12"
                    src={Heartts}
                    alt=""
                    style={{ right: "-5px" }}
                  />
                  <img src={car} alt="" />
                </div>

                <div className="card-body">
                  <h4>Toyota for sale</h4>
                  <p className="card-text">$65,000</p>
                </div>
                <h6>Lorem ipsum address, New York</h6>

                <div className="Three">
                  <spanc className="d-flex">
                    <img src={like} alt="" />
                    <p>4</p>
                  </spanc>

                  <spanc className="d-flex">
                    <img src={reply} alt="" />
                    <p>5478 sqft</p>
                  </spanc>

                  <spanc className="d-flex">
                    <img src={comment} alt="" />
                    <p>3</p>
                  </spanc>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-3 mt-4">
              <div className="card" style={{ width: "15rem", height: "20rem" }}>
                <div className="relative ">
                  <img
                    className="absolute items-content-end w-12"
                    src={Heartts}
                    alt=""
                    style={{ right: "-5px" }}
                  />
                  <img src={car} alt="" />
                </div>
                <div className="card-body">
                  <h4>Toyota for sale</h4>
                  <p className="card-text">$65,000</p>
                </div>
                <h6>Lorem ipsum address, New York</h6>

                <div className="Three">
                  <spanc className="d-flex">
                    <img src={like} alt="" />
                    <p>4</p>
                  </spanc>

                  <spanc className="d-flex">
                    <img src={reply} alt="" />
                    <p>5478 sqft</p>
                  </spanc>

                  <spanc className="d-flex">
                    <img src={comment} alt="" />
                    <p>3</p>
                  </spanc>
                </div>
              </div>
            </div>
          </div>

          <div className="main-body">
            <div className="col-12 col-md-6 col-lg-3 mt-4">
              <div className="card" style={{ width: "15rem", height: "20rem" }}>
                <div className="relative ">
                  <img
                    className="absolute items-content-end w-12"
                    src={Heartts}
                    alt=""
                    style={{ right: "-5px" }}
                  />
                  <img src={bcar} alt="" />
                </div>

                <div className="card-body">
                  <h4>House for sale</h4>
                  <p className="card-text">$65,000</p>
                </div>
                <h6>Lorem ipsum address, New York</h6>

                <div className="Three">
                  <spanc className="d-flex">
                    <img src={like} alt="" />
                    <p>4</p>
                  </spanc>

                  <spanc className="d-flex">
                    <img src={reply} alt="" />
                    <p>5478 sqft</p>
                  </spanc>

                  <spanc className="d-flex">
                    <img src={comment} alt="" />
                    <p>3</p>
                  </spanc>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-3 mt-4">
              <div className="card" style={{ width: "15rem", height: "20rem" }}>
                <div className="relative ">
                  <img
                    className="absolute items-content-end w-12"
                    src={Heartts}
                    alt=""
                    style={{ right: "-5px" }}
                  />
                  <img src={bcar} alt="" />
                </div>
                <div className="card-body">
                  <h4>House for sale</h4>
                  <p className="card-text">$65,000</p>
                </div>
                <h6>Lorem ipsum address, New York</h6>

                <div className="Three">
                  <spanc className="d-flex">
                    <img src={like} alt="" />
                    <p>4</p>
                  </spanc>

                  <spanc className="d-flex">
                    <img src={reply} alt="" />
                    <p>5478 sqft</p>
                  </spanc>

                  <spanc className="d-flex">
                    <img src={comment} alt="" />
                    <p>3</p>
                  </spanc>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-3 mt-4">
              <div className="card" style={{ width: "15rem", height: "20rem" }}>
                <div className="relative ">
                  <img
                    className="absolute items-content-end w-12"
                    src={Heartts}
                    alt=""
                    style={{ right: "-5px" }}
                  />
                  <img src={bcar} alt="" />
                </div>
                <div className="card-body">
                  <h4>House for sale</h4>
                  <p className="card-text">$65,000</p>
                </div>
                <h6>Lorem ipsum address, New York</h6>

                <div className="Three">
                  <spanc className="d-flex">
                    <img src={like} alt="" />
                    <p>4</p>
                  </spanc>

                  <spanc className="d-flex">
                    <img src={reply} alt="" />
                    <p>5478 sqft</p>
                  </spanc>

                  <spanc className="d-flex">
                    <img src={comment} alt="" />
                    <p>3</p>
                  </spanc>
                </div>
              </div>
            </div>
          </div>

          <div className="main-body">
            <div className="col-12 col-md-6 col-lg-3 mt-4">
              <div className="card" style={{ width: "15rem", height: "20rem" }}>
                <div className="relative ">
                  <img
                    className="absolute items-content-end w-12"
                    src={Heartts}
                    alt=""
                    style={{ right: "-5px" }}
                  />
                  <img src={car} alt="" />
                </div>

                <div className="card-body">
                  <h4>Toyota for sale</h4>
                  <p className="card-text">$65,000</p>
                </div>
                <h6>Lorem ipsum address, New York</h6>

                <div className="Three">
                  <spanc className="d-flex">
                    <img src={like} alt="" />
                    <p>4</p>
                  </spanc>

                  <spanc className="d-flex">
                    <img src={reply} alt="" />
                    <p>5478 sqft</p>
                  </spanc>

                  <spanc className="d-flex">
                    <img src={comment} alt="" />
                    <p>3</p>
                  </spanc>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-3 mt-4">
              <div className="card" style={{ width: "15rem", height: "20rem" }}>
                <div className="relative ">
                  <img
                    className="absolute items-content-end w-12"
                    src={Heartts}
                    alt=""
                    style={{ right: "-5px" }}
                  />
                  <img src={car} alt="" />
                </div>

                <div className="card-body">
                  <h4>Toyota for sale</h4>
                  <p className="card-text">$65,000</p>
                </div>
                <h6>Lorem ipsum address, New York</h6>

                <div className="Three">
                  <spanc className="d-flex">
                    <img src={like} alt="" />
                    <p>4</p>
                  </spanc>

                  <spanc className="d-flex">
                    <img src={reply} alt="" />
                    <p>5478 sqft</p>
                  </spanc>

                  <spanc className="d-flex">
                    <img src={comment} alt="" />
                    <p>3</p>
                  </spanc>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-3 mt-4">
              <div className="card" style={{ width: "15rem", height: "20rem" }}>
                <div className="relative ">
                  <img
                    className="absolute items-content-end w-12"
                    src={Heartts}
                    alt=""
                    style={{ right: "-5px" }}
                  />
                  <img src={car} alt="" />
                </div>
                <div className="card-body">
                  <h4>Toyota for sale</h4>
                  <p className="card-text">$65,000</p>
                </div>
                <h6>Lorem ipsum address, New York</h6>

                <div className="Three">
                  <spanc className="d-flex">
                    <img src={like} alt="" />
                    <p>4</p>
                  </spanc>

                  <spanc className="d-flex">
                    <img src={reply} alt="" />
                    <p>5478 sqft</p>
                  </spanc>

                  <spanc className="d-flex">
                    <img src={comment} alt="" />
                    <p>3</p>
                  </spanc>
                </div>
              </div>
            </div>
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

export default Car;
