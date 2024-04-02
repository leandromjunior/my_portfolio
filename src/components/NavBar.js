import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React, { useState, useEffect } from 'react';
import logo from 'C:/Users/Usuario/Desktop/my_portfolio/src/assets/img/logo.svg';
import navIcon1 from 'C:/Users/Usuario/Desktop/my_portfolio/src/assets/img/nav-icon1.svg';
import navIcon2 from 'C:/Users/Usuario/Desktop/my_portfolio/src/assets/img/nav-icon2.svg';
import navIconGit from 'C:/Users/Usuario/Desktop/my_portfolio/src/assets/img/nav-icon-github-3.svg';

export const NavBar = () => {
    const [activeLink, setActivateLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if(window.scrollY > 50) {
                setScrolled(true);
            }
            else {
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);

    }, [])

    const onUpdateActiveLink = (value) => {
        setActivateLink(value);
    }

    return (
        <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
            <Container>
                <Navbar.Brand href="/">
                    
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggle-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                    <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                    <Nav.Link href="#project" className={activeLink === 'project' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('project')}>Projects</Nav.Link>                
                </Nav>
                <span className='navbar-text'>
                    <div className='social-icon'>
                        <a href='#'><img src={navIcon1} alt="" /></a>
                        <a href='https://github.com/leandromjunior' target="_blank" rel="noopener noreferrer"><img src={navIconGit} alt="" /></a>
                    </div>
                    <button className='vvd' onClick={() => console.log('connect')}><span>Contact</span></button>
                </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
  );
}