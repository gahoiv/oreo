import { Glyphicon, Grid, Row, Col, Button } from 'react-bootstrap';
import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import './../style/style.css';

const gridInstance = (
  <Grid bsClass='container text-center'>
    <Row className="show-grid pd100">
      <Col sm={10} md={8} className="inline-grid"> 
        <h3 className='h3-class'>Build your first web app using Codeoreo now</h3>
      </Col>
      <Col sm={10} md={4} className="inline-grid"> 
        <Button bsSize='large' bsStyle='link' className='btn-access' href='#get-started' >Get Early Access</Button> 
      </Col>
    </Row>
    <Row className="show-grid">
      <Col sm={10} md={12} > <h1>Codeoreo</h1><a href="mailto:support@codeoreo.com" style={{color: 'aliceblue', textDecoration: 'none'}}>support@codeoreo.com</a></Col>
    </Row>
    <Row className="show-grid social">
    <Col sm={10} md={5} />
    <Col sm={10} md={1} > <FontAwesome name='twitter' /></Col>
    <Col sm={10} md={1} > <FontAwesome name='facebook' /></Col>
    <Col sm={10} md={4} />
    </Row>
    <Row className="show-grid footer-font">
      <Col sm={10} md={5} > © Copyright 2017 Codeoreo. All trademarks and registered trademarks are the property of their respective owners.</Col>
      <Col sm={10} md={2} > Credits</Col>
      <Col sm={10} md={5} > <a href="mailto:support@codeoreo.com" style={{color: 'aliceblue', textDecoration: 'none'}}>support@codeoreo.com</a></Col>
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