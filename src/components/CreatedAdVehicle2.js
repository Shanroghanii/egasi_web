import { useState, useEffect } from "react";
import axios from "axios";
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
import Package from "../images/Package.svg";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import facebook from "../images/facebook.svg";
import Google from "../images/google.svg";
import twitter from "../images/twitter.svg";
import instagram from "../images/instagram.svg";
import paragraph from "../images/paragraph.svg";
import phone from "../images/phone.svg";
import sms from "../images/sms.svg";

const CreatedAdVehicle2 = () => {
  const [data, setData] = useState([]);
  const [features, setFeatures] = useState([]);
  const [externalFeatures, setExternalFeatures] = useState([]);
  const [saftyFeatures, setSaftyFeatures] = useState([]);
 
  useEffect(() => {
    axios
      .get(
        "http://54.179.232.109:1337/api/v1/adds/section/feature?section=vehicle"
      )
      .then((response) => {
        setData(response.data.detail);
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });

    // internal feature
    axios
      .get(
        "http://54.179.232.109:1337/api/v1/adds/section/feature?section=vehicle"
      )
      .then((response) => {
        setFeatures(response.data.internalFeatures);
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });

    //External Feature
    axios
      .get(
        "http://54.179.232.109:1337/api/v1/adds/section/feature?section=vehicle"
      )
      .then((response) => {
        setExternalFeatures(response.data.externalFeatures);
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });

    //saftyFeatures
    axios
      .get(
        "http://54.179.232.109:1337/api/v1/adds/section/feature?section=vehicle"
      )
      .then((response) => {
        setSaftyFeatures(response.data.saftyFeatures);
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });


      
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

      <div>
        <h4 className="text-center">CREATED AD</h4>
      </div>

      <div className=" flex justify-center mt-4">
        <div>
          <img className="w-16 ms-3" src={AdInformation} alt="" />
          <p
            className="py-2"
            style={{ color: "#F37521", fontSize: "12px", fontWeight: "bold" }}
          >
            Ad Information
          </p>
        </div>
        <div>
          <p
            flex
            className="  w-36 mt-4  text"
            style={{ height: "1px", background: "#F37521" }}
          ></p>
        </div>

        <div>
          <img className="w-16" src={Review} alt="" />
          <p
            className="py-2"
            style={{ color: "gray", fontSize: "14px", fontWeight: "bold" }}
          >
            Reviews
          </p>
        </div>
        <div>
          <p
            flex
            className="  w-36 mt-4  text"
            style={{ height: "1px", background: "gray" }}
          ></p>
        </div>

        <div>
          <img className="w-16" src={Package} alt="" />
          <p
            className="py-2"
            style={{ color: "gray", fontSize: "14px", fontWeight: "bold" }}
          >
            Package
          </p>
        </div>
      </div>

      {/*section 3*/}

      <div className="container mx-auto  mt-4">
        <div className="bg-white p-4 rounded-lg shadow-md ">
          <h6>Title</h6>

          <input
            className="border border-indigo-600 p-3 rounded-full drop-shadow-lg mt-3 w-full"
            type="text"
            placeholder="Title"
          />

          <h6 className="mt-4">Description</h6>
          <div className="border flex justify-between p-3   rounded-xl h-24 shadow-md mt-4 w-full">
            <h6>Description</h6>
            <spans className="flex gap-3">
              <h6>B</h6>
              <h6>/</h6>
            </spans>
          </div>

          <hr className="mt-5 w-full" />

          <div className="container mx-auto">
            <h6>KM</h6>
            <div className="">
              <input
                className="w-72 border-2  bg-white shadow-md p-3 rounded-full"
                type="text"
                placeholder="Type Here"
              />
            </div>
          </div>

          <div className="container mx-auto">
            <div className="grid grid-cols-4">
              <div>
                {data.length > 7 && (
                  <div className="">
                    <h6 className="mt-4">{data[7].fieldName}</h6>
                    <select className="custom-select mt-3 w-72 h-14 rounded-full  border-2 shadow-md  bg-white  p-1">
                      {data[7].dropDown.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                )}
              </div>

              <div>
                {data.length > 9 && (
                  <div className="">
                    <h6 className="mt-4">{data[9].fieldName}</h6>
                    <select className="custom-select mt-3 w-72 h-14 rounded-full  border-2 shadow-md  bg-white  p-1">
                      {data[9].dropDown.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                )}
              </div>

              <div>
                {data.length > 10 && (
                  <div className="">
                    <h6 className="mt-4">{data[10].fieldName}</h6>
                    <select className="custom-select mt-3 w-72 h-14 rounded-full  border-2 shadow-md  bg-white  p-1">
                      {data[10].dropDown.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                )}
              </div>

              <div>
                {data.length > 11 && (
                  <div className="">
                    <h6 className="mt-4">{data[11].fieldName}</h6>
                    <select className="custom-select mt-3 w-72 h-14 rounded-full  border-2 shadow-md  bg-white  p-1">
                      {data[11].dropDown.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                )}
              </div>

              <div>
                {data.length > 12 && (
                  <div className="">
                    <h6 className="mt-4">{data[12].fieldName}</h6>
                    <select className="custom-select mt-3 w-72 h-14 rounded-full  border-2 shadow-md  bg-white  p-1">
                      {data[12].dropDown.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                )}
              </div>

              <div>
                {data.length > 13 && (
                  <div className="">
                    <h6 className="mt-4">{data[13].fieldName}</h6>
                    <select className="custom-select mt-3 w-72 h-14 rounded-full  border-2 shadow-md  bg-white  p-1">
                      {data[13].dropDown.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                )}
              </div>

              <div>
                {data.length > 14 && (
                  <div className="">
                    <h6 className="mt-4">{data[14].fieldName}</h6>
                    <select className="custom-select mt-3 w-72 h-14 rounded-full  border-2 shadow-md  bg-white  p-1">
                      {data[14].dropDown.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                )}
              </div>

              <div>
                {data.length > 15 && (
                  <div className="">
                    <h6 className="mt-4">{data[15].fieldName}</h6>
                    <select className="custom-select mt-3 w-72 h-14 rounded-full  border-2 shadow-md  bg-white  p-1">
                      {data[15].dropDown.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                )}
              </div>

              <div>
                {data.length > 16 && (
                  <div className="">
                    <h6 className="mt-4">{data[16].fieldName}</h6>
                    <select className="custom-select mt-3 w-72 h-14 rounded-full  border-2 shadow-md  bg-white  p-1">
                      {data[16].dropDown.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="container mx-auto mt-5">
            <h5>Contact Information</h5>
            <input
              className=" border-black-600 w-72 p-3 mt-3  border-2 shadow-md  bg-white rounded-full"
              type="text"
              placeholder="Name & Surname"
            />
          </div>

          {/* <div className=" ">
            <FormControl className="">
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
              >
                <FormControlLabel
                  className="px-2"
                  value="female"
                  control={<Radio />}
                  label="Whatsapp"
                />
                <FormControlLabel
                  className="px-2"
                  value="male"
                  control={<Radio />}
                  label="Telegram"
                />

                <FormControlLabel
                  className="px-2"
                  value="female"
                  control={<Radio />}
                  label="Whatsapp"
                />
                <FormControlLabel
                  className="px-2"
                  value="male"
                  control={<Radio />}
                  label="Telegram"
                />
              </RadioGroup>
            </FormControl>
          </div> */}

          <div className="container">
          <div className="w-24 flex mt-4">
            <label className="flex">
              <input
                type="radio"
                className="h-8 w-8 text-purple-500"
                name="color"
                value="red"
              />
              <div className="ml-2 text-gray-700">WhatsApp</div>
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
              <div className="ml-2 text-gray-700">Telegram</div>
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
              <div className="ml-2 text-gray-700">SMS</div>
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
              <div className="ml-2 text-gray-700">Call</div>
            </label>
          </div>

          </div>


          <hr className="mt-5" />

          <div className="mt-5">
            <h5>Location</h5>
            <input
              className=" border-black-600 w-72 p-3 mt-3  border-2 shadow-md  bg-white rounded-full"
              type="text"
              placeholder="Location"
            />
          </div>

          {/*........................................................*/}

          <div className="grid  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3   gap-6 mt-4">
            <div className="mt-5">
              <h6>Country</h6>
              <input
                className="border-black-600 w-72 p-3 mt-3  border-2 shadow-md  bg-white rounded-full"
                type="text"
                placeholder="Select"
              />
            </div>

            <div className="mt-5">
              <h6>City</h6>
              <input
                className="border-black-600 w-72 p-3 mt-3  border-2 shadow-md  bg-white rounded-full"
                type="text"
                placeholder="Select"
              />
            </div>

            <div className="mt-5">
              <h6>District</h6>
              <input
                className="border-black-600 w-72 p-3 mt-3  border-2 shadow-md  bg-white rounded-full"
                type="text"
                placeholder="Select"
              />
            </div>

            <div className="mt-2">
              <h6>Neighborhood</h6>
              <input
                className="border-black-600 w-72 p-3 mt-3  border-2 shadow-md  bg-white rounded-full"
                type="text"
                placeholder="Select"
              />
            </div>
          </div>

          <hr className="mt-5" />

          {/*internal features*/}
          <div className="flex justify-between">
            <h6>Internal Features</h6>
            <button className="text-orange-400">+ Add Manually</button>
          </div>

          <div className=" grid   grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-10     mt-4">
            {features.map((feature) => (
              <div key={feature._id}>
                <div className="bg-white mt-3 drop-shadow-lg rounded-xl w-24 h-24">
                  <img
                    className="w-12 ml-6 py-2 "
                    src={feature.imageUrl}
                    alt=""
                  />
                  <p className=" text-center " style={{ fontSize: "10px" }}>
                    {" "}
                    {feature.fieldName}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="">
          <div className=" flex mt-4">
            <label className="flex">
              <input
                type="radio"
                className="h-8 w-8 text-purple-500"
                name="color"
                value="red"
              />
              <div className="ml-2 text-gray-700 font-bold py-1">I do not want to disclose</div>
            </label>
          </div>
          </div>

          {/*External features*/}
          <div className="flex justify-between mt-4">
            <h6>External Features</h6>
            <button className="text-orange-400">+ Add Manually</button>
          </div>

          <div className=" grid   grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-10     mt-4">
            {externalFeatures.map((externalFeatures) => (
              <div key={externalFeatures.id}>
                <div className="bg-white mt-3 drop-shadow-lg rounded-xl w-24 h-24">
                  <img
                    className="w-12 ml-6 py-2 "
                    src={externalFeatures.imageUrl}
                    alt=""
                  />
                  <p className=" text-center " style={{ fontSize: "10px" }}>
                    {externalFeatures.fieldName}
                  </p>
                </div>
              </div>
            ))}
          </div>
          {/* <div className="grid   grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-10">
            <div className="bg-white mt-3 drop-shadow-lg rounded-xl w-24 h-12">
              <p className="p-1 text-center " style={{ fontSize: "13px" }}>
                Headlight Washing
              </p>
            </div>

            <div className="bg-white mt-3 drop-shadow-lg rounded-xl w-24 h-12">
              <p className="p-1 text-center " style={{ fontSize: "13px" }}>
                Bi Xenon Headlights
              </p>
            </div>

            <div className="bg-white mt-3 drop-shadow-lg rounded-xl w-24 h-12">
              <p className="p-1 text-center " style={{ fontSize: "13px" }}>
                Alloy Wheel
              </p>
            </div>

            <div className="bg-white mt-3 drop-shadow-lg rounded-xl w-24 h-12">
              <p className="p-1 text-center " style={{ fontSize: "13px" }}>
                Fog Light
              </p>
            </div>

            <div className="bg-white mt-3 drop-shadow-lg rounded-xl w-24 h-12">
              <p className="p-1 text-center " style={{ fontSize: "13px" }}>
                Sun Roof
              </p>
            </div>

            <div className="bg-white mt-3 drop-shadow-lg rounded-xl w-24 h-12">
              <p className="p-1 text-center " style={{ fontSize: "13px" }}>
                Rain Sensor
              </p>
            </div>

            <div className="bg-white mt-3 drop-shadow-lg rounded-xl w-24 h-12">
              <p className="p-1 text-center " style={{ fontSize: "13px" }}>
                Trailer Drawer
              </p>
            </div>

            <div className="bg-white mt-3 drop-shadow-lg rounded-xl w-24 h-12">
              <p className="p-1 text-center " style={{ fontSize: "13px" }}>
                Heated Mirror
              </p>
            </div>

            <div className="bg-white mt-3 drop-shadow-lg rounded-xl w-24 h-12">
              <p className="p-1 text-center " style={{ fontSize: "13px" }}>
                Parking Assistant
              </p>
            </div>

            <div className="bg-white mt-3 drop-shadow-lg rounded-xl w-24 h-12">
              <p className="p-1 text-center " style={{ fontSize: "13px" }}>
                Electronic Mirrors
              </p>
            </div>
          </div> */}

          <div className="">
          <div className=" flex mt-4">
            <label className="flex">
              <input
                type="radio"
                className="h-8 w-8 text-purple-500"
                name="color"
                value="red"
              />
              <div className="ml-2 text-gray-700 font-bold py-1">I do not want to disclose</div>
            </label>
          </div>
          </div>

          {/* saftyFeatures*/}
          <div className="flex justify-between mt-4">
            <h6>Safety Features</h6>
            <button className="text-orange-400">+ Add Manually</button>
          </div>

          <div className=" grid   grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-10     mt-4">
            {saftyFeatures.map((saftyFeatures) => (
              <div key={saftyFeatures.id}>
                <div className="bg-white mt-3 drop-shadow-lg rounded-xl w-24 h-24">
                  <img
                    className="w-12 ml-6 py-2 "
                    src={saftyFeatures.imageUrl}
                    alt=""
                  />
                  <p className=" text-center " style={{ fontSize: "10px" }}>
                    {" "}
                    {saftyFeatures.fieldName}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* <div className="grid   grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-10">
            <div className="bg-white mt-3 drop-shadow-lg rounded-xl w-24 h-12">
              <p className="p-1 text-center " style={{ fontSize: "13px" }}>
                Headlight Washing
              </p>
            </div>

            <div className="bg-white mt-3 drop-shadow-lg rounded-xl w-24 h-12">
              <p className="p-1 text-center " style={{ fontSize: "13px" }}>
                Bi Xenon Headlights
              </p>
            </div>

            <div className="bg-white mt-3 drop-shadow-lg rounded-xl w-24 h-12">
              <p className="p-1 text-center " style={{ fontSize: "13px" }}>
                Alloy Wheel
              </p>
            </div>

            <div className="bg-white mt-3 drop-shadow-lg rounded-xl w-24 h-12">
              <p className="p-1 text-center " style={{ fontSize: "13px" }}>
                Fog Light
              </p>
            </div>

            <div className="bg-white mt-3 drop-shadow-lg rounded-xl w-24 h-12">
              <p className="p-1 text-center " style={{ fontSize: "13px" }}>
                Sun Roof
              </p>
            </div>

            <div className="bg-white mt-3 drop-shadow-lg rounded-xl w-24 h-12">
              <p className="p-1 text-center " style={{ fontSize: "13px" }}>
                Rain Sensor
              </p>
            </div>

            <div className="bg-white mt-3 drop-shadow-lg rounded-xl w-24 h-12">
              <p className="p-1 text-center " style={{ fontSize: "13px" }}>
                Trailer Drawer
              </p>
            </div>

            <div className="bg-white mt-3 drop-shadow-lg rounded-xl w-24 h-12">
              <p className="p-1 text-center " style={{ fontSize: "13px" }}>
                Heated Mirror
              </p>
            </div>

            <div className="bg-white mt-3 drop-shadow-lg rounded-xl w-24 h-12">
              <p className="p-1 text-center " style={{ fontSize: "13px" }}>
                Parking Assistant
              </p>
            </div>

            <div className="bg-white mt-3 drop-shadow-lg rounded-xl w-24 h-12">
              <p className="p-1 text-center " style={{ fontSize: "13px" }}>
                Electronic Mirrors
              </p>
            </div>
          </div> */}

          <div className="">
          <div className=" flex mt-4">
            <label className="flex">
              <input
                type="radio"
                className="h-8 w-8 text-purple-500"
                name="color"
                value="red"
              />
              <div className="ml-2 text-gray-700 font-bold py-1">I do not want to disclose</div>
            </label>
          </div>
          </div>

          {/*Body Parts*/}


          



{/* 
          <div className="flex justify-between items-center mt-4">
            <div>
              <h5>Body Parts</h5>
              <p className="mt-3" style={{ opacity: "0.6", fontSize: "13px" }}>
                Front Bumper
              </p>
            </div>
            <div className="flex gap-3">
              <div>
                <h6 className="text-green-400">Original</h6>

                <p className="bg-orange-50 w-6 ms-3 mt-4 rounded-full h-6 shadow-md"></p>
              </div>
              <div>
                <h6 className="text-orange-400">Replaced</h6>
                <p className="bg-orange-50 w-6 ms-3 mt-4 rounded-full h-6 shadow-md"></p>
              </div>
              <div>
                <h6 className="text-red-400">Painted</h6>
                <p className="bg-orange-50 w-6 ms-3 mt-4 rounded-full h-6 shadow-md"></p>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center ">
            <div>
              <p className="" style={{ opacity: "0.6", fontSize: "13px" }}>
                Engine Bonnet
              </p>
            </div>
            <div className="flex gap-5">
              <div>
                <p className="bg-orange-50 me-1 w-6  mt-3 rounded-full h-6 shadow-md"></p>
              </div>
              <div>
                <p className="bg-orange-50  w-6  me-1 mt-3 rounded-full h-6 shadow-md"></p>
              </div>
              <div>
                <p className="bg-orange-50 me-3 w-6  mt-3 rounded-full h-6 shadow-md"></p>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center ">
            <div>
              <p className="" style={{ opacity: "0.6", fontSize: "13px" }}>
                Ceiling
              </p>
            </div>
            <div className="flex gap-5">
              <div>
                <p className="bg-orange-50 me-1 w-6  mt-3 rounded-full h-6 shadow-md"></p>
              </div>
              <div>
                <p className="bg-orange-50  w-6  me-1 mt-3 rounded-full h-6 shadow-md"></p>
              </div>
              <div>
                <p className="bg-orange-50 me-3 w-6  mt-3 rounded-full h-6 shadow-md"></p>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center ">
            <div>
              <p className="" style={{ opacity: "0.6", fontSize: "13px" }}>
                Right Front Fenpr
              </p>
            </div>
            <div className="flex gap-5">
              <div>
                <p className="bg-orange-50 me-1 w-6  mt-3 rounded-full h-6 shadow-md"></p>
              </div>
              <div>
                <p className="bg-orange-50  w-6  me-1 mt-3 rounded-full h-6 shadow-md"></p>
              </div>
              <div>
                <p className="bg-orange-50 me-3 w-6  mt-3 rounded-full h-6 shadow-md"></p>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center ">
            <div>
              <p className="" style={{ opacity: "0.6", fontSize: "13px" }}>
                Right Front Doop{" "}
              </p>
            </div>
            <div className="flex gap-5">
              <div>
                <p className="bg-orange-50 me-1 w-6  mt-3 rounded-full h-6 shadow-md"></p>
              </div>
              <div>
                <p className="bg-orange-50  w-6  me-1 mt-3 rounded-full h-6 shadow-md"></p>
              </div>
              <div>
                <p className="bg-orange-50 me-3 w-6  mt-3 rounded-full h-6 shadow-md"></p>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center ">
            <div>
              <p className="" style={{ opacity: "0.6", fontSize: "13px" }}>
                Right Rear Doorph
              </p>
            </div>
            <div className="flex gap-5">
              <div>
                <p className="bg-orange-50 me-1 w-6  mt-3 rounded-full h-6 shadow-md"></p>
              </div>
              <div>
                <p className="bg-orange-50  w-6  me-1 mt-3 rounded-full h-6 shadow-md"></p>
              </div>
              <div>
                <p className="bg-orange-50 me-3 w-6  mt-3 rounded-full h-6 shadow-md"></p>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center ">
            <div>
              <p className="" style={{ opacity: "0.6", fontSize: "13px" }}>
                Right Rear Fendp
              </p>
            </div>
            <div className="flex gap-5">
              <div>
                <p className="bg-orange-50 me-1 w-6  mt-3 rounded-full h-6 shadow-md"></p>
              </div>
              <div>
                <p className="bg-orange-50  w-6  me-1 mt-3 rounded-full h-6 shadow-md"></p>
              </div>
              <div>
                <p className="bg-orange-50 me-3 w-6  mt-3 rounded-full h-6 shadow-md"></p>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center ">
            <div>
              <p className="" style={{ opacity: "0.6", fontSize: "13px" }}>
                Left Front Fendp
              </p>
            </div>
            <div className="flex gap-5">
              <div>
                <p className="bg-orange-50 me-1 w-6  mt-3 rounded-full h-6 shadow-md"></p>
              </div>
              <div>
                <p className="bg-orange-50  w-6  me-1 mt-3 rounded-full h-6 shadow-md"></p>
              </div>
              <div>
                <p className="bg-orange-50 me-3 w-6  mt-3 rounded-full h-6 shadow-md"></p>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center ">
            <div>
              <p className="" style={{ opacity: "0.6", fontSize: "13px" }}>
                Left Front Doorph
              </p>
            </div>
            <div className="flex gap-5">
              <div>
                <p className="bg-orange-50 me-1 w-6  mt-3 rounded-full h-6 shadow-md"></p>
              </div>
              <div>
                <p className="bg-orange-50  w-6  me-1 mt-3 rounded-full h-6 shadow-md"></p>
              </div>
              <div>
                <p className="bg-orange-50 me-3 w-6  mt-3 rounded-full h-6 shadow-md"></p>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center ">
            <div>
              <p className="" style={{ opacity: "0.6", fontSize: "13px" }}>
                Left Rear Door
              </p>
            </div>
            <div className="flex gap-5">
              <div>
                <p className="bg-orange-50 me-1 w-6  mt-3 rounded-full h-6 shadow-md"></p>
              </div>
              <div>
                <p className="bg-orange-50  w-6  me-1 mt-3 rounded-full h-6 shadow-md"></p>
              </div>
              <div>
                <p className="bg-orange-50 me-3 w-6  mt-3 rounded-full h-6 shadow-md"></p>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center ">
            <div>
              <p className="" style={{ opacity: "0.6", fontSize: "13px" }}>
                Left Rear Fendop
              </p>
            </div>
            <div className="flex gap-5">
              <div>
                <p className="bg-orange-50 me-1 w-6  mt-3 rounded-full h-6 shadow-md"></p>
              </div>
              <div>
                <p className="bg-orange-50  w-6  me-1 mt-3 rounded-full h-6 shadow-md"></p>
              </div>
              <div>
                <p className="bg-orange-50 me-3 w-6  mt-3 rounded-full h-6 shadow-md"></p>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center ">
            <div>
              <p className="" style={{ opacity: "0.6", fontSize: "13px" }}>
                Tailgate
              </p>
            </div>
            <div className="flex gap-5">
              <div>
                <p className="bg-orange-50 me-1 w-6  mt-3 rounded-full h-6 shadow-md"></p>
              </div>
              <div>
                <p className="bg-orange-50  w-6  me-1 mt-3 rounded-full h-6 shadow-md"></p>
              </div>
              <div>
                <p className="bg-orange-50 me-3 w-6  mt-3 rounded-full h-6 shadow-md"></p>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center ">
            <div>
              <p className="" style={{ opacity: "0.6", fontSize: "13px" }}>
                Rear Bumper
              </p>{" "}
            </div>
            <div className="flex gap-5">
              <div>
                <p className="bg-orange-50 me-1 w-6  mt-3 rounded-full h-6 shadow-md"></p>
              </div>
              <div>
                <p className="bg-orange-50  w-6  me-1 mt-3 rounded-full h-6 shadow-md"></p>
              </div>
              <div>
                <p className="bg-orange-50 me-3 w-6  mt-3 rounded-full h-6 shadow-md"></p>
              </div>
            </div>
          </div> */}

          <hr className="w-full mt-4" />

          {/*Upload Images*/}
          <div className="mt-4">
            <h6>Upload Images</h6>
          </div>

          <div className="bg-white h-40 mt-5 items-center rounded-lg shadow-md">
            <h6 className="text-center pt-5">Upload Images</h6>
            <div className="flex justify-content-center ">
              <button className="bg-orange-500 w-32 h-11 mt-2 rounded-lg text-white">
                Add Images
              </button>
            </div>
          </div>

          {/*Upload Video*/}
          <div className="mt-4">
            <h6>Upload Short Video</h6>
          </div>

          <div className="bg-white h-40 mt-5 items-center rounded-lg shadow-md">
            <h6 className="text-center pt-5">Upload Video</h6>
            <div className="flex justify-content-center ">
              <button className="bg-orange-500 w-32 h-11 mt-2 rounded-lg text-white">
                Add Images
              </button>
            </div>
          </div>

          <div className="flex justify-center mt-5">
            <Link to="/selectcarfromthelist">
              <button className="bg-orange-400 p-3 rounded-full text-white w-80 md:w-96 sm:w-96  mt-4">
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
          <h6
            className="text-center   sm:text-center md:tep-center  sm:"
            style={{ opacity: "0.6", fontSize: "13px" }}
          >
            © p21 All rights reserved. Created by Lorem Ipsum
          </h6>
        </div>
      </div>
    </>
  );
};

export default CreatedAdVehicle2;
