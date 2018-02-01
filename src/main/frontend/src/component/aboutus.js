import { Jumbotron, Button, FormControl, Grid, Row, Col, Clearfix , FormGroup, Form} from 'react-bootstrap';
import React, { Component } from 'react';
import './../style/style.css';

const gridInstance = (
  <Grid bsClass='container text-center'>
    <Row className="aboutTitle">
      <Col sm={10} md={12} > About Us</Col>
    </Row>
    <Row className="aboutTitle-title">
      <Col sm={10} md={12} >Build a Web platform that people remember</Col>
    </Row>
    <Row className="aboutTitle-desc">
      <Col sm={10} md={12} >Its all about experience now, the better your Web presence, the more they buy from you. whatever you are selling - an idea, or service or product or supporting a community. Great Websites lead to great connections.</Col>
    </Row>
  </Grid>
);


export const AboutUSInstance  = () => {
  return (
    <section>
      <div id='about' className='about'>
        {gridInstance}
      </div>
   </section> 
  );
};