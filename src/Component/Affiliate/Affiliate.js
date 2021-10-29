import React from 'react';
import Header from '../Home/Header/Header';
import pic1 from "../../images/b3.jpg"
const Affiliate = () => {
  const style1 = {
    textAlign: "center",
    color: "black",
    fontSize: "30px",
  };
  const img = {
    width: '13rem',
    height: '13rem'
  }
  return (
    <div>
      <Header></Header>
      <div className="container">
        <div className="col-md-6 col-sm-12 col-12  ">
          <div className="cards box">
            <img class="card-img-top mt-5" style={img} src={pic1} alt="Card image cap" />
            <div class="card-body">
              <h5 class="card-title" style={style1}>
                Name{" "}
              </h5>
              <p class="card-text" style={{ textAlign: "center" }}>
                {" "}
                <span style={{ color: "blue" }}>
                  City & State location,{" "}
                </span>{" "}
                <br />{" "}

                <span style={{ color: "gray" }}>
                  {" "}
                  BIO{" "}
                </span>
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Affiliate;