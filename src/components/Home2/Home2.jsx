import React from "react";
import Container from "react-bootstrap/Container"; 
import Row from "react-bootstrap/Row";         
import Col from "react-bootstrap/Col";           
import Links from "../Links/Links";


import './Home2.css'; 

const Home2 = () => {
  return (
    <section className="home2-section" id="about"> 
      <Container> 
        <Row className="justify-content-center text-center my-5"> 
          <Col md={10} lg={8} className="home2-content"> 
           
            <h2 className="display-7 fw-bold mb-3">
              I am currently  working in the following domains: <span className="purple">Generative AI</span>, <span className="purple">Machine Learning</span>, and <span className="purple">Deep Learning</span>.
            </h2>
           
            <p className="lead mb-4">
              I develop  backend as well as frontend of <span className="purple">web and mobile apps</span> as well.
            </p>
            
            <h2 className="languages-heading mb-3">Languages:</h2>
            <p className="languages-list">
              Java, Python, C#, JavaScript,C++
            </p>
          </Col>
         
        </Row>
        <Row>
        <Col>
          <h1> CONNECT VIA:</h1>
          </Col>
        </Row>
      </Container>
      <Links/>
    </section>
  );
};

export default Home2;