import { Jumbotron, Button } from 'react-bootstrap';
import React, { Component } from 'react';
import './../style/style.css';
import FontAwesome from 'react-fontawesome';

const gridInstance = (
  <Jumbotron bsClass='homeContent'>
    <h1>"Web Consultants that help you plan, develop or Upgrade"</h1>
    <p>Leave the tech to us. We are awesome at it.</p>
    <p><Button bsSize='large' href='#get-started'>Let us get started!"</Button></p>
</Jumbotron>
);

export const HomeInstance  = () => {
  return (
    <section>
      <div id='home' className='homeDiv'>
        {gridInstance}
      </div>
    </section> 
  );
};