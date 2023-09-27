import React from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import recommender from "../assets/img/Recommender_.png";
import customerBehaviour2 from "../assets/img/customer-behaviour-analysis_.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

    const projects = [
        {
            title: "Customer Behaviour",
            description: "Same brief of the notebook description",
            imgUrl: customerBehaviour2,
            link: 'https://github.com/leandromjunior/portfolio-projects-/tree/efdde1f080cf96be77e6643edefea02cfaf69fc2/Customer%20Behaviour',
        },
        {
            title: "Churn",
            description: "Same brief of the notebook description",
            imgUrl: projImg2,
            link: "https://github.com/leandromjunior/portfolio-projects-/tree/efdde1f080cf96be77e6643edefea02cfaf69fc2/Churn",
        },
        {
            title: "Recommendation System",
            description: "Same brief of the notebook description",
            imgUrl: recommender,
            link: "https://github.com/leandromjunior/portfolio-projects-/tree/efdde1f080cf96be77e6643edefea02cfaf69fc2/Recommendation%20System",
        },
        {
            title: "Market Segmentation",
            description: "Same brief of the notebook description",
            imgUrl: projImg1,
        },
        {
            title: "Exoplanets Habitability Index",
            description: "Same brief of the notebook description",
            imgUrl: projImg1,
        },
    ]
    return (
        <section className="project" id="project">
           <Container>
                <Row>
                    <Col>
                    <TrackVisibility>
                        {({isVisible}) =>
                        <div className={isVisible ? "animate__animated animate__bounce" : ""}>
                        <h2>Projects</h2>
                        <p>Here you will see some recently projects made by me</p>
                        </div>}
                    </TrackVisibility>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                            <Nav.Item>
                            <Nav.Link eventKey="first">Some Projects</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                            <Nav.Link eventKey="second">Scientific Articles</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                            <Nav.Link eventKey="third">EDA</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <Row>
                                   {
                                        projects.map((project, index) => {
                                            return (
                                                <ProjectCard key={index} {...project} />
                                            )
                                        })
                                   } 
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">Lorem</Tab.Pane>
                            <Tab.Pane eventKey="third">Ipsum</Tab.Pane>                          
                        </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container> 
            <img className="background-image-right" src={colorSharp2} alt=""></img>
        </section>
    )
}