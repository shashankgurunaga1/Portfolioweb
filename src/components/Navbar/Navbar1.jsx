import React from "react";
import "./Navbar.css";
import { useState,useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
const Navbar1=()=>{
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scrolled", handleScroll);
    return () => window.removeEventListener("scrolled", handleScroll);
  }, []);

  return (
    <Navbar expand="lg" className={`invisible-navbar ${scrolled ? "scrolled" : ""} `} fixed="top" variant="dark" collapseOnSelect >
      <Container>
        <Navbar.Brand href="/">Shashank's Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/" className="top1">Home</Nav.Link>
            <Nav.Link href="/about" className="top1">About</Nav.Link>
            <Nav.Link href="/project" className="top1">Projects</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default Navbar1;