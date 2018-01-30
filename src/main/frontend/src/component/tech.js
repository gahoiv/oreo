import { Grid, Row, Col } from 'react-bootstrap'; 
import React, { Component } from 'react'; 
import './../style/style.css'; 

export const TechPageInstance = () => { 
return (
    <div id='tech' className='tech' >
      <Grid bsClass='container text-center'>
        <Row className='techHeader'>
          <Col sm={10} md={12} > 
            Technologies supported
          </Col>
        </Row>
        <Row>
          <Col sm={2} md={2} > 
            <i className="icon-apache techIcon"></i>
          </Col>
          <Col sm={2} md={2} > 
            <i className="icon-docker techIcon"></i>
          </Col>
          <Col sm={2} md={2} > 
            <i className="icon-git techIcon"></i>
          </Col>
          <Col sm={2} md={2} > 
            <i className="icon-tomcat techIcon"></i>
          </Col>
          <Col sm={2} md={2} > 
            <i className="icon-nginx techIcon"></i>
          </Col>
          <Col sm={2} md={2} > 
            <i className="icon-npm techIcon"></i>
          </Col>
        </Row>
        <Row>
          <Col sm={10} md={2} > 
            <i className="icon-jetty techIcon"></i>
          </Col>
          <Col sm={10} md={2} > 
            <i className="icon-grunt techIcon"></i>
          </Col>
          <Col sm={10} md={2} > 
            <i className="icon-wordpress techIcon"></i>
          </Col>
          <Col sm={10} md={2} > 
            <i className="icon-mongodb techIcon"></i>
          </Col>
          <Col sm={10} md={2} > 
            <i className="icon-cassandra techIcon"></i>
          </Col>
          <Col sm={10} md={2} > 
            <i className="icon-mssql techIcon"></i>
          </Col>
        </Row>
        <Row>
          <Col sm={10} md={2} > 
            <i className="icon-angular techIcon"></i>
          </Col>
          <Col sm={10} md={2} > 
            <i className="icon-backbone techIcon"></i>
          </Col>
          <Col sm={10} md={2} > 
            <i className="icon-bootstrap techIcon"></i>
          </Col>
          <Col sm={10} md={2} > 
            <i className="icon-d3 techIcon"></i>
          </Col>
          <Col sm={10} md={2} > 
            <i className="icon-jquery techIcon"></i>
          </Col>
          <Col sm={10} md={2} > 
            <i className="icon-reactjs techIcon"></i>
          </Col>
        </Row>
        <Row>
          <Col sm={10} md={2} > 
            <i className="icon-spring techIcon"></i>
          </Col>
          <Col sm={10} md={2} > 
            <i className="icon-aws techIcon"></i>
          </Col>
          <Col sm={10} md={2} > 
            <i className="icon-java-bold techIcon"></i>
          </Col>
          <Col sm={10} md={2} > 
            <i className="icon-javascript-alt techIcon"></i>
          </Col>
          <Col sm={10} md={2} > 
            <i className="icon-nodejs techIcon"></i>
          </Col>
          <Col sm={10} md={2} > 
            <i className="icon-python techIcon"></i>
          </Col>
        </Row>
        <Row>
          <Col sm={10} md={2} > 
            <i className="icon-sass techIcon"></i>
          </Col>
          <Col sm={10} md={2} > 
            <i className="icon-css3 techIcon"></i>
          </Col>
          <Col sm={10} md={2} > 
            <i className="icon-html5-alt techIcon"></i>
          </Col>
          <Col sm={10} md={2} > 
            <i className="icon-css techIcon"></i>
          </Col>
          <Col sm={10} md={2} > 
            <i className="icon-azure techIcon"></i>
          </Col>
          <Col sm={10} md={2} > 
            <i className="icon-php techIcon"></i>
          </Col>
        </Row>
      </Grid>
    </div>
  ); 
};