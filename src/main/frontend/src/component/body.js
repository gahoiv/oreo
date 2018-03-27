import React, { Component } from 'react';
import { DescInstance } from './desc';
import { FAQInstance } from './faq';
import { GetStaredInstance } from './get-started';
import { HomeInstance } from './home';
import { CustInstance } from './cust';
import { HIWInstance } from './hiw';
import { AboutUSInstance } from './aboutus';
import { WhatWeDoInstance } from './what-we-do';
import { FooterInstance } from './footer';


import './../style/style.css';

export const BodyInstance  = () => {
  return (
    <div className='body'>
      <HomeInstance/>
      <WhatWeDoInstance/>
      <HIWInstance/>
      <CustInstance/>
      <AboutUSInstance/>
      <FAQInstance/>
      <GetStaredInstance/>
      <FooterInstance/>
    </div>
  );
};