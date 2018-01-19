import React from 'react';
import {linkTo} from './Header.js';

const PortfolioPage = () => (
  <div>
    <h1>Stuff</h1>
    <p>stuff i did</p>
    <p>{linkTo(`/portfolio/1`, 'Option One')}</p>
    <p>{linkTo(`/portfolio/2`, 'Option Two')}</p>
  </div>
);

export default PortfolioPage;
