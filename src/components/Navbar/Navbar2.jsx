import React from "react";
import "./Navbar2.css";
import { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin,faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons';
const Navbar2 = () => {
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false); 

  useEffect(() => {
    const onScroll=()=>{
          if (window.scrollY > 50) {
            setScrolled(true);
          } else {
            setScrolled(false);
          }
        }
        window.addEventListener("scroll", onScroll);
  
        return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Navbar
  expand="lg"
  className={`customnavbar ${scrolled ? "scrolled" : ""}`}
  fixed="top"
  variant="dark"
  expanded={expanded}
  onToggle={() => setExpanded(!expanded)}
>
      <Container>
        <Navbar.Brand href="/" onClick={() => setExpanded(false)}>
          {/* Add a brand logo or text */}
          <span className="brand-name">Shashank's Portfolio</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/" className="nav-link-custom" onClick={() => setExpanded(false)}>
              Home
            </Nav.Link>
            <Nav.Link href="/about" className="nav-link-custom" onClick={() => setExpanded(false)}>
              About
            </Nav.Link>
            <Nav.Link href="/project" className="nav-link-custom" onClick={() => setExpanded(false)}>
              Projects
            </Nav.Link>
            <Nav.Link href="https://github.com/shashankgurunaga1" className="nav-link-custom" onClick={() => setExpanded(false)}>
           
        <FontAwesomeIcon icon={faGithub}  className="shrok" size="2x" /> 
        
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbar2;