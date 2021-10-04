import React from "react";
import './Hero.css'
const Hero = () => {
  return (
    <div className="hero-section">
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-lg-4 col-sm-12 col-xl-4 offset-md-4 offset-lg-4 offset-xl-4 col-12">
            <div className="hero-right text-center">
              <h2>
                ONE PRICE <br /> GIVES YOU ACCESS <br />{" "}
                <span style={{ color: "red" }}> TO MULTIPLE GYMS</span>
              </h2>
              <p>
                Enjoy Unlimited
                <br />
                In-Person and Virtual Classes
              </p>
              <a href="/price">Sign-Up Now!</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
