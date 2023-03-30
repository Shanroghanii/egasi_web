import { useState, useEffect } from "react";
import axios from "axios";
import "../style/CreatedAdVehicle.css";
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
import { Link } from "react-router-dom";
import AdInformation from "../images/AdInformation.svg";
import Review from "../images/Review.svg";
import Package from "../images/Package.svg";
import facebook from "../images/facebook.svg";
import Google from "../images/google.svg";
import twitter from "../images/twitter.svg";
import instagram from "../images/instagram.svg";
import paragraph from "../images/paragraph.svg";
import phone from "../images/phone.svg";
import sms from "../images/sms.svg";

const CreatedAdVehicle = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(
        "http://54.179.232.109:1337/api/v1/adds/section/feature?section=vehicle"
      )
      .then((response) => {
        setData(response.data.detail);
        console.log(response.data.detail);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  //   drop down menu

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

  return (
    <>
      {/*Navbar Start*/}
      <Navbar collapseOnSelect expand="lg">
        <Container>
          <Navbar.Brand href="">
            <Link to="/home">
              <img className="px-3" src={logo} alt="" id="logo" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav className="ms-auto mt-2">
              <Nav.Link className="mt-4  fs-6 me-2 " href="#action1">
                <Link to="/home">
                  <button className="text-black">Home</button>
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
      <div class="container mx-auto px-4 mt-5 ">
        <div className="bg-white flex justify-evenly pb-4  rounded-2xl flex-wrap  ">
          <div className="mt-5">
            <h6>Select Purpose</h6>
            <select className="custom-select mt-3 w-72 h-14 rounded-full  border-2 shadow-md  bg-white  p-1">
              <option value="steak">Sale</option>
              <option value="steak">Rent</option>
            </select>
          </div>

          <div className="mt-5">
            <h6>Select Category</h6>
            <select
              className="custom-select mt-3 w-72 h-14 rounded-full  border-2 shadow-md  bg-white  p-1"
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
          </div>

          <div className="mt-5">
            <h6>Select Brand</h6>
            <select
              className="custom-select mt-3 w-72 h-14 rounded-full  border-2 shadow-md  bg-white  p-1"
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
          </div>
          <div className="mt-5">
            <h6>Select Modal</h6>
            <select
              id="model"
              className="custom-select mt-3 w-72 h-14 rounded-full  border-2 shadow-md  bg-white  p-1"
            >
              {models1.map((model) => (
                <option key={model._id} value={model._id}>
                  {model.title}
                </option>
              ))}
            </select>
          </div>

        <div>
        {data.length > 0 && (
            <div className="">
              <h6 className="mt-4">{data[0].fieldName}</h6>
              <select className="custom-select mt-3 w-72 h-14 rounded-full  border-2 shadow-md  bg-white  p-1">
                {data[0].dropDown.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>

          <div>
            {data.length > 2 && (
              <div className="">
                <h6 className="mt-4">{data[2].fieldName}</h6>
                <select className="custom-select mt-3 w-72 h-14 rounded-full  border-2 shadow-md  bg-white  p-1">
                  {data[2].dropDown.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            )}
          </div>

          <div>
            {data.length > 3 && (
              <div className="">
                <h6 className="mt-4">{data[3].fieldName}</h6>
                <select className="custom-select mt-3 w-72 h-14 rounded-full  border-2 shadow-md  bg-white  p-1">
                  {data[3].dropDown.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            )}
          </div>

          <div>
            {data.length > 4 && (
              <div className="">
                <h6 className="mt-4">{data[4].fieldName}</h6>
                <select className="custom-select mt-3 w-72 h-14 rounded-full  border-2 shadow-md  bg-white  p-1">
                  {data[4].dropDown.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            )}
          </div>

          {/* <div>
            {data.length > 5 && (
              <div className="">
                <h6 className="mt-4">{data[5].fieldName}</h6>
                <select className="custom-select mt-3 w-72 h-14 rounded-full  border-2 shadow-md  bg-white  p-1">
                  {data[5].dropDown.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            )}
          </div> */}

          <div className="mt-5">
        <Link to="/createdadvehicle2">
          <button className="w-72 bg-orange-500 p-3 text-white rounded-full">
            Continue
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
          <h6 className="text-center ">
            © 2021 All rights reserved. Created by Lorem Ipsum
          </h6>
        </div>
      </div>
    </>
  );
};

export default CreatedAdVehicle;
