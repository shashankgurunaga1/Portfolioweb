import React from "react";
import GitHubActivity from "../About/GitHubActivity";
import Container from "react-bootstrap/Container";
import Card from 'react-bootstrap/Card';
import "./Project.css";
import Imgon from "../../assets/result_graph2.jpeg";
import Imgon2 from "../../assets/entrypage.png";
import Imgon3 from "../../assets/Startupweb.jpg";
import Imgon4 from "../../assets/multil.jpg";
import Imgon5 from "../../assets/CrimedetectionCNN.jpg";
import Imgon6 from "../../assets/Weather_dome.jpg";
import Imgon7 from "../../assets/qb1.jpg";
import Imgon8 from "../../assets/solene.jpg"
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
function Project(){
        return(
            <Container fluid className="mt-5"> 
            <GitHubActivity/>
            <br/>
            
            <Row  className="row1" style={{justifyContent:"center"}}>
            <h2>Projects</h2>
            <Col>
            <a href="https://github.com/shashankgurunaga1/knowledge-augmentation-langgraph" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
            <Card  className="card1" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={Imgon}/>
            <Card.Body>
                <Card.Title>Knowledge Augmentation Langgraph</Card.Title>
                <Card.Text>
                Knowledge Augmentation over documents using langgraph integrating LLaMA3 for response generation.
                This has been implented through Lanchain's langgraph feature(which use agent based AI systems).
                </Card.Text>
            </Card.Body>
                </Card>
                </a>
                </Col>
                <Col>
                <a href="https://github.com/shashankgurunaga1/Quiz-app" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
            <Card  className="card1" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={Imgon2}/>
            <Card.Body>
                <Card.Title>Quania(React+Springboot)</Card.Title>
                <Card.Text>
                The quiz application enables educational institutions to efficiently conduct tests.
                Unique questions are randomly selected and scored based on correct answers.
                The website is based on <b>admin</b> and regular <b>user</b> module.
                </Card.Text>
            </Card.Body>
                </Card>
                </a>
                </Col>
            
                <Col>
            <a href="https://github.com/shashankgurunaga1" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
            <Card  className="card1" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={Imgon5}/>
            <Card.Body>
                <Card.Title>Criminal Activity Detection Model using CNN</Card.Title>
                <Card.Text>
                    Developed a deep learning model that analyses images and videos.
                    It uses <b>Convolution Neural Network</b> strategy  on the pixelated data to identify th ecrime.
                    Finally it evaluates  the accuracy using <b>ROC-AUC metric</b> and also provides the graph to analyse accuracy via comparing TPR with FPR.
                </Card.Text>
            </Card.Body>
                </Card>
                </a>
                </Col>

                <Col>
            <a href="https://github.com/shashankgurunaga1" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
            <Card  className="card1" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={Imgon7}/>
            <Card.Body>
                <Card.Title>QuestBank(.NET framework,Angular,Microsoft SQL Server)</Card.Title>
                <Card.Text>
                With the shift from traditional in-person exams to virtual online assessments, the risk of question leaks has increased despite video proctoring. <br/>
                To address this, we developed an application for managing and frequently refreshing a secure question bank.<br/> 
                Reviewers can evaluate and approve various types of questions—such as MCQs, case studies, audio, and file-based questions—while contributors and reviewers earn reward points based on their input. <br/>
                This system ensures a dynamic and diverse question pool for modern online exams.
                </Card.Text>
            </Card.Body>
                </Card>
                </a>
                </Col>

                </Row>
                 <br/>
                <Row className="row1" style={{justifyContent:"center"}}>
                <Col>
            <a href="https://github.com/shashankgurunaga1/solene_home_page_react" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
            <Card  className="card1" style={{ width: '17rem' }}>
            <Card.Img variant="top" src={Imgon8}/>
            <Card.Body>
                <Card.Title>Solene Home Page (Implements React Parallax)</Card.Title>
                <Card.Text>
                  This website implements key React framework features such as <b>React Parallax</b> for images(wedding images).
                  I have also implemented a <b>taskbar(of items)</b> that opens on clicking the red button, which would not require a new webpage to show the  new items.
                  The website also includes cool features like the revolving text around Solene's logo making it more attractive and fancy.
                

                </Card.Text>
            </Card.Body>
                </Card>
                </a>
                </Col>
                <Col>
            <a href="https://github.com/shashankgurunaga1/startupweb" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
            <Card  className="card1" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={Imgon3}/>
            <Card.Body>
                <Card.Title>Symbiosis(Startup Web)</Card.Title>
                <Card.Text>
                Symbiosis is a collaborative platform designed to connect startups with individuals offering relevant skills and support.<br/>
                Startups can register to find helpers—such as developers, marketers, or consultants—who can contribute to their growth.<br/>
                Likewise, helpers can sign up to discover startups that match their expertise and interests. <br/>
                <b>By facilitating these connections, Symbiosis fosters a mutually beneficial environment where innovation and collaboration thrive.</b>
                </Card.Text>
            </Card.Body>
                </Card>
                </a>
                </Col>
                <Col>
            <a href="https://github.com/shashankgurunaga1/NewsSourceApp" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
            <Card  className="card1" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={Imgon4}/>
            <Card.Body>
                <Card.Title>Multilex Dashboard</Card.Title>
                <Card.Text>
                Developed a Flask-based web application from scratch to manage news sources—assigning them to team members, tracking scraping progress, and generating reports. Deployed the app on AWS EC2 using an Nginx web server. Implemented features to process daily reports, including modifying company details, updating the database, uploading final reports to an S3 bucket, and enabling report downloads from S3.
                </Card.Text>
            </Card.Body>
                </Card>
                </a>
                </Col>

                


            <Col>
            <a href="https://github.com/shashankgurunaga1/WeatherDome" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
            <Card  className="card1" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={Imgon6}/>
            <Card.Body>
                <Card.Title>WeatherDome</Card.Title>
                <Card.Text>
                WeatherDome is an interactive weather website where users can input a city name to get real-time temperature and weather conditions. The site dynamically adapts its interface based on the current weather, offering a personalized and engaging experience.
                </Card.Text>
            </Card.Body>
                </Card>
                </a>
                </Col>



               
                </Row>
            </Container>


             
        );
}
export default Project;