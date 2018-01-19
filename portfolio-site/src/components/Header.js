import React from 'react';
import {NavLink} from 'react-router-dom';

export const linkTo = (route, text) => { {/*quick function to set up links*/}
    if(route === '/' || route === '/portfolio'){
      return <NavLink to={route} activeClassName='is-active' exact={true}>{text}</NavLink>
  }
  else {
    return <NavLink to={route} activeClassName='is-active'>{text}</NavLink>
  };
}

const Header = () => (
  <header>
    <h1>Portfolio</h1>
    <p>{linkTo('/', 'Home Page')}</p>
    <p>{linkTo('/portfolio', 'Portfolio')}</p>
    <p>{linkTo('/contact', 'Contact Page')}</p>
  </header>
)

export default Header;


//Portfolio router
//Show header/nav bar on all pages including 404

//       /         -> Home page (in nav)
//      /Portfolio -> Portfolio home page with links to items (in nav)
//      /Portfolio/123 -> Individual Portfolio item page that shows the ID
//     /contact        -> Contact page (in nav)
