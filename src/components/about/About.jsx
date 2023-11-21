/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from 'react';
import './about.css';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import Profile from '../../assets/user2.png';
import TypeWriter from './Typewritter';

const About = () => {
  const txtElementRef = useRef(null);

  useEffect(() => {
    const words = JSON.parse(txtElementRef.current.getAttribute('data-words'));
    const wait = txtElementRef.current.getAttribute('data-wait');
    new TypeWriter(txtElementRef.current, words, wait);
  }, []);

  return (
    <div className="container about">
      <div className="row align-items-center justify-content-center mx-auto py-5">
        <div className="col">
          <div className="d-flex justify-content-center align-items-center">
            <div className="col-md-3 user-pfp me-5">
              <Image src={Profile} alt="heee" roundedCircle fluid />
            </div>
            <div className="col-md-8 minheight">
              <p className="name fs-3">Hi! my name is <b>Clarien Cahyono</b></p>
              <h1
                ref={txtElementRef}
                className="txt-type fw-semibold"
                data-wait="2500"
                data-words='["Front-End Developer","UI/UX Designer", "Digital Illustrator"]'
                style={{ fontSize: '4rem' }}
              ></h1>
              <p className="pt-3">a fifth-semester student with passion in UI/UX design, Front-End development, and Web Development. I firmly believe that a good design can create seamless digital experiences that enhance user interactions!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;