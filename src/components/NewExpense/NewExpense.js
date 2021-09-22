import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isClicked, setIsClicked] = useState(false);

  const startEditingHandler = () => {
    setIsClicked(true);
  };

  const stopEditingHandler = () => {
    setIsClicked(false);
  };

  const saveExpenseDatahandler = (enteredUserInput) => {
    const expenseData = {
      ...enteredUserInput,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsClicked(false);
  };

  return (
    <div className="new-expense">
      {isClicked ? (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDatahandler}
          onCancel={stopEditingHandler}
        />
      ) : (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
    </div>
  );
};

export default NewExpense;
