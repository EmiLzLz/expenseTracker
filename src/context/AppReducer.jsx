//reducer
export default (state, action) => {
  //OPERACIONES DEL APP REDUCER
  switch (action.type) {
    //Operacion #1
    case "ADD_TRANSACTION":
      return {
        ...state,
        transactions: [...state.transactions, action.payload],
      };

    case "DELETE_TRANSACTION":
      return{
        ...state,
        transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
      }
    default:
      return state;
  }
};
