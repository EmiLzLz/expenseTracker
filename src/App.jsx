import Balance from "./components/Balance";
import ExpenseChart from "./components/ExpenseChart";
import Footer from "./components/Footer";
import Header from "./components/Header";
import IncomeExpenses from "./components/IncomeExpenses";
import TransactionForm from "./components/TransactionForm";
import TransactionList from "./components/TransactionList";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <div className="App">
        <Header/>
        <IncomeExpenses/>
        <Balance/>
        <TransactionForm/>
        <ExpenseChart/>
        <TransactionList/>

        <Footer/>
      </div>
    </GlobalProvider>
  );
}

export default App;
