

import React, { useState } from "react";

function AddTransactionForm({transactions,setTransactions,}) {
// const[transactions,setTransactions] =useState([]);
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");


  function me(){

    if (date === ""|| category=== ""||description===""|| amount==="") {
      return;
    }
    const data ={
      date,description,category ,amount
      
    };



    console.log(data);
    let newArray=[...transactions];
    newArray.push(data);
    console.log(newArray);
     setTransactions (newArray);

    
  }
  // console.log(date)
  // console.log(description)
  // console.log(category)
  // console.log(amount)

  return (
    <div className="ui segment">
      <div className="ui form">
        <div className="inline fields">
          
          <input
            type="date"
            name="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
       
          <input
            type="text"
            name="description"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
         
          <input
            type="text"
            name="category"
            placeholder="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        
          <input
            type="number"
            name="amount"
            placeholder="Amount"
            step="0.01"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        
        <button className="ui button" type="submit"  onClick={me}>
          Add Transaction
        </button>
      </div>
    </div>
  );
}

export default AddTransactionForm;
