import React from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import Header from '../components/Header.js';
import NotFoundPage from '../components/NotFound.js';
import Portfolio from '../components/Portfolio.js';
import HomePage from '../components/HomePage.js';
import ContactPage from '../components/ContactPage.js';
import PortfolioPage from '../components/PortfolioPage.js';


const AppRouter = () => (
  <BrowserRouter>
    <div>
    <Header/>
    <Switch>
      <Route path='/' component={HomePage} exact={true}/>
      <Route path='/portfolio' component={PortfolioPage} exact={true}/>
      <Route path='/portfolio/:id' component={Portfolio}/>
      <Route path='/contact' component={ContactPage}/>
      <Route component={NotFoundPage}/>
    </Switch>
  </div>
  </BrowserRouter>
);

export default AppRouter;


//Portfolio router
//Show header/nav bar on all pages including 404

//       /         -> Home page (in nav)
//      /Portfolio -> Portfolio home page with links to items (in nav)
//      /Portfolio/123 -> Individual Portfolio item page that shows the ID
//     /contact        -> Contact page (in nav)
