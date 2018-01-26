import { PageHeader, Navbar, Nav, NavItem, NavDropdown, MenuItem, Carousel, Grid, Row, Col } from 'react-bootstrap';
import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import './../style/style.css';

const navbarInstance = (
  <Navbar inverse={true} staticTop={true} fluid={true}>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#">CODEOREO</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <NavItem eventKey={1} href="#hiw" className='navItem'>HOW WE CAN HELP</NavItem>
        <NavItem eventKey={2} href="#tech" className='navItem'>TECHNOLOGIES</NavItem>
        <NavItem eventKey={3} href="#wwd" className='navItem'>CONSULTING</NavItem>
        <NavItem eventKey={4} href="#about" className='navItem'>ABOUT US</NavItem>
        <NavItem eventKey={5} href="#faqs" className='navItem'>FAQS</NavItem>
      </Nav>
      <Nav pullRight>
        <NavItem eventKey={6} href="#get-started" className='navItem'>GET STARTED</NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

const headerInstance = (
  <Grid bsClass='containerHead'>
    <Row>
      <Col sm={10} md={12} >&nbsp;</Col>
    </Row>
  </Grid>
);

export const HeaderInstance  = () => {
  return (
    <div>
      {headerInstance}
      {navbarInstance}
    </div>
  );
};
