// import React, { useEffect, useState } from "react";
import { useState, useEffect } from "react";
import "../style/Home.css";
import location from "../images/location.svg";
import Heartts from "../images/Heartts.svg";
import scan from "../images/scan.svg";
import facebook from "../images/facebook.svg";
import Google from "../images/google.svg";
import twitter from "../images/twitter.svg";
import instagram from "../images/instagram.svg";
import paragraph from "../images/paragraph.svg";
// import phone from "../images/phone.svg";
import sms from "../images/sms.svg";
import Lock2 from "../images/Lock2.svg";
import loginmessage from "../images/loginmessage.svg";
import loginlock from "../images/loginlock.svg";
import profile from "../images/profile.png";
import bag from "../images/bag.png";
import enginpower from "../images/enginpower.svg";
import km from "../images/km.svg";
import mobile from "../images/Mobil.png";
import Lock from "../images/Lock.svg";

// Navbar Start
import MaskGroup11 from "../images/nested image/Mask Group 11/Mask Group 11.png";
import MaskGroup12 from "../images/nested image/Mask Group 12/Mask Group 12.png";
import MaskGroup13 from "../images/nested image/Mask Group 13/Mask Group 13.png";
import MaskGroup14 from "../images/nested image/Mask Group 14/Mask Group 14.png";
import MaskGroup15 from "../images/nested image/Mask Group 15/Mask Group 15.png";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
// import logo from "../images/Group 3321.svg";
import NavbarImage1 from "../images/Group 11680.png";
import NavbarImage2 from "../images/Group 11819.png";
// Navbar End
import section2image from "../images/sectiontwoimage.png";
import pepsi from "../images/Image 2.png";
import burger from "../images/Image 3.png";
import RealState from "../images/Real State.png";
import Rs from "../images/Rs.png";
import Room from "../images/Room.png";
import TrustState from "../images/TrustState.svg";
import Group692 from "../images/Group 11692.svg";
import Group1178 from "../images/Group 11718.svg";
import appstore from "../images/appstore.png";
import googleplay from "../images/googleplay.png";
import Group11709 from "../images/Group 11709.svg";
import textnumber from "../images/textnumber.svg";
// import { FaFacebookF, FaTwitter } from "react-icons/fa";
// import { BsGoogle, BsTelephoneFill } from "react-icons/bs";
// import { MdEmail } from "react-icons/md";
import card from "../images/Group 3347.png";
import like from "../images/1.png";
import comment from "../images/2.png";
import reply from "../images/3.png";
import image1 from "../images/Rectangle 491.png";
import image2 from "../images/Rectangle 495.png";
import Group11921 from "../images/Group 11921.svg";
import Group11922 from "../images/Group 11922.svg";
import Group11923 from "../images/Group 11923.svg";
import Group11924 from "../images/Group 11924.svg";
import bcar from "../images/b car.png";

// import mobile from "../images/Mobil.png";
// import appstore from "../images/appstore.png";
import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";

import car from "../images/car.png";
import tachkent from "../images/tachkent.png";
import Verfiy from "../images/Verfiy.png";
import Successfuly from "../images/successfuly.svg";
// import Lock from "../images/Lock.svg";
import Verify from "../images/Verfiy.png";
import ResetPassword from "../images/Resetpassword.svg";
import PasswordUpdate from "../images/passwordupdate.svg";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import Login from "./Login";
import { useLocation } from "react-router-dom";

const validate = (values) => {
  const errors = {};
  if (values.code === "") {
    errors.code = "code is required";
  }

  return errors;
};

const Home = () => {
  const location = useLocation();

  // five image
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://54.179.232.109:1337/api/v1/adds/sections")
      .then((response) => {
        setData(response.data);
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // five image end

  // image upload  api
  const [logo, setLogo] = useState("");
  function handleImage(e) {
    console.log(e.target.files);
    setLogo(e.target.files[logo]);
  }
  function handleApi() {
    const formData = new FormData();
    formData.append("logo", logo);
    axios
      .post("http://54.179.232.109:1337/api/v1/admin/upload", formData)
      .then((res) => {
        console.log(res);
      });
  }

  // image upload  api end

  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      code: "",
    },
    validate,
    onSubmit: () => {
      setIsLoading(true);
      setTimeout(handleSave, 1000);
    },
  });

  const handleSave = () => {
    submitData(formik.values);
  };

  const [openTab, setOpenTab] = useState(1);

  const [name, setName] = useState("");
  const [role, setRole] = useState("individual");

  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [taxNumber, setTaxNumber] = useState("");
  const [phone, setPhone] = useState("");
  const [officePhone, setOfficePhone] = useState("");

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [address, setAddress] = useState("");
  const [termsAccept, setTermsAccept] = useState("");

  const [code, setCode] = useState("");

  const handlesubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://54.179.232.109:1337/api/v1/user/email-signup", {
        name,
        role,
        companyName,
        email,
        taxNumber,
        phone,
        officePhone,
        logo,
        password,
        confirmPassword,
        address,
        termsAccept: "true",
      })
      .then((response) => {
        console.log(response);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Forgat password api
  function handleSubmit(event) {
    event.preventDefault();
    axios
      .get("http://54.179.232.109:1337/api/v1/user/forget-password", {
        params: {
          email: email,
        },
      })
      .then((response) => {
        console.log(response.data); // This will log the data returned by the API
        // Handle the response data here
      })
      .catch((error) => {
        console.error(error);
        // Handle any errors here
      });
  }

  // forgat password code api
  function handleSubmits(event) {
    event.preventDefault();
    axios
      .get("http://54.179.232.109:1337/api/v1/user/verify", {
        params: {
          code: code,
        },
      })
      .then((response) => {
        console.log(response.data);
        navigate("/", { state: { code } });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  //reset password api
  function handleSubmitss(event) {
    event.preventDefault();

    axios
      .post("http://54.179.232.109:1337/api/v1/user/reset-password", {
        code: location.state.code,
        password: password,
        confirmPassword: confirmPassword,
      })
      .then((response) => {
        console.log(response.data); // This will log the data returned by the API
        navigate("/"); // Redirect the user to the login page
      })
      .catch((error) => {
        console.error(error);
      });
  }

  const submitData = (data) => {
    axios
      .post("http://54.179.232.109:1337/api/v1/user/verify", data)
      .then((res) => {
        setIsLoading(false);
        console.log(res);
        navigate("/");
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err);
      });
  };
  const handleTypeChange = (event) => {
    setRole(event.target.value);
  };

  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
    setSignInData(true);

    setSignUpData(false);
    setForgotData(false);

    setSignInWithNumber(false);
    setSignInVerify(false);
    setEmailAddress(false);
    setReceive(false);
    setResetPassword(false);
    setPasswordUpdate(false);
    setMobileNumber(false);
    setEnterTheCode(false);
    setMobileResetPassword(false);
    setSignUpEmailAddress(false);
    setCorporate(false);
    setCorporateVerify(false);
  };

  const handleShow = () => setShow(true);
  const [signupdata, setSignUpData] = useState(false);
  const [signInData, setSignInData] = useState(true);
  const [signinwithnumber, setSignInWithNumber] = useState(false);
  const [signinwithlogin, setSignInWithLogin] = useState(false);
  const [signinverify, setSignInVerify] = useState(false);
  const [emailaddress, setEmailAddress] = useState(false);
  const [sendreceive, setReceive] = useState(false);
  const [resetpassword, setResetPassword] = useState(false);
  const [passwordupdate, setPasswordUpdate] = useState(false);
  const [mobilenumber, setMobileNumber] = useState(false);
  const [enterthecode, setEnterTheCode] = useState(false);
  const [mobileresetpassword, setMobileResetPassword] = useState(false);
  const [forgotData, setForgotData] = useState(false);
  const [signupemailaddress, setSignUpEmailAddress] = useState(false);
  const [corporate, setCorporate] = useState(false);
  const [corporateverify, setCorporateVerify] = useState(false);

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
            <Nav className="me-auto">
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search Something...."
                  className="me-2"
                  aria-label="Search"
                  id="Homeinput"
                />
              </Form>
            </Nav>
            <Nav className="ms-auto mt-3">
              <Nav.Link
                className="mt-3  fs-5 me-2 "
                style={{ color: "#f37521" }}
                href="#action1"
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

              <Nav.Link eventKey={2} href="#memes">
                <Button
                  variant="btn btn-success  "
                  id="login"
                  onClick={handleShow}
                >
                  login
                </Button>
              </Nav.Link>

              <Nav.Link href="#deets">
                <img className="w-16 h-16 mt-1" src={NavbarImage1} alt="" />
              </Nav.Link>
              <Nav.Link href="#deets">
                <img className="w-16 h-16 mt-1" src={NavbarImage2} alt="" />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/*Navbar End*/}

      {/*......*/}
      <Modal
        size="md"
        style={{ marginTop: "50px" }}
        show={show}
        onHide={handleClose}
      >
        {signInData ? (
          <>
            <Login />

            <div className="d-flex justify-content-center mt-4">
              <div
                style={{ color: "#F37521", cursor: "pointer" }}
                onClick={() => {
                  setForgotData(true);
                  setSignInData(false);

                  setSignInWithNumber(false);
                  setSignInWithLogin(false);
                  setSignInVerify(false);
                  setEmailAddress(false);
                  setResetPassword(false);
                  setPasswordUpdate(false);
                  setMobileNumber(false);
                  setMobileResetPassword(false);
                  setCorporate(false);
                }}
              >
                Forgat Password
              </div>
            </div>

            <div className="flex justify-center">
              <button
                className=" h-16 w-72 mt-3 bg-orange-600 text-white rounded-full"
                onClick={() => {
                  setSignInWithNumber(true);
                  setSignUpData(false);
                  setForgotData(false);
                  setSignInData(false);

                  setSignInWithLogin(false);
                  setSignInVerify(false);
                  setEmailAddress(false);
                  setResetPassword(false);
                  setPasswordUpdate(false);
                  setMobileNumber(false);
                  setMobileResetPassword(false);
                  setCorporate(false);
                }}
              >
                Sign In With Number
              </button>
            </div>

            <div className="flex justify-center mb-3">
              <span>
                Already Have an Account?{" "}
                <button
                  className="ms-2 text-orange-400"
                  onClick={() => {
                    setSignUpData(true);
                    setSignInWithNumber(false);
                    setForgotData(false);
                    setSignInData(false);
                    setSignInWithLogin(false);
                    setSignInVerify(false);
                    setEmailAddress(false);
                    setResetPassword(false);
                    setPasswordUpdate(false);
                    setMobileNumber(false);
                    setMobileResetPassword(false);
                    setCorporate(false);
                  }}
                >
                  Sign Up
                </button>{" "}
              </span>
            </div>
          </>
        ) : //Forgat password
        forgotData ? (
          // Forgot Wala Form ba de div ke display kam
          <>
            <div
              className="container rounded-lg"
              style={{ background: "#F4F5F9" }}
            >
              <div className="p-4">
                <h5 className="text-center font-bold">Forgat Password</h5>
                <p className="text-center pt-2">
                  Please select a method for your password recovery.
                </p>
              </div>

              <div className="flex justify-center">
                <img className="w-16" src={Lock2} alt="" />
              </div>

              <div className=" flex justify-center">
                <button
                  className=" h-16 w-72 mt-5 bg-orange-600 text-white rounded-full"
                  onClick={() => {
                    setEmailAddress(true);
                    setForgotData(false);
                    setSignInData(false);
                    setSignUpData(false);
                    setSignInWithNumber(false);
                    setSignInWithLogin(false);
                    setSignInVerify(false);
                    setResetPassword(false);
                    setPasswordUpdate(false);
                    setMobileNumber(false);
                    setMobileResetPassword(false);
                    setCorporate(false);
                  }}
                >
                  Email Address
                </button>
              </div>

              <div className=" flex justify-center">
                <button
                  className=" h-16 w-72 mt-4 bg-orange-600 text-white rounded-full mb-5"
                  onClick={() => {
                    setMobileNumber(true);
                    setSignUpData(false);
                    setForgotData(false);
                    setSignInData(false);

                    setSignInWithNumber(false);
                    setSignInWithLogin(false);
                    setSignInVerify(false);
                    setEmailAddress(false);
                    setResetPassword(false);
                    setPasswordUpdate(false);
                    setMobileResetPassword(false);
                    setCorporate(false);
                  }}
                >
                  Mobile Number
                </button>
              </div>
            </div>
          </>
        ) : signinwithnumber ? (
          <>
            <div
              className="container rounded-lg"
              style={{ background: "#F4F5F9" }}
            >
              <h4 className="fw-bold  mt-4 text-center">Login</h4>
              <p className="mt-4">Please Sign in to continue</p>
              <div className="flex justify-center mt-5">
                <div className="relative">
                  <img
                    className="absolute py-2 mt-2 w-6  right-6 lg:right-6 md:right-6"
                    src={phone}
                    alt=""
                  />
                  <input
                    className="bg-white shadow-md rounded-full w-80  p-3"
                    type="text"
                    placeholder="Mobile Number"
                    id="inputlogin"
                  />
                </div>
              </div>
              <div className="flex justify-center">
                <button
                  className="p-3 h-15 w-80 mt-4 bg-orange-400 rounded-full text-white"
                  onClick={() => {
                    setForgotData(false);
                    setSignInData(false);
                    setSignUpData(false);
                    setSignInWithNumber(false);
                    setSignInWithLogin(true);
                    setSignInVerify(false);
                    setEmailAddress(false);
                    setResetPassword(false);
                    setPasswordUpdate(false);
                    setMobileNumber(false);
                    setMobileResetPassword(false);
                    setCorporate(false);
                  }}
                >
                  Login
                </button>
              </div>

              <div className="flex justify-center mt-4">
                <button
                  className=" h-10 w-52 mt-2 bg-orange-400 text-white rounded-full mb-2"
                  onClick={() => {
                    setForgotData(false);
                    setSignInData(true);
                    setSignUpData(false);
                    setSignInWithNumber(false);
                    setSignInWithLogin(false);
                    setSignInVerify(false);
                    setEmailAddress(false);
                    setResetPassword(false);
                    setPasswordUpdate(false);
                    setMobileNumber(false);
                    setMobileResetPassword(false);
                    setCorporate(false);
                  }}
                >
                  Sign In with Email
                </button>
              </div>

              <div className="flex justify-center mt-4">
                <span>
                  Don't Have an Account ?{" "}
                  <button
                    className="ps-2 mb-3 text-orange-300"
                    onClick={() => {
                      setForgotData(false);
                      setSignInData(false);
                      setSignUpData(true);
                      setSignInWithNumber(false);
                      setSignInWithLogin(false);
                      setSignInVerify(false);
                      setEmailAddress(false);
                      setResetPassword(false);
                      setPasswordUpdate(false);
                      setMobileNumber(false);
                      setMobileResetPassword(false);
                      setCorporate(false);
                    }}
                  >
                    Sign Up
                  </button>
                </span>
              </div>
            </div>
          </>
        ) : signinwithlogin ? (
          <>
            <div
              className="container rounded-lg"
              style={{ background: "#F4F5F9" }}
            >
              <h4 className="mt-4 text-center">Enter The Code</h4>
              <p>Enter the code that you received through SMS.</p>
              <div className="flex justify-center">
                <img
                  src={Verfiy}
                  alt=""
                  style={{ width: "180px", height: "130px" }}
                />
              </div>

              <div className="flex justify-evenly mt-5">
                <h4 className="bg-white shadow-lg w-12 h-12 pt-2 rounded-full text-center ">
                  5
                </h4>

                <h4 className="bg-white shadow-lg w-12 h-12 pt-2 rounded-full text-center ">
                  5
                </h4>

                <h4 className="bg-white shadow-lg w-12 h-12 pt-2 rounded-full text-center ">
                  5
                </h4>

                <h4 className="bg-white shadow-lg w-12 h-12 pt-2 rounded-full text-center ">
                  5
                </h4>
              </div>

              <div className="flex  justify-center mt-4">
                <button
                  className=" h-16 w-96 mt-2 bg-orange-600 text-white rounded-full mb-5"
                  onClick={() => {
                    setSignInVerify(true);
                    setSignUpData(false);
                    setForgotData(false);
                    setSignInData(false);

                    setSignInWithNumber(false);
                    setSignInWithLogin(false);
                    setEmailAddress(false);
                    setResetPassword(false);
                    setPasswordUpdate(false);
                    setMobileNumber(false);
                    setMobileResetPassword(false);
                    setCorporate(false);
                  }}
                >
                  Verify
                </button>
              </div>
            </div>
          </>
        ) : signinverify ? (
          <>
            <div
              className="container rounded-lg"
              style={{ background: "#F4F5F9" }}
            >
              <h4 className="mt-4 text-center">Verified Successfully!</h4>
              <p>Your code has been verified Successfully. Please continue.</p>
              <div className="flex justify-center mt-4">
                <img
                  src={Successfuly}
                  alt=""
                  style={{ width: "180px", height: "130px" }}
                />
              </div>
              <div className="flex justify-center mt-4">
                <Link to="/home">
                  <button className=" h-16 w-96 mt-2 bg-orange-600 text-white rounded-full mb-5">
                    Continue
                  </button>
                </Link>
              </div>
            </div>
          </>
        ) : emailaddress ? (
          <>
            <div
              className="container  mx-auto rounded-lg"
              style={{ background: "#F4F5F9" }}
            >
              <div className="p-4">
                <h5 className="text-center font-bold">Forgat Password</h5>
                <p className="text-center pt-2">
                  Please enter the email to receive the code.
                </p>
              </div>

              <div className="flex justify-center">
                <img className="w-16" src={Lock} alt="" />
              </div>
              <form onSubmit={handleSubmit}>
                {/* <div className="flex justify-center "> */}
                <input
                  className="p-3 h-15 w-75  bg-white rounded-full"
                  type="email"
                  value={email}
                  placeholder=" Email"
                  onChange={(e) => setEmail(e.target.value)}
                />


<button
                  className="bg-orange-500 w-80  rounded-full h-15 p-3 mb-4 text-white"
                  onClick={() => {
                    setReceive(true);
                    setSignInVerify(false);
                    setSignUpData(false);
                    setForgotData(false);
                    setSignInData(false);
                    setSignInWithNumber(false);
                    setSignInWithLogin(false);
                    setEmailAddress(false);
                    setResetPassword(false);
                    setPasswordUpdate(false);
                    setMobileNumber(false);
                    setMobileResetPassword(false);
                    setCorporate(false);
                  }}
                >
                  Send Request
                </button>

                {/* <button>submit</button> */}
                {/* </div>

                <div className="flex justify-center mt-4"> */}
                
                {/* </div> */}
              </form>
            </div>
          </>
        ) : sendreceive ? (
          <>
            <div
              className="container  rounded-lg"
              style={{ background: "#F4F5F9" }}
            >
              <div className="p-4">
                <h5 className="text-center font-bold">Forgat Password</h5>
                <p className="text-center pt-2">
                  Please select a method for your password recovery.
                </p>
              </div>

              <div className="flex justify-center">
                <img className="w-40" src={Verify} alt="" />
              </div>

              {/* <div className="flex justify-center mt-3">
                <div className="">
                  <input
                    className="bg-white shadow-md rounded-full w-80  p-3"
                    type="text"
                    placeholder="Enter the code"
                    id="inputlogin"
                  />
                </div>
              </div> */}

              <form onSubmit={handleSubmits}>
                <div className="flex justify-center mt-3">
                  <input
                    className="bg-white shadow-md rounded-full w-80  p-3"
                    type="code"
                    value={code}
                    placeholder="Enter The Code"
                    onChange={(e) => setCode(e.target.value)}
                  />
                  <br />
                  <button>submit</button>
                </div>

                <div className="flex justify-center mt-4">
                  <button
                    className="bg-orange-500 w-80 rounded-full h-15 p-3 mb-4 text-white"
                    onClick={() => {
                      setResetPassword(true);
                      setReceive(false);
                      setSignInVerify(false);
                      setSignUpData(false);
                      setForgotData(false);
                      setSignInData(false);

                      setSignInWithNumber(false);
                      setSignInWithLogin(false);
                      setEmailAddress(false);
                      setPasswordUpdate(false);
                      setMobileNumber(false);
                      setMobileResetPassword(false);
                      setCorporate(false);
                    }}
                  >
                    Send Request
                  </button>
                </div>
              </form>
            </div>
          </>
        ) : resetpassword ? (
          <>
            <div
              className="container  rounded-lg"
              style={{ background: "#F4F5F9" }}
            >
              <div className="p-4">
                <h5 className="text-center font-bold">Reset Password</h5>
                <p className="text-center pt-2">
                  Please enter your new password.
                </p>
              </div>

              <div className="flex justify-center">
                <img className="w-32" src={ResetPassword} alt="" />
              </div>

              {/* <div className="flex justify-center mt-3">
                <div className="relative">
                  <img
                    className="absolute py-2 mt-1 w-6  right-6 lg:right-6 md:right-6"
                    src={loginlock}
                    alt=""
                  />
                  <input
                    className="bg-white shadow-md rounded-full w-80  p-3"
                    type="text"
                    placeholder="Password"
                    id="inputlogin"
                  />
                </div>
              </div>

              <div className="flex justify-center mt-3">
                <div className="relative">
                  <img
                    className="absolute py-2 mt-1 w-6  right-6 lg:right-6 md:right-6"
                    src={loginlock}
                    alt=""
                  />
                  <input
                    className="bg-white shadow-md rounded-full w-80  p-3"
                    type="text"
                    placeholder="Confirm password"
                    id="inputlogin"
                  />
                </div>
              </div> */}
              <form onSubmit={handleSubmitss}>
                <label>
                  New Password:
                  <input
                    className="w-40 border-4"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </label>
                <br />
                <label>
                  Confirm Password:
                  <input
                    className="w-40 border-4"
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </label>

                <br />

                <button>submit</button>

                <div className="flex justify-center mt-4">
                  <button
                    className="bg-orange-500 w-80 rounded-full h-15 p-3 mb-4 text-white"
                    onClick={() => {
                      setPasswordUpdate(true);
                      setResetPassword(false);
                      setReceive(false);
                      setSignInVerify(false);
                      setSignUpData(false);
                      setForgotData(false);
                      setSignInData(false);

                      setSignInWithNumber(false);
                      setSignInWithLogin(false);
                      setEmailAddress(false);
                      setMobileNumber(false);
                      setMobileResetPassword(false);
                      setCorporate(false);
                    }}
                  >
                    Reset Password
                  </button>
                </div>
              </form>
            </div>
          </>
        ) : passwordupdate ? (
          <>
            {" "}
            <div
              className="container rounded-lg"
              style={{ background: "#F4F5F9" }}
            >
              <h4 className="mt-5 text-center">Password Update?</h4>
              <p className="mt-3">Your password hase been update.</p>
              <div className="flex justify-center mt-4">
                <img
                  className="mt-3"
                  src={PasswordUpdate}
                  alt=""
                  style={{ width: "180px", height: "130px" }}
                />
              </div>
              <div className="flex justify-center mt-4">
                <button
                  className=" h-16 w-80 mt-4 bg-orange-600 text-white rounded-full mb-5"
                  onClick={() => {
                    setForgotData(false);
                    setSignInData(true);
                    setSignUpData(false);
                    setSignInWithNumber(false);
                    setSignInWithLogin(false);
                    setSignInVerify(false);
                    setEmailAddress(false);
                    setResetPassword(false);
                    setPasswordUpdate(false);
                    setMobileNumber(false);
                    setMobileResetPassword(false);
                    setCorporate(false);
                  }}
                >
                  Login
                </button>
              </div>
            </div>
          </>
        ) : mobilenumber ? (
          <>
            <div
              className="container rounded-lg"
              style={{ background: "#F4F5F9" }}
            >
              <div className="p-4">
                <h5 className="text-center font-bold">Forgat Password</h5>
                <p className="text-center pt-2">
                  Please enter the Number to receive the code.
                </p>
              </div>

              <div className="flex justify-center">
                <img className="w-16" src={Lock2} alt="" />
              </div>

              <div className="flex justify-center mt-3">
                <div className="relative">
                  <img
                    className="absolute py-3  w-6  right-6 lg:right-6 md:right-6"
                    src={phone}
                    alt=""
                  />
                  <input
                    className="bg-white shadow-md rounded-full w-80  p-3"
                    type="text"
                    placeholder="Mobile Number"
                    id="inputlogin"
                  />
                </div>
              </div>

              <div className="flex justify-center mt-4">
                <button
                  className="bg-orange-500 w-80 shadow-md rounded-full h-15 p-3 mb-4 text-white"
                  onClick={() => {
                    setEnterTheCode(true);
                    setPasswordUpdate(false);
                    setResetPassword(false);
                    setReceive(false);
                    setSignInVerify(false);
                    setSignUpData(false);
                    setForgotData(false);
                    setSignInData(false);

                    setSignInWithNumber(false);
                    setSignInWithLogin(false);
                    setEmailAddress(false);
                    setMobileNumber(false);
                    setMobileResetPassword(false);
                    setCorporate(false);
                  }}
                >
                  Send Request
                </button>
              </div>
            </div>
          </>
        ) : enterthecode ? (
          <>
            <div
              className="container rounded-lg"
              style={{ background: "#F4F5F9" }}
            >
              <h4 className="mt-4 text-center">Enter The Code</h4>
              <p>Enter the code that you received through SMS.</p>
              <div className="flex justify-center">
                <img
                  src={Verfiy}
                  alt=""
                  style={{ width: "180px", height: "130px" }}
                />
              </div>

              <div className="flex justify-evenly mt-5">
                <h4 className="bg-white shadow-lg w-12 h-12 pt-2 rounded-full text-center ">
                  5
                </h4>

                <h4 className="bg-white shadow-lg w-12 h-12 pt-2 rounded-full text-center ">
                  6
                </h4>

                <h4 className="bg-white shadow-lg w-12 h-12 pt-2 rounded-full text-center ">
                  7
                </h4>

                <h4 className="bg-white shadow-lg w-12 h-12 pt-2 rounded-full text-center ">
                  8
                </h4>
              </div>

              <div className="flex  justify-center mt-4">
                <button
                  className=" h-16 w-96 mt-2 bg-orange-600 text-white rounded-full mb-5"
                  onClick={() => {
                    setMobileResetPassword(true);
                    setEnterTheCode(false);
                    setPasswordUpdate(false);
                    setResetPassword(false);
                    setReceive(false);
                    setSignInVerify(false);
                    setSignUpData(false);
                    setForgotData(false);
                    setSignInData(false);
                    setSignInWithNumber(false);
                    setSignInWithLogin(false);
                    setEmailAddress(false);
                    setMobileNumber(false);
                    setCorporate(false);
                  }}
                >
                  Verify
                </button>
              </div>
            </div>
          </>
        ) : mobileresetpassword ? (
          <>
            {" "}
            <div
              className="container rounded-lg"
              style={{ background: "#F4F5F9" }}
            >
              <div className="p-4">
                <h5 className="text-center font-bold">Reset Password</h5>
                <p className="text-center pt-2">
                  Please enter your new password.
                </p>
              </div>

              <div className="flex justify-center">
                <img className="w-32" src={ResetPassword} alt="" />
              </div>

              <div className="flex justify-center mt-3">
                <div className="relative">
                  <img
                    className="absolute py-2 mt-1 w-6  right-6 lg:right-6 md:right-6"
                    src={loginlock}
                    alt=""
                  />
                  <input
                    className="bg-white shadow-md rounded-full w-80  p-3"
                    type="text"
                    placeholder="Password"
                    id="inputlogin"
                  />
                </div>
              </div>

              <div className="flex justify-center mt-3">
                <div className="relative">
                  <img
                    className="absolute py-2 mt-1 w-6  right-6 lg:right-6 md:right-6"
                    src={loginlock}
                    alt=""
                  />
                  <input
                    className="bg-white shadow-md rounded-full w-80  p-3"
                    type="text"
                    placeholder="Confirm Password"
                    id="inputlogin"
                  />
                </div>
              </div>

              <div className="flex justify-center mt-4">
                <button
                  className="bg-orange-500 w-80 rounded-full h-15 p-3 mb-4 text-white"
                  onClick={() => {
                    setPasswordUpdate(true);
                    setResetPassword(false);
                    setReceive(false);
                    setSignInVerify(false);
                    setSignUpData(true);
                    setForgotData(false);
                    setSignInData(false);

                    setSignInWithNumber(false);
                    setSignInWithLogin(false);
                    setEmailAddress(false);
                    setMobileNumber(false);
                    setMobileResetPassword(false);
                    setCorporate(false);
                  }}
                >
                  Reset Password
                </button>
              </div>
            </div>
          </>
        ) : signupdata ? (
          <>
            <div
              className="container rounded-lg"
              style={{ background: "#F4F5F9" }}
            >
              <h6 className="text-center mt-4">Create Account</h6>
              <p className="text-center ">
                Please select a method from which you want to create an account
              </p>

              <div className="flex justify-center">
                <button
                  className=" h-12 w-72 mt-5 bg-orange-600 text-white rounded-full"
                  onClick={() => {
                    setSignUpEmailAddress(true);
                    setForgotData(false);
                    setSignInData(false);
                    setSignUpData(false);
                    setSignInWithNumber(false);
                    setSignInWithLogin(false);
                    setSignInVerify(false);
                    setEmailAddress(false);
                    setResetPassword(false);
                    setPasswordUpdate(false);
                    setMobileNumber(false);
                    setMobileResetPassword(false);
                    setCorporate(false);
                  }}
                >
                  Email Address
                </button>
              </div>

              <div className="flex justify-center">
                <button
                  className=" h-12 w-72 mt-5 bg-orange-600 text-white rounded-full"
                  onClick={() => {
                    setSignUpEmailAddress(true);
                    setForgotData(false);
                    setSignInData(false);
                    setSignUpData(false);
                    setSignInWithNumber(false);
                    setSignInWithLogin(false);
                    setSignInVerify(false);
                    setEmailAddress(false);
                    setResetPassword(false);
                    setPasswordUpdate(false);
                    setMobileNumber(false);
                    setMobileResetPassword(false);
                    setCorporate(false);
                  }}
                >
                  Mobile Number
                </button>
              </div>

              <div className="flex justify-center mt-2">
                <span>
                  Already Have an Account?{" "}
                  <button
                    className="ms-3 text-orange-400 mb-4"
                    onClick={() => {
                      setForgotData(false);
                      setSignInData(true);
                      setSignUpData(false);
                      setSignInWithNumber(false);
                      setSignInWithLogin(false);
                      setSignInVerify(false);
                      setEmailAddress(false);
                      setResetPassword(false);
                      setPasswordUpdate(false);
                      setMobileNumber(false);
                      setMobileResetPassword(false);
                      setCorporate(false);
                    }}
                  >
                    Sign in
                  </button>
                </span>
              </div>
            </div>
          </>
        ) : signupemailaddress ? (
          <>
            <div
              className="container mx-auto rounded-lg"
              style={{ background: "#F4F5F9" }}
            >
              <h4 className="fw-bold  text-center mt-5">Create Account</h4>
              <p>Please create account to continue</p>

              <div className="max-w-3xl mx-auto px-8 sm:px-0">
                <div className="sm:w-7/12 sm:mx-auto">
                  <div className="flex bg-white shadow-lg  justify-center  h-12 rounded-lg">
                    <button
                      className="bg-red-400"
                      onClick={() => setOpenTab(1)}
                    >
                      <input
                        type="radio"
                        name="type"
                        value="individual"
                        checked={role === "individual"}
                        onChange={handleTypeChange}
                      />
                      <label htmlFor="individual">Individual</label>
                    </button>
                    <button onClick={() => setOpenTab(2)}>
                      <input
                        type="radio"
                        name="type"
                        value="corporate"
                        checked={role === "corporate"}
                        onChange={handleTypeChange}
                      />
                      <label htmlFor="corporate">Corporate</label>
                    </button>
                  </div>
                  <div className="mt-6 ">
                    <div className={openTab === 1 ? "block" : "hidden"}>
                      <div className="flex justify-center">
                        <div className="relative">
                          <img
                            className="absolute py-2 mt-1 w-6  right-6 lg:right-6 md:right-6"
                            src={profile}
                            alt=""
                          />
                          <input
                            className="bg-white shadow-md rounded-full w-80  p-3"
                            type="text"
                            value={name}
                            placeholder="NAME"
                            onChange={(e) => setName(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="flex justify-center mt-4">
                        <div className="relative">
                          <img
                            className="absolute py-3 mt-1 w-6  right-6 lg:right-6 md:right-6"
                            src={loginmessage}
                            alt=""
                          />
                          <input
                            className="bg-white shadow-md rounded-full w-80  p-3"
                            type="text"
                            name="email"
                            value={email}
                            placeholder="email
          "
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="flex justify-center mt-4">
                        <div className="relative">
                          <img
                            className="absolute py-2 mt-1 w-6  right-6 lg:right-6 md:right-6"
                            src={loginlock}
                            alt=""
                          />
                          <input
                            className="bg-white shadow-md rounded-full w-80  p-3"
                            type="text"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password
          "
                          />
                        </div>
                      </div>
                      <div className="flex justify-center mt-4">
                        <div className="relative">
                          <img
                            className="absolute py-2 mt-1 w-6  right-6 lg:right-6 md:right-6"
                            src={loginlock}
                            alt=""
                          />
                          <input
                            className="bg-white shadow-md rounded-full w-80  p-3"
                            type="text"
                            name="confirmPassword"
                            value={confirmPassword}
                            placeholder="confirmPassword"
                            onChange={(e) => setConfirmPassword(e.target.value)}
                          />
                        </div>
                      </div>

                      <div class="checkbox">
                        <label>
                          <input
                            type="checkbox"
                            value={termsAccept}
                            onChange={(e) => setTermsAccept(e.target.value)}
                          />
                          Checkbox
                        </label>
                      </div>

                      <div className="flex justify-center mt-4">
                        <button
                          // className="w-80 p-3 rounded-full text-white  bg-orange-500"
                          onClick={() => {
                            setCorporate(true);
                            setSignUpEmailAddress(false);
                            setForgotData(false);
                            setSignInData(false);
                            setSignUpData(false);
                            setSignInWithNumber(false);
                            setSignInWithLogin(false);
                            setSignInVerify(false);
                            setEmailAddress(false);
                            setResetPassword(false);
                            setPasswordUpdate(false);
                            setMobileNumber(false);
                            setMobileResetPassword(false);
                          }}
                        >
                          <button
                            className="bg-red-500 border-4 p-2 rounded-full w-80"
                            onClick={handlesubmit}
                          >
                            signup
                          </button>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className={openTab === 2 ? "block" : "hidden"}>
                    <div className="flex justify-center">
                      <div className="relative">
                        <img
                          className="absolute py-2 mt-2 w-6  right-6 lg:right-6 md:right-6"
                          src={profile}
                          alt=""
                        />
                        <input
                          className="bg-white shadow-md rounded-full w-80  p-3"
                          type="text"
                          name="companyName"
                          value={companyName}
                          placeholder="companyName"
                          onChange={(e) => setCompanyName(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="flex justify-center mt-4">
                      <div className="relative">
                        <img
                          className="absolute py-2 mt-1 w-6  right-6 lg:right-6 md:right-6"
                          src={textnumber}
                          alt=""
                        />

                        <input
                          className="bg-white shadow-md rounded-full w-80  p-3"
                          type="text"
                          name="taxNumber"
                          value={taxNumber}
                          placeholder="taxNumber"
                          onChange={(e) => setTaxNumber(e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="flex justify-center mt-4">
                      <div className="relative">
                        <img
                          className="absolute py-3 mt-1 w-6  right-6 lg:right-6 md:right-6"
                          src={loginmessage}
                          alt=""
                        />
                        <input
                          className="bg-white shadow-md rounded-full w-80  p-3"
                          type="text"
                          name="email"
                          value={email}
                          placeholder="Email Address
          "
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="flex justify-center mt-4">
                      <div className="relative">
                        <img
                          className="absolute py-2 mt-2 w-5  right-6 lg:right-6 md:right-6"
                          src={phone}
                          alt=""
                        />

                        <input
                          className="bg-white shadow-md rounded-full w-80  p-3"
                          type="text"
                          name="phone"
                          value={phone}
                          placeholder="Mobile Number"
                          onChange={(e) => setPhone(e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="flex justify-center mt-4">
                      <div className="relative">
                        <img
                          className="absolute py-2 mt-2 w-5  right-6 lg:right-6 md:right-6"
                          src={phone}
                          alt=""
                        />

                        <input
                          className="bg-white shadow-md rounded-full w-80  p-3"
                          type="text"
                          name="officePhone"
                          value={officePhone}
                          placeholder="office Number"
                          onChange={(e) => setOfficePhone(e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="flex justify-center mt-4">
                      <div className="relative">
                        <img
                          className="absolute py-2 mt-2 w-5  right-6 lg:right-6 md:right-6"
                          src={location}
                          alt=""
                        />

                        <input
                          className="bg-white shadow-md rounded-full w-80  p-3"
                          type="text"
                          name="address"
                          value={address}
                          placeholder="Office Address"
                          onChange={(e) => setAddress(e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="flex justify-center mt-4">
                      <input type="file" name="file" onChange={handleImage} />

                      <button onClick={handleApi}>submit</button>
                      {/* <input
                        className="bg-white shadow-md rounded-lg w-80  p-3"
                        type="file"
                        name="logo"
                        value={logo}
                        placeholder="logo"
                        onChange={(e) => setLogo(e.target.value)}
                      /> */}
                    </div>

                    <div class="checkbox">
                      <label>
                        <input
                          type="checkbox"
                          value={termsAccept}
                          onChange={(e) => setTermsAccept(e.target.value)}
                        />
                        Checkbox
                      </label>
                    </div>

                    <div className="flex justify-center mt-4">
                      <button
                        // className="w-80 p-3 rounded-full text-white  bg-orange-500"
                        onClick={() => {
                          setCorporate(true);
                          setSignUpEmailAddress(false);
                          setForgotData(false);
                          setSignInData(false);
                          setSignUpData(false);
                          setSignInWithNumber(false);
                          setSignInWithLogin(false);
                          setSignInVerify(false);
                          setEmailAddress(false);
                          setResetPassword(false);
                          setPasswordUpdate(false);
                          setMobileNumber(false);
                          setMobileResetPassword(false);
                        }}
                      >
                        <button
                          className="bg-red-500 border-4 p-2 rounded-full w-80"
                          onClick={handlesubmit}
                        >
                          signup
                        </button>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center mt-2">
              <span>
                Already Have an Account?
                <button
                  className="ms-3 text-orange-400 mb-4"
                  onClick={() => {
                    setCorporate(false);
                    setForgotData(false);
                    setSignInData(true);
                    setSignUpData(false);
                    setSignInWithNumber(false);
                    setSignInWithLogin(false);
                    setSignInVerify(false);
                    setEmailAddress(false);
                    setResetPassword(false);
                    setPasswordUpdate(false);
                    setMobileNumber(false);
                    setMobileResetPassword(false);
                    setCorporateVerify(false);
                  }}
                >
                  Sign in
                </button>
              </span>
            </div>
          </>
        ) : corporate ? (
          <>
            <div
              className="container rounded-lg"
              style={{ background: "#F4F5F9" }}
            >
              <div className="flex justify-center mt-5">
                <input
                  className="bg-white shadow-md rounded-full w-80  p-3"
                  type="text"
                  placeholder="Enter the Code"
                  id="code"
                  onChange={formik.handleChange}
                  value={formik.values.code}
                />
              </div>
              <div className="flex  justify-center mt-4">
                <button
                  className=" h-16 w-80 mt-2 bg-orange-600 text-white rounded-full mb-5"
                  onClick={() => {
                    formik.handleSubmit();
                    setCorporateVerify(true);
                    setCorporate(false);
                    setSignUpEmailAddress(false);
                    setForgotData(false);
                    setSignInData(false);
                    setSignUpData(false);
                    setSignInWithNumber(false);
                    setSignInWithLogin(false);
                    setSignInVerify(false);
                    setEmailAddress(false);
                    setResetPassword(false);
                    setPasswordUpdate(false);
                    setMobileNumber(false);
                    setMobileResetPassword(false);
                  }}
                >
                  {isLoading ? "Loading" : "Verify"}
                </button>
              </div>
            </div>
          </>
        ) : corporateverify ? (
          <>
            <div
              className="container rounded-lg"
              style={{ background: "#F4F5F9" }}
            >
              <h4 className="mt-4 text-center">Verified Successfully!</h4>
              <p>Your code has been verified Successfully. Please continue.</p>
              <div className="flex justify-center mt-4">
                <img
                  src={Successfuly}
                  alt=""
                  style={{ width: "180px", height: "130px" }}
                />
              </div>
              <div className="flex justify-center mt-4">
                <Link to="/home">
                  <button className=" h-16 w-80 mt-2 bg-orange-600 text-white rounded-full mb-5">
                    Continue
                  </button>
                </Link>
              </div>
            </div>
          </>
        ) : (
          ""
        )}
      </Modal>

      {/*Modal Section end*/}

      <div className="container mx-auto ">
        <div className="grid grid-cols-1 lg:grid-cols-5 lg:gap-5 md:grid-cols-3 md:gap-5 justify-items-center">
          {data.length > 0 && (
            <>
              <Link to="/vehicle" style={{ textDecoration: "none" }}
              
              >
                <div>
                  <img
                    className="w-full rounded-full"
                    src={data[0].imageUrl}
                    alt=""
                  />
                  <h1 className="font-bold text-lg pe-2 mt-3 text-black">
                    {data[0].title}
                  </h1>
                </div>
              </Link>

              <Link to="/realstate" style={{ textDecoration: "none" }}>
                <div>
                  <img
                    className="w-full rounded-full"
                    src={data[1].imageUrl}
                    alt=""
                  />
                  <h1 className="font-bold text-lg pe-2 mt-3 text-black">
                    {data[1].title}
                  </h1>
                </div>
              </Link>

              <div>
                <img
                  className="w-full rounded-full"
                  src={data[2].imageUrl}
                  alt=""
                />
                <h1 className="font-bold text-lg pe-2 mt-3 text-black">
                  {data[2].title}
                </h1>
              </div>

              <div>
                <img
                  className="w-full rounded-full"
                  src={data[3].imageUrl}
                  alt=""
                />
                <h1 className="font-bold text-lg pe-2 mt-3 text-black">
                  {data[3].title}
                </h1>
              </div>

              <div>
                <img
                  className="w-full rounded-full"
                  src={data[4].imageUrl}
                  alt=""
                />
                <h1 className="font-bold text-lg pe-2 mt-3 text-black">
                  {data[4].title}
                </h1>
              </div>

           
            </>
          )}
        </div>
        
      </div>

      {/* section  5 image  */}

      {/* serch */}

      {/* section 2 */}
      <div className="container">
        <div className="row">
          <div className="section2">
            <img src={section2image} alt="" />
          </div>
        </div>
      </div>
      {/* section 3 */}

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
      {/* section 4 */}

      <div className="container mx-auto">
        <h5>RECOMMENDED</h5>
        <div className="grid grid-cols-1 lg:grid-cols-4 xl:grid-cols-5 md:grid-cols-3 md:gap-4  lg:gap-3 justify-items-center">
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
                  <div
                    style={{ fontSize: "10px", opacity: "0.4", color: "black" }}
                  >
                    4
                  </div>
                  <img src={comment} alt="" />
                  <div
                    style={{ fontSize: "10px", opacity: "0.4", color: "black" }}
                  >
                    5478 sqft
                  </div>
                  <img src={reply} alt="" />
                  <div
                    style={{ fontSize: "10px", opacity: "0.4", color: "black" }}
                  >
                    3
                  </div>
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
                  <div
                    style={{ fontSize: "10px", opacity: "0.4", color: "black" }}
                  >
                    4
                  </div>
                  <img src={comment} alt="" />
                  <div
                    style={{ fontSize: "10px", opacity: "0.4", color: "black" }}
                  >
                    5478 sqft
                  </div>
                  <img src={reply} alt="" />
                  <div
                    style={{ fontSize: "10px", opacity: "0.4", color: "black" }}
                  >
                    3
                  </div>
                </div>
              </div>
            </div>
          </Link>

          <Link to="/hondacarforsale " style={{ textDecoration: "none" }}>
            <div className="mt-3   shadow-md shadow-white">
              <div className="relative ">
                <img
                  className="absolute items-content-end w-12"
                  src={Heartts}
                  alt=""
                  style={{ right: "-5px" }}
                />
                <img className="" src={bcar} alt="" />
              </div>
              <div className="bg-white px-2 py-2 ">
                <div className="flex justify-between px-2 gap-3">
                  <p className=" text-black" style={{ fontSize: "13px" }}>
                    Honda for sale
                  </p>
                  <h6 className="text-orange-300 ">$65,000</h6>
                </div>
                <p
                  className="px-2"
                  style={{ fontSize: "11px", opacity: "0.3", color: "black" }}
                >
                  Lorem ipsum address, New York
                </p>

                <div className="flex justify-between px-2 mb-1">
                  <img className="w-4 h-4" src={km} alt="" />
                  <div
                    className=""
                    style={{ fontSize: "10px", opacity: "0.3", color: "black" }}
                  >
                    2022
                  </div>
                  <img className="w-4 h-4" src={enginpower} alt="" />
                  <div
                    style={{ fontSize: "10px", opacity: "0.3", color: "black" }}
                  >
                    5478 sqft
                  </div>
                  <img className="w-4 h-4" src={bag} alt="" />
                  <div
                    style={{ fontSize: "8px", opacity: "0.3", color: "black" }}
                  >
                    1234 km
                  </div>
                </div>
              </div>
            </div>
          </Link>

          <Link to="/hondacarforsale " style={{ textDecoration: "none" }}>
            {" "}
            <div className="mt-3">
              <div className="relative ">
                <img
                  className="absolute items-content-end w-12"
                  src={Heartts}
                  alt=""
                  style={{ right: "-5px" }}
                />
                <img className="" src={car} alt="" />
              </div>
              <div className="bg-white px-2 py-2 ">
                <div className="flex justify-between  gap-3">
                  <p className=" text-black" style={{ fontSize: "13px" }}>
                    Toyota for sale
                  </p>
                  <h6 className="text-orange-300 ">$65,000</h6>
                </div>
                <p style={{ fontSize: "11px", opacity: "0.3", color: "black" }}>
                  Lorem ipsum address, New York
                </p>

                <div className="flex justify-between px-2 mb-1">
                  <img className="w-4 h-4" src={km} alt="" />
                  <div
                    className=""
                    style={{ fontSize: "10px", opacity: "0.3", color: "black" }}
                  >
                    2022
                  </div>
                  <img className="w-4 h-4" src={enginpower} alt="" />
                  <div
                    style={{ fontSize: "10px", opacity: "0.3", color: "black" }}
                  >
                    5478 sqft
                  </div>
                  <img className="w-4 h-4" src={bag} alt="" />
                  <div
                    style={{ fontSize: "8px", opacity: "0.3", color: "black" }}
                  >
                    1234 km
                  </div>
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
                  <div
                    style={{ fontSize: "10px", opacity: "0.4", color: "black" }}
                  >
                    4
                  </div>
                  <img src={comment} alt="" />
                  <div
                    style={{ fontSize: "10px", opacity: "0.4", color: "black" }}
                  >
                    5478 sqft
                  </div>
                  <img src={reply} alt="" />
                  <div
                    style={{ fontSize: "10px", opacity: "0.4", color: "black" }}
                  >
                    3
                  </div>
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
                  <div
                    style={{ fontSize: "10px", opacity: "0.4", color: "black" }}
                  >
                    4
                  </div>
                  <img src={comment} alt="" />
                  <div
                    style={{ fontSize: "10px", opacity: "0.4", color: "black" }}
                  >
                    5478 sqft
                  </div>
                  <img src={reply} alt="" />
                  <div
                    style={{ fontSize: "10px", opacity: "0.4", color: "black" }}
                  >
                    3
                  </div>
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
                  <div
                    style={{ fontSize: "10px", opacity: "0.4", color: "black" }}
                  >
                    4
                  </div>
                  <img src={comment} alt="" />
                  <div
                    style={{ fontSize: "10px", opacity: "0.4", color: "black" }}
                  >
                    5478 sqft
                  </div>
                  <img src={reply} alt="" />
                  <div
                    style={{ fontSize: "10px", opacity: "0.4", color: "black" }}
                  >
                    3
                  </div>
                </div>
              </div>
            </div>
          </Link>

          <Link to="/hondacarforsale " style={{ textDecoration: "none" }}>
            <div className="mt-3   shadow-md shadow-white">
              <div className="relative ">
                <img
                  className="absolute items-content-end w-12"
                  src={Heartts}
                  alt=""
                  style={{ right: "-5px" }}
                />
                <img className="" src={bcar} alt="" />
              </div>
              <div className="bg-white px-2 py-2 ">
                <div className="flex justify-between px-2 gap-3">
                  <p className=" text-black" style={{ fontSize: "13px" }}>
                    Honda for sale
                  </p>
                  <h6 className="text-orange-300 ">$65,000</h6>
                </div>
                <p
                  className="px-2"
                  style={{ fontSize: "11px", opacity: "0.3", color: "black" }}
                >
                  Lorem ipsum address, New York
                </p>

                <div className="flex justify-between px-2 mb-1">
                  <img className="w-4 h-4" src={km} alt="" />
                  <div
                    className=""
                    style={{ fontSize: "10px", opacity: "0.3", color: "black" }}
                  >
                    2022
                  </div>
                  <img className="w-4 h-4" src={enginpower} alt="" />
                  <div
                    style={{ fontSize: "10px", opacity: "0.3", color: "black" }}
                  >
                    5478 sqft
                  </div>
                  <img className="w-4 h-4" src={bag} alt="" />
                  <div
                    style={{ fontSize: "8px", opacity: "0.3", color: "black" }}
                  >
                    1234 km
                  </div>
                </div>
              </div>
            </div>
          </Link>

          <Link to="/hondacarforsale " style={{ textDecoration: "none" }}>
            {" "}
            <div className="mt-3">
              <div className="relative ">
                <img
                  className="absolute items-content-end w-12"
                  src={Heartts}
                  alt=""
                  style={{ right: "-5px" }}
                />
                <img className="" src={car} alt="" />
              </div>
              <div className="bg-white px-2 py-2 ">
                <div className="flex justify-between  gap-3">
                  <p className=" text-black" style={{ fontSize: "13px" }}>
                    Toyota for sale
                  </p>
                  <h6 className="text-orange-300 ">$65,000</h6>
                </div>
                <p style={{ fontSize: "11px", opacity: "0.3", color: "black" }}>
                  Lorem ipsum address, New York
                </p>

                <div className="flex justify-between px-2 mb-1">
                  <img className="w-4 h-4" src={km} alt="" />
                  <div
                    className=""
                    style={{ fontSize: "10px", opacity: "0.3", color: "black" }}
                  >
                    2022
                  </div>
                  <img className="w-4 h-4" src={enginpower} alt="" />
                  <div
                    style={{ fontSize: "10px", opacity: "0.3", color: "black" }}
                  >
                    5478 sqft
                  </div>
                  <img className="w-4 h-4" src={bag} alt="" />
                  <div
                    style={{ fontSize: "8px", opacity: "0.3", color: "black" }}
                  >
                    1234 km
                  </div>
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
                  <div
                    style={{ fontSize: "10px", opacity: "0.4", color: "black" }}
                  >
                    4
                  </div>
                  <img src={comment} alt="" />
                  <div
                    style={{ fontSize: "10px", opacity: "0.4", color: "black" }}
                  >
                    5478 sqft
                  </div>
                  <img src={reply} alt="" />
                  <div
                    style={{ fontSize: "10px", opacity: "0.4", color: "black" }}
                  >
                    3
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
      {/* section 5 */}
      {/*Top Cities*/}
      <div className="container">
        <h4 className="mt-5">TOP CITIES</h4>
        <div className="row d-flex justify-content-between">
          <div className="col-12 col-md-6  col-lg-3 mt-5">
            <div className="section5">
              <img src={image1} alt="" />
            </div>
          </div>

          <div className="col-12 col-md-6  col-lg-3 mt-5">
            <div className="section5">
              <img className="w-80 h-48" src={tachkent} alt="" />
            </div>
          </div>

          <div className="col-12 col-md-6  col-lg-3 mt-5">
            <div className="section5">
              <img className="w-80 h-48" src={image2} alt="" />
            </div>
          </div>

          <div className="col-12 col-md-6  col-lg-3 mt-5">
            <div className="section5">
              <img src={image1} alt="" />
            </div>
          </div>
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

      {/*............ */}

      <div className="container mx-auto bg-white shadow-md rounded-lg mt-5">
        <div className="flex flex-col md:flex-row ">
          <div className="w-80 p-3 pt-5">
            <h6 className="w-64 fs-3 text-orange-400">Get the EGASI App</h6>
            <p style={{ fontSize: "14px" }}>
              Using our app, you can buy and rent property faster and more
              efficiently.
            </p>
          </div>
          <div className="mt-3 ">
            <img className="w-52 h-52" src={mobile} alt="" />
          </div>

          <div className=" grid grid-cols-1 gap-2 px-3 py-4 md:grid-cols-1 lg:grid-cols-3 ms-auto">
            <div>
              <img className="w-40 h-12" src={appstore} alt="" />
            </div>
            <div>
              <img className="w-40 h-12 " src={googleplay} alt="" />
              <p className="w-40  px-3 mt-5">Scan the QR code to get the app</p>
            </div>
            <div>
              <img className="w-40 h-12" src={googleplay} alt="" />
              <img className="h-20 mt-5" src={scan} alt="" />
            </div>
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

      {/*section 8*/}

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
      {/*.........................Footer Section.....................

      <div
        className="container"
        style={{ background: "#E9EBEE", marginTop: "80px" }}
      >
        <div className="row p-5 text-center ms-">
          <div className="col-lg-4 col-xl-4 col-md-4 col-sm-12 ">
            <h4 className="addhappyhourh5">Contact Us</h4>
            <p className="para1 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <span>
              <BsTelephoneFill className="phone" />
            </span>
            <h6 className=" me-4 ">(+92-38483984)</h6>
            <h6 className="me-4 ">(+92-38483984)</h6>

            <MdEmail className="email" />
            <h6 className="mt-2">esols33@gmail.com</h6>
            <h6>esols33@gmail.com</h6>
          </div>

          <div className="col-lg-4 col-xl-4 col-md-4 col-sm-12 ">
            <h4>Quik Links</h4>
            <p className="me-5 mt-4">Home</p>
            <p>Happy Hours</p>
            <p className="me-2">Team of Use</p>
            <p className="me-4">About Us</p>
          </div>

          <div className="col-lg-4 col-xl-4 col-md-4 col-sm-12 ">
            <h4>Follow Us</h4>
            <span className="ms-5 ps-2">
              <FaFacebookF className=" fa me-4 " />
              <BsGoogle className=" bs me-4" />
              <FaTwitter className="fa" />
            </span>
          </div>

          <h5 className="addhappyhourcopyright mt-5">
            @2022 All rights reserved . created by Esolos Technology{" "}
          </h5>
        </div>
      </div>

      */}
    </>
  );
};

export default Home;
