import React from "react";
import { NavLink } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
import "./About.css";
function About() {
  // const navigate = useNavigate();
  // const goToPage = () => {
  //   console.log("hello");
  //   window.alert("you clicked");
  //   navigate("/home");
  // };
  return (
    <div className="about">
      <p>Hello I am Shubham,</p>
      <p>
        This app is under development, if you want any enhancement in this app
        please provide your feedback by clicking at the below button, your
        feedback will be very useful in developing the app....thanks
      </p>
      <NavLink to="/feedback">
        {" "}
        <button>Feedback</button>
      </NavLink>
    </div>
  );
}

export default About;
