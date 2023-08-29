import React from "react";
import { useGlobalState } from "../context/GlobalState";
import TransactionItem from "./TransactionItem";

function TransactionList() {
  const { transactions,  } = useGlobalState();
  return (
    <div className="transactions-container container flex items-center justify-center mx-auto overflow-x-scroll pb-2 gap-12">
      {transactions.map((transaction) => (
        <TransactionItem transaction={transaction} key={transaction.id}/>
      ))}
    </div>
  );
}

export default TransactionList;
