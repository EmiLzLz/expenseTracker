import React from "react";
import { useGlobalState } from "../context/GlobalState";
import TransactionItem from "./TransactionItem";

function TransactionList() {
  const { transactions,  } = useGlobalState();
  return (
    <div>
      {transactions.map((transaction) => (
        <TransactionItem transaction={transaction} key={transaction.id}/>
      ))}
    </div>
  );
}

export default TransactionList;
