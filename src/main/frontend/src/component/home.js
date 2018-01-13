import { Jumbotron, Button } from 'react-bootstrap';
import React, { Component } from 'react';
import './../style/style.css';
import FontAwesome from 'react-fontawesome';

const gridInstance = (
  <Jumbotron bsClass='homeContent'>
    <h1>Deciding to use which Tech is like staring into an Abyss, we help you decide.</h1>
    <p>We consult and help scale the Tech for your company.</p>
    <p><Button bsSize='large' href='#get-started'>Getting Started</Button></p>
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