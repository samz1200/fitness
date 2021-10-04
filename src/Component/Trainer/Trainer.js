import React from "react";
import Header from "../Home/Header/Header";
import "./Trainer.css";
import image from "../../images/b3.jpg";
import { Link } from "react-router-dom";
const Trainer = () => {
  const mystyle = {
    color: "red",
    fontSize: "30px",
  };
  const style1 = {
    marginLeft: "27%",
    textAlign: "center",
  };
  return (
    <div>
      <Header></Header>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-4 col-sm-4 col-12">
            <div className="image">
              <img src={image} alt="" />
            </div>
          </div>
          <div className="col-md-8 col-sm-8 col-12">
            <div className="row">
              <div className="col-md-6 col-sm-12 col-12">
                <div className="card1" style={{ width: "18rem" }}>
                  <a className="" href="/price">
                    <div className="card-body">
                      <h5 className="card-title text-center">
                        FREE PERSONAL TRAINING
                      </h5>
                      <p className="card-text text-center">
                        <span style={mystyle}>Sign-Up Now!!</span> <br />
                        The first 2 weeks are free <br />
                        for you to train with <br /> certified personal trainers
                      </p>
                    </div>
                  </a>
                </div>
                <Link to="/paypal/free" className="btn-buy">
                  <span
                    href="payment.html"
                    class="signup2"
                    style={{ textAlign: "center" }}
                  >
                    Sign-Up Now!
                  </span>
                </Link>
              </div>
              <div className="col-md-6 col-sm-12 col-12">
                <div className="card1" style={{ width: "18rem" }}>
                  <a className="" href="/trainer">
                    <div className="card-body">
                      <h5 className="card-title text-center">
                        PERSONAL TRAINERS
                      </h5>
                      <p className="card-text text-center">
                        <span style={mystyle}>Sign-Up Now!!</span> <br />
                        Get access to hundreds of <br />
                        of potential clients for <br /> only $49.99 per month
                      </p>
                    </div>
                  </a>
                </div>
                <Link to="/paypal/49" className="btn-buy">
                  <span
                    href="payment.html"
                    class="signup2"
                    style={{ textAlign: "center" }}
                  >
                    Sign-Up Now!
                  </span>
                </Link>
              </div>
              <h4 style={style1}> First Month Free<br />
                (for a limited time only)</h4>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trainer;
