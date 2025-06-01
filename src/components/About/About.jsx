import React from  "react";
import TechStack from "./TechStack";
import TechStack2 from "./TechStack2";
import Container from "react-bootstrap/Container";
import "./About.css";
import MyImg from "../../assets/IgImg.jpeg";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import GitHubActivity from "./GitHubActivity";
const About=()=>{
     return(
        
        <Container fluid className="mt-5">
            <h2 className="crot">
               <i> KNOW ME:</i>
            </h2>
            <Row>
                <Col md={7} className="intro">
            <p className="content-i">
                Hi I am <span className="purple"> Shashank Gurunaga.</span>
                <br/>
                I hail from <span className="purple">Bangalore,India</span>.
                <br/>
                I have completed <span className="purple"> <i>B.Tech</i> in <i>Computer Science and Engineering</i></span> at <span className="purple">University Visvesvaraya College of Engineering,Bangalore</span>.
                <br/>
                  I specialize in projects involving <span className="highlight">Machine Learning</span>, <span className="highlight">Deep Learning</span>, <span className="highlight">Natural Language Processing</span>, <span className="highlight">Generative AI</span>, and <span className="highlight">Full-Stack Web Development</span>.

                <br/>
                
                
                
            </p>
            </Col>

            <Col md={5} className="img-cont">
                 <img src={MyImg} alt="My Image"/>
            </Col>
            </Row>

             <div align="center" className="tech-sock">
                    <h2>Professional Skillset</h2> 
                    <br/>
                    <h4><i>Languages:</i></h4>
             </div>
             <br/>
             <TechStack/>
             <TechStack2/>
        </Container>
     );

};
export default About;