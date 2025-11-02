import React from "react";
import FooterInfoSection from "./FooterInfoSection";
import SocialFollow from "./SocialFollow";
var style = {
  backgroundColor: "#F8F8F8",
  borderTop: "1px solid #E7E7E7",
  textAlign: "center",
  // padding: "20px",
  // position: "absolute",
  left: "0",
  bottom: "0",
  height: "60px",
  width: "100%",
};
function Footer({ children }) {
  return (
    <div id="footer">
      <div style={style}>
        <FooterInfoSection />
        {children}
        <SocialFollow />
        <div className="mini-footer">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <p>
                  {" "}
                  &copy;2020
                  <a href="#"> ChapatiCenter</a>. All rights reserved. Created
                  by
                  <a href="#"> Shakti</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
