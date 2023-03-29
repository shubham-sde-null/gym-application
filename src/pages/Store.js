import React from "react";
import "./Store.css";
import { NavLink } from "react-router-dom";
function Store() {
  return (
    <div className="store">
      <p
        onClick={() => {
          console.log("hello");
        }}
      >
        Products will arrive soon
      </p>
      <NavLink to="/">
        <button
          onClick={() => {
            console.log("clicked");
          }}
        >
          Home Page
        </button>
      </NavLink>
    </div>
  );
}
export default Store;
