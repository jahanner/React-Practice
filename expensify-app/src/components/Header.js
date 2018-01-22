import React from 'react';
import {NavLink} from 'react-router-dom';

const linkTo = (route, text) => { {/*quick function to set up links*/}
    if(route === '/'){
      return <p><NavLink to={route} activeClassName='is-active' exact={true}>{text}</NavLink></p>
  }
  else {
    return <p><NavLink to={route} activeClassName='is-active'>{text}</NavLink></p>
  };
}

const Header = () => (
  <header>
    <h1>Expensify</h1>
      {linkTo('/help', 'Help Page')}
      {linkTo('/', 'Home Page')}
      {linkTo('/create', 'AddExpense Page')}
      {linkTo('/edit', 'Expense')}
  </header>
)

export default Header;
