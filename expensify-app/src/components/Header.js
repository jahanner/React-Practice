import React from 'react';
import {NavLink} from 'react-router-dom';

const linkTo = (route, text) => { {/*quick function to set up links*/}
    if(route === '/'){
      return <NavLink to={route} activeClassName='is-active' exact={true}>{text}</NavLink>
  }
  else {
    return <NavLink to={route} activeClassName='is-active'>{text}</NavLink>
  };
}

const Header = () => (
  <header>
    <h1>Expensify</h1>
    <p>
      {linkTo('/edit', 'Edit Page')}
    </p>
    <p>
      {linkTo('/help', 'Help Page')}
    </p>
    <p>
      {linkTo('/', 'Home Page')}
    </p>
    <p>
      {linkTo('/create', 'AddExpense Page')}
    </p>
  </header>
)

export default Header;
