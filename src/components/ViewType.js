import { useState, useEffect } from "react";
import axios from "axios";

import Llocation from "../images/Group 3062.png";
import adman from "../images/Group 401.svg";
import arrowdown from "../images/Group 403.svg";
import vtype from "../images/vtype.svg";
import Heartts from "../images/Heartts.svg";
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
import bcar from "../images/b car.png";
import like from "../images/1.png";
import car from "../images/car.png";
import comment from "../images/2.png";
import reply from "../images/3.png";
import H from "../images/H.png";
import bag from "../images/bag.png";
import machine from "../images/machine.png";
// Navbar End
import Form from "react-bootstrap/Form";
import category from "../images/category.svg";
import subcategory from "../images/sub category.svg";
import location from "../images/location.svg";
import Homme from "../images/Home.svg";
import search from "../images/search.png";
import mmodal from "../images/mmodal.svg";
import car1 from "../images/car1.svg";
import purposecar from "../images/Purpose car.png";
import { Link } from "react-router-dom";
import { ImLocation } from "react-icons/im";
import "../style/ViewType.css";

const ViewType = () => {
  // THREE DROPDOWN DATA WITH API  START

  const [selectedId, setSelectedId] = useState(null);
  const [selectedMId, setSelectedMId] = useState(null);
  const [brands, setBrands] = useState([]);
  const [models, setModels] = useState([]);
  const [models1, setModels1] = useState([]);

  useEffect(() => {
    axios
      .get("http://54.179.232.109:1337/api/v1/adds/sections")
      .then((response) => {
        setBrands(response.data[0].categories);
      })
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    if (selectedId) {
      axios
        .get(
          `http://54.179.232.109:1337/api/v1/adds/brands-dropdown?catoryId=${selectedId}`
        )
        .then((response) => {
          setModels(response.data);
        })
        .catch((error) => console.error(error));
    }
  }, [selectedId]);

  useEffect(() => {
    if (selectedMId) {
      axios
        .get(
          `http://54.179.232.109:1337/api/v1/adds/models-dropdown?brandId=${selectedMId}`
        )
        .then((response) => {
          setModels1(response.data);
        })
        .catch((error) => console.error(error));
    }
  }, [selectedMId]);

  const handleBrandChange = (event) => {
    setSelectedId(event.target.value);
  };

  const handleBrandChangeS = (event) => {
    setSelectedMId(event.target.value);
  };

  // THREE DROPDOWN DATA WITH API  END

  // Search vehicale  start
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(
        "http://54.179.232.109:1337/api/v1/adds/search/?purpose=sale&section=vehicle"
      )
      .then((response) => {
        setData(response.data.data);
        console.log(response);
      })
      .catch((error) => console.error(error));
  }, []);

  const firstItem = data.length > 0 ? data[0] : null;
  const secondItem = data.length > 0 ? data[1] : null;
  const thirdItem = data.length > 0 ? data[2] : null;

  // Search vehicale  end
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
              <Nav.Link eventKey={2} href="#memes">
                <Link to="/createdadvehicle">
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
                  <select
                    id="brand"
                    value={selectedId}
                    onChange={handleBrandChange}
                  >
                    {brands.map((brand) => (
                      <option key={brand._id} value={brand._id}>
                        {brand.title}
                      </option>
                    ))}
                  </select>
                  {/* <Form.Select
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
                      </Form.Select> */}
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
                  <select
                    id="model"
                    value={selectedMId}
                    onChange={handleBrandChangeS}
                  >
                    {models.map((model) => (
                      <option key={model._id} value={model._id}>
                        {model.title}
                      </option>
                    ))}
                  </select>
                  {/* <Form.Select
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
                      </Form.Select> */}
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
                  <select id="model">
                    {models1.map((model) => (
                      <option key={model._id} value={model._id}>
                        {model.title}
                      </option>
                    ))}
                  </select>
                  {/* <Form.Select
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
                      </Form.Select> */}
                </div>
              </div>

              <div
                className="flex ms-3  w-32 h-12 mt-4 items-center rounded-xl gap-2 justify-center "
                style={{ background: "#F37521" }}
              >
                <img className="w-6 h-6 " src={search} alt="" />
                <p className="mt-2 pt-1 text-white">Search</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto mt-4">
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
            <Link
              to="/searchvehicle"
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

      {/* <div className="container ">
        <div className="row p-0">
          <div className="col-12 col-md-6 col-lg-3 col-sm-12 bg-white p-3 mt-5">
            <h4>Location Filter</h4>

            <Form.Select
              className="select rounded-4 mt-3"
              aria-label="Default select example"
            >
              <option>Country</option>
              <option>Pakistan</option>
              <option>China</option>
              <option>India</option>
              <option>Japan</option>
              <option>Italy</option>
              <option>Iran</option>
              <option>korea</option>
            </Form.Select>

            <Form.Select
              className="select rounded-4 mt-3"
              aria-label="Default select example"
            >
              <option>City</option>
              <option>Peshawar</option>
              <option>Mardan</option>
              <option></option>
              <option>Japan</option>
              <option>Italy</option>
              <option>Iran</option>
              <option>korea</option>
            </Form.Select>

            <Form.Select
              className="select rounded-4 mt-3"
              aria-label="Default select example"
            >
              <option>District</option>
              <option>Pakistan</option>
              <option>China</option>
              <option>India</option>
              <option>Japan</option>
              <option>Italy</option>
              <option>Iran</option>
              <option>korea</option>
            </Form.Select>

            <Form.Select
              className="select rounded-4 mt-3"
              aria-label="Default select example"
            >
              <option>Neighborhood</option>
              <option>Pakistan</option>
              <option>China</option>
              <option>India</option>
              <option>Japan</option>
              <option>Italy</option>
              <option>Iran</option>
              <option>korea</option>
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
              <option>Pakistan</option>
              <option>China</option>
              <option>India</option>
              <option>Japan</option>
              <option>Italy</option>
              <option>Iran</option>
              <option>korea</option>
            </Form.Select>

            <h5 style={{ marginTop: "50px", marginInline: "1rem" }}>
              Search Nearby
            </h5>

            <Form.Select
              className="select rounded-4 mt-3"
              aria-label="Default select example"
            >
              <option>Price Range</option>
              <option>Pakistan</option>
              <option>China</option>
              <option>India</option>
              <option>Japan</option>
              <option>Italy</option>
              <option>Iran</option>
              <option>korea</option>
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
              <option>Pakistan</option>
              <option>China</option>
              <option>India</option>
              <option>Japan</option>
              <option>Italy</option>
              <option>Iran</option>
              <option>korea</option>
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
              <option>Pakistan</option>
              <option>China</option>
              <option>India</option>
              <option>Japan</option>
              <option>Italy</option>
              <option>Iran</option>
              <option>korea</option>
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
              <option>Pakistan</option>
              <option>China</option>
              <option>India</option>
              <option>Japan</option>
              <option>Italy</option>
              <option>Iran</option>
              <option>korea</option>
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
              <option>Pakistan</option>
              <option>China</option>
              <option>India</option>
              <option>Japan</option>
              <option>Italy</option>
              <option>Iran</option>
              <option>korea</option>
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
              <option>Pakistan</option>
              <option>China</option>
              <option>India</option>
              <option>Japan</option>
              <option>Italy</option>
              <option>Iran</option>
              <option>korea</option>
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
              <option>Pakistan</option>
              <option>China</option>
              <option>India</option>
              <option>Japan</option>
              <option>Italy</option>
              <option>Iran</option>
              <option>korea</option>
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
              <option>Pakistan</option>
              <option>China</option>
              <option>India</option>
              <option>Japan</option>
              <option>Italy</option>
              <option>Iran</option>
              <option>korea</option>
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
              <option>Pakistan</option>
              <option>China</option>
              <option>India</option>
              <option>Japan</option>
              <option>Italy</option>
              <option>Iran</option>
              <option>korea</option>
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
              <option>Pakistan</option>
              <option>China</option>
              <option>India</option>
              <option>Japan</option>
              <option>Italy</option>
              <option>Iran</option>
              <option>korea</option>
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
              <option>Pakistan</option>
              <option>China</option>
              <option>India</option>
              <option>Japan</option>
              <option>Italy</option>
              <option>Iran</option>
              <option>korea</option>
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
              <option>Pakistan</option>
              <option>China</option>
              <option>India</option>
              <option>Japan</option>
              <option>Italy</option>
              <option>Iran</option>
              <option>korea</option>
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
              <option>Pakistan</option>
              <option>China</option>
              <option>India</option>
              <option>Japan</option>
              <option>Italy</option>
              <option>Iran</option>
              <option>korea</option>
            </Form.Select>
            <hr style={{ opacity: "0.5" }} />

            <h6 style={{ marginTop: "30px", marginInline: "1rem" }}>Facade</h6>

            <Form.Select
              className="select rounded-4 mt-3"
              aria-label="Default select example"
            >
              <option>Select</option>
              <option>Pakistan</option>
              <option>China</option>
              <option>India</option>
              <option>Japan</option>
              <option>Italy</option>
              <option>Iran</option>
              <option>korea</option>
            </Form.Select>
          </div>
          <div className="col-12 col-md-6 col-lg-6 mt-5">
            <Link
              to="/hondacarforsale"
              style={{ textDecoration: "none", color: "black" }}
            >
              <div className="ViewType">
                <div className="row">
                  <img src={bcar} alt="" />
                </div>

                <div
                  className="row bg-white"
                  style={{
                    borderTopRightRadius: "10px",
                    borderBottomRightRadius: "10px",
                  }}
                >
                  <span3 className="d-flex justify-content-between">
                    <h6 className="pt-4">Honda For Sale</h6>
                    <img
                      src={H}
                      alt=""
                      style={{ width: "80px", height: "70px" }}
                    />
                  </span3>

                  <p
                    style={{
                      fontSize: "15px",
                      opacity: "0.3",
                    }}
                  >
                    Lorem ipsum address, New York
                  </p>

                  <h5
                    style={{
                      color: "#F37521",
                      fontWeight: "bold",
                      fontSize: "25px",
                    }}
                  >
                    $65,000
                  </h5>
                  <div className="ViewLcr">
                    <spanlike className="d-flex ">
                      <img src={like} alt="" />
                      <p
                        style={{
                          fontSize: "8px",
                          paddingLeft: "10px",
                          marginTop: "14px",
                        }}
                      >
                        2022
                      </p>
                    </spanlike>

                    <spanlike className="d-flex ">
                      <img src={machine} alt="" />
                      <p
                        style={{
                          fontSize: "8px",
                          paddingLeft: "10px",
                          marginTop: "14px",
                        }}
                      >
                        1800 cc
                      </p>
                    </spanlike>

                    <spanlike className="d-flex ">
                      <img src={bag} alt="" />
                      <p
                        style={{
                          fontSize: "8px",
                          paddingLeft: "10px",
                          marginTop: "14px",
                        }}
                      >
                        1234 Km
                      </p>
                    </spanlike>
                  </div>
                </div>
              </div>
            </Link>

            <Link
              to="/hondacarforsale"
              style={{ textDecoration: "none", color: "black" }}
            >
              <div className="ViewType mt-3">
                <div className="row">
                  <img src={car} alt="" />
                </div>

                <div
                  className="row bg-white"
                  style={{
                    borderTopRightRadius: "10px",
                    borderBottomRightRadius: "10px",
                  }}
                >
                  <span3 className="d-flex justify-content-between">
                    <h6 className="pt-4">Toyota For Sale</h6>
                    <img
                      src={H}
                      alt=""
                      style={{ width: "80px", height: "70px" }}
                    />
                  </span3>

                  <p
                    style={{
                      fontSize: "15px",
                      opacity: "0.3",
                    }}
                  >
                    Lorem ipsum address, New York
                  </p>

                  <h5
                    style={{
                      color: "#F37521",
                      fontWeight: "bold",
                      fontSize: "25px",
                    }}
                  >
                    $65,000
                  </h5>
                  <div className="ViewLcr">
                    <spanlike className="d-flex ">
                      <img src={like} alt="" />
                      <p
                        style={{
                          fontSize: "8px",
                          paddingLeft: "10px",
                          marginTop: "14px",
                        }}
                      >
                        2022
                      </p>
                    </spanlike>

                    <spanlike className="d-flex ">
                      <img src={machine} alt="" />
                      <p
                        style={{
                          fontSize: "8px",
                          paddingLeft: "10px",
                          marginTop: "14px",
                        }}
                      >
                        1800 cc
                      </p>
                    </spanlike>

                    <spanlike className="d-flex ">
                      <img src={bag} alt="" />
                      <p
                        style={{
                          fontSize: "8px",
                          paddingLeft: "10px",
                          marginTop: "14px",
                        }}
                      >
                        1234 Km
                      </p>
                    </spanlike>
                  </div>
                </div>
              </div>
            </Link>

            <Link
              to="/hondacarforsale"
              style={{ textDecoration: "none", color: "black" }}
            >
              <div className="ViewType mt-3">
                <div className="row">
                  <img src={bcar} alt="" />
                </div>

                <div
                  className="row bg-white"
                  style={{
                    borderTopRightRadius: "10px",
                    borderBottomRightRadius: "10px",
                  }}
                >
                  <span3 className="d-flex justify-content-between">
                    <h6 className="pt-4">Honda For Sale</h6>
                    <img
                      src={H}
                      alt=""
                      style={{ width: "80px", height: "70px" }}
                    />
                  </span3>

                  <p
                    style={{
                      fontSize: "15px",
                      opacity: "0.3",
                    }}
                  >
                    Lorem ipsum address, New York
                  </p>

                  <h5
                    style={{
                      color: "#F37521",
                      fontWeight: "bold",
                      fontSize: "25px",
                    }}
                  >
                    $65,000
                  </h5>
                  <div className="ViewLcr">
                    <spanlike className="d-flex ">
                      <img src={like} alt="" />
                      <p
                        style={{
                          fontSize: "8px",
                          paddingLeft: "10px",
                          marginTop: "14px",
                        }}
                      >
                        2022
                      </p>
                    </spanlike>

                    <spanlike className="d-flex ">
                      <img src={machine} alt="" />
                      <p
                        style={{
                          fontSize: "8px",
                          paddingLeft: "10px",
                          marginTop: "14px",
                        }}
                      >
                        1800 cc
                      </p>
                    </spanlike>

                    <spanlike className="d-flex ">
                      <img src={bag} alt="" />
                      <p
                        style={{
                          fontSize: "8px",
                          paddingLeft: "10px",
                          marginTop: "14px",
                        }}
                      >
                        1234 Km
                      </p>
                    </spanlike>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div> */}

      <div className="container">
        <div className="flex gap-3 flex-col md:flex-row">
          <div className="bg-white p-3 w-96">
            <h4>Location Filter</h4>
            <Form.Select
              className="select rounded-4 mt-3"
              aria-label="Default select example"
            >
              <option>Country</option>
              <option>Pakistan</option>
              <option>China</option>
              <option>India</option>
              <option>Japan</option>
              <option>Italy</option>
              <option>Iran</option>
              <option>korea</option>
            </Form.Select>
            <Form.Select
              className="select rounded-4 mt-3"
              aria-label="Default select example"
            >
              <option>City</option>
              <option>Peshawar</option>
              <option>Mardan</option>
              <option></option>
              <option>Japan</option>
              <option>Italy</option>
              <option>Iran</option>
              <option>korea</option>
            </Form.Select>
            <Form.Select
              className="select rounded-4 mt-3"
              aria-label="Default select example"
            >
              <option>District</option>
              <option>Pakistan</option>
              <option>China</option>
              <option>India</option>
              <option>Japan</option>
              <option>Italy</option>
              <option>Iran</option>
              <option>korea</option>
            </Form.Select>
            <Form.Select
              className="select rounded-4 mt-3"
              aria-label="Default select example"
            >
              <option>Neighborhood</option>
              <option>Pakistan</option>
              <option>China</option>
              <option>India</option>
              <option>Japan</option>
              <option>Italy</option>
              <option>Iran</option>
              <option>korea</option>
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
              <option>Pakistan</option>
              <option>China</option>
              <option>India</option>
              <option>Japan</option>
              <option>Italy</option>
              <option>Iran</option>
              <option>korea</option>
            </Form.Select>
            <h5 style={{ marginTop: "50px", marginInline: "1rem" }}>
              Search Nearby
            </h5>
            <Form.Select
              className="select rounded-4 mt-3"
              aria-label="Default select example"
            >
              <option>Price Range</option>
              <option>Pakistan</option>
              <option>China</option>
              <option>India</option>
              <option>Japan</option>
              <option>Italy</option>
              <option>Iran</option>
              <option>korea</option>
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
              <option>Pakistan</option>
              <option>China</option>
              <option>India</option>
              <option>Japan</option>
              <option>Italy</option>
              <option>Iran</option>
              <option>korea</option>
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
              <option>Pakistan</option>
              <option>China</option>
              <option>India</option>
              <option>Japan</option>
              <option>Italy</option>
              <option>Iran</option>
              <option>korea</option>
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
              <option>Pakistan</option>
              <option>China</option>
              <option>India</option>
              <option>Japan</option>
              <option>Italy</option>
              <option>Iran</option>
              <option>korea</option>
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
              <option>Pakistan</option>
              <option>China</option>
              <option>India</option>
              <option>Japan</option>
              <option>Italy</option>
              <option>Iran</option>
              <option>korea</option>
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
              <option>Pakistan</option>
              <option>China</option>
              <option>India</option>
              <option>Japan</option>
              <option>Italy</option>
              <option>Iran</option>
              <option>korea</option>
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
              <option>Pakistan</option>
              <option>China</option>
              <option>India</option>
              <option>Japan</option>
              <option>Italy</option>
              <option>Iran</option>
              <option>korea</option>
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
              <option>Pakistan</option>
              <option>China</option>
              <option>India</option>
              <option>Japan</option>
              <option>Italy</option>
              <option>Iran</option>
              <option>korea</option>
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
              <option>Pakistan</option>
              <option>China</option>
              <option>India</option>
              <option>Japan</option>
              <option>Italy</option>
              <option>Iran</option>
              <option>korea</option>
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
              <option>Pakistan</option>
              <option>China</option>
              <option>India</option>
              <option>Japan</option>
              <option>Italy</option>
              <option>Iran</option>
              <option>korea</option>
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
              <option>Pakistan</option>
              <option>China</option>
              <option>India</option>
              <option>Japan</option>
              <option>Italy</option>
              <option>Iran</option>
              <option>korea</option>
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
              <option>Pakistan</option>
              <option>China</option>
              <option>India</option>
              <option>Japan</option>
              <option>Italy</option>
              <option>Iran</option>
              <option>korea</option>
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
              <option>Pakistan</option>
              <option>China</option>
              <option>India</option>
              <option>Japan</option>
              <option>Italy</option>
              <option>Iran</option>
              <option>korea</option>
            </Form.Select>
            <hr style={{ opacity: "0.5" }} />
            <h6 style={{ marginTop: "30px", marginInline: "1rem" }}>Facade</h6>
            <Form.Select
              className="select rounded-4 mt-3"
              aria-label="Default select example"
            >
              <option>Select</option>
              <option>Pakistan</option>
              <option>China</option>
              <option>India</option>
              <option>Japan</option>
              <option>Italy</option>
              <option>Iran</option>
              <option>korea</option>
            </Form.Select>
          </div>
          <div className="w-full">
            <div>
              {thirdItem && (
                <div className="flex">
                  <img className="w-40" src={thirdItem.imageUrl} alt="" />
                  <div className="flex">
                    <h3>{thirdItem.basicInformation.title}</h3>
                    <div className="flex">
                      <h3>{thirdItem.basicInformation.price.currency}</h3>
                      <h3>{thirdItem.basicInformation.price.price}</h3>
                    </div>

                   
                    <div className="flex justify-between items-center">
                      <div className="flex gap-1 items-center">
                        <img className="h-4" src={like} alt="" />
                        <p className="text-sm pt-3">4</p>
                      </div>

                      <div className="flex gap-1 items-center">
                        <img className="h-4" src={reply} alt="" />
                        <p className="text-sm pt-3">5478 sqft</p>
                      </div>

                      <div className="flex gap-1 items-center">
                        <img className="h-4" src={comment} alt="" />
                        <p className="text-sm pt-3">3</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewType;

// <div className="container mt-5">
// <div className="grid grid-cols-1  md:grid-cols-2 gap-4">
//   <div
//     className="bg-white shadow-md p-3 mt-3"
//     style={{ width: "19rem" }}
//   >
//     <h4>Location Filter</h4>

//     <Form.Select
//       className="select rounded-4 mt-3"
//       aria-label="Default select example"
//     >
//       <option>Country</option>
//       <option></option>
//       <option></option>
//       <option></option>
//       <option></option>
//       <option></option>
//       <option></option>
//       <option></option>
//     </Form.Select>

//     <Form.Select
//       className="select rounded-4 mt-3"
//       aria-label="Default select example"
//     >
//       <option>City</option>
//       <option></option>
//       <option></option>
//       <option></option>
//       <option></option>
//       <option></option>
//       <option></option>
//       <option></option>
//     </Form.Select>

//     <Form.Select
//       className="select rounded-4 mt-3"
//       aria-label="Default select example"
//     >
//       <option>District</option>
//       <option></option>
//       <option></option>
//       <option></option>
//       <option></option>
//       <option></option>
//       <option></option>
//       <option></option>
//     </Form.Select>

//     <Form.Select
//       className="select rounded-4 mt-3"
//       aria-label="Default select example"
//     >
//       <option>Neighborhood</option>
//       <option></option>
//       <option></option>
//       <option></option>
//       <option></option>
//       <option></option>
//       <option></option>
//       <option></option>
//     </Form.Select>
//     <hr />

//     <h5 style={{ marginTop: "50px", marginInline: "1rem" }}>
//       Search Nearby
//     </h5>
//     <Form.Select
//       className="select rounded-4 mt-4"
//       aria-label="Default select example"
//     >
//       <option>Select</option>
//       <option></option>
//       <option></option>
//       <option></option>
//       <option></option>
//       <option></option>
//       <option></option>
//       <option></option>
//     </Form.Select>

//     <h5 style={{ marginTop: "50px", marginInline: "1rem" }}>
//       Search Nearby
//     </h5>

//     <Form.Select
//       className="select rounded-4 mt-3"
//       aria-label="Default select example"
//     >
//       <option>select</option>
//       <option></option>
//       <option></option>
//       <option></option>
//       <option></option>
//       <option></option>
//       <option></option>
//       <option></option>
//     </Form.Select>
//     <hr />

//     <h6 style={{ marginTop: "30px", marginInline: "1rem" }}>
//       Area Range{" "}
//     </h6>

//     <hr />

//     <h6 style={{ marginTop: "30px", marginInline: "1rem" }}>
//       Bedrooms{" "}
//     </h6>

//     <hr />

//     <h6 style={{ marginTop: "30px", marginInline: "1rem" }}>
//       Bathrooms
//     </h6>

//     <hr />

//     <h6 style={{ marginTop: "30px", marginInline: "1rem" }}>
//       Category
//     </h6>

//     <Form.Select
//       className="select rounded-4 mt-3"
//       aria-label="Default select example"
//     >
//       <option>Select</option>
//       <option></option>
//       <option></option>
//       <option></option>
//       <option></option>
//       <option></option>
//       <option></option>
//       <option></option>
//     </Form.Select>
//     <hr />

//     <h6 style={{ marginTop: "30px", marginInline: "1rem" }}>
//       Sub-Category
//     </h6>

//     <Form.Select
//       className="select rounded-4 mt-3"
//       aria-label="Default select example"
//     >
//       <option>Select</option>
//       <option></option>
//       <option></option>
//       <option></option>
//       <option></option>
//       <option></option>
//       <option></option>
//       <option></option>
//     </Form.Select>
//     <hr />

//     <h6 style={{ marginTop: "30px", marginInline: "1rem" }}>
//       From Whom
//     </h6>

//     <Form.Select
//       className="select rounded-4 mt-3"
//       aria-label="Default select example"
//     >
//       <option>Select</option>
//       <option></option>
//       <option></option>
//       <option></option>
//       <option></option>
//       <option></option>
//       <option></option>
//       <option></option>
//     </Form.Select>
//     <hr />

//     <h6 style={{ marginTop: "30px", marginInline: "1rem" }}>
//       From Whom
//     </h6>

//     <Form.Select
//       className="select rounded-4 mt-3"
//       aria-label="Default select example"
//     >
//       <option>Select</option>
//       <option></option>
//       <option></option>
//       <option></option>
//       <option></option>
//       <option></option>
//       <option></option>
//       <option></option>
//     </Form.Select>
//     <hr />

//     <h6 style={{ marginTop: "30px", marginInline: "1rem" }}>
//       Building Age
//     </h6>

//     <Form.Select
//       className="select rounded-4 mt-3"
//       aria-label="Default select example"
//     >
//       <option>Select</option>
//       <option></option>
//       <option></option>
//       <option></option>
//       <option></option>
//       <option></option>
//       <option></option>
//       <option></option>
//     </Form.Select>
//     <hr />

//     <h6 style={{ marginTop: "30px", marginInline: "1rem" }}>
//       Building Floor
//     </h6>

//     <Form.Select
//       className="select rounded-4 mt-3"
//       aria-label="Default select example"
//     >
//       <option>Select</option>
//       <option></option>
//       <option></option>
//       <option></option>
//       <option></option>
//       <option></option>
//       <option></option>
//       <option></option>
//     </Form.Select>
//     <hr />

//     <h6 style={{ marginTop: "30px", marginInline: "1rem" }}>
//       Building Floor
//     </h6>

//     <Form.Select
//       className="select rounded-4 mt-3"
//       aria-label="Default select example"
//     >
//       <option>Select</option>
//       <option></option>
//       <option></option>
//       <option></option>
//       <option></option>
//       <option></option>
//       <option></option>
//       <option></option>
//     </Form.Select>
//     <hr />

//     <h6 style={{ marginTop: "30px", marginInline: "1rem" }}>
//       Floor Location
//     </h6>

//     <Form.Select
//       className="select rounded-4 mt-3"
//       aria-label="Default select example"
//     >
//       <option>Select</option>
//       <option></option>
//       <option></option>
//       <option></option>
//       <option></option>
//       <option></option>
//       <option></option>
//       <option></option>
//     </Form.Select>
//     <hr />

//     <h6 style={{ marginTop: "30px", marginInline: "1rem" }}>
//       Eligable for Mortage
//     </h6>

//     <Form.Select
//       className="select rounded-4 mt-3"
//       aria-label="Default select example"
//     >
//       <option>Select</option>
//       <option></option>
//       <option></option>
//       <option></option>
//       <option></option>
//       <option></option>
//       <option></option>
//       <option></option>
//     </Form.Select>
//     <hr />

//     <h6 style={{ marginTop: "30px", marginInline: "1rem" }}>
//       Title Deed Status
//     </h6>

//     <Form.Select
//       className="select rounded-4 mt-3"
//       aria-label="Default select example"
//     >
//       <option>Select</option>
//       <option></option>
//       <option></option>
//       <option></option>
//       <option></option>
//       <option></option>
//       <option></option>
//       <option></option>
//     </Form.Select>
//     <hr />

//     <h6 style={{ marginTop: "30px", marginInline: "1rem" }}>
//       Heating Type
//     </h6>

//     <Form.Select
//       className="select rounded-4 mt-3"
//       aria-label="Default select example"
//     >
//       <option>Select</option>
//       <option></option>
//       <option></option>
//       <option></option>
//       <option></option>
//       <option></option>
//       <option></option>
//       <option></option>
//     </Form.Select>
//     <hr />

//     <h6 style={{ marginTop: "30px", marginInline: "1rem" }}>
//       Inside Complex
//     </h6>

//     <Form.Select
//       className="select rounded-4 mt-3"
//       aria-label="Default select example"
//     >
//       <option>Select</option>
//       <option></option>
//       <option></option>
//       <option></option>
//       <option></option>
//       <option></option>
//       <option></option>
//       <option></option>
//     </Form.Select>
//     <hr style={{ opacity: "0.5" }} />

//     <h6 style={{ marginTop: "30px", marginInline: "1rem" }}>Facade</h6>

//     <Form.Select
//       className="select rounded-4 mt-3"
//       aria-label="Default select example"
//     >
//       <option>Select</option>
//       <option></option>
//       <option></option>
//       <option></option>
//       <option></option>
//       <option></option>
//       <option></option>
//       <option></option>
//     </Form.Select>
//   </div>

//   <div className=" grid grid-cols-1 ">
//     {thirdItem && (
//       <div>

//       </div>
//     )}
//   </div>

//   {/* <div className="">
//     <Link
//       to="/hondacarforsale"
//       style={{ textDecoration: "none", color: "black" }}
//     >
//       <div className="card mt-3 shadow-sm rounded-sm border-none">
//         {thirdItem && (
//           <div className="">
//             <div className="relative ">
//               <img
//                 className="absolute items-content-end w-12"
//                 src={Heartts}
//                 alt=""
//                 style={{ right: "-5px" }}
//               />
//               <img
//                 className="mb-2 r"
//                 src={thirdItem.imageUrl}
//                 alt="random"
//                 style={{ width: "19rem", height: "12rem" }}
//               />
//             </div>
//             <div className="px-3 ">
//               <div className="flex items-center justify-between">
//                 <div>
//                   <h3 className="font-bold text-sm ">
//                     {thirdItem.basicInformation.title}
//                   </h3>
//                 </div>
//                 <div className="flex " style={{ color: "#F37521" }}>
//                   <h1 className="font-bold text-sm ">
//                     {thirdItem.basicInformation.price.currency}
//                   </h1>
//                   <h1 className="font-bold text-sm ">
//                     {thirdItem.basicInformation.price.price}
//                   </h1>
//                 </div>
//               </div>
//               <div className="flex gap-2">
//                 <h1 className="text-sm ">
//                   {thirdItem.location.country}
//                 </h1>
//                 <h1 className=" text-sm ">{thirdItem.location.city}</h1>
//               </div>
//               <div className="flex justify-between items-center">
//                 <div className="flex gap-1 items-center">
//                   <img className="h-4" src={like} alt="" />
//                   <p className="text-sm pt-3">4</p>
//                 </div>

//                 <div className="flex gap-1 items-center">
//                   <img className="h-4" src={reply} alt="" />
//                   <p className="text-sm pt-3">5478 sqft</p>
//                 </div>

//                 <div className="flex gap-1 items-center">
//                   <img className="h-4" src={comment} alt="" />
//                   <p className="text-sm pt-3">3</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </Link>
//   </div>

//   <div className="">
//     <Link
//       to="/hondacarforsale"
//       style={{ textDecoration: "none", color: "black" }}
//     >
//       <div className="card mt-3 shadow-sm rounded-sm border-none">
//         {firstItem && (
//           <div className="">
//             <div className="relative ">
//               <img
//                 className="absolute items-content-end w-12"
//                 src={Heartts}
//                 alt=""
//                 style={{ right: "-5px" }}
//               />
//               <img
//                 className="mb-2 r"
//                 src={firstItem.imageUrl}
//                 alt="random"
//                 style={{ width: "19rem", height: "12rem" }}
//               />
//             </div>
//             <div className="px-3 ">
//               <div className="flex items-center justify-between">
//                 <div>
//                   <h3 className="font-bold text-sm ">
//                     {firstItem.basicInformation.title}
//                   </h3>
//                 </div>
//                 <div className="flex " style={{ color: "#F37521" }}>
//                   <h1 className="font-bold text-sm ">
//                     {firstItem.basicInformation.price.currency}
//                   </h1>
//                   <h1 className="font-bold text-sm ">
//                     {firstItem.basicInformation.price.price}
//                   </h1>
//                 </div>
//               </div>
//   <div className="flex gap-2">
//     <h1 className="text-sm ">
//       {firstItem.location.country}
//     </h1>
//     <h1 className=" text-sm ">{firstItem.location.city}</h1>
//   </div>
//   <div className="flex justify-between items-center">
//     <div className="flex gap-1 items-center">
//       <img className="h-4" src={like} alt="" />
//       <p className="text-sm pt-3">4</p>
//     </div>

//     <div className="flex gap-1 items-center">
//       <img className="h-4" src={reply} alt="" />
//       <p className="text-sm pt-3">5478 sqft</p>
//     </div>

//     <div className="flex gap-1 items-center">
//       <img className="h-4" src={comment} alt="" />
//       <p className="text-sm pt-3">3</p>
//     </div>
//   </div>
// </div>
//           </div>
//         )}
//       </div>
//     </Link>
//   </div>

//   <div className="">
//     <Link
//       to="/hondacarforsale"
//       style={{ textDecoration: "none", color: "black" }}
//     >
//       <div className="card mt-3 shadow-sm rounded-sm border-none">
//         {secondItem && (
//           <div className="">
//             <div className="relative ">
//               <img
//                 className="absolute items-content-end w-12"
//                 src={Heartts}
//                 alt=""
//                 style={{ right: "-5px" }}
//               />
//               <img
//                 className="mb-2 "
//                 src={secondItem.imageUrl}
//                 alt="random"
//                 style={{ width: "19rem", height: "12rem" }}
//               />
//             </div>
//             <div className="px-3 ">
//               <div className="flex items-center justify-between">
//                 <div>
//                   <h3 className="font-bold text-sm ">
//                     {secondItem.basicInformation.title}
//                   </h3>
//                 </div>
//                 <div className="flex " style={{ color: "#F37521" }}>
//                   <h1 className="font-bold text-sm ">
//                     {secondItem.basicInformation.price.currency}
//                   </h1>
//                   <h1 className="font-bold text-sm ">
//                     {secondItem.basicInformation.price.price}
//                   </h1>
//                 </div>
//               </div>
//               <div className="flex gap-2">
//                 <h1 className=" text-sm ">
//                   {secondItem.location.country}
//                 </h1>
//                 <h1 className=" text-sm ">
//                   {secondItem.location.city}
//                 </h1>
//               </div>
//               <div className="flex justify-between items-center">
//                 <div className="flex gap-1 items-center">
//                   <img className="h-4" src={like} alt="" />
//                   <p className="text-sm pt-3">4</p>
//                 </div>

//                 <div className="flex gap-1 items-center">
//                   <img className="h-4" src={reply} alt="" />
//                   <p className="text-sm pt-3">5478 sqft</p>
//                 </div>

//                 <div className="flex gap-1 items-center">
//                   <img className="h-4" src={comment} alt="" />
//                   <p className="text-sm pt-3">3</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </Link>
//   </div> */}
// </div>
// </div>
