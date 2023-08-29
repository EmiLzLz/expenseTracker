import React, { useState } from "react";
import { useGlobalState } from "../context/GlobalState";

function TransactionForm() {
  const { addTransaction } = useGlobalState();
  const [description, setDescription] = useState();
  const [amount, setAmount] = useState(0);

  //funcion para evento onSubmit
  const saveTransaction = (e) => {
    e.preventDefault();
    addTransaction({
      id: window.crypto.randomUUID(),
      description,
      amount: +amount, //convert string to number
    });
    setAmount(0);
    setDescription("");
  };

  return (
    <div className="form-container">
      <form
        className="form flex flex-col items-start w-auto py-8 gap-4"
        onSubmit={saveTransaction}
      >
        <input
          className="rounded-lg border border-slate-200 p-1 text-white bg-black"
          type="text"
          placeholder="Add a description..."
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />
        <input
        className="rounded-lg border border-slate-200 p-1 text-white bg-black"
          type="number"
          step={"0.01"}
          placeholder="0.00"
          onChange={(e) => setAmount(e.target.value)}
          value={amount}
        />
        <button className="bg-cyan-300 rounded-lg px-2 py-1 font-medium">
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default TransactionForm;
