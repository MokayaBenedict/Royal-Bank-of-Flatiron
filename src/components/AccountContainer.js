import React,{ useState,useEffect }from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer() {
  const [transactions,setTransactions] = useState([]);
const getTransactions=() =>{
};
useEffect(() => {
  // Fetch transactions from the backend
  fetch('http://localhost:8001/transactions')
    .then(response => response.json())
    .then(data => setTransactions(data));

    
  getTransactions()
  

}, []);
  return (
    <div>
      <Search transactions={transactions}
       setTransactions={setTransactions}
       getTransactions={getTransactions}/>
      <AddTransactionForm 
      transactions= {transactions}
      setTransactions={setTransactions}
      getTransactions={getTransactions}
      />
      <TransactionsList  transactions={transactions}/>
   </div>
  );
  }

export default AccountContainer;
