import React, { useState } from "react";
import { useGlobalState } from "../context/GlobalState";

function TransactionForm() {
  const {addTransaction} = useGlobalState();
  const [description, setDescription] = useState();
  const [amount, setAmount] = useState(0);

  //funcion para evento onSubmit
  const saveTransaction = (e) => {
    e.preventDefault();
    addTransaction({
      id: window.crypto.randomUUID(),
      description,
      amount: +amount //convert string to number
    });
    setAmount(0);
    setDescription("");
  }

  return (
    <div>
      <form onSubmit={saveTransaction}>
        <input
          type="text"
          placeholder="Add a description"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />
        <input
          type="number"
          step={"0.01"}
          placeholder="0.00"
          onChange={(e) => setAmount(e.target.value)}
          value={amount}
        />
        <button>Add Transaction</button>
      </form>
    </div>
  );
}

export default TransactionForm;
