import React, { useEffect, useState } from "react";
import "./Gyms.css";
import Header from "../Home/Header/Header";
import img1 from "../../images/img1.jpg";
import img2 from "../../images/img2.png";
import img3 from "../../images/img3.png";
import pic1 from "../../images/pic1.png";
import pic2 from "../../images/pic3.png";
import pic3 from "../../images/pic5.png";
import pic4 from "../../images/pic6.png";
import pic5 from "../../images/pic7.png";
import pic6 from "../../images/pic4.png";
import pic7 from "../../images/g9.png";
import pic8 from "../../images/g10.png";
import pic9 from "../../images/g11.png";
import pic10 from "../../images/g12.jpg";
import { getGyms } from "../../Service/api";
const Gyms = () => {
  const [gyms, setGyms] = useState();
  // console.log(gyms)
  useEffect(() => {
    loadGymDetails();
  }, []);

  const loadGymDetails = async () => {
    let response = await getGyms();
    setGyms(response.data);
  };

  const style1 = {
    textAlign: "center",
    color: "black",
    fontSize: "50px",
  };
  return (
    <div>
      <Header></Header>
      <div className="gym">
        <div className="">
          <div className="row">
            {/* card 1 */}
            {
              gyms?.map(item => (

                <div className="col-md-6 col-sm-12 col-12 ">
                  <div className="cards cards1 box">
                    <img class="card-img-top" src={item.gymImg} alt="Card image cap" />
                    <div class="card-body">
                      <h5 class="card-title" style={style1}>
                        {item.gymName}
                      </h5>
                      <p class="card-text" style={{ textAlign: "center" }}>
                        {" "}
                        <span style={{ color: "blue" }}>{item.gymAddress}</span>{" "}
                        <br />{" "}
                        <span style={{ color: "green" }}>
                          {item.gymDescription}
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              ))
            }

            {/* card 2 */}
            <div className="col-md-6 col-sm-12 col-12">
              <div className="cards cards2">
                <img class="card-img-top" src={pic2} alt="Card image cap" />
                <div class="card-body mt-3">
                  <h5 class="card-title" style={style1}>
                    Crunch Fitness{" "}
                  </h5>
                  <p class="card-text t1" style={{ textAlign: "center" }}>
                    {" "}
                    <span style={{ color: "blue" }}>
                      Unlimited Access, Child Care, Guest Privileges,{" "}
                    </span>{" "}
                    <br />{" "}
                    <span style={{ color: "green" }}>
                      {" "}
                      Group Classes, Live Online Workouts{" "}
                    </span>
                    <br />{" "}
                    <span style={{ color: "green" }}>
                      {" "}
                      HydroMassage Beds, etc.{" "}
                    </span>
                  </p>
                </div>
              </div>
            </div>
            {/* card 3  */}
            <div className="col-md-6 col-sm-12 col-12">
              <div className="cards cards3">
                <img class="card-img-top" src={pic3} alt="Card image cap" />
                <div class="card-body mt-3">
                  <h5 class="card-title" style={style1}>
                    Fitness Connection{" "}
                  </h5>
                  <p class="card-text" style={{ textAlign: "center" }}>
                    {" "}
                    <span style={{ color: "blue" }}>
                      Unlimited Access, Child Care, Separated Saunas,{" "}
                    </span>{" "}
                    <br />{" "}
                    <span style={{ color: "green" }}>
                      {" "}
                      Group Classes, Zumba, Pool, Basketball{" "}
                    </span>
                    <br />{" "}
                    <span style={{ color: "green" }}>
                      {" "}
                      Women's Workout Area, Racquetball, etc.{" "}
                    </span>
                  </p>
                </div>
              </div>
            </div>
            {/* card 4  */}
            <div className="col-md-6 col-sm-12 col-12">
              <div className="cards cards4">
                <img class="card-img-top" src={pic4} alt="Card image cap" />
                <div class="card-body mb-5">
                  <h5 class="card-title" style={style1}>
                    Massage Envy{" "}
                  </h5>
                  <p class="card-text" style={{ textAlign: "center" }}>
                    {" "}
                    <span style={{ color: "blue" }}>
                      Free Massage or Facial{" "}
                    </span>{" "}
                  </p>
                </div>
              </div>
            </div>
            {/* card 5 */}
            <div className="col-md-6 col-sm-12 col-12">
              <div className="cards cards5">
                <img class="card-img-top" src={pic5} alt="Card image cap" />
                <div class="card-body mt-3">
                  <h5 class="card-title" style={style1}>
                    Physical Therapy{" "}
                  </h5>
                  <p class="card-text" style={{ textAlign: "center" }}>
                    {" "}
                    <span style={{ color: "blue" }}>
                      Free Physical Therapy Consultation,{" "}
                    </span>{" "}
                    <br />{" "}
                    <span style={{ color: "green" }}>
                      {" "}
                      Treat Diseases, Injuries, or Deformities{" "}
                    </span>
                  </p>
                </div>
              </div>
            </div>

            {/* card 6  */}

            <div className="col-md-6 col-sm-12 col-12">
              <div className="cards cards6">
                <img class="card-img-top" src={pic6} alt="Card image cap" />
                <div class="card-body mt-3">
                  <h5 class="card-title" style={style1}>
                    Planet Fitness{" "}
                  </h5>
                  <p class="card-text" style={{ textAlign: "center" }}>
                    {" "}
                    <span style={{ color: "blue" }}>
                      Unlimited Access, Unlimited Guest Privileges,{" "}
                    </span>{" "}
                    <br />{" "}
                    <span style={{ color: "green" }}>
                      {" "}
                      Free Fitness Training, Group Classes, HydroMassage{" "}
                    </span>
                    <br />{" "}
                    <span style={{ color: "green" }}>
                      {" "}
                      Massage Chairs, Tanning, 50% off Drinks, etc..{" "}
                    </span>
                  </p>
                </div>
              </div>
            </div>
            {/* card 7 */}
            <div className="col-md-6 col-sm-12 col-12">
              <div className="cards cards7">
                <img class="card-img-top" src={pic7} alt="Card image cap" />
                <div class="card-body">
                  <h5 class="card-title" style={style1}>
                    24 Hour Fitness{" "}
                  </h5>
                  <p class="card-text" style={{ textAlign: "center" }}>
                    {" "}
                    <span style={{ color: "blue" }}>
                      Unlimited Access, Group Classes,{" "}
                    </span>{" "}
                    <br />{" "}
                    <span style={{ color: "green" }}>
                      {" "}
                      24Go TV, 24Go Fitness App, Basketball{" "}
                    </span>
                    <br />{" "}
                    <span style={{ color: "green" }}>
                      {" "}
                      Zumba, Pool, Sauna, etc{" "}
                    </span>
                  </p>
                </div>
              </div>
            </div>

            {/* card 8  */}

            <div className="col-md-6 col-sm-12 col-12">
              <div className="cards cards7 mt-5">
                <img
                  class="card-img-top mt-5"
                  src={pic8}
                  alt="Card image cap"
                />
                <div class="card-body mt-5">
                  <h5 class="card-title mt-3" style={style1}>
                    Snap Fitness{" "}
                  </h5>
                  <p class="card-text" style={{ textAlign: "center" }}>
                    {" "}
                    <span style={{ color: "blue" }}>
                      Unlimited Access, Open 24 hours a Day{" "}
                    </span>{" "}
                    <br />{" "}
                    <span style={{ color: "green" }}>
                      {" "}
                      Group Classes, Zumba, etc.{" "}
                    </span>
                  </p>
                </div>
              </div>
            </div>
            {/* card 9 */}
            <div className="col-md-6 col-sm-12 col-12">
              <div className="cards cards9 mt-5">
                <img
                  class="card-img-top mt-5"
                  src={pic9}
                  alt="Card image cap"
                />
                <div class="card-body ">
                  <h5 class="card-title " style={style1}>
                    Glo{" "}
                  </h5>
                  <p class="card-text mt-5" style={{ textAlign: "center" }}>
                    {" "}
                    <span style={{ color: "blue" }}>
                      Unlimited Access, Virtual Wellness Platform{" "}
                    </span>{" "}
                    <br />{" "}
                    <span style={{ color: "green" }}>
                      {" "}
                      Online Yoga, Online Pilates, Online Meditation{" "}
                    </span>
                    <br />{" "}
                    <span style={{ color: "green" }}>
                      {" "}
                      Online Prenatal Clases, Group Classes HIIT Training, etc{" "}
                    </span>
                  </p>
                </div>
              </div>
            </div>

            {/* card 10 */}
            <div className="col-md-6 col-sm-12 col-12">
              <div className="cards cards10 ">
                <img class="card-img-top " src={pic10} alt="Card image cap" />
                <div class="card-body ">
                  <h5 class="card-title" style={style1}>
                    Academy of <br />
                    Self Defense{" "}
                  </h5>
                  <p class="card-text" style={{ textAlign: "center" }}>
                    {" "}
                    <span style={{ color: "blue" }}>
                      Unlimited Access, Virtual Self Defense Training{" "}
                    </span>{" "}
                    <br />{" "}
                    <span style={{ color: "green" }}>
                      {" "}
                      Online Training for Kids, Online Training for Women{" "}
                    </span>
                    <br />{" "}
                    <span style={{ color: "green" }}>
                      {" "}
                      Online Krav Maga Clases, Live Group Classes, Kickboxing,
                      etc{" "}
                    </span>
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-sm-12 col-12">
              <div className="cards cards11 head ">
                <img class="card-img-top " src={img1} alt="Card image cap" />
                <div class="card-body mt-5">
                  <h5 class="card-title " style={style1}>
                    BeyondFit Mom{" "}
                  </h5 >{" "}

                  <br />
                  <p class="card-text mt-3" style={{ textAlign: "center" }}>
                    {" "}
                    <span style={{ color: "blue" }}>
                      Female Clients Only, Unlimited Virtual Access,</span> <br /> <span style={{ color: "green" }}>Fitness for
                        Moms</span>{" "}
                    {" "}
                    <br />{" "}
                    <span style={{ color: "green" }}>
                      {" "}
                      Fat-Burning Workouts, Fast/Simple Recipes, Shopping Lists{" "}
                    </span>
                    <br />{" "}
                    <span style={{ color: "green" }}>
                      {" "}
                      Customized Weekly Meal Plans,<br /> Postpartum Fat Loss, etc.{" "}
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-12 col-12">
              <div className="cards cards12 ">
                <img class="card-img-top " src={img2} alt="Card image cap" />
                <div class="card-body mt-5">
                  <h5 class="card-title " style={style1}>
                    PVolve{" "}
                  </h5>
                  <br />
                  <p class="card-text mb-5" style={{ textAlign: "center" }}>
                    {" "}
                    <span style={{ color: "blue" }}>
                      Unlimited Access, Virtual Sculpting Classes,{" "}
                    </span>{" "}
                    <br />{" "}
                    <span style={{ color: "green" }}>
                      {" "}
                      Resistance Equipment to Strengthen Muscles,{" "}
                    </span>
                    <br />{" "}
                    <span style={{ color: "green" }}>
                      {" "}
                      Workout Anytime and Anywhere, etc.{" "}
                    </span>
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-sm-12 col-12">
              <div className="cards cards13">
                <img class="card-img-top" src={img3} alt="Card image cap" />
                <div class="card-body">
                  <h5 class="card-title" style={style1}>
                    Curves{" "}
                  </h5>
                  <p class="card-text" style={{ textAlign: "center" }}>
                    {" "}
                    <span style={{ color: "blue" }}>
                      Female Clients Only, Unlimited In-Person and Virtual
                      Access,{" "}
                    </span>{" "}
                    <br />{" "}
                    <span style={{ color: "green" }}>
                      {" "}
                      30-Minute Circuit Workouts, Equipment Designed for Women,{" "}
                    </span>
                    <br />{" "}
                    <span style={{ color: "green" }}>
                      {" "}
                      One-On-One Coaching, Workout In the Comfort of Your Home,
                      etc.{" "}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gyms;
