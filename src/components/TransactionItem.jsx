import React from "react";
import { useGlobalState } from "../context/GlobalState";

function TransactionItem({ transaction }) {
  const { deleteTransaction } = useGlobalState();

  return (
    <li className="p-3 rounded-lg flex flex-col items-center justify-center gap-2 bg-black w-52" key={transaction.id}>
      <p className="text-base md:text-lg text-white">{transaction.description}</p>
      <span className="font-medium text-white">{transaction.amount}</span>
      <button className="rounded-lg bg-red-600 text-white font-medium px-2"
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
