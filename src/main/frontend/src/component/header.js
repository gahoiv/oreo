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
      </Nav>
      <Nav pullRight>
        <NavItem eventKey={2} href="#get-started" className='navItem'>GET STARTED</NavItem>
        <NavDropdown eventKey={3} className='navItem' title="HOW IT WORKS" id="basic-nav-dropdown">
          <MenuItem eventKey={3.1} href="#tech" className='navItem'>TECHNOLOGIES</MenuItem>
          <MenuItem eventKey={3.1} href="#hiw" className='navItem'>CONSULTING</MenuItem>
          <MenuItem eventKey={3.1} href="#about" className='navItem'>ABOUT US</MenuItem>
          <MenuItem eventKey={3.2} href="#faqs" className='navItem'>FAQS</MenuItem>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

const headerInstance = (
  <Grid bsClass='containerHead'>
    <Row>
      <Col sm={10} md={3} > <FontAwesome name='info-circle' className='containerHeadIcon'/>We are currently in a limited, invite-only alpha.</Col>
      <Col sm={10} md={9} > 
        <FontAwesome name='envelope' className='containerHeadIcon'/>
        <span>
          <a href="mailto:support@codeoreo.com" style={{color: '#4CB377', textDecoration: 'none'}}>support@codeoreo.com</a>
        </span>
      </Col>
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
