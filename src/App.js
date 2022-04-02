import { useState } from "react"
import React from 'react';
import './App.css';
// import ExpenseItem from "./components/ExpenseItem";
import Expenses from './components/Expenses';
// import Newcompform from './components/Addnewcomp/Newcompform';
import Newcomponent from './components/Addnewcomp/Newcomponent';


function App() {
  // const months =["January", "february","March", "April", "May", "june", "july", "Aug", "Sep", "Oct", "Nov", "Dec"];
 const dummyData = [
   {
     id:"exp1",
     date: new Date( 2020, 5, 22),
     item: "New tv",
     price: 799.49,

   },
   {
    id:"exp2",
    date: new Date( 2021, 3, 28),
    item: "Car Insurance",
    price: 99.49,

  },
  {
    id:"exp2",
    date: new Date( 2022, 2, 24),
    item: "New Laptop",
    price: 49000,

  },
 ];

 const [expenseData, setExpenseData] = useState(dummyData);
//  console.log(expenseData[0]);
const getNewformData =(dataObj)=>{
  alert("hi from Aps.js");
  console.log(dataObj);
   setExpenseData([dataObj, ...expenseData]);
  // expenseData.push(dataObj);
  console.log(expenseData);
}
return(
  <div>
    <React.Fragment>
    <Newcomponent sendDataApps ={getNewformData}/>
    <div className="expense-bg">
    <Expenses  expenseData = {expenseData} />
    </div>
    </React.Fragment>
     
      
  </div>
);
}

export default App;
