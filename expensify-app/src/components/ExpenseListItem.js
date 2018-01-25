import React from 'react';
import { connect } from 'react-redux';
import { removeExpense } from '../actions/expenses';

const ExpenseListItem = ({description, amount, createdAt, props}) => (
  <div>
    <h3>{description}</h3>
    <p>{amount} - {createdAt}</p>
    <button onClick={(e) => {
      props.dispatch(removeExpense(e.target.id));
    }}>Remove</button>
  </div>
);

export default connect()(ExpenseListItem);
