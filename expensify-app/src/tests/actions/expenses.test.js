import { addExpense, editExpense, removeExpense } from "../../actions/expenses";

test("Should setup remove expense action object", () => {
  const action = removeExpense({ id: "glorious" });
  expect(action).toEqual({
    type: "REMOVE_EXPENSE",
    id: "glorious"
  });
});

test("Should allow edit action", () => {
  const action = editExpense("123", { note: "New note" });
  expect(action).toEqual({
    type: "EDIT_EXPENSE",
    id: "123",
    updates: {
      note: "New note"
    }
  });
});

test("Should set up add expense action object with provided values", () => {
  const expenseData = {
    description: "rent",
    amount: 3923,
    createdAt: 10000,
    note: "Meh"
  };
  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      ...expenseData,
      id: expect.any(String)
    }
  });
});

test("Should set up add expense action object with default", () => {
  const action = addExpense();
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      description: "",
      amount: 0,
      createdAt: 0,
      note: "",
      id: expect.any(String)
    }
  });
});
