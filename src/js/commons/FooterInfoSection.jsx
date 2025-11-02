import React from "react";
import "../../css/FooterInfoSection.css";
export default function FooterInfoSection() {
  return (
    <div className="footer-area footer--light">
      <div className="footer-big">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-12">
              <div className="footer-widget">
                <div className="widget-about">
                  <img
                    src="http://placehold.it/250x80"
                    alt=""
                    className="img-fluid"
                  />
                  <p>Company address</p>
                  <ul className="contact-details">
                    <li>
                      <span className="icon-earphones"></span> Call Me:
                      <a href="tel:344-755-111">974-037-5597</a>
                    </li>
                    <li>
                      <span className="icon-envelope-open"></span>
                      <a href="mailto:sk.shrinet@gmail.com">
                        sk.shrinet@gmail.com
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-4">
              <div className="footer-widget">
                <div className="footer-menu footer-menu--1">
                  <h4 className="footer-widget-title">Popular Products</h4>
                  <ul>
                    <li>
                      <a href="#">Chapati</a>
                    </li>
                    <li>
                      <a href="#">Phulka</a>
                    </li>
                    <li>
                      <a href="#">Kerala parotha</a>
                    </li>
                    <li>
                      <a href="#">Ghee Chapati</a>
                    </li>
                    <li>
                      <a href="#">Butter naan</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-md-3 col-sm-4">
              <div className="footer-widget">
                <div className="footer-menu">
                  <h4 className="footer-widget-title">Our Company</h4>
                  <ul>
                    <li>
                      <a href="#">About Us</a>
                    </li>
                    <li>
                      <a href="#">How to preserve</a>
                    </li>
                    <li>
                      <a href="#">Testimonials</a>
                    </li>
                    <li>
                      <a href="#">Contact Us</a>
                    </li>
                    <li>
                      <a href="#">Plan &amp; Pricing</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-md-3 col-sm-4">
              <div className="footer-widget">
                <div className="footer-menu no-padding">
                  <h4 className="footer-widget-title">Help Support</h4>
                  <ul>
                    <li>
                      <a href="#">Terms &amp; Conditions</a>
                    </li>
                    <li>
                      <a href="#">Refund Policy</a>
                    </li>
                    <li>
                      <a href="#">FAQs</a>
                    </li>
                    <li>
                      <a href="#">Buyers Faq</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="go_top">
              <span className="icon-arrow-up"></span>
            </div>  */}
    </div>
  );
}
