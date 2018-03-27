import { Grid, Row, Col, OverlayTrigger, Tooltip   } from 'react-bootstrap'; 
import React, { Component } from 'react'; 
import './../style/style.css'; 

export const TechPageInstance = () => { 
return (
  <div id='tech' className='tech' >
    <div className='tech-desc' >
      <Grid bsClass='container'>
        <Row>
          <Col sm={10} md={12} >
            We support various technologies.
          </Col>
        </Row>
      </Grid>
    </div>
    <div className='tech-client' >
      <Grid bsClass='container text-center'>
        <Row className='techHeader'>
          <Col sm={10} md={12} >
            Frontend Technologies
          </Col>
        </Row>
        <Row className='techs'>
          <Col sm={3} md={9} >
            <Grid bsClass='container text-center'>
              <Row className='techs'>
                <Col sm={3} md={4} >
                  <i className="icon-angular techIcon"></i>
                  <span>Angular</span>
                </Col>
                <Col sm={3} md={4} >
                  <i className="icon-d3 techIcon"></i>
                  <span>D3</span>
                </Col>
                <Col sm={3} md={4} >
                  <i className="icon-reactjs techIcon"></i>
                  <span>Reactjs</span>
                </Col>
              </Row>
              <Row className='techs'>
                <Col sm={3} md={4} >
                  <i className="icon-bootstrap techIcon"></i>
                  <span>Bootstrap</span>
                </Col>
                <Col sm={3} md={4} >
                  <i className="icon-jquery techIcon"></i>
                  <span>Jquery</span>
                </Col>
                <Col sm={3} md={4} >
                  <i className="icon-sass techIcon"></i>
                  <span>Sass</span>
                </Col>
              </Row>
              <Row className='techs'>
                <Col sm={3} md={4} >
                  <i className="icon-javascript-alt techIcon"></i>
                  <span>Javascript</span>
                </Col>
                <Col sm={3} md={4} >
                  <i className="icon-backbone techIcon"></i>
                  <span>Backbone</span>
                </Col>
                <Col sm={3} md={4} >
                  <i className="icon-html5-alt techIcon"></i>
                  <span>HTML/CSS</span>
                </Col>
              </Row>
            </Grid>
          </Col>
          <Col sm={3} md={3} >
            <div className='techs-details'>We support various web technologies.</div>
          </Col>
        </Row>
      </Grid>
    </div>
    <div className='tech-server' >
      <Grid bsClass='container text-center'>
        <Row className='techHeader'>
          <Col sm={10} md={12} >
            Web Technologies
          </Col>
        </Row>
        <Row className='techs'>
          <Col sm={3} md={9} >
            <Grid bsClass='container text-center'>
              <Row className='techs'>
                <Col sm={3} md={4} >
                  <i className="icon-python techIcon color-white"></i>
                  <span className="color-white">Python</span>
                </Col>
                <Col sm={3} md={4} >
                  <i className="icon-nodejs techIcon color-white"></i>
                  <span className="color-white">Nodejs</span>
                </Col>
                <Col sm={3} md={4} >
                  <i className="icon-php techIcon color-white"></i>
                  <span className="color-white">PHP</span>
                </Col>
              </Row>
              <Row className='techs'>
                <Col sm={3} md={4} >
                  <i className="icon-java-bold techIcon color-white"></i>
                  <span className="color-white">Java</span>
                </Col>
                <Col sm={3} md={4} >
                  <i className="icon-jetty techIcon color-white"></i>
                  <span className="color-white">Jetty</span>
                </Col>
                <Col sm={3} md={4} >
                  <i className="icon-spring techIcon color-white"></i>
                  <span className="color-white">Spring</span>
                </Col>
              </Row>
              <Row className='techs'>
                <Col sm={3} md={4} >
                  <i className="icon-apache techIcon color-white"></i>
                  <span className="color-white">Apache</span>
                </Col>
                <Col sm={3} md={4} >
                  <i className="icon-tomcat techIcon color-white"></i>
                  <span className="color-white">Tomcat</span>
                </Col>
                <Col sm={3} md={4} >

                </Col>
              </Row>
            </Grid>
          </Col>
          <Col sm={3} md={3} >
            <div className='techs-details color-white'>We support various web technologies.</div>
          </Col>
        </Row>
      </Grid>
    </div>
    <div className='tech-misc' >
      <Grid bsClass='container text-center'>
        <Row className='techHeader'>
          <Col sm={10} md={12} >
            More Technologies
          </Col>
        </Row>
        <Row className='techs'>
          <Col sm={3} md={9} >
            <Grid bsClass='container text-center'>
              <Row className='techs'>
                <Col sm={3} md={4} >
                  <i className="icon-docker techIcon"></i>
                  <span>Docker</span>
                </Col>
                <Col sm={3} md={4} >
                  <i className="icon-nginx techIcon"></i>
                  <span>NGINX</span>
                </Col>
                <Col sm={3} md={4} >
                  <i className="icon-mongodb techIcon"></i>
                  <span>Mongodb</span>
                </Col>
              </Row>
              <Row className='techs'>
                <Col sm={3} md={4} >
                  <i className="icon-cassandra techIcon"></i>
                  <span>Cassandra</span>
                </Col>
                <Col sm={3} md={4} >
                  <i className="icon-mssql techIcon"></i>
                  <span>Mssql</span>
                </Col>
                <Col sm={3} md={4} >
                  <i className="icon-aws techIcon"></i>
                  <span>AWS</span>
                </Col>
              </Row>

            </Grid>
          </Col>
          <Col sm={3} md={3} >
            <div className='techs-details'>We support various web technologies.</div>
          </Col>
        </Row>
      </Grid>
    </div>

  </div>
  ); 
};