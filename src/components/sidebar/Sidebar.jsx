/* eslint-disable no-unused-vars */
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import "./sidebar.css"
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling


const Sidebar = ({navList, href, title}) => {
    const dot = {
        color: '#fbfcf5',
        border: 'none',
    };

    return (
        <section>
            <div className="container sticky top-0">
            <div className="row">
                <div className="col">
                    {[false].map((index,expand) => (
                            <Navbar key={index} expand="lg" className="mb-3 bg-transparent border-none">
                            <Container>
                              <Navbar.Brand href="#home" className="fw-semibold logo fs-1" style={{ fontSize: '1.1rem', color:'#fbfcf5' }}>{title} <b style={dot}>.</b></Navbar.Brand>
                              <Navbar.Toggle aria-controls="basic-navbar-nav" />
                              <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="ms-auto gap-5">
                                  { navList.map((item,index)=>(
                                    <Nav.Link href= {href[index]} key = {index} className=" fw-semibold menu-item" style={{ fontSize: '1.1rem', color:'#fbfcf5' }}> {item} </Nav.Link>
                                  ))}
                                </Nav>
                              </Navbar.Collapse>
                            </Container>
                          </Navbar>              
                    ))}
                </div>
            </div>
            </div>
        </section>
      );
}

export default Sidebar;