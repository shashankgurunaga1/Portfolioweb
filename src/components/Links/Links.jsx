import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin,faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Links.css';

const Links=()=>{

    return(
      <div className="row-container">
      <Container fluid >
        
       <Row>
        <Col md="12">

      
       <span className="icon-wrapper circle-instagram">
          <a href="https://www.instagram.com/shashank_gurunaga/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} className="iok" size="2x" /> 
          </a>
      </span>
      
      
      
       <span className="icon-wrapper circle-github">
        <a href="https://github.com/shashankgurunaga1" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faGithub}  className="shrok" size="2x" /> 
        </a>
        </span>
       
      
      <span className="icon-wrapper circle-linkedin">
      <a href="https://linkedin.com/in/shashank-gurunaga-822141239" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faLinkedin} className="ghok" size="2x" /> 
      </a>
      
      </span>
      
      <span className="icon-wrapper circle-twitter">
        <a href="https://x.com/shashankg843" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faXTwitter}  className="grok" size="2x" /> 
        </a>
        </span>
      </Col>
      </Row>
      </Container> 
      </div>
    )
};
export default Links;