import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import colorSharp2 from "../assets/img/color-sharp2.png";

export const Me = () => {
    
    return (
        <section className="me" id="me">
            <Container>
                <Row className="nav-pills mb-5 justify-content-center align-items-center">
                    <Col>
                        <p></p>
                        <h2>About Me</h2>
                        <p>I am a data enthusiast and an astronomy lover. I believe that everything is explained by the data, making it one of the main tools to change the course of the world.</p>
                        <p>I spend a lot of my free time programming, learning about new topics, and thinking about ways to combine technology with large datasets from the universe for the greater good and how this fusion can be useful for us to advance in any type of search. I am often analyzing, visualizing and creating models with data in end-to-end data science projects that commonly begin from collecting data from different sources and end with delivering the results, when feasible, these models are integrated and deployed in an interactive system.</p>
                        <p>When I'm not working on personal projects, I'm enjoying writing articles in scientific formats and participating in competitions on Kaggle with friends and challenges on HackerRank. I am always looking to improve my knowledge in statistics, programming and various other topics to apply them to projects. Much of my learning comes from books, online platforms (like Udemy, edX, Youtube) and networking with people who share the same interest. I am enormously grateful to the educators who pass on knowledge to me and to the colleagues with whom I share it.</p>
                        <p>One of my goals is to be able to pass on this knowledge given to me in the best possible way as soon as possible.</p>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2} alt=""></img>
        </section>
    )
}