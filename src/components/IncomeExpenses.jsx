import React from 'react'
import { useGlobalState } from '../context/GlobalState'

function IncomeExpenses() {
  const {transactions} = useGlobalState();

  //get just amount property of the transactions
  const amounts = transactions.map(transaction => transaction.amount)

  const income = amounts
  .filter(item => item > 0 )
  .reduce((acc, item) => (acc += item), 0) //reduce allows join a previous value and a next value
  .toFixed(2);

  //negative values
  const expense = amounts
  .filter(item => item < 0)
  .reduce((acc, item) => (acc += item), 0)
  .toFixed(2) * -1;

  return (
    <div className='income-container container py-4 flex flex-col gap-5'>
      <div>
        <h3 className='text-base text-center md:text-left md:text-lg lg:text-xl text-white'>Income</h3>
        <h4 className="text-base text-center md:text-left md:text-lg font-semibold text-white">{income}</h4>
      </div>
      <div>
        <h3 className='text-base text-center md:text-left md:text-lg lg:text-xl text-white'>Expense</h3>
        <h4 className="text-base text-center md:text-left md:text-lg font-semibold text-white">{expense}</h4>
      </div>
    </div>
  )
}

export default IncomeExpenses