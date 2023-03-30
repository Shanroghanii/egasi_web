import React, { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import { useFormik } from "formik";
import axios from "axios";
import Cookies from "js-cookie";
import * as Yup from "yup";

// Navbar Start
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";

import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../images/Group 3321.svg";
import NavbarImage1 from "../images/Group 11680.png";
import NavbarImage2 from "../images/Group 11819.png";
import NavbarImage3 from "../images/gil.svg";

import AdInformation from "../images/AdInformation.svg";
import Review from "../images/Review.svg";
import Package from "../images/Package.svg";

// Navbar End

import "../style/createad1.css";

const CreatedeAd1 = () => {
  //
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

  // new data
  const location = useLocation();
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const section = location.state?.section || "";

  const submitData = async (values) => {
    console.log("section:", values);
    const token = Cookies.get("token");

    let sectionPayload = {};

    if (values.section === "vehicle") {
      sectionPayload = {
        section: "vehicle",
        ...values,
        id: id,
        dropdown: values.vehicleDropdown,
      };
    } else if (values.section === "realEstate") {
      sectionPayload = {
        section: "realEstate",
        ...values,
        id: id,
        dropdown: values.realEstateDropdown,
      };
    } else {
      // Convert section to a string if necessary
      const section =
        typeof values.section === "string"
          ? values.section
          : values.section.toString();

      sectionPayload = {
        section: section,
        ...values,
        id: id,
        dropdown: values.dropdown,
      };
    }

    const payload = {
      section: id, // Include the section field here
      [values.section]: {
        ...sectionPayload,
        section: "realEstate",
      },
    };

    try {
      const response = await axios.post(
        `http://54.179.232.109:1337/api/v1/adds/create-realestate-adds`,
        payload,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const formik = useFormik({
    initialValues: {
      section: section || location.state?.section || "section",
      dropdown: "",
    },
    validationSchema: Yup.object({
      dropdown: Yup.string().required("Select"),
    }),
    onSubmit: (values) => {
      console.log("Form rendered");
      setIsLoading(true);
      setTimeout(() => {
        handleSave(values);
      }, 2000);
    },
  });

  const handleSave = (values) => {
    submitData(values);
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const token = Cookies.get("token");
        const response = await axios.get(
          `http://54.179.232.109:1337/api/v1/adds/section/feature?section=realEstate&language=en`,
          { headers: { Authorization: `Bearer ${token}` } }
        );
        setData(response.data.detail);
        console.log(response.data);
      } catch (error) {
        console.error(error);
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

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
              <Nav.Link className="mt-3  fs-5 me-2 " href="#action1">
                <Link to="/home">
                  <button className="text-orange-400">Home</button>
                </Link>
              </Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                <Button variant="  " id="createdBHFS">
                  Create Ad
                </Button>
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

      {/* Navbar End
       */}

      {/*  */}

      <div className="container bg-white shadow-md rounded-md mt-5">
      <form onSubmit={formik.handleSubmit}>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:gap-8  lg:grid-cols-3  p-5">
          <div className="">
            <h6>Select Purpose</h6>
            <select className="custom-select mt-3 w-72 h-14 rounded-full  border-2 shadow-md  bg-white  p-1">
              <option value="steak">Sale</option>
              <option value="steak">Rent</option>
              <option value="steak">Daily Rent</option>
            </select>
          </div>

          <div>
            <div className="flex px-2 ">
              <p className="mt-2 px-2">Select Category</p>
            </div>
            <div>
              <select
                className="custom-select   w-72 h-14 rounded-full  border-2 shadow-md  bg-white  p-1"
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
          </div>

          <div>
            <div className="flex px-2 ">
              <p className="mt-2 px-2">Select Sub Category</p>
            </div>
            <div>
              <select
                id="model"
                className="custom-select  w-72 h-14 rounded-full  border-2 shadow-md  bg-white  p-1"
              >
                {models.map((model) => (
                  <option key={model._id} value={model._id}>
                    {model.title}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <button type="submit" disabled={isLoading}>
              {isLoading ? "Saving..." : "Save"}
            </button>
          </form>
      </div>

      {/* ................................................................... */}
      <div className="container mx-auto rounded-lg bg-white mt-5">
        <div>
          <input
            className="w-full bg-white  border-2 p-3 rounded-full mt-5 "
            type="text"
            placeholder="Title"
          />
        </div>

        <div>
          <input
            className="w-full bg-white  border-2 p-3 rounded-md mt-5 "
            type="text"
            placeholder="Description"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 py-5 justify-center">
          {data.slice(0, 9).map((item) => (
            <div key={item._id}>
              <h6 className="mt-2">{item.fieldName}</h6>

              <select
                placeholder="dropDown"
                name="dropDown"
                className="custom-select mt-3 w-72 h-14 rounded-full  border-2 shadow-md  bg-white  p-1"
              >
                {item.dropDown.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          ))}
        </div>

        <div >
          {data.slice(9, 10).map((item) => (
            <div key={item._id}>
              <h6 className="mt-2">{item.fieldName}</h6>

              <div className="flex">
                <div className="w-24 flex mt-4">
                  <label className="flex">
                    <input
                      type="radio"
                      className="h-8 w-8 text-purple-500"
                      name="color"
                      value="red"
                    />
                    <h5 className="px-3">Yes</h5>
                    <div className="ml-2 text-gray-700">{item.dropDown}</div>
                  </label>
                </div>
                <div className="w-24 flex mt-4">
                  <label className="flex">
                    <input
                      type="radio"
                      className="h-8 w-8 text-purple-500"
                      name="color"
                      value="red"
                    />
                    <h5 className="px-3">Yes</h5>
                    <div className="ml-2 text-gray-700">{item.dropDown}</div>
                  </label>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 py-5 justify-center">
          {data.slice(10, 17).map((item) => (
            <div key={item._id}>
              <h6 className="mt-2">{item.fieldName}</h6>

              <select
                placeholder="dropDown"
                name="dropDown"
                className="custom-select mt-3 w-72 h-14 rounded-full  border-2 shadow-md  bg-white  p-1"
              >
                {item.dropDown.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          ))}
        </div>

       <div>
         <div >
          {data.slice(17, 18).map((item) => (
            <div key={item._id}>
               <h6 className="mt-2">{item.fieldName}</h6>
              <div className="flex items-center">
                <div className="w-24 flex mt-4">
                  <label className="flex">
                    <input
                      type="radio"
                      className="h-8 w-8 text-purple-500"
                      name="color"
                      value="red"
                    />
                    {item.dropDown}
                  </label>
                </div>
                <div className="w-24 flex mt-4">
                  <label className="flex">
                    <input
                      type="radio"
                      className="h-8 w-8 text-purple-500"
                      name="color"
                      value="red"
                    />
                    {item.dropDown}
                  </label>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div>
          {data.slice(18, 20).map((item) => (
            <div key={item._id}>
               <h6 className="mt-2">{item.fieldName}</h6>
               <h6 className="mt-2">{item.fieldName}</h6>

              <select
                placeholder="dropDown"
                name="dropDown"
                className="custom-select mt-3 w-72 h-14 rounded-full  border-2 shadow-md  bg-white  p-1"
              >
                {item.dropDown.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          ))}
        </div>
       </div>

        {/* <div>
          {error && <p>{error}</p>}
          <form onSubmit={formik.handleSubmit}>
           <div>
           {data.length > 0 && (
              <div key={data[0]._id}>
                <h6>{data[0].fieldName}</h6>
                <select
                  className=""
                  type="text"
                  name={`dropdown`}
                  value={formik.values.dropdown}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                >
                  <option value="" disabled>
                    Select
                  </option>
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
           {data.length > 1 && (
              <div key={data[1]._id}>
                <h6>{data[1].fieldName}</h6>
                <select
                  className=""
                  type="text"
                  name={`dropdown`}
                  value={formik.values.dropdown}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                >
                  <option value="" disabled>
                    Select
                  </option>
                  {data[1].dropDown.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            )}
           </div>

            <button type="submit" disabled={isLoading}>
              {isLoading ? "Saving..." : "Save"}
            </button>
          </form>
        </div> */}
      </div>

      {/*.........................Footer Section.....................*/}

      <div
        className="container"
        style={{ background: "#E9EBEE", marginTop: "80px" }}
      >
        <div className="row p-5 text-center ">
          <div className="col-12 col-md-6 col-lg-4">
            <h4 className="addhappyhourh5">Contact Us</h4>
            <p style={{ textAlign: "center" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <span></span>
            <h6 className=" me-4 ">(+92-38483984)</h6>
            <h6 className="me-4 ">(+92-38483984)</h6>

            <h6 className="mt-2">esols33@gmail.com</h6>
            <h6>esols33@gmail.com</h6>
          </div>

          <div className="col-12 col-md-6 col-lg-4">
            <h4>Quik Links</h4>
            <p className="me-5 mt-4">Home</p>
            <p>Happy Hours</p>
            <p className="me-2">Team of Use</p>
            <p className="me-4">About Us</p>
          </div>

          <div className="col-12 col-md-6 col-lg-4">
            <h4>Follow Us</h4>
          </div>

          <h5 className="addhappyhourcopyright mt-5">
            @2022 All rights reserved . created by Esolos Technology{" "}
          </h5>
        </div>
      </div>
    </>
  );
};

export default CreatedeAd1;
