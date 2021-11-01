import React, { useState } from "react";
import doctor1 from "../../../images/doctor1.png";
import P1 from "../../../images/P1.png";
import d3 from "../../../images/d3.jpg";
import twitter from "../../../images/twitter.png";
import podcast from "../../../images/podcast.png";
import facebook from "../../../images/fb.png";
import "./Footer.css";
import BottomButtons from "../bottomButtons/bottomButton";
const Footer = () => {
  return (
    <section>
      <div className="subscribe-area p-5">
        <div className="container box">
          <div className="row mb-3">
            <div className="col-md-8 col-xl-8 col-lg-8 col-12 col-xs-12 col-sm-12">
              <div className="subscribe-area-left">
                <h2>
                  <span>Learn More about</span> Free Monthly Massages
                </h2>
              </div>
              <div className="subscribe-box">
                <form action="">
                  <input type="text" placeholder="Email" />
                  <button type="submit">Submit</button>
                </form>
              </div>
            </div>
            <div className="col-md-4 col-xl-4 col-lg-4 col-12 col-xs-12 col-sm-12">
              <div className="subscribe-right">
                <ul>
                  <li>
                    <a href="">
                      <img src={doctor1} alt="" />
                      <span style={{ fontSize: "12px" }}>Free Physical Therapy</span>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <img src={P1} alt="" />
                      <span style={{ fontSize: "12px" }}>Free Massages</span>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <img src={d3} alt="" />
                      <span style={{ fontSize: "12px" }}>Free Personal Training</span>
                    </a>
                  </li>
                </ul>
              </div>
              <div style={{ display: "flex", justifyContent: "space-around" }}>
                <a href="">
                  <img style={{width: "2rem", height: "2rem"}} src={twitter} alt="" />
                </a>
                <a href="">
                  <img style={{width: "2rem", height: "2rem", background: "white"}} src={podcast} alt="" />
                </a>
                <a href="">
                  <img style={{width: "2rem", height: "2rem"}} src={facebook} alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BottomButtons />
    </section>
  );
};

export default Footer;
