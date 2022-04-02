import React, { useState } from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate.jsx';

const ExpenseItem = (props) => {

  // const [description, setdescription]= useState(props.expenseData.item);
  const [clearbtn, setclearbtn]= useState("Update Now !");
  const [reset, setreset]= useState ("Reset");

 const UpdateHandler =()=>{
  //  setdescription("Update!");
   setclearbtn("Clear !");
 }
 const resetHandler =()=>{
   setreset("Reset");
  //  setdescription(props.expenseData.item);
   setclearbtn("Update Now!");
 }
   return(
  <div className="exp-item">
    <ExpenseDate expenseData = {props.expenseData} />
    

    <div className="expense-item">
      {props.expenseData.item}
    </div>
    <div className="price-btn">
      $ {props.expenseData.price} 
      </div>
      <div className='btn'>
        <button onClick={UpdateHandler} className="btn1" >{clearbtn}</button>
        <button onClick={resetHandler} className="btn2" >{reset}</button>
      </div>
      
     </div>
   );
   
}

export default ExpenseItem;