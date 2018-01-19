import React from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';


const Portfolio = (props) => {
  console.log(props);
  return (
    <div>
    <h1>Some Stuff I did</h1>
    <p>With an id of {props.match.params.id}</p>
  </div>
  );
};

export default Portfolio;
