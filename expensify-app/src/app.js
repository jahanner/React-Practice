import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const ExpenseDashboardPage = () => (
  <div>
    Expensify Dashboard
  </div>
);

const AddExpensePage = () => (
  <div>
    Expensify add expense page
  </div>
);

const EditExpensePage = () => (
  <div>
    Expensify edit expense page
  </div>
);

const HelpPage = () => (
  <div>
    Expensify help page
  </div>
);

const NotFoundPage = () => (
  <div>
    404 - <Link to='/'>Home Page</Link>
  </div>
);

const linkTo = (route, text) => {
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

const routes = (
  <BrowserRouter>
    <div>
    <Header/>
    <Switch>
      <Route path='/' component={ExpenseDashboardPage} exact={true}/>
      <Route path='/create' component={AddExpensePage}/>
      <Route path='/edit' component={EditExpensePage}/>
      <Route path='/help' component={HelpPage}/>
      <Route component={NotFoundPage}/>
    </Switch>
  </div>
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById("app"));
