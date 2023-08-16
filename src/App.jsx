import Balance from "./components/Balance";
import Footer from "./components/Footer";
import Header from "./components/Header";
import TransactionForm from "./components/TransactionForm";
import TransactionList from "./components/TransactionList";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <div className="App">
        <Header/>
        <Balance/>
        <TransactionForm/>
        <TransactionList/>
        <Footer/>
      </div>
    </GlobalProvider>
  );
}

export default App;
