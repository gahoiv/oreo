import { Jumbotron, Button, FormControl, Grid, Row, Col, Clearfix , FormGroup, Form, Accordion, Panel} from 'react-bootstrap';
import React, { Component } from 'react';
import './../style/style.css';

const gridInstance = (
  <Grid bsClass='text-center'>
    <Row className="show-grid">
      <Col sm={10} md={12} > <h1>Frequently Asked Questions</h1></Col>
    </Row>
    <Row className="show-grid text-normal">
      <Col sm={10} md={12} > 
      <Accordion>
  <Panel header="I want to build a Website or overhaul my existing Web presence. Can you help?" eventKey="1">
  Of Course, we code, consult and help design your Web portal or Website. Whether it is building an idea from scratch or editing existing code to improve the User Interface, we are right there to help! 
  </Panel>
  <Panel header="I have an idea of what I want to build but not sure how to go about it?" eventKey="2">
  Leave that to us. We will help you chalk out a plan, Our Architects are the best in business. 
  We propose plans and help you scale your idea in a realistic and approachable way.
  </Panel>
  <Panel header="Do you guys code?" eventKey="3">
  Hell-yeah! We are the best at it. Our Architects, Coders and Tech guys are the best.
  </Panel>
  <Panel header="Why do I require Technology Consulting?" eventKey="4">
  Because, technology constantly changes and scaling is expensive. There are costs and time is limited. That is why you require paid-advice to overseas the overall architecture, scalability and design of your tech idea.
  </Panel>
  <Panel header="I am a Startup, how does Tech Consulting help me?" eventKey="5">
  As a Startup, you need to worry about funding, legal, financial and so many troubles. Dedicated people to help solve Tech problems is a boon. 
  </Panel>
  <Panel header="How can we start things?" eventKey="6">
  Phone, Skype, Slack, Google Duo or an in-person meeting. We are communicito on all.
  </Panel>
</Accordion>
      </Col>
    </Row>
  </Grid>
);

export const FAQInstance  = () => {
  return (
    <section>
      <div id='faqs' className='faq'>
        {gridInstance}
      </div>
   </section> 
  );
};