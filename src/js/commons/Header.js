import React from "react";
import DefaultNavBar from "./DefaultNavBar";

var style = {
  backgroundColor: "lightgrey",
  borderTop: "1px solid #E7E7E7",
  textAlign: "center",
  // padding: "5px",
  position: "fixed",
  left: "0",
  top: "0",
  height: "20px",
  width: "100%",
  display: "none",
};

var phantom = {
  color: "black",
  display: "block",
  // padding: '20px',
  height: "30px",
  width: "100%",
  display: "none",
};

function Header({ children }) {
  return (
    <div id="header">
      <DefaultNavBar />
      <div style={phantom}> </div>
      <div style={style}>
        {children}
        {process.env.NODE_ENV}
      </div>
    </div>
  );
}

export default Header;
