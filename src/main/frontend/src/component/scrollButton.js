import React, { Component } from 'react';

let intervalId = null;
const scrollStep = e =>  {
  if (window.pageYOffset === 0) {
      clearInterval(intervalId);
  }
  window.scroll(0, window.pageYOffset - 50);
};
const scrollToTop = e =>  {
  intervalId = setInterval(scrollStep,15);
};
  export const ScrollButton  = () => {
    return (
      <button title='Back to top' className='scroll' 
        onClick={ () => { scrollToTop(); }}>
        <span className='arrow-up glyphicon glyphicon-chevron-up'></span>
      </button> 
    );
  };