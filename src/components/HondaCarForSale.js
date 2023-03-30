import React, { useState, useEffect } from "react";
import axios from "axios";
// import { Tabs, Tab } from "react-bootstrap";
import "../style/HondaCarForSale.css";
import facebook from "../images/facebook.svg";
import Google from "../images/google.svg";
import twitter from "../images/twitter.svg";
import instagram from "../images/instagram.svg";
import paragraph from "../images/paragraph.svg";
import phone from "../images/phone.svg";
import sms from "../images/sms.svg";

import bcar from "../images/b car.png";
import machine from "../images/machine.png";

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
import Heart from "../images/Heart.svg";
import print from "../images/print.svg";
import teer from "../images/teer.svg";

import RealState from "../images/Real State.png";
import ws from "../images/ws.png";
import msg from "../images/msg.png";
import phones from "../images/phone.png";
import send from "../images/send.png";
import MaskGroup from "../images/Mask Group 1.png";
import bag from "../images/bag.png";

import like from "../images/1.png";

import { Link } from "react-router-dom";

import "react-alice-carousel/lib/alice-carousel.css";

import H from "../images/H.png";

const HondaCarForSale = () => {
  // tab section start

  const [activeTab, setActiveTab] = useState("tab1");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  // tab section end
  
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
              >
                <Link to="/home">
                  <button className="text-orange-400">Home</button>
                </Link>
              </Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                <Link to="/createdadvehicle">
                  <Button
                    variant=""
                    id="created"
                    style={{ background: "#f37521", color: "white" }}
                  >
                    Create Ad
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
      {/* section2 */}

      {/* ..............section3.............. */}
      <div className="container ">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-6 col-sm-12">
            <h4>Honda Car For Sale</h4>
            <p style={{ color: "#5BA8FF" }}>Vehicles Cars Audi A5 For Sale</p>
          </div>

          <div className="col-12 col-md-6 col-lg-4 col-sm-12">
            <h3 style={{ color: "#F37521" }}>$65,000</h3>
            <p style={{ color: "#5BA8FF" }}>Country City District</p>
          </div>

          <div className="col-12 col-md-4 col-lg-2 ">
            <spanHs className="spanHs">
              <img src={Heart} alt="" style={{ width: "60px" }} />
              <img src={print} alt="" style={{ width: "60px" }} />
              <img src={teer} alt="" style={{ width: "60px" }} />
            </spanHs>
          </div>
        </div>
      </div>

      {/*............. section 4.....................*/}
      <div className="container ">
        <div className="grid grid-cols-1  gap-4 md:grid-cols-2 lg:grid-cols-2">
          <div className="">
            {firstItem && (
              <>
                <img
                  className="shadow-lg max-h-96"
                  src={firstItem.imageUrl}
                  alt=""
                  style={{ width: "1000px" }}
                />

                <div className="flex overflow-x-auto  gap-2 mt-2">
                  <img
                    className="shadow-lg w-32 h-20 rounded-md"
                    src={firstItem.imageUrl}
                    alt=""
                  />
                  <img
                    className="shadow-lg w-32 h-20 rounded-md"
                    src={firstItem.imageUrl}
                    alt=""
                  />
                  <img
                    className="shadow-lg w-32 h-20 rounded-md"
                    src={firstItem.imageUrl}
                    alt=""
                  />
                  <img
                    className="shadow-lg w-32 h-20 rounded-md"
                    src={firstItem.imageUrl}
                    alt=""
                  />
                  <img
                    className="shadow-lg w-32 h-20 rounded-md"
                    src={firstItem.imageUrl}
                    alt=""
                  />
                </div>
              </>
            )}
          </div>

          <div className=" grid grid-cols-1 md:grid-cols-2 gap-3 ">
            <div className="bg-white   p-3">
              {firstItem && (
                <>
                  {firstItem.basicInformation.details.map((items) => (
                    <div className="flex justify-between gap-5 ">
                      <div>
                        <h1 className="text-sm ">{items.fieldName}</h1>
                      </div>
                      <div>
                        <img className="w-8 h-8 " src={items.imageUrl} alt="" />
                      </div>
                      <div>
                        <h1 className="text-sm ">{items.value}</h1>
                      </div>
                    </div>
                  ))}
                </>
              )}

              <p
                style={{
                  color: "#F77A23",
                  textAlign: "center",
                  margingTop: "20px",
                }}
              >
                Report this ad
              </p>
            </div>

            <div className=" ">
              <div
                className="bg-white "
                style={{ height: "220px", borderRadius: "10px" }}
              >
                <spanb className="contactInformation">
                  <p>CONTACT INFORMATION</p>
                  <img src={RealState} alt="" />
                </spanb>

                <span1 className="span1">Lorem Ipsum</span1>
                <br />
                <br />

                <span2 className="span2">+445 2587582547</span2>
                <spanb
                  className="d-flex justify-evenly "
                  style={{ padding: "20px" }}
                >
                  <img src={ws} alt="" style={{ width: "60px" }} />
                  <img src={msg} alt="" style={{ width: "60px" }} />
                  <img src={phones} alt="" style={{ width: "60px" }} />
                  <img src={send} alt="" style={{ width: "60px" }} />
                </spanb>
              </div>
              <img
                className="mt-3"
                src={MaskGroup}
                alt=""
                style={{ height: "240px", width: "300px" }}
              />
            </div>
          </div>
        </div>
      </div>

      {/*...............section5...................*/}
      <div className="container mt-5">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-8">
            <div className="box">
              <div className="row bg-white rounded-2">
                <div className="col-12 col-md-6 col-lg-7">
                  <div className="flex  gap-5 p-3">
                    <button
                      className={`${
                        activeTab === "tab1" ? "bg-orange-700" : "bg-white"
                      } text-black py-3 px-4 rounded-l`}
                      onClick={() => handleTabClick("tab1")}
                    >
                      More Details
                    </button>
                    <button
                      className={`${
                        activeTab === "tab2" ? "bg-orange-700" : "bg-white"
                      } text-black  py-2 px-4`}
                      onClick={() => handleTabClick("tab2")}
                    >
                      Features
                    </button>
                    <button
                      className={`${
                        activeTab === "tab3" ? "bg-orange-700" : "bg-white"
                      } text-black  py-2 px-4 rounded-r`}
                      onClick={() => handleTabClick("tab3")}
                    >
                      Location
                    </button>
                  </div>
                </div>
              </div>

              <div className="contents ">
                <div className="">
                  {activeTab === "tab1" && (
                    <div className="border bg-white border-gray-300 rounded-lg p-2 mt-4">
                      <>
                        {firstItem && (
                          <>
                            {firstItem.basicInformation.details.map((items) => (
                              <div className="flex p-3 justify-between gap-5 ">
                                <div className="flex gap-5">
                                  <img
                                    className="w-8 h-8 "
                                    src={items.imageUrl}
                                    alt=""
                                  />
                                  <h1 className="text-sm ">
                                    {items.fieldName}
                                  </h1>
                                </div>

                                <div>
                                  <h1 className="text-sm ">{items.value}</h1>
                                </div>
                              </div>
                            ))}
                          </>
                        )}
                      </>

                      <div className="px-3">
                        <h2 className="mt-5" style={{ textAlgin: "start" }}>
                          Description
                        </h2>
                        {firstItem && (
                          <>
                            <p>{firstItem.basicInformation.description}</p>
                          </>
                        )}
                        {firstItem && (
                          <>
                            <p>{firstItem.basicInformation.purpose}</p>
                          </>
                        )}
                      </div>
                    </div>
                  )}

                  {activeTab === "tab2" && (
                    <>
                      <div>
                        <h4 className="mt-3">External Features</h4>
                        {firstItem && (
                          <>
                            {firstItem.externalFeatures.map((itemss) => (
                              <>
                                <p>{itemss.fieldName}</p>
                                <div className="flex">
                                  <img
                                    className="w-12"
                                    src={itemss.imageUrl}
                                    alt=""
                                  />
                                </div>
                              </>
                            ))}
                          </>
                        )}
                      </div>

                      <div className="">
                        <h4 className="mt-3">Internal Features </h4>
                        {firstItem && (
                          <>
                            {firstItem.internalFeatures.map((internal) => (
                              <div>
                                <p>{internal.fieldName}</p>
                                <img
                                  className="w-20"
                                  src={internal.imageUrl}
                                  alt=""
                                />
                              </div>
                            ))}
                          </>
                        )}
                      </div>

                      <div className="">
                        <h4 className="mt-3">Safety Features</h4>
                        {firstItem && (
                          <>
                            {firstItem.safetyFeatures.map((Safety) => (
                              <div>
                                <p>{Safety.fieldName}</p>
                                <img
                                  className="w-20"
                                  src={Safety.imageUrl}
                                  alt=""
                                />
                              </div>
                            ))}
                          </>
                        )}
                      </div>
                    </>
                  )}
                  {activeTab === "tab3" && (
                    <>
                      <h1>Location</h1>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-4">
            <h6
              style={{
                marginInline: "1rem",
                color: "black",
                paddingTop: "10px",
              }}
            >
              Similar Ads
            </h6>

            <div className="mycar mt-3">
              <div className="row">
                <img src={bcar} alt="" />
              </div>

              <div
                className="row bg-white p-2"
                style={{
                  borderTopRightRadius: "10px",
                  borderBottomRightRadius: "10px",
                }}
              >
                <span3 className="d-flex justify-content-between">
                  <h6 className="pt-1">Honda For Sale</h6>
                  <img
                    src={H}
                    alt=""
                    style={{ width: "40px", height: "30px" }}
                  />
                </span3>

                <p
                  style={{
                    fontSize: "10px",
                    paddingTop: "10px",
                    opacity: "0.3",
                  }}
                >
                  Lorem ipsum address, New York
                </p>

                <h5
                  style={{
                    color: "#F37521",
                  }}
                >
                  $65,000
                </h5>
                <div className="lcr">
                  <spanlike className="d-flex ">
                    <img src={like} alt="" />
                    <p style={{ fontSize: "8px", paddingLeft: "10px" }}>2022</p>
                  </spanlike>

                  <spanlike className="d-flex ">
                    <img src={machine} alt="" />
                    <p style={{ fontSize: "8px", paddingLeft: "10px" }}>
                      1800 cc
                    </p>
                  </spanlike>

                  <spanlike className="d-flex ">
                    <img src={bag} alt="" />
                    <p style={{ fontSize: "8px", paddingLeft: "10px" }}>
                      1234 Km
                    </p>
                  </spanlike>
                </div>
              </div>
            </div>

            <div className="mycar mt-3">
              <div className="row">
                <img src={bcar} alt="" />
              </div>

              <div
                className="row bg-white p-2"
                style={{
                  borderTopRightRadius: "10px",
                  borderBottomRightRadius: "10px",
                }}
              >
                <span3 className="d-flex justify-content-between">
                  <h6 className="pt-1">Honda For Sale</h6>
                  <img
                    src={H}
                    alt=""
                    style={{ width: "40px", height: "30px" }}
                  />
                </span3>

                <p
                  style={{
                    fontSize: "10px",
                    paddingTop: "10px",
                    opacity: "0.3",
                  }}
                >
                  Lorem ipsum address, New York
                </p>

                <h5
                  style={{
                    color: "#F37521",
                  }}
                >
                  $65,000
                </h5>
                <div className="lcr">
                  <spanlike className="d-flex ">
                    <img src={like} alt="" />
                    <p style={{ fontSize: "8px", paddingLeft: "10px" }}>2022</p>
                  </spanlike>

                  <spanlike className="d-flex ">
                    <img src={machine} alt="" />
                    <p style={{ fontSize: "8px", paddingLeft: "10px" }}>
                      1800 cc
                    </p>
                  </spanlike>

                  <spanlike className="d-flex ">
                    <img src={bag} alt="" />
                    <p style={{ fontSize: "8px", paddingLeft: "10px" }}>
                      1234 Km
                    </p>
                  </spanlike>
                </div>
              </div>
            </div>

            <div className="mycar mt-3">
              <div className="row">
                <img src={bcar} alt="" />
              </div>

              <div
                className="row bg-white p-2"
                style={{
                  borderTopRightRadius: "10px",
                  borderBottomRightRadius: "10px",
                }}
              >
                <span3 className="d-flex justify-content-between">
                  <h6 className="pt-1">Honda For Sale</h6>
                  <img
                    src={H}
                    alt=""
                    style={{ width: "40px", height: "30px" }}
                  />
                </span3>

                <p
                  style={{
                    fontSize: "10px",
                    paddingTop: "10px",
                    opacity: "0.3",
                  }}
                >
                  Lorem ipsum address, New York
                </p>

                <h5
                  style={{
                    color: "#F37521",
                  }}
                >
                  $65,000
                </h5>
                <div className="lcr">
                  <spanlike className="d-flex ">
                    <img src={like} alt="" />
                    <p style={{ fontSize: "8px", paddingLeft: "10px" }}>2022</p>
                  </spanlike>

                  <spanlike className="d-flex ">
                    <img src={machine} alt="" />
                    <p style={{ fontSize: "8px", paddingLeft: "10px" }}>
                      1800 cc
                    </p>
                  </spanlike>

                  <spanlike className="d-flex ">
                    <img src={bag} alt="" />
                    <p style={{ fontSize: "8px", paddingLeft: "10px" }}>
                      1234 Km
                    </p>
                  </spanlike>
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

export default HondaCarForSale;

// <div className="container">
//         <div className="row d-flex justify-content-around">
//           <div className="col-12 col-md-6 col-lg-6">
//             <h3 className="mt-3">Beautiful House for Sale</h3>
//             <h6 style={{ color: "#5BA8FF", marginTop: "20px" }}>
//               Real Estate Residential For Sale Villa
//             </h6>
//             <img
//               src={bcar}
//               alt=""
//               style={{ width: "760px", height: "400px", marginTop: "50px" }}
//             />
//           </div>

//           <div className="col-12 col-md-6 col-lg-3 mt-4">
//             <h3 className="mt-3 fw-bold" style={{ color: "#F37521" }}>
//               $400,04444400
//             </h3>
//             <h6 className="" style={{ color: "#5BA8FF", marginTop: "20px" }}>
//               City District Neighborhood
//             </h6>

//             {/* ............................. */}

//             {/* ...................................... */}
//           </div>

//           <div className="col-12 col-md-6 col-lg-3 mt-4">
//             <spanb className="d-flex justify-content-end">
//               <img src={Heart} alt="" style={{ width: "70px" }} />
//               <img src={print} alt="" style={{ width: "70px" }} />
//               <img src={teer} alt="" style={{ width: "70px" }} />
//             </spanb>

//     <div
//       className="bg-white "
//       style={{ height: "220px", borderRadius: "10px" }}
//     >
//       <spanb className="se">
//         <p>CONTACT INFORMATION</p>
//         <img src={RealState} alt="" />
//       </spanb>

//       <span1 className="span1">Lorem Ipsum</span1>
//       <br />
//       <br />

//       <span2 className="span2">+445 2587582547</span2>
//       <spanb
//         className="d-flex justify-evenly "
//         style={{ padding: "20px" }}
//       >
//         <img src={ws} alt="" style={{ width: "70px" }} />
//         <img src={msg} alt="" style={{ width: "70px" }} />
//         <img src={phone} alt="" style={{ width: "70px" }} />
//         <img src={send} alt="" style={{ width: "70px" }} />
//       </spanb>
//     </div>
//     <img
//       className="mt-3"
//       src={MaskGroup}
//       alt=""
//       style={{ height: "250px", width: "300px" }}
//     />
//   </div>
// </div>
//       </div>

// //

// <Tabs
//               justify
//               variant="pills"
//               defaultActiveKey="tab-1"
//               className="mb-1 pt-3 bg-light "
//               style={{ height: "70px" }}
//             >
//               <Tab eventKey="tab-1" title="More Details 1">

//                 <h4 className="mt-3 fw-bold">Details</h4>
//                 <div className="col-12 col-md-12 col-lg-12">
//                   <div
//                     className="d-flex justify-between bg-white rounded-2 mt-4"
//                     style={{ textAlign: "center", alignItems: "center" }}
//                   >
//                     <spanb className="d-flex justify-center">
//                       <img
//                         src={balcony}
//                         alt=""
//                         style={{
//                           width: "30px",
//                           height: "30px",
//                           marginTop: "15px",
//                           marginInline: "1rem",
//                         }}
//                       />
//                       <p className="ms-4 pt-2  fs-3">Balcony</p>
//                     </spanb>
//                     <p className="mt-2 fs-3 me-4">Yes </p>
//                   </div>

//                   <div
//                     className="d-flex justify-between rounded-2 "
//                     style={{
//                       textAlign: "center",
//                       alignItems: "center",
//                       background: "#E9EBEE",
//                     }}
//                   >
//                     <spanb className="d-flex justify-center">
//                       <img
//                         src={bag}
//                         alt=""
//                         style={{
//                           width: "30px",
//                           height: "30px",
//                           marginTop: "15px",
//                           marginInline: "1rem",
//                         }}
//                       />
//                       <p className="ms-4 pt-2  fs-3">Video call</p>
//                     </spanb>
//                     <p className="mt-2 fs-3  me-4">No </p>
//                   </div>

//                   <div
//                     className="d-flex justify-between bg-white rounded-2 "
//                     style={{ textAlign: "center", alignItems: "center" }}
//                   >
//                     <spanb className="d-flex justify-center">
//                       <img
//                         src={usestate}
//                         alt=""
//                         style={{
//                           width: "30px",
//                           height: "30px",
//                           marginTop: "15px",
//                           marginInline: "1rem",
//                         }}
//                       />
//                       <p className="ms-4 pt-2 fs-3">Usage Status</p>
//                     </spanb>
//                     <p className="mt-2 fs-3  me-4">Used </p>
//                   </div>

//                   <div
//                     className="d-flex justify-between rounded-2 "
//                     style={{
//                       textAlign: "center",
//                       alignItems: "center",
//                       background: "#E9EBEE",
//                     }}
//                   >
//                     <spanb className="d-flex justify-center">
//                       <img
//                         src={facade}
//                         alt=""
//                         style={{
//                           width: "30px",
//                           height: "30px",
//                           marginTop: "15px",
//                           marginInline: "1rem",
//                         }}
//                       />
//                       <p className="ms-4 pt-2  fs-3">Video call</p>
//                     </spanb>
//                     <p className="mt-2 fs-3  me-4">No </p>
//                   </div>

//                   <div
//                     className="d-flex justify-between bg-white rounded-2 "
//                     style={{ textAlign: "center", alignItems: "center" }}
//                   >
//                     <spanb className="d-flex justify-center">
//                       <img
//                         src={insidecomplex}
//                         alt=""
//                         style={{
//                           width: "30px",
//                           height: "30px",
//                           marginTop: "15px",
//                           marginInline: "1rem",
//                         }}
//                       />
//                       <p className="ms-4 pt-2 fs-3">Usage Status</p>
//                     </spanb>
//                     <p className="mt-2 fs-3  me-4">Used </p>
//                   </div>

//                   <div
//                     className="d-flex justify-between rounded-2 "
//                     style={{
//                       textAlign: "center",
//                       alignItems: "center",
//                       background: "#E9EBEE",
//                     }}
//                   >
//                     <spanb className="d-flex justify-center">
//                       <img
//                         src={Hsystem}
//                         alt=""
//                         style={{
//                           width: "30px",
//                           height: "30px",
//                           marginTop: "15px",
//                           marginInline: "1rem",
//                         }}
//                       />
//                       <p className="ms-4 pt-2  fs-3">Video call</p>
//                     </spanb>
//                     <p className="mt-2 fs-3  me-4">No </p>
//                   </div>

//                   <div
//                     className="d-flex justify-between bg-white rounded-2 "
//                     style={{ textAlign: "center", alignItems: "center" }}
//                   >
//                     <spanb className="d-flex justify-center">
//                       <img
//                         src={Buldingage}
//                         alt=""
//                         style={{
//                           width: "30px",
//                           height: "30px",
//                           marginTop: "15px",
//                           marginInline: "1rem",
//                         }}
//                       />
//                       <p className="ms-4 pt-2 fs-3">Usage Status</p>
//                     </spanb>
//                     <p className="mt-2 fs-3  me-4">Used </p>
//                   </div>

//                   <div
//                     className="d-flex justify-between rounded-2 "
//                     style={{
//                       textAlign: "center",
//                       alignItems: "center",
//                       background: "#E9EBEE",
//                     }}
//                   >
//                     <spanb className="d-flex justify-center">
//                       <img
//                         src={buldingfloor}
//                         alt=""
//                         style={{
//                           width: "30px",
//                           height: "30px",
//                           marginTop: "15px",
//                           marginInline: "1rem",
//                         }}
//                       />
//                       <p className="ms-4 pt-2  fs-3">Video call</p>
//                     </spanb>
//                     <p className="mt-2 fs-3  me-4">No </p>
//                   </div>

//                   <div
//                     className="d-flex justify-between bg-white rounded-2 "
//                     style={{ textAlign: "center", alignItems: "center" }}
//                   >
//                     <spanb className="d-flex justify-center">
//                       <img
//                         src={titledeedstatus}
//                         alt=""
//                         style={{
//                           width: "30px",
//                           height: "30px",
//                           marginTop: "15px",
//                           marginInline: "1rem",
//                         }}
//                       />
//                       <p className="ms-4 pt-2 fs-3">Usage Status</p>
//                     </spanb>
//                     <p className="mt-2 fs-3  me-4">Used </p>
//                   </div>

//                   <div
//                     className="d-flex justify-between rounded-2 "
//                     style={{
//                       textAlign: "center",
//                       alignItems: "center",
//                       background: "#E9EBEE",
//                     }}
//                   >
//                     <spanb className="d-flex justify-center">
//                       <img
//                         src={eligible}
//                         alt=""
//                         style={{
//                           width: "30px",
//                           height: "30px",
//                           marginTop: "15px",
//                           marginInline: "1rem",
//                         }}
//                       />
//                       <p className="ms-4 pt-2  fs-3">Eligible for Morgage</p>
//                     </spanb>
//                     <p className="mt-2 fs-3 me-4">No </p>
//                   </div>

//                   <h2 className="mt-5">Description</h2>
//                   <p style={{ marginTop: "30px", fontSize: "24px" }}>
//                     Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                     Fusce erat turpis, bibendum eu tortor ut, sagittis
//                     scelerisque ante. Maecenas pretium justo id orci lacinia,
//                     eget dictum magna dapibus. Nunc condiment m nunc quis mi
//                     lobortis, in euismo lorem tincidunt. Quisque finibus congue
//                     condimentum. Quisque euis mod, nisl non malesuada accumsan,
//                     ex mauris porta arcu, nec tempus lorem massa quis orci.
//                     Suspendis se non tellus sem. Aliquam eu elit velit.
//                   </p>
//                 </div>
//               </Tab>

//               <Tab eventKey="tab-2" title="Features">
//                 <h4 className="mt-4">Internal Features</h4>

//                 <div className="container w-100">
//                   <div className="row d-flex justify-between">
//                     <div className="col-12 col-md-6 col-lg-2">
//                       <div className="features">
//                         <img src={Group2578} alt="" id="featureimage1" />
//                         <p>Fire Alarm</p>
//                       </div>
//                     </div>

//                     <div className="col-12 col-md-6 col-lg-2">
//                       <div className="features">
//                         <img src={Group2578} alt="" id="featureimage1" />
//                         <p>Fire Alarm</p>
//                       </div>
//                     </div>
//                     <div className="col-12 col-md-6 col-lg-2">
//                       <div className="features">
//                         <img src={Group2578} alt="" id="featureimage1" />
//                         <p>Fire Alarm</p>
//                       </div>
//                     </div>

//                     <div className="col-12 col-md-6 col-lg-2">
//                       <div className="features">
//                         <img src={Group2578} alt="" id="featureimage1" />
//                         <p>Fire Alarm</p>
//                       </div>
//                     </div>

//                     <div className="col-12 col-md-6 col-lg-2">
//                       <div className="features">
//                         <img src={Group2578} alt="" id="featureimage1" />
//                         <p>Fire Alarm</p>
//                       </div>
//                     </div>

//                     <div className="col-12 col-md-6 col-lg-2">
//                       <div className="features">
//                         <img src={Group2578} alt="" id="featureimage1" />
//                         <p>Fire Alarm</p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 <h4 className="mt-4">External Features</h4>
//                 <div className="container ">
//                   <div className="row">
//                     <div className="col-12 col-md-6 col-lg-2">
//                       <div className="features">
//                         <img src={Group2578} alt="" id="featureimage1" />
//                         <p>Fire Alarm</p>
//                       </div>
//                     </div>

//                     <div className="col-12 col-md-6 col-lg-2">
//                       <div className="features">
//                         <img src={Group2578} alt="" id="featureimage1" />
//                         <p>Fire Alarm</p>
//                       </div>
//                     </div>

//                     <div className="col-12 col-md-6 col-lg-2">
//                       <div className="features">
//                         <img src={Group2578} alt="" id="featureimage1" />
//                         <p>Fire Alarm</p>
//                       </div>
//                     </div>

//                     <div className="col-12 col-md-6 col-lg-2">
//                       <div className="features">
//                         <img src={Group2578} alt="" id="featureimage1" />
//                         <p>Fire Alarm</p>
//                       </div>
//                     </div>

//                     <div className="col-12 col-md-6 col-lg-2">
//                       <div className="features">
//                         <img src={Group2578} alt="" id="featureimage1" />
//                         <p>Fire Alarm</p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 <h4 className="mt-4">Access to transportation</h4>

//                 <div className="container ">
//                   <div className="row">
//                     <div className="col-12 col-md-6 col-lg-2">
//                       <div className="features">
//                         <img src={Group2578} alt="" id="featureimage1" />
//                         <p>Fire Alarm</p>
//                       </div>
//                     </div>

//                     <div className="col-12 col-md-6 col-lg-2">
//                       <div className="features">
//                         <img src={Group2578} alt="" id="featureimage1" />
//                         <p>Fire Alarm</p>
//                       </div>
//                     </div>

//                     <div className="col-12 col-md-6 col-lg-2">
//                       <div className="features">
//                         <img src={Group2578} alt="" id="featureimage1" />
//                         <p>Fire Alarm</p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 <h4 className="mt-4">Neighborhood</h4>

//                 <div className="container ">
//                   <div className="row">
//                     <div className="col-12 col-md-6 col-lg-2">
//                       <div className="features">
//                         <img src={Group2578} alt="" id="featureimage1" />
//                         <p>Fire Alarm</p>
//                       </div>
//                     </div>

//                     <div className="col-12 col-md-6 col-lg-2">
//                       <div className="features">
//                         <img src={Group2578} alt="" id="featureimage1" />
//                         <p>Fire Alarm</p>
//                       </div>
//                     </div>

//                     <div className="col-12 col-md-6 col-lg-2">
//                       <div className="features">
//                         <img src={Group2578} alt="" id="featureimage1" />
//                         <p>Fire Alarm</p>
//                       </div>
//                     </div>

//                     <div className="col-12 col-md-6 col-lg-2">
//                       <div className="features">
//                         <img src={Group2578} alt="" id="featureimage1" />
//                         <p>Fire Alarm</p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 <h4 className="mt-4">Facilities for disabled</h4>

//                 <div className="container ">
//                   <div className="row">
//                     <div className="col-12 col-md-6 col-lg-2">
//                       <div className="features">
//                         <img src={Group2578} alt="" id="featureimage1" />
//                         <p>Fire Alarm</p>
//                       </div>
//                     </div>

//                     <div className="col-12 col-md-6 col-lg-2">
//                       <div className="features">
//                         <img src={Group2578} alt="" id="featureimage1" />
//                         <p>Fire Alarm</p>
//                       </div>
//                     </div>

//                     <div className="col-12 col-md-6 col-lg-2">
//                       <div className="features">
//                         <img src={Group2578} alt="" id="featureimage1" />
//                         <p>Fire Alarm</p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 {/* <div className="ddd">
//                   <div className="col-12 col-md-6 col-lg-8">
//                     <div className="features">
//                       <img src={Group2578} alt="" id="featureimage1" />
//                       <p>Fire Alarm</p>
//                     </div>

//                     <div className="features">
//                       <img src={Group2578} alt="" id="featureimage1" />
//                       <p>Fire Alarm</p>
//                     </div>

//                     <div className="features">
//                       <img src={Group2578} alt="" id="featureimage1" />
//                       <p>Fire Alarm</p>
//                     </div>

//                     <div className="features">
//                       <img src={Group2578} alt="" id="featureimage1" />
//                       <p>Fire Alarm</p>
//                     </div>

//                     <div className="features">
//                       <img src={Group2578} alt="" id="featureimage1" />
//                       <p>Fire Alarm</p>
//                     </div>

//                     <div className="features">
//                       <img src={Group2578} alt="" id="featureimage1" />
//                       <p>Fire Alarm</p>
//                     </div>
//                   </div>
//                 </div> */}
//               </Tab>

//               <Tab eventKey="tab-3" title="Location">
//                 <h4 className="mt-4">location</h4>
//               </Tab>
//             </Tabs>
