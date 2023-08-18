import React from "react";
import { useGlobalState } from "../context/GlobalState";

function TransactionItem({ transaction }) {
  const { deleteTransaction } = useGlobalState();

  return (
    <li key={transaction.id}>
      <p>{transaction.description}</p>
      <span>{transaction.amount}</span>
      <button
        onClick={() => {
          deleteTransaction(transaction.id);
        }}
      >
        delete
      </button>
    </li>
  );
}

export default TransactionItem;
