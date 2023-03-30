import React from "react";
import Llocation from "../images/orangelocation.svg";
import adman from "../images/Group 401.svg";
import arrowdown from "../images/Group 403.svg";
import vtype from "../images/vtype.svg";
// Navbar Start
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../images/Group 3321.svg";
import NavbarImage1 from "../images/Group 11680.png";
import NavbarImage2 from "../images/Group 11819.png";
import NavbarImage3 from "../images/gil.svg";
// Navbar End
import Form from "react-bootstrap/Form";
import category from "../images/category.svg";
import subcategory from "../images/sub category.svg";
import location from "../images/location.svg";
import Homme from "../images/Home.svg";
import search from "../images/whitesearch.svg";

import { Link } from "react-router-dom";
import { ImLocation } from "react-icons/im";

const MapView = () => {
  return (
    <>
      {/*Navbar Start*/}
      <Navbar collapseOnSelect expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <Link to="/home">
              <img src={logo} alt="" id="logo" />
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
                <Link to="/createad1">
                  <Button variant="  " id="created">
                    Created
                  </Button>
                </Link>
              </Nav.Link>

              <Nav.Link href="#deets">
                <img src={NavbarImage1} alt="" id="NavbarImage1" />
              </Nav.Link>
              <Nav.Link href="#deets">
                <img src={NavbarImage3} alt="" id="NavbarImage3" />
              </Nav.Link>
              <Nav.Link href="#deets">
                <img src={NavbarImage2} alt="" id="NavbarImage2" />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/*Navbar End*/}

      {/* search */}

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

      <div className="container mx-auto">
        <div className="flex justify-between items-center flex-col sm:flex-col md:flex-row">
          <h2 className="mt-3 ">Filters</h2>
          <div className=" flex gap-3 justify-end flex-col items-center md:flex-row mt-3">
            <Link
              to="/mapview"
              style={{
                textDecoration: "none",
                color: "black",
              }}
            >
              {" "}
              <div
                className="flex w-64 md:w-36 justify-center h-12 p-1    rounded-full  gap-3 justify-items-center "
                style={{ border: "1px solid orange" }}
              >
                <img className="w-5 " src={Llocation} alt="" />
                <button className="text-orange-300">Map View</button>
              </div>
            </Link>

            <div
              className="flex w-64 md:w-36 justify-between   rounded-full  gap-2 justify-items-center"
              style={{ border: "1px solid black", padding: "12px" }}
            >
              <img className="w-4 " src={adman} alt="" />
              <button>Sort by</button>
              <img className="w-3" src={arrowdown} alt="" />
            </div>
            <Link
              to="/search"
              style={{
                textDecoration: "none",
                color: "black",
              }}
            >
              <div
                className="flex w-64 md:w-36 justify-between h-12 p-1 px-2 rounded-full gap-2 justify-items-center"
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
            </Link>
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <div className="main-sidebar">
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
              <option>Price Range</option>
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
          <div className="col-12 col-md-6 col-lg-3">
            <div className="mainbody">
              <div className="col-12 col-md-6 col-lg-3 mt-4"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MapView;
