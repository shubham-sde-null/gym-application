import React from "react";
import "./SubmittedFeedback.css";
import { NavLink } from "react-router-dom";
function SubmittedFeedback() {
  return (
    <div className="submittedfeedback">
      <h3>Your Feedback is Submitted</h3>
      <p>Thanks for your time</p>
      <NavLink to="/">
        <button>Let's Do Exercise</button>
      </NavLink>
    </div>
  );
}

export default SubmittedFeedback;
