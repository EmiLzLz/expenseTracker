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
      <div className="App h-full flex flex-col items-center justify-between">
        <Header />
        <div className="app-container flex flex-col justify-between border rounded-lg h-auto p-2 bg-slate-800">
          <div className="columns w-full container grid grid-cols-1 md:grid-cols-2">
            <div className="container mx-auto">
              <IncomeExpenses />
              <Balance />
              <TransactionForm />
            </div>
            <ExpenseChart />
          </div>

          <TransactionList />
        </div>
        <Footer />
      </div>
    </GlobalProvider>
  );
}

export default App;
