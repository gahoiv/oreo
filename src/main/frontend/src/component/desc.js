import { Jumbotron, Button, FormControl, Grid, Row, Col, Clearfix , FormGroup, Form} from 'react-bootstrap';
import React, { Component } from 'react';
import './../style/style.css';

const gridInstance = (
  <div className=' desc1'>
  <Grid bsClass='container'>
    <Row className="show-grid">
      <Col sm={10} md={12} > <h1>Frequently Asked Questions</h1></Col>
    </Row>
    <Row className="show-grid  pd80">
      <Col sm={10} md={12} > <p>No SDKs, No Installations, No Updates. In other words, none of that boring stuff.Start now and get productive creating apps immediately.</p></Col>
    </Row>
  </Grid>
  </div>
);


export const DescInstance  = () => {
  return (
    <section>
      <div id='desc' className='desc'>
        {gridInstance}
      </div>
   </section> 
  );
};