import React, { useEffect, useState } from "react";
import "./Header.css";
import Navbar from "react-bootstrap/Navbar";
import { Container, Nav } from "react-bootstrap";
import logo from "../../../images/logo2.png";
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
      localStorage.removeItem("user")
      setUser({});
      history.push("/");
    }
  }
  const style1 = {
    paddingTop: "30px",
    color: "white",
  };
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
            <Nav.Link
              href="https://www.eventbrite.com/e/free-food-beverages-tickets-143397942105 "
              id="testimonials"
              style={{ color: "white" }}
            >
              Upcoming <br /> Events
            </Nav.Link>
            <Nav.Link href="/trainer" style={{ color: "white" }}>
              Personal <br />
              Trainers
            </Nav.Link>
            <Nav.Link href="/price" style={style1}>
              Sign Up
            </Nav.Link>
            {
              user ?
                <select className="headerbtn selectOption" name="loginProfile" onChange={handleSelect} id="loginProfile" >
                  <option value="firstName">{user?.fName}</option>
                  <option value="logout">logout</option>
                </select> :
                <Nav.Link href="/login" style={style1}>Log in</Nav.Link>
            }
            {
              user ?
                user?.email === "admin@gmail.com" ?
                  <Nav.Link href="/dashboard" style={style1}>
                    Dashboard
                  </Nav.Link> :
                  <Nav.Link href="/userdashboard" style={style1}>
                    Dashboard
                  </Nav.Link> : ""
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
