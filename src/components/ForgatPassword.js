import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// import Lock2 from "../images/Lock2.svg";
const ForgatPassword = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

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
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
        // Handle any errors here
      });
  }
  return (
   
  <div>
     <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input
          className="w-40 border-4"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  </div>
  )
}

export default ForgatPassword
