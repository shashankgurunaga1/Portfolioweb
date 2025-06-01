import React from "react";
import { DiReact,DiAngularSimple,DiMysql } from "react-icons/di";
import { SiNextdotjs,SiSpring,SiSpringboot,SiFlask,SiDjango,SiNodedotjs,SiPostgresql,SiMongodb} from "react-icons/si";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./TechStack2.css";
function TechStack2(){
    const iconSize = 60;
    return(
         <div className="tech-stack-container">
            <h3 className="para">Back-end frameworks</h3>
            <Row style={{justifyContent:"center",paddingBottom:"20px"}}>
            
            <Col xs={4} md={2} className="tech-stack3">
            <SiSpring size={iconSize} title="Spring" />
                </Col>
            <Col xs={4} md={2} className="tech-stack3">
            <SiSpringboot size={iconSize} title="SpringBoot" />
                </Col>
            <Col xs={4} md={2} className="tech-stack3">
            <SiFlask size={iconSize} title="Flask" />
                </Col>
            <Col xs={4} md={2} className="tech-stack3">
            <SiDjango size={iconSize} title="Django" />
            </Col>
            <Col xs={4} md={2} className="tech-stack3">
            <SiNodedotjs size={iconSize} title="Node.js" />
            </Col>
            </Row>
            <h3 className="para"> Front-end frameworks</h3>
            <Row style={{justifyContent: "center", paddingBottom: "50px"}}>
                <Col xs={4} md={2} className="tech-stack2">
                    <DiReact size={iconSize} title="React" />
                </Col>
                <Col xs={4} md={2} className="tech-stack2">
                    <DiAngularSimple size={iconSize} title="Angular" />
                </Col>
                <Col xs={4} md={2} className="tech-stack2">
                    <SiNextdotjs size={iconSize} title="Next.js" />
                </Col>
                

            </Row>
            
            <h3 className="para"> Database Languages </h3>
            <Row style={{justifyContent: "center", paddingBottom: "50px"}}>
                <Col xs={4} md={2} className="tech-stack4">
                <DiMysql size={iconSize} title="MySQL" />
                </Col>
                <Col xs={4} md={2} className="tech-stack4">
                <SiPostgresql size={iconSize} title="PostgreSQL" />
                </Col>
                <Col xs={4} md={2} className="tech-stack4">
                <SiMongodb size={iconSize} title="MongoDB" />
                </Col>
            


            </Row>
            
            </div>  
    );

}
export default TechStack2;