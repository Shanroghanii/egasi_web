import React, { useState, useEffect } from "react";
import axios from "axios";
import facebook from "../images/facebook.svg";
import Google from "../images/google.svg";
import twitter from "../images/twitter.svg";
import instagram from "../images/instagram.svg";
import paragraph from "../images/paragraph.svg";
import phone from "../images/phone.svg";
import sms from "../images/sms.svg";
import machine from "../images/machine.png";
import radio from "../images/Radio.svg";
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
import Group3347 from "../images/Group 3347.png";

import RealState from "../images/Real State.png";
import ws from "../images/ws.png";
import msg from "../images/msg.png";
import phones from "../images/phone.png";
import send from "../images/send.png";
import MaskGroup from "../images/Mask Group 1.png";
import bag from "../images/bag.png";
import id from "../images/id.png";

import facade from "../images/facade.svg";

import like from "../images/1.png";
import comment from "../images/2.png";
import reply from "../images/3.png";

import Room from "../images/Room.png";

import { Link } from "react-router-dom";
import balcony from "../images/balcony.svg";
import videocall from "../images/videocall.svg";
import UsageStatus from "../images/Usage Status.svg";
import insidecomples from "../images/insidecomples.svg";
import Hsystem from "../images/HSystem.svg";
import bulidingage from "../images/Buldingage.svg";
import bulidingfloor from "../images/buldingfloor.svg";
import titledeedstatus from "../images/titledeedstatus.svg";
import eligible from "../images/eligible.svg";

import "react-alice-carousel/lib/alice-carousel.css";

import image1 from "../images/image1.png";
import image2 from "../images/image2.png";
import image3 from "../images/image3.png";
import bcar from "../images/b car.png";
import H from "../images/H.png";

import ac from "../images/Ac.svg";
import cdplayer from "../images/cdplayer.svg";
import key from "../images/key.svg";
import sterring from "../images/staring.png";

import "../style/BeautifulHouseforSale.css";
import purpose from "../images/purpose.svg";
import type from "../images/type.svg";
import bedroom from "../images/bedroom.svg";
import bathroom from "../images/bathroom.svg";
import aregross from "../images/areagross.svg";
import furnished from "../images/furnished.svg";
import floorlocation from "../images/floor location.svg";
import fromwhom from "../images/floor whom.svg";

const BeautifulHouseforSale = () => {
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
        "http://54.179.232.109:1337/api/v1/adds/search/?purpose=sale&section=real estate"
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
          <Navbar.Brand href="">
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
            <h4>Beautiful House for Sale</h4>
            <p style={{ color: "#5BA8FF" }}>
              Real Estate Residential For Sale Villa
            </p>
          </div>

          <div className="col-12 col-md-6 col-lg-4 col-sm-12">
            <h3 style={{ color: "#F37521" }}>$400,000</h3>
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
                    <div className="flex justify-between gap-5 p-2 ">
                      <div>
                        <img className="w-8 h-8 " src={items.imageUrl} alt="" />
                      </div>
                      <div>
                        <h1 className="text-sm ">{items.fieldName}</h1>
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
                        <h4 className="mt-4">External Features</h4>
                        {firstItem && (
                        <div className="grid grid-cols-3     md:grid-cols-3 lg:grid-cols-6 ">
                            {firstItem.externalFeatures.map((itemss) => (
                              <div className="bg-white w-28 h-26 px-3 pt-3 mt-3 shadow-md rounded-lg">
                                <img
                                  className="w-12"
                                  src={itemss.imageUrl}
                                  alt=""
                                />

                                <p className="text-sm font-semibold">{itemss.fieldName}</p>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>

                      <div className="">
                        <h4 className="mt-4">Internal Features </h4>
                        {firstItem && (
                          <div className="flex justify-between  gap-3">
                            {firstItem.internalFeatures.map((internal) => (
                              <div className="bg-white px-3 pt-3 shadow-md rounded-lg">
                                <img
                                  className="w-20 h-14"
                                  src={internal.imageUrl}
                                  alt=""
                                />
                                <p>{internal.fieldName}</p>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>

                      <div className="">
                        <h4 className="mt-4">Access To Transportation</h4>
                        {firstItem && (
                          <div className="flex gap-3">
                            {firstItem.accessToTransportation.map(
                              (accessTo) => (
                                <div className="bg-white px-3 pt-3 shadow-md rounded-lg">
                                  <img
                                    className="w-16"
                                    src={accessTo.imageUrl}
                                    alt=""
                                  />
                                  <p>{accessTo.fieldName}</p>
                                </div>
                              )
                            )}
                          </div>
                        )}
                      </div>

                      <div className="">
                        <h4 className="mt-4">Neighborhood</h4>
                        {firstItem && (
                          <div className="flex gap-3 ">
                            {firstItem.neighborhood.map((neighbor) => (
                              <div className="bg-white px-3 pt-3 shadow-md rounded-lg">
                                <img
                                  className="w-16"
                                  src={neighbor.imageUrl}
                                  alt=""
                                />
                                <p>{neighbor.fieldName}</p>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>

                      <div className="">
                        <h4 className="mt-4">DisabledFacilities</h4>
                        {firstItem && (
                          <div className="flex justify-between w-96 ">
                            {firstItem.disabledFacilities.map(
                              (disabledFacilitie) => (
                                <div className="bg-white px-3 pt-3 shadow-md rounded-lg">
                                  <img
                                    className="w-16"
                                    src={disabledFacilitie.imageUrl}
                                    alt=""
                                  />
                                  <p>{disabledFacilitie.fieldName}</p>
                                </div>
                              )
                            )}
                          </div>
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

export default BeautifulHouseforSale;
