/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from 'react';
import './about.css';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import Profile from '../../assets/Frame 3.jpg';
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
            <div className="col-md-2 user-pfp me-4">
              <Image src={Profile} alt="heee" roundedCircle fluid classname="img-fluid" style={{ height: '12vw', width:'12vw', objectFit:'cover' }}/>
            </div>
            <div className="col-md-8 minheight">
              <p className="name fs-3">Hi! my name is <b>Jason Theofillus Gunawan</b></p>
              <h1
                ref={txtElementRef}
                className="txt-type fw-semibold"
                data-wait="2000"
                data-words='["Quality Assurance","UI/UX Designer", "System Analyst", "Business Analyst", "Data Analyst"]'
                style={{ fontSize: '4rem' }}
              ></h1>
              <p className="pt-3"> An fresh graduate student pursuing a degree in Information System Accounting & Auditing at Bina Nusantara University.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;