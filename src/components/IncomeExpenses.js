import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';

export const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);
  const amount = transactions.map(transaction => transaction.amount);
  console.log(amount);
  const income = amount.reduce((acc, item)=> item > 0 ? acc+item : acc+0,0);
  console.log(income);
  const expense = amount.reduce((ac, item)=> item < 0 ? ac+Math.abs(item) : ac+0,0);
  return (
    <div className="inc-exp-container">
        <div>
            <h4>Income</h4>
            <p id="money-plus" className="money plus"> {income}</p>
        </div>
        <div>
            <h4>Expense</h4>
            <p id="money-minus" className="money minus">{expense}</p>
        </div>
    </div>
  )
}
