import React, { useState, useEffect } from "react";
import axios from "axios";

import { Link } from "react-router-dom";

import Room from "../images/Room.png";
import Heartts from "../images/Heartts.svg";

// Navbar Start

// import Form from "react-bootstrap/Form";
import facebook from "../images/facebook.svg";
import Google from "../images/google.svg";
import twitter from "../images/twitter.svg";
import instagram from "../images/instagram.svg";
import paragraph from "../images/paragraph.svg";
import phone from "../images/phone.svg";
import sms from "../images/sms.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../images/Group 3321.svg";
import NavbarImage1 from "../images/Group 11680.png";
import NavbarImage2 from "../images/Group 11819.png";
// import NavbarImage3 from "../images/gil.svg";
// import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
// Navbar End
// import Group3337 from "../images/Group 3337.png";
// import section2image from "../images/sectiontwoimage.png";
// import pepsi from "../images/Image 2.png";
// import burger from "../images/Image 3.png";
import RealState from "../images/Real State.png";
import Rs from "../images/Rs.png";
import TrustState from "../images/TrustState.svg";
import Group692 from "../images/Group 11692.svg";
import Group1178 from "../images/Group 11718.svg";
import Group11709 from "../images/Group 11709.svg";
import card from "../images/Group 3347.png";

import like from "../images/1.png";
import comment from "../images/2.png";
import reply from "../images/3.png";
// Navbar Start
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
// import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

// Navbar End

import Group11921 from "../images/Group 11921.svg";
import Group11922 from "../images/Group 11922.svg";
import Group11923 from "../images/Group 11923.svg";
import Group11924 from "../images/Group 11924.svg";
import section2image from "../images/sectiontwoimage.png";
import category from "../images/category.svg";
import subcategory from "../images/sub category.svg";
import location from "../images/location.svg";
import Homme from "../images/Home.svg";
import search from "../images/whitesearch.svg";
import Form from "react-bootstrap/Form";
import pepsi from "../images/Image 2.png";
import burger from "../images/Image 3.png";
import Residential from "../images/Residential.png";
import Flats from "../images/Flats.png";
import Plots from "../images/Plots.png";
import Agriculture from "../images/Agriculture.png";

import "../style/RealState.css";

const RealsState = () => {
  
  const [realid, setRealid] = useState([]);
  
  //  Real state dropdown
  const [selectedId, setSelectedId] = useState(null);

  const [brands, setBrands] = useState([]);
  const [models, setModels] = useState([]);

  useEffect(() => {
    axios
      .get("http://54.179.232.109:1337/api/v1/adds/sections")
      .then((response) => {
        setBrands(response.data[1].categories);
      })
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    if (selectedId) {
      axios
        .get(
          `http://54.179.232.109:1337/api/v1/adds/realestate-cat-dropdown?catId=${selectedId}`
        )
        .then((response) => {
          setModels(response.data);
        })
        .catch((error) => console.error(error));
    }
  }, [selectedId]);

  const handleBrandChange = (event) => {
    setSelectedId(event.target.value);
  };

  // real state image no delete
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get("http://54.179.232.109:1337/api/v1/adds/sections")
  //     .then((response) => {
  //       setData(response.data[1].categories);
  //     })
  //     .catch((error) => console.error(error));
  // }, []);
  return (
    <>
      {/*Navbar Start*/}
      <Navbar collapseOnSelect expand="lg">
        <Container>
          <Navbar.Brand to="#home">
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
                  <button className="text-orange-400">Home</button>
                </Link>
              </Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                <Link to="/createad1">
                  <Button variant="  " id="created">
                    Create Ad
                  </Button>
                </Link>
              </Nav.Link>
              <Nav.Link eventKey={2} to="#memes">
                <Button variant="btn btn-success  " id="login">
                  login
                </Button>
              </Nav.Link>

              <Nav.Link href="#deets">
                {" "}
                <img className="w-16 h-16 mt-1" src={NavbarImage1} alt="" />
              </Nav.Link>
              <Nav.Link href="#deets">
                {" "}
                <img className="w-16 h-16 mt-1" src={NavbarImage2} alt="" />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/*Navbar End*/}
      <div className="Real-State-background-image">
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
        </div>

        <div class="container mx-auto px-4 mt-5">
          <div className="flex justify-center ">
            <div className="bg-white shadow-md items-center p-2 rounded-lg max-w-[1100px]">
              <div className="grid grid-cols-1 gap-2 px-3 md:grid-cols-5 lg:grid-cols-5 items-center">
                {/* {data.map((item) => (
                  <div className="flex items-center">
                    <img className="w-20 h-20" src={item.imageUrl} alt="" />
                    <h1 style={{ fontSize: "12px" }} key={item.id}>
                      {item.title}
                    </h1>
                  </div>
                ))} */}

                <div>
                  <div className="flex px-2 ">
                    <img src={location} alt="" />
                    <p className="mt-2 px-2">location</p>
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
                </div>

                <div>
                  <div className="flex px-2 ">
                    <img src={Homme} alt="" />
                    <p className="mt-2 px-2">location</p>
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
                </div>

                <div>
                  <div className="flex px-2 ">
                    <img src={category} alt="" />
                    <p className="mt-2 px-2">Category</p>
                  </div>
                  <div>
                    <select
                      id="brand"
                      value={selectedId}
                      onChange={handleBrandChange}
                    >
                      <option value="">Select a brand</option>
                      {brands.map((brand) => (
                        <option key={brand._id} value={brand._id}>
                          {brand.title}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <div className="flex px-2 ">
                    <img src={subcategory} alt="" />
                    <p className="mt-2 px-2">Subcategory</p>
                  </div>
                  <div>
                    <select id="model">
                      <option value="">Select a model</option>
                      {models.map((model) => (
                        <option key={model._id} value={model._id}>
                          {model.title}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <Link to="/search" style={{ textDecoration: "none" }}>
                  {" "}
                  <div
                    className="flex ms-3  w-32 h-12  items-center rounded-xl gap-2 justify-center "
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

      {/*  */}
      <div className="container">
        <div className="row">
          <div className="section2">
            <img src={section2image} alt="" />
          </div>
        </div>
      </div>

      {/*.........*/}

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
      <div className="container mx-auto">
        <h4>CATEGORIES</h4>
        <div className="row">
          <div className="col-12 col-md-6 col-lg-3 mt-4">
            <Link
              to="/residential"
              style={{ textDecoration: "none", color: "black" }}
            >
              <div className="card">
                <img src={Residential} alt="" />
                <h4 className="text-center">Residential</h4>
              </div>
            </Link>
          </div>

          <div className="col-12 col-md-6 col-lg-3 mt-4">
            <div className="card">
              <img src={Flats} alt="" />
              <h4 className="text-center">Flats</h4>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-3 mt-4">
            <div className="card">
              <img src={Plots} alt="" />
              <h4 className="text-center">Plots</h4>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-3 mt-4">
            <div className="card">
              <img src={Agriculture} alt="" />
              <h4 className="text-center">Agriculture</h4>
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
          <div className="rounded   max-w-sm mt-4">
            <img className="w-32" src={TrustState} alt="" />
          </div>

          <div className="rounded   max-w-sm  mt-4">
            <img className="w-24" src={Group692} alt="" />
          </div>
          <div className="rounded   max-w-sm  mt-4">
            <img className="w-36" src={Rs} alt="" />
          </div>

          <div className="rounded   max-w-sm  mt-4">
            <img className="w-32" src={Group1178} alt="" />
          </div>

          <div className="rounded   max-w-sm  mt-4">
            <img className="w-32" src={Group11709} alt="" />
          </div>

          <div className="rounded   max-w-sm  mt-4">
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

export default RealsState;

//  <div className=" hidden md:flex justify-center">
//    <img className="w-16 h-16 mt-1 " src={NavbarImage1} alt="" />

//    <img className="" src={NavbarImage3} alt="" style={{ width: "100px" }} />
//    <img className="w-16 h-16 mt-1 " src={NavbarImage2} alt="" />
//  </div>;
