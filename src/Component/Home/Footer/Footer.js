import React, { useState } from "react";
import doctor1 from "../../../images/doctor1.png";
import P1 from "../../../images/P1.png";
import d3 from "../../../images/d3.jpg";
import "./Footer.css";
const Footer = () => {
  const [comming, setComming] = useState(false);
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
                      <span style={{fontSize: "14px"}}>Free Physical Therapy</span>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <img src={P1} alt="" />
                      <span style={{fontSize: "14px"}}>Free Massages</span>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <img src={d3} alt="" />
                      <span style={{fontSize: "14px"}}>Free Personal Training</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row bottom">
            <div class="container">
              <div class="row">
                <div class="col-sm bottomLinks">
                  {/* <a href="www.PayAllAthletes.com" onClick={() => setComming(true)}>{comming ? "Coming Soon" : "Pay All Athletes"} </a> */}
                  <span style={{ color: "white", cursor: "pointer" }} onClick={() => setComming(true)}>{comming ? "Coming Soon" : "Pay All Athletes"} </span>
                </div>
                <div class="col-sm bottomLinks">
                  <a href="www.VonElijah.com/AppDevelopment"> App Development</a>
                </div>
                <div class="col-sm bottomLinks">
                  <a href="/affiliates"> Affiliates </a>
                </div>
                <div class="col-sm bottomLinks">
                  <a href="www.ConnectingHelpingHandsFoundation.org">Upcoming Events </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
