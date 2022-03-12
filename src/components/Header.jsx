import React from "react";
import logo from "../assets/david-airlines.png";

const Header = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <img src={logo} width={300} />
    </div>
  );
};

export default Header;
