import React,{useState} from "react"
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Filteryear from "./Addnewcomp/Filteryear";
import Chart from "./Chart";

const Expenses = ({expenseData})=> {

    const [updateFilteryear, setUpdateFilteryear] = useState("All");
    console.log(updateFilteryear);

    const filterYear =(year)=>{
        // console.log(year)
        setUpdateFilteryear(year);

    }
    
    let filteredRecord = expenseData.filter((exp)=>{

        if(updateFilteryear === "All"){
            return exp

        }
        else{

        

     return exp.date.getFullYear().toString() === updateFilteryear.toString();
    }
    //   return 
    //   console.log(exp.date.getfullyear());
    });
    
    return(
    //     <div>
    //   <ExpenseItem expenseData = {expenseData[0]} months = {months}/>
    //   <ExpenseItem expenseData = {expenseData[1]} months = {months}/>
    //   <ExpenseItem expenseData = {expenseData[2]} months = {months}/>
    //     </div>

<div> 
    <div>
    <Filteryear filterYear={filterYear} updateFilteryear={updateFilteryear}/>
    <div>
        <Chart filteredRecord = {filteredRecord}/>
    </div>
    </div>
   {
      filteredRecord.length === 0 && 
      <h1 className="no-found">No Record Found</h1>
   }
    {
    filteredRecord.length > 0 &&
    filteredRecord.map((row) => {
        return(


        <div className="expense_list">

            <ExpenseItem key={row.id} expenseData = {row}/>
            </div>
        );
    })}
    </div>
    
    );
 
}
    
    
 
    
export default Expenses;