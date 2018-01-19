import React from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import ExpenseDashboardPage from '../components/ExpenseDashboard.js';
import AddExpensePage from '../components/AddExpense.js';
import EditExpensePage from '../components/EditExpense.js';
import HelpPage from '../components/HelpPage.js';
import Header from '../components/Header.js';
import NotFoundPage from '../components/NotFound.js';


const AppRouter = () => (
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

export default AppRouter;
