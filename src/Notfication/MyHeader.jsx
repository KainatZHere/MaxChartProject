import React from "react";
import { Link } from "react-router";

const MyHeader = () => {
  return (
    <>
      <nav>
        <ul style={{ display: "flex", marginLeft: "20px" }}>
          <a href=""> LOGO</a>
          <li style={{ display: "flex", marginLeft: "20px" }}>
            <Link to={"/"}>Home</Link>
          </li>
          <li style={{ display: "flex", marginLeft: "20px" }}>
            <Link to={"about"}>About</Link>
          </li>
          <li style={{ display: "flex", marginLeft: "20px" }}>
            <Link to={"contact"}>Contact</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default MyHeader;
