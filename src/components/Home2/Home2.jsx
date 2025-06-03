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
        <Row className="justify-content-center text-center my-3"> {/* reduced vertical margin */}
          <Col md={10} lg={8} className="home2-content">
            <h2 className="display-7 fw-bold mb-2">
              I am currently working in the following domains: <span className="purple">Generative AI</span>, <span className="purple">Machine Learning</span>, and <span className="purple">Deep Learning</span>.
            </h2>

            <p className="title1">
              I work as a <span className="purple"><strong>Full-Stack developer</strong></span>.
            </p>

            <h2 className="languages-heading mb-1">Languages:</h2>
            <p className="languages-list mb-2">
              Java, Python, C#, JavaScript, C++
            </p>
          </Col>
        </Row>

        <Row className="text-center mt-3"> {/* reduced margin-top */}
          <Col>
            <h3 className="connect-heading">CONNECT VIA:</h3>
          </Col>
        </Row>
      </Container>
      <Links />
    </section>
  );
};

export default Home2;