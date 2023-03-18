import React, { useState } from "react";
import MenuList from "./MenuList";
import { v4 as uuidv4 } from "uuid";
import { NavLink } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import "./Navbar.css";
function Navbar() {
  //if I will use the anchor tag then my page will refresh so in order to avoid the refreshing the page I am going to use the Navlink where we are not required to write the preventDefault, here one more benefit I will get and that is I can make the active class
  //this is how I can access the height of the individual element in the react using the userRef
  // const navbarHeight = useRef();
  // useEffect(() => {
  //   console.log(navbarHeight.current.clientHeight);
  // });
  const [clicked, setClicked] = useState(false);
  return (
    <nav>
      <div className="logo">
        Shubham &nbsp;<span>Fitness</span>
      </div>
      <div
        className="menu-icon"
        onClick={() => {
          setClicked(!clicked);
        }}
      >
        {clicked ? (
          <div className="cross">
            <RxCross2 />
          </div>
        ) : (
          <div className="bars">
            <AiOutlineMenu />
          </div>
        )}
      </div>
      <ul className={clicked ? "menu-list" : "menu-list close"}>
        {/* here I get the index number in the index but I want to use the index as keys and I want some unique keys so I am going to use the uuidv4() which will give me the new index for each iteration */}
        {MenuList.map(({ title, url, index = uuidv4() }) => (
          <li key={index}>
            <NavLink activeclassName="active" to={url}>
              {title}
            </NavLink>{" "}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
