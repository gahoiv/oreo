import { Jumbotron, Button, FormControl, Grid, Row, Col, Clearfix , FormGroup, Form} from 'react-bootstrap';
import React, { Component } from 'react';
import './../style/style.css';

const gridInstance = (
  <Grid bsClass='container text-center'>
    <Row className="show-grid">
      <Col sm={10} md={12} > <h1>Do you have your address in web?</h1></Col>
    </Row>
    <Row className="show-grid">
      <Col sm={10} md={12} > <p>Drop us a mail and we can talk</p></Col>
    </Row>
    <Row className="show-grid pd80">
    <Col sm={3} md={3}/>
    <Col sm={3} md={6}>
        <Form>
        <FormGroup controlId="formHorizontalEmail">
          <Col sm={3} md={6}>
            <FormControl type="email" bsClass='transparent' placeholder="EMAIL ADDRESS" />
          </Col>
          <Col sm={3} md={6} className='formControl'>
            <Button bsSize='large' className='btn-email' >REQUEST INVITE</Button> 
          </Col>
        </FormGroup>
      </Form>
    </Col>  
    </Row>
  </Grid>
);


export const GetStaredInstance  = () => {
  return (
    <section>
      <div id='get-started' className='getStarted'>
        {gridInstance}
      </div>
    </section> 
  );
};