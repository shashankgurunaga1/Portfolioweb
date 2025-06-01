import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin,faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons';
function Footer(){

      return(
                 <Container fluid>
                       <Row>
                        <Col md={4}>
                             <span className="foo1" style={{ color: 'white' }}>Developed by Shashank Gurunaga  @2025 </span>
                        </Col>

                        <Col md={4}>
                            <span className="foo2"  style={{ color: 'white' }}>Copyrights reserved @2025</span>
                        </Col>

                        <Col md={4} className="target-1">
                        
                        <a href="https://www.instagram.com/shashank_gurunaga/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faInstagram} className="iok" size="2x" /> 
                        </a>
                        <a href="https://github.com/shashankgurunaga1" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithub}  className="shrok" size="2x" /> 
                        </a>
                        <a href="https://linkedin.com/in/shashank-gurunaga-822141239" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faLinkedin} className="ghok" size="2x" /> 
      </a>
                        <a href="https://x.com/shashankg843" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faXTwitter}  className="grok" size="0.5x" /> 
                        </a>
                        </Col>
                       </Row>
                 </Container>
      );
}
export default Footer;