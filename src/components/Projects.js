import React from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import churnImg from "../assets/img/churn_image.jpg";
import recommender from "../assets/img/Recommender_.png";
import customerB from "../assets/img/customer_behavior.jpg";
import article from "../assets/img/article3-2.png";
import article2 from "../assets/img/article.jpg";
import earthImg from "../assets/img/earth_image.jpg";
import cluster from "../assets/img/clustering-algorithms.jpg";
import houses from "../assets/img/houses.jpg";
import tcc from "../assets/doc/TCC - Leandro Motta Junior.pdf";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

    const projects = [
        {
            title: "Exoplanets Habitability Index",
            description: "Machine learning project focused on identifying potentially habitable planets",
            imgUrl: article2,
            link: "https://colab.research.google.com/drive/1Qywe2MvGUxUKX8NACx4Xk-eLRFnehYPl?usp=sharing",
        },
        {
            title: "House Price Prediction",
            description: "Regressor model to predict Houses' price",
            imgUrl: houses,
            link: "https://colab.research.google.com/drive/1Tv44auKjx3LIe1eyj076W4g0kDYLIIMy?usp=sharing",
        },
        {
            title: "Customer Behaviour",
            description: "Based on the independent features, we want to estimate if the customer will purchase a product or not.",
            imgUrl: customerB,
            link: 'https://colab.research.google.com/drive/1m9oOlAhllEBpDc9BK3aKJTvVnOYBr05v?usp=sharing',
        },
        {
            title: "Churn",
            description: "Model to predict the probability of costumers churning",
            imgUrl: churnImg,
            link: "https://colab.research.google.com/drive/1984BnSUQfbNhoHsZGaOUzxabCx_b_1-e?usp=sharing",
        },
        {
            title: "Recommendation System",
            description: "Simple NLP model to recommend hotels based on the people's trip characteristics",
            imgUrl: recommender,
            link: "https://colab.research.google.com/drive/1w7Qjr7hPCz0mCFkKLag5ypGp8lQrRVGg?usp=sharing",
        },
        {
            title: "In Progress",
            description: "Earth Similarity Index predictive model under construction",
            imgUrl: earthImg,
        },
        {
            title: "Energy Consumption",
            description: "Cluster to measure the energy concumption of a population",
            imgUrl: cluster,
            link: "https://colab.research.google.com/drive/1UfmTROWuNqO7wgflmIBj84kri1nMIOk2?usp=sharing",
        },    
    ]

    const articles = [
        {
            title: "Towards a Machine Learning Approach for Facilitating Exoplanet Habitability Discovery",
            description: "Introducing a machine learning model for identifying habitable exoplanets using a concise set of variables related to planetary location and host star characteristics.",
            imgUrl: article,
            link: tcc,
        }
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
                        <p>Here you will see some recently projects and articles made by me</p>
                        </div>}
                    </TrackVisibility>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                            <Nav.Item>
                            <Nav.Link eventKey="first">Some Projects</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                            <Nav.Link eventKey="second">Articles</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                            <Nav.Link eventKey="third">Deployments</Nav.Link>
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
                            <Tab.Pane eventKey="second">
                                <Row>
                                {
                                        articles.map((project, index) => {
                                            return (
                                                <ProjectCard key={index} {...project} />
                                            )
                                        })
                                   }
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="third">Some implemented models</Tab.Pane>                          
                        </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container> 
            <img className="background-image-right" src={colorSharp2} alt=""></img>
        </section>
    )
}