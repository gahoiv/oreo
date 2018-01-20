import { Jumbotron, Button, FormControl, Grid, Row, Col, Clearfix , FormGroup, Form} from 'react-bootstrap';
import React, { Component } from 'react';
import './../style/style.css';

const gridInstance = (
  <Grid bsClass='container text-center'>
    <Row className="aboutTitle">
      <Col sm={10} md={12} > About Us</Col>
    </Row>
    <Row className="aboutTitle-title">
      <Col sm={10} md={12} > Present yourself to the whole world</Col>
    </Row>
    <Row className="aboutTitle-desc">
      <Col sm={10} md={12} >Using all those ultra-necessary features of the Monstroid WordPress theme you can make a website in just a few hours. Monstroid offers a variety of pre-designed child themes for multiple business niches. Building a store is also not a big deal with a set of pre-designed product pages.</Col>
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