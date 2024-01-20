import { ExpenseList } from '../ExpenseList/ExpenseList';
import {useState} from 'react';
import { NewExpense } from '../NewExpense/NewExpense';
import './Expenses.css';

export const Expenses = () => {
  const [expenses, setExpenses] = useState([]);
	return <div>
    <NewExpense expenses={expenses} setExpenses={setExpenses}/>
    <ExpenseList expenses={expenses} setExpenses={setExpenses}/>
  </div>;
};
