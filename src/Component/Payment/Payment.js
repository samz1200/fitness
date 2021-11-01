import React from "react";
import { Link } from "react-router-dom";
import BottomButtons from "../Home/bottomButtons/bottomButton";
import Header from "../Home/Header/Header";
import "./Payment.css";

const Payment = () => {
  return (
    <div>
      <Header></Header>
      <section className="pricing" id="pricing">
        <div className="container">
          <div className="row gy-4">
            <div className="col-md-6 col-sm-12 col-12">
              <div className="box">
                <div className="price" style={{ fontWeight: "bold" }}>
                  <sup>$</sup>150<span> / month</span>
                </div>
                <h3 style={{ color: "#ff901c" }}>
                  Select Up to 4 <br /> National Gyms or Studio Memberships
                </h3>
                <div className="container" style={{ textAlign: "left" }}>
                  <div class="row text">
                    <div class="col">Gold’s Gym</div>
                    <div class="col">24 Hour Fitness</div>
                  </div>
                  <div class="row  text">
                    <div class="col">Crunch Fitness</div>
                    <div class="col">Planet Fitness </div>
                  </div>
                  <div class="row  text">
                    <div class="col">Fitness Connection</div>
                    <div class="col">Snap Fitness</div>
                  </div>
                  <div class="row  text">
                    <div class="col">Glo </div>
                    <div class="col">Academy of Self Defense </div>
                  </div>
                  <div class="row  text">
                    <div class="col">BeyondFit Mom </div>
                    <div class="col">PVolve</div>
                  </div>
                  <div class="row  text">
                    <div class="col"></div>
                    <div class="col"></div>
                  </div>
                </div>
                <h3 style={{ color: "green" }} className="mt-3">
                  Schedule 1 Free Massage every 4 months
                </h3>
                <h3 style={{ color: "blue" }}>
                  Schedule 1 Free Physical Therapy session every 4 months
                </h3>
                <Link to="/paypal/150" className="btn-buy">
                  Sign-up Now!
                </Link>
              </div>
            </div>
            <div className="col-md-6 col-sm-12 col-12">
              <div className="box">
                <div className="price" style={{ fontWeight: "bold" }}>
                  <sup>$</sup>500<span> / month</span>
                </div>
                <h3 style={{ color: "#ff901c" }}>
                  Select Up to 10<br /> National Gyms or Studio Memberships
                </h3>
                <div className="container" style={{ textAlign: "left" }}>
                  <div class="row  text">
                    <div class="col">Gold’s Gym</div>
                    <div class="col">24 Hour Fitness</div>
                  </div>
                  <div class="row  text">
                    <div class="col">Crunch Fitness</div>
                    <div class="col">Planet Fitness </div>
                  </div>
                  <div class="row  text">
                    <div class="col">Fitness Connection</div>
                    <div class="col">Snap Fitness</div>
                  </div>
                  <div class="row  text">
                    <div class="col">Glo </div>
                    <div class="col">Academy of Self Defense </div>
                  </div>
                  <div class="row  text">
                    <div class="col">BeyondFit Mom </div>
                    <div class="col"> PVolve</div>
                  </div>
                  <div class="row  text ">
                    <div class="col">Curves</div>
                    <div class="col"></div>
                  </div>
                </div>
                <h3 style={{ color: "green" }} className="mt-3">
                  Schedule 1 Free Massage every month
                </h3>
                <h3 style={{ color: "blue" }}>
                  Schedule 1 Free Physical Therapy session every month
                </h3>
                <Link to="/paypal/500" className="btn-buy">
                  Sign-up Now!
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <BottomButtons />
    </div>
  );
};

export default Payment;
