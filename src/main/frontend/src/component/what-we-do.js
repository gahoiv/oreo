import { Jumbotron, Button, FormControl, Grid, Row, Col, PanelGroup, Panel, PanelBody} from 'react-bootstrap';

import React, { Component } from 'react'; 
import './../style/style.css'; 

const card = (
    <div className='card'>
      <Row className='rowHeader'>
          <Col sm={10} md={12} >We Are</Col>
      </Row>
      <Row className='rowHeader-title'>
          <Col sm={10} md={12} >Retina-Ready & Responsive</Col>
      </Row>
      <Row className='rowHeader-desc'>
          <Col sm={10} md={12} >The entire idea of the retina-ready technology is to give sharper images, and to create something that would look as sharp as it would in print. This is what you will find in the Monstroid WordPress theme. All users, no matter what devices they’re using, will be able to browse your Monstroid-powered site without any lags due to the responsive nature of this theme.</Col>
      </Row> 
    </div>
  );

  const card1 = (
    <div className='card'>
      <Row className='rowHeader'>
          <Col sm={10} md={12} >We Have</Col>
      </Row>
      <Row className='rowHeader-title'>
          <Col sm={10} md={12} >Amazing MotoPress Slider</Col>
      </Row>
      <Row className='rowHeader-desc'>
          <Col sm={10} md={12} >With MotoPress Slider you can create slides and galleries with layer based animations, meaning that you can add as much elements as you need, and supply each and every with a particular animation type. This plugin is absolutely ideal for powering up beautiful slideshows and giving them smooth animation. You’ll benefit from a simple and intuitive setup interface and will be able to create responsive slideshows.</Col>
      </Row> 
    </div>
  );

  const card2 = (
    <div className='card'>
      <Row className='rowHeader'>
          <Col sm={10} md={12} >We Offer</Col>
      </Row>
      <Row className='rowHeader-title'>
          <Col sm={10} md={12} >Free updates & Support</Col>
      </Row>
      <Row className='rowHeader-desc'>
          <Col sm={10} md={12} >In case something goes wrong you’re free to contact our support team that is available 24/7, all the year round. This is a life-time option, meaning that becoming the customer of TemplateMonster you can use support team’s services any time, for no cost at all. Also becoming the owner of Monstroid theme you will get free updates also forever!</Col>
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