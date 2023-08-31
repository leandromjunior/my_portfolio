import React from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";

export const Projects = () => {

    const projects = [
        {
            title: "Customer Behavior",
            description: "Same brief of the notebook description",
            imgUrl: projImg1,
        },
        {
            title: "Churn",
            description: "Same brief of the notebook description",
            imgUrl: projImg2,
        },
        {
            title: "Recomendation System",
            description: "Same brief of the notebook description",
            imgUrl: projImg3,
        },
        {
            title: "Customer Behavior",
            description: "Same brief of the notebook description",
            imgUrl: projImg1,
        },
        {
            title: "Customer Behavior",
            description: "Same brief of the notebook description",
            imgUrl: projImg1,
        },
    ]
    return (
        <section className="project" id="project">
           <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p>Lorem Ipsum</p>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                            <Nav.Item>
                            <Nav.Link eventKey="first">Tab 1</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                            <Nav.Link eventKey="second">Scientific Articles</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                            <Nav.Link eventKey="third">Tab 3</Nav.Link>
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
            <img className="background-image-right" src={colorSharp2}></img>
        </section>
    )
}