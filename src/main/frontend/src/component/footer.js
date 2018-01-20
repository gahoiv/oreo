import { Glyphicon, Grid, Row, Col, Button } from 'react-bootstrap';
import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import './../style/style.css';

const gridInstance = (
  <Grid bsClass='container text-center'>
    <Row className="show-grid">
      <Col sm={10} md={12} > <h1>Codeoreo</h1><a href="mailto:contactus@codeoreo.com" style={{color: 'aliceblue', textDecoration: 'none'}}>support@codeoreo.com</a></Col>
    </Row>
    <Row className="footer-font">
      <Col sm={10} md={5} > © Copyright 2018 Codeoreo. All trademarks and registered trademarks are the property of their respective owners.</Col>
      <Col sm={10} md={2} > Credits</Col>
      <Col sm={10} md={5} > <a href="mailto:contactus@codeoreo.com" style={{color: 'aliceblue', textDecoration: 'none'}}>support@codeoreo.com</a></Col>
    </Row>
  </Grid>
);


export const FooterInstance  = () => {
  return (
    <section>
      <div id='footer' className='footer'>
        {gridInstance}
      </div>
    </section> 
  );
};