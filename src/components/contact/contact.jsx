/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable no-unused-vars */
import React from "react";
import { Linkedin } from "react-bootstrap-icons";
import { Envelope } from "react-bootstrap-icons";
import { Mailbox } from "react-bootstrap-icons";
import { Github } from "react-bootstrap-icons";
import "./contact.css"
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

const Contact = () => {
    return (
        <footer style={{ backgroundColor:'#1e1e1e' }}>
            <div className="container">
                <Row className="text-center">
                    <Col className="p-5" style={{ backgroundColor: '#1E1E1E' }}>
                        <a target="_blank" href="https://www.linkedin.com/in/clarien-cahyono-a60a0a277/" style={{ backgroundColor: '#1E1E1E' }} rel="noreferrer"><Linkedin className="fs-3 mx-4 text-white" style={{ backgroundColor: '#1E1E1E' }}></Linkedin></a>
                        <a target="_blank" href="https://github.com/pomfuu" style={{ backgroundColor: '#1E1E1E' }}><Github className="fs-3 mx-4 text-white" href="https://github.com/pomfuu" style={{ backgroundColor: '#1E1E1E' }}></Github></a>
                        <a target="_blank" href="https://mail.google.com/mail/?view=cm&fs=1&to=alincahyono@gmail.com&su=SUBJECT&body=BODY" style={{ backgroundColor: '#1E1E1E' }}><Envelope className="fs-3 mx-4 text-white" style={{ backgroundColor: '#1E1E1E' }}></Envelope></a>
                    </Col>
                </Row>
            </div>
        </footer>
    )
}

export default Contact