import React from "react";
import { useGlobalState } from "../context/GlobalState";

function Balance() {
  const { transactions } = useGlobalState();

  const amounts = transactions.map((transaction) => transaction.amount);

  //al acumulador se le suma el item para obtener un total
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <div>
      <h2>BALANCE</h2>
      <h4>${total}</h4>
      
    </div>
  );
}

export default Balance;
