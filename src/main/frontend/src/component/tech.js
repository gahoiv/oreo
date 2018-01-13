import { PageHeader, Navbar, Nav, NavItem, NavDropdown, MenuItem, Carousel, Glyphicon } from 'react-bootstrap'; 
import React, { Component } from 'react'; 
import './../style/style.css'; 

export const TechPageInstance = () => { 
  return (
    <div id='tech' className='tech' >
      <Carousel controls={false} pauseOnHover={false} interval={2000}>
        <Carousel.Item>
          <div className='techIconContainer'>
            <div className='techIcon angular'>
            </div>
          </div>
          <div className='techIconContainer'>
            <div className='techIcon babel'>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className='techIconContainer'>
            <div className='techIcon css'>
            </div>
          </div>
          <div className='techIconContainer'>
            <div className='techIcon ext'>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className='techIconContainer'>
            <div className='techIcon java'>
            </div>
          </div>
          <div className='techIconContainer'>
            <div className='techIcon hibernate'>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className='techIconContainer'>
            <div className='techIcon mongo'>
            </div>
          </div>
          <div className='techIconContainer'>
            <div className='techIcon nginx'>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className='techIconContainer'>
            <div className='techIcon spring'>
            </div>
          </div>
          <div className='techIconContainer'>
            <div className='techIcon springboot'>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  ); 
};