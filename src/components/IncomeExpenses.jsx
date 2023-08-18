import React from 'react'
import { useGlobalState } from '../context/GlobalState'

function IncomeExpenses() {
  const {transactions} = useGlobalState();

  //get just amount property of the transactions
  const amounts = transactions.map(transaction => transaction.amount)

  const income = amounts
  .filter(item => item > 0 )
  .reduce((acc, item) => (acc += item), 0); //reduce allows join a previous value and a next value

  //negative values
  const expense = amounts
  .filter(item => item < 0)
  .reduce((acc, item) => (acc += item), 0) * -1;

  return (
    <>
      <div>
        <h3>Income</h3>
        <h4>{income}</h4>
      </div>
      <div>
        <h3>Expense</h3>
        <h4>{expense}</h4>
      </div>
    </>
  )
}

export default IncomeExpenses