import { Jumbotron, Button, FormControl, Grid, Row, Col, Clearfix , FormGroup, Form, Carousel, Glyphicon } from 'react-bootstrap';
import React, { Component } from 'react';
import './../style/style.css';

const gridInstance = (
  <Grid bsClass='container text-center'>
    <Row className="show-grid">
      <Col sm={10} md={12} > <h1>How it Works</h1></Col>
    </Row>
    <Row className="show-grid  pd80">
      <Col sm={10} md={12} > <p>No SDKs, No Installations, No Updates. In other words, none of that boring stuff.Start now and get productive creating apps immediately.</p></Col>
    </Row>
  </Grid>
);
const HiwPageInstance = (
    <Carousel controls={false} pauseOnHover={false} interval={2000}>
      <Carousel.Item>
        <div className='coverImg code5'>
          <Carousel.Caption>
            <h3>We make developing Website and Web Applications look easy. </h3>
          </Carousel.Caption>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className='coverImg code3'>
          <Carousel.Caption>
            <h3>We are funky, experienced, and just how tech people should be. Lets meet or talk tech. </h3>
          </Carousel.Caption>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className='coverImg code6'>
          <Carousel.Caption>
            <h3>Leave your coding worries to us, we get stuff done!</h3>
          </Carousel.Caption>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className='coverImg code7'>
          <Carousel.Caption>
            <h3>Leave your coding worries to us, we get stuff done!</h3>
          </Carousel.Caption>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className='coverImg code'>
          <Carousel.Caption>
            <h3>Confused or Worried on how to build an idea.</h3>
            <p> we can help you chart a crystal clear roadmap.</p>
          </Carousel.Caption>
        </div>
      </Carousel.Item>
    </Carousel>
);

export const HIWInstance  = () => {
  return (
    <section>
      <div id='hiw' className='hiw'>
        {HiwPageInstance}
      </div>
    </section> 
  );
}