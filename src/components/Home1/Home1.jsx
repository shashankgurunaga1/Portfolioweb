import React from "react";
import Img2 from "../../assets/img3.svg";
import {ReactTyped} from "react-typed";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import "./Home1.css"
import Home2 from "../Home2/Home2";

const Home1 = () => {
  return (
    <div>
    <section className="home-section" id="home">
    
    <Container fluid className="content-container" >
    
        
       <Row className="align-items-center justify-content-center text-center my-5">
        <Col md={7} className="wreck1">
        <h1 className="typed-header">
        <ReactTyped strings={['Welcome to my Portfolio', 'I am Shashank Gurunaga', 'Dive in and explore!']}typeSpeed={40}backSpeed={30}loop/>
        </h1>
        </Col>
        
        <Col md={5} className="wreck2">
        <div className="img-container">
                 
                      <img src={Img2} className="img-src" alt="Dev Image"/>
                 
                 </div>
                 </Col>
                 </Row>
        
           </Container>
           
    </section>
       <Home2/>
    </div>
  );
};



export default Home1;
