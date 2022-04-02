import React from "react"
import "./ExpenseDate.css";

const ExpenseDate = ({expenseData, months}) =>{
 const month = expenseData.date.toLocaleString("en-us",{month:"long"});
 const year = expenseData.date.getFullYear();
 const date = expenseData.date.getDate(); 
   
   return(
        <div className="expense-data">
    
            <div className="expense-data_month">{month}</div>
            <div className="expense-data_year">{year}</div>
            <div className="expense-data_date">{date}</div>

        </div>



    );

}

export default ExpenseDate;