import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router";
import { loginUser } from "../../Service/api";
import Header from "../Home/Header/Header";
import "./Login.css";
const Login = () => {
  const history = useHistory();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    const { data } = await loginUser(user);
    console.log(data.user)
    if (data.user) {
      localStorage.setItem("user", JSON.stringify(data.user));
      history.push("/");
    } else {
      alert("user not exist")
    }
  };
  return (
    <div>
      <Header></Header>
      <section className="vh-40" style={{ backgroundColor: '#508bfc' }}>
        <div className="container  h-30">
          <div className="row d-flex justify-content-center align-items-center h-30">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div className="card shadow-2-strong" style={{ borderRadius: '1rem' }}>
                <div className="card-body  text-center">

                  <h3 className="mb-3">Login</h3>

                  <div className="form-outline ">
                    <input type="email"
                      name="email"
                      value={user.email}
                      onChange={handleChange}
                      placeholder="Enter email"
                      className="form-control form-control-lg"
                    />
                    <label className="form-label" for="typeEmailX">Email</label>
                  </div>

                  <div className="form-outline ">
                    <input
                      type="password"
                      name="password"
                      value={user.password}
                      onChange={handleChange}
                      classNameName="form-control"
                      placeholder="Enter password" className="form-control form-control-lg"
                    />
                    <label className="form-label" for="typePasswordX">Password</label>
                  </div>


                  <div className="form-check d-flex justify-content-start ">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="form1Example3"
                    />
                    <label className="form-check-label" for="form1Example3"> Remember password </label>
                  </div>

                  <button className="btn btn-success " style={{ backgroundColor: 'green' }} type="submit" onClick={handleLogin}>Login</button>

                  <hr className="my-4" />
                  <button className="btn btn-lg btn-block btn-primary mt-3" style={{ backgroundColor: 'blue' }} type="submit"><i className="fab fa-facebook-f me-2"></i>Sign in with facebook</button><br /><br />
                  <button className="btn btn-lg btn-block shadow-sm p-3 mb-5 bg-white rounded " type="submit"><i className="fab fa-google me-2"></i> Sign in with google</button> <br />

                  <div><br />
                    <p className="mb-0">Don't have an account? <a href="/signup" className="signup fw-bold">Sign Up</a></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
