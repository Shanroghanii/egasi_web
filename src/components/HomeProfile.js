// import React, { useState, useEffect } from "react";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// Navbar Start

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../images/Group 3321.svg";

// Navbar End
import { Link } from "react-router-dom";

const HomeProfile = () => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          setError("Bearer Token is required.");
          return;
        }

        const response = await axios.get("http://54.179.232.109:1337/api/v1/admin/category?category=vehicle");
        setData(response.data);
      } catch (err) {
        if (err.response.data.error === "jwt malformed") {
          setError("jwt malformed");
        } else {
          setError("Access denied");
        }
      }
    };

    fetchData();
  }, []);
  

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        "http://54.179.232.109:1337/api/v1/adds/categories?section=vehicle"
      );
      setCategories(result.data);
    };
    fetchData();
  }, []);

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
            <Nav className="ms-auto mt-3 gap-4">
              <Nav.Link
                className="mt-3  fs-5 me-2 "
                style={{ color: "#f37521" }}
                href="#action1"
              >
                <Link to="/home">
                  <button className="text-orange-400">Home</button>
                </Link>
              </Nav.Link>

              <Nav.Link
                className="mt-3  fs-5 me-2 "
                style={{ color: "#f37521" }}
                href="#action1"
              >
                <Link to="/home">
                  <button className="text-gray-400">Real State</button>
                </Link>
              </Nav.Link>

              <Nav.Link
                className="mt-3  fs-5 me-2 "
                style={{ color: "#f37521" }}
                href="#action1"
              >
                <Link to="/home">
                  <button className="text-gray-400">Vehicles</button>
                </Link>
              </Nav.Link>

              <Nav.Link eventKey={2} href="#memes">
                <Button variant="btn btn-success  " id="login">
                  <button
                    onClick={() => {
                      localStorage.clear();
                      navigate("/home");
                    }}
                  >
                    Logout
                  </button>
                </Button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    

      {/*Navbar End*/}

    <div className="container mx-auto">
    <div className="grid grid-cols-5 gap-4">
      {categories.map((category) => (
        <div key={category.id}>
          <img className="w-60 h-60 rounded-full" src={category.imageUrl} alt={category.title} />
          <h3 className="text-xl font-bold mt-2 text-center">{category.title}</h3>
         
         
        </div>
      ))}
    </div>

    </div>



    <div>
      {error ? <div>Error: {error}</div> : null}
      <ul>
        {data.map(item => (
          <div key={item.categoryId}>
          <p>Category ID: {item.categoryId}</p>
          <p>Category: {item.category}</p>
          <p>Image URL: {item.imageUrl}</p>
        </div>
        ))}
      </ul>
    </div>

   
    </>
  );
};

export default HomeProfile;
