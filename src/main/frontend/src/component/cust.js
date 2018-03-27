import { Jumbotron, Button, FormControl, Grid, Row, Col, Clearfix , FormGroup, Form} from 'react-bootstrap';
import React, { Component } from 'react';
import './../style/style.css';

const gridInstance = (
  <Grid bsClass='container text-center'>
    <Row className="custTitle">
      <Col sm={10} md={12} >Our Customer</Col>
    </Row>
    <Row className="cust-details">
      <Col sm={10} md={4} className='cust-icon'></Col>
      <Col sm={10} md={8} className="cust-details">
Philips India Limited is a subsidiary of Royal Philips of the Netherlands, a leading health technology company focused on improving people’s health and enabling better outcomes across the health continuum from healthy living and prevention, to diagnosis, treatment and home care. </Col>
    </Row>
  </Grid>
);


export const CustInstance  = () => {
  return (
    <section>
      <div id='cust' className='cust'>
        {gridInstance}
      </div>
   </section> 
  );
};