import React, { useEffect, useState } from "react";
import "./Header.css";
import Navbar from "react-bootstrap/Navbar";
import { Container, Nav } from "react-bootstrap";
import logo from "../../../images/logo2.png";
import profile from "../../../images/profile.jpg";
import { useHistory } from "react-router";
const Header = () => {
  const history = useHistory();
  const [user, setUser] = useState();
  useEffect(() => {
    const getuser = localStorage.getItem("user");
    setUser(JSON.parse(getuser));
  }, [])
  const handleSelect = (e) => {
    if (e.target.value === "logout") {
      console.log(e.target.value)
      localStorage.removeItem("user")
      setUser({});
      history.push("/");
      window.location.reload();
    } else if (e.target.value === "dashboard") {
      history.push("/dashboard");
    } else if (e.target.value === "userdashboard") {
      history.push("/userdashboard");
    }
  }
  const style1 = {
    paddingTop: "30px",
    color: "white",
  };
  const imgStyle = {
    width: "4rem",
    height: "4rem",
    borderRadius: "50%",
    marginLeft: "2rem"
  }
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      className="navber navbar-light"
    >
      <Container>
        <Navbar.Brand href="/home" className="logo">
          <img src={logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="nav">
            <Nav.Link href="/gym" style={{ color: "white" }}>
              Participting <br />
              Gyms & Studios
            </Nav.Link>
            <Nav.Link href="/price" style={style1}>
              Pricing
            </Nav.Link>
            <Nav.Link href="/trainer" style={{ color: "white" }}>
              Personal <br />
              Trainers
            </Nav.Link>
            {
              user ?
                "" : <Nav.Link href="/price" style={style1}>
                  Sign Up
                </Nav.Link>
            }
            {
              user ?
                <select className="headerbtn selectOption bg-dark" name="loginProfile" onChange={handleSelect} id="loginProfile" >
                  <option value="firstName" >{user?.fName}</option>
                  <option value={user?.email === "admin@gmail.com" ? "dashboard" : "userdashboard"}>Dashboard</option>
                  <option value="logout">logout</option>
                  {/* <option value="dashboard">

                    {user?.email === "admin@gmail.com" ?
                      <Nav.Link href="/dashboard" style={style1}>
                        Dashboard
                      </Nav.Link> :
                      <Nav.Link href="/userdashboard" style={style1}>
                        Dashboard
                      </Nav.Link>}
                  </option> */}
                </select> :
                <Nav.Link href="/login" style={style1}>Log in</Nav.Link>
            }
            {
              user ? <img src={profile} style={imgStyle} /> : ""
            }
            {/* {
              user ?
                user?.email === "admin@gmail.com" ?
                  <Nav.Link href="/dashboard" style={style1}>
                    Dashboard
                  </Nav.Link> :
                  <Nav.Link href="/userdashboard" style={style1}>
                    Dashboard
                  </Nav.Link> : ""
            } */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
