import React from "react";
import { shallow } from "enzyme";
import expenses from "../fixtures/expenses.js";
import ExpenseListItem from "../../components/ExpenseListItem.js";

test("Should render ExpenseListItem from expenses", () => {
  const wrapper = shallow(
    <ExpenseListItem
      description={expenses.description}
      id={expenses.id}
      amount={expenses.amount}
      createdAt={expenses.createdAt}
    />
  );
  expect(wrapper).toMatchSnapshot();
});
