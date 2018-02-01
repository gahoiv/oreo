import { Grid, Row, Col, OverlayTrigger, Tooltip   } from 'react-bootstrap'; 
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
        <Row className='techs'>
          <Col sm={3} md={3} > 
            <i className="icon-apache techIcon"></i>
            <span>Apache</span>
          </Col>
          <Col sm={3} md={3} > 
            <i className="icon-docker techIcon"></i>
            <span>Docker</span>
          </Col>
          <Col sm={3} md={3} > 
            <i className="icon-git techIcon"></i>
            <span>Git</span>
          </Col>
          <Col sm={3} md={3} > 
            <i className="icon-tomcat techIcon"></i>
            <span>Tomcat</span>
          </Col>
        </Row>
        <Row className='techs'>
          <Col sm={3} md={3} > 
            <i className="icon-nginx techIcon"></i>
            <span>NGINX</span>
          </Col>
          <Col sm={3} md={3} > 
            <i className="icon-jetty techIcon"></i>
            <span>Jetty</span>
          </Col>
          <Col sm={3} md={3} > 
            <i className="icon-grunt techIcon"></i>
            <span>Grunt</span>
          </Col>
          <Col sm={3} md={3} > 
            <i className="icon-wordpress techIcon"></i>
            <span>Wordpress</span>
          </Col>
        </Row>
        <Row className='techs'>
          <Col sm={3} md={3} > 
            <i className="icon-mongodb techIcon"></i>
            <span>Mongodb</span>
          </Col>
          <Col sm={3} md={3} > 
            <i className="icon-cassandra techIcon"></i>
            <span>Cassandra</span>
          </Col>
          <Col sm={3} md={3} > 
            <i className="icon-mssql techIcon"></i>
            <span>Mssql</span>
          </Col>
          <Col sm={3} md={3} > 
            <i className="icon-angular techIcon"></i>
            <span>Angular</span>
          </Col>
        </Row>
        <Row className='techs'>
          <Col sm={3} md={3} > 
            <i className="icon-backbone techIcon"></i>
            <span>Backbone</span>
          </Col>
          <Col sm={3} md={3} > 
            <i className="icon-bootstrap techIcon"></i>
            <span>Bootstrap</span>
          </Col>
          <Col sm={3} md={3} > 
            <i className="icon-d3 techIcon"></i>
            <span>D3</span>
          </Col>
          <Col sm={3} md={3} > 
            <i className="icon-jquery techIcon"></i>
            <span>Jquery</span>
          </Col>
        </Row>
        <Row className='techs'>
          <Col sm={3} md={3} > 
            <i className="icon-reactjs techIcon"></i>
            <span>Reactjs</span>
          </Col>
          <Col sm={3} md={3} > 
            <i className="icon-spring techIcon"></i>
            <span>Spring</span>
          </Col>
          <Col sm={3} md={3} > 
            <i className="icon-aws techIcon"></i>
            <span>AWS</span>
          </Col>
          <Col sm={3} md={3} > 
            <i className="icon-java-bold techIcon"></i>
            <span>Java</span>
          </Col>
          
        </Row>
        <Row  className='techs'>
          <Col sm={3} md={3} > 
            <i className="icon-javascript-alt techIcon"></i>
            <span>Javascript</span>
          </Col>
          <Col sm={3} md={3} > 
            <i className="icon-nodejs techIcon"></i>
            <span>Nodejs</span>
          </Col>
          <Col sm={3} md={3} > 
            <i className="icon-python techIcon"></i>
            <span>Python</span>
          </Col>
          <Col sm={3} md={3} > 
            <i className="icon-sass techIcon"></i>
            <span>Sass</span>
          </Col>
        </Row>
        <Row  className='techs'>
          <Col sm={3} md={3} > 
            <i className="icon-css3 techIcon"></i>
            <span>CSS</span>
          </Col>
          <Col sm={3} md={3} > 
            <i className="icon-html5-alt techIcon"></i>
            <span>Html</span>
          </Col>
          <Col sm={3} md={3} > 
            <i className="icon-azure techIcon"></i>
            <span>Azure</span>
          </Col>
          <Col sm={3} md={3} > 
            <i className="icon-php techIcon"></i>
            <span>PHP</span>
          </Col>
        </Row>
      </Grid>
    </div>
  ); 
};