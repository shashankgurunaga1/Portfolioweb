import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./TechStack.css";
import {
    DiJava,
    DiPython,
    DiJavascript1,
    DiGo,
    DiPhp,
    DiPerl,
    DiDart
  } from "react-icons/di";
  import { SiTypescript,SiC,SiKotlin,SiCplusplus } from "react-icons/si";
const TechStack=()=>{
    const iconSize = 60;
      return(
             <Row style={{justifyContent: "center", paddingBottom: "50px"}}>
                <Col xs={4} md={2} className="tech-stack">
                    <DiJava size={iconSize} title="Java" />
                </Col>
                <Col xs={4} md={2} className="tech-stack">
                    <DiPython size={iconSize} title="Python" />
                </Col>
                <Col xs={4} md={2} className="tech-stack">
                    <SiKotlin size={iconSize} title="Kotlin" />
                </Col>
                <Col xs={4} md={2} className="tech-stack">
                    <SiC size={iconSize} title="C" />
                </Col>
                <Col xs={4} md={2} className="tech-stack">
                <SiCplusplus size={iconSize} title="C++" />
                </Col>
                <Col xs={4} md={2} className="tech-stack">
                <DiJavascript1 size={iconSize} title="JavaScript" />
                </Col>
                <Col xs={4} md={2} className="tech-stack">
                <SiTypescript size={iconSize} title="TypeScript" />
                </Col>
                <Col xs={4} md={2} className="tech-stack">
                <DiPhp size={iconSize} title="PHP" />
                </Col>
                <Col xs={4} md={2} className="tech-stack">
                <DiPerl size={iconSize} title="Perl" />

                </Col>
                
             </Row>
      );
};
export default TechStack;