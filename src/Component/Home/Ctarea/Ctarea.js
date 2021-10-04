import React from "react";
import gym from "../../../images/gym3.png";
import gym1 from "../../../images/y.png";
import gym2 from "../../../images/pg1.png";
import "./Ctarea.css";
const Ctarea = () => {
  return (
    <section className="cta-area-wrapper">
      <div className="cta-area-content-wrapper p-5">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-xl-8 col-lg-8 offset-md-2 offset-xl-2 offset-lg-2">
              <div className="cta-box text-center">
                <p style={{ color: "#FFFFFF" }}>
                  For one low monthly fee, get memberships to multiple
                  nationwide gyms <br /> such as Gold's Gym, 24 Hour Fitness,
                  Planet Fitness, Crunch Fitness, etc <br />{" "}
                </p>
                <a href="gym.html">Learn More</a>
              </div>
            </div>
            <div className="service-area row">
              <div className="section-title text-center txt">
                <h4>No Tokens | No Credits | No Limitations on Attendance</h4>
                <h4>Your Money, You Get To Choose</h4>
              </div>
              {/* single service wrapper */}
              <div className="col-md-4 col-lg-4 col-xl-4 col-12 col-xs-12 col-sm-6 ">
                <div className="single-service-wrapper single box1">
                  <div className="service-icon mb-2">
                    <img src={gym} alt="icon.png" class="icon" />
                  </div>
                  <h4>Visit Different Gyms</h4>
                  <p>
                    One low monthly fee <br /> will give you access to <br />{" "}
                    thousands of gyms nationwide <br /> even when you travel
                  </p>
                </div>
              </div>
              {/* single service wrapper  */}
              <div className="col-md-4 col-lg-4 col-xl-4 col-12 col-xs-12 col-sm-6 box2">
                <div className="single-service-wrapper  single1">
                  <div className="service-icon mb-2">
                    <img src={gym1} alt="icon.png" class="icon" />
                  </div>
                  <h4>Yoga, Pilates & HIIT</h4>
                  <p>
                    Attend in-person or virtual classes <br /> so you can reach
                    your <br /> personal fitness goals <br /> at your own pace
                  </p>
                </div>
              </div>
              {/* single service wrapper  */}
              <div className="col-md-4 col-lg-4 col-xl-4 col-12 col-xs-12 col-sm-6 box3">
                <div className="single-service-wrapper single">
                  <div className="service-icon">
                    <img src={gym2} alt="icon.png" class="icon" />
                  </div>
                  <h4>Free Personal Training</h4>
                  <p>
                    Sign-up today to receive <br /> free personal training
                    sessions <br /> with certified personal trainers
                  </p>
                </div>
              </div>
              <a href="payment.html" class="text-center default-btn">
                Sign-Up Now!
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ctarea;