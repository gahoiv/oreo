import { Jumbotron, Button, FormControl, Grid, Row, Col, PanelGroup, Panel, PanelBody} from 'react-bootstrap';

import React, { Component } from 'react'; 
import './../style/style.css'; 

const card = (
    <div className='card'>
      <Row className='rowHeader'>
          <Col sm={10} md={12} >We Are</Col>
      </Row>
      <Row className='rowHeader-title'>
          <Col sm={10} md={12} >Tech Consultants</Col>
      </Row>
      <Row className='rowHeader-desc'>
          <Col sm={10} md={12} >Building, maintaining, and upgrading Web-platforms has become so tough. We replace tough with easy. We can help you build an idea from scratch as well as upgrade an existing Website/Web platform.</Col>
      </Row> 
    </div>
  );

  const card1 = (
    <div className='card'>
      <Row className='rowHeader'>
          <Col sm={10} md={12} >We Have</Col>
      </Row>
      <Row className='rowHeader-title'>
          <Col sm={10} md={12} >Experience and Vision</Col>
      </Row>
      <Row className='rowHeader-desc'>
          <Col sm={10} md={12} >A decade of experience in Web and Content makes us what? Your future best friends in tech. We have build Startups and have spent considerable time in the Corporate honing our skills.</Col>
      </Row> 
    </div>
  );

  const card2 = (
    <div className='card'>
      <Row className='rowHeader'>
          <Col sm={10} md={12} >We Offer</Col>
      </Row>
      <Row className='rowHeader-title'>
          <Col sm={10} md={12} >Consultancy and Support</Col>
      </Row>
      <Row className='rowHeader-desc'>
          <Col sm={10} md={12} >We will help you plan, build and scale your existing Web platforms or help build a new one. Advising and Consulting on a regular basis, we help keep a check on your Tech progress and complexities.</Col>
      </Row> 
    </div>
  );


export const WhatWeDoInstance = () => { 
  return (
    <div id='wwd' className='whatWeDo' >
      <Grid bsClass='container'>
        <Row>
            <Col sm={10} md={4} > 
                {card}
            </Col>
            <Col sm={10} md={4} > 
                {card1}
            </Col>
            <Col sm={10} md={4} > 
                {card2}
            </Col>
        </Row>
      </Grid>
    </div>
  ); 
};