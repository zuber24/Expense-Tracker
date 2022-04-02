import React,{useState} from "react";
import "./Newcomform.css";




const Newcompform =({sendData})=>{

let [ title, settitle]= useState(" ");
let [ amount, setamount]=useState();
let [ date, setdate]= useState("");


const [viewForm, setViewForm]= useState(false)

// {
//     title : "",
//     amount :0,
//     date:"",

// });
const submitHandler = (e) =>{
    e.preventDefault();
    let dataObj = {
        // Title : data.title,
        // Amount: date.amount,
        // Date: date.date,

   id:Math.random().toString(),
    item: title,
    price: amount,
    date: new Date(date),
    };
    // console.log(dataObj);

    settitle("");
    setamount("");
    setdate("");

    sendData(dataObj);
    
}
//const onChangeHandler=(e) =>{
    // console.log(e.target.value);
    // var text = e.target.value;
    //console.log("Title",title);
    //settitle(e.target.value)
    // }
    return( 
    
        <div className="Newform">
            <form onSubmit={submitHandler} className={viewForm ?'D-Block' : 'D-None'}>
                <div id="inputBox1">
                    <label ><b>Title</b></label>
                    <input type="text" onChange={e => settitle(e.target.value)} value={title}/>
                    {/* <input type="text" onchange={e=> setdata({...data,title:target.value})}/> */}
                       
                </div>
                <div id="inputBox2">
                    <label><b>Amount</b></label>
                    <input type="number" onChange={e => setamount(e.target.value)} value={amount}/>
                </div><br/><br/>
                <div id="inputBox3">
                    <label><b>Date</b></label>
                    <input type="date" onChange={e => setdate(e.target.value)} value={date}/>
                </div> 
                <div div= "BTN">
                <button  type="submit" onClick={e=> setViewForm(!viewForm)}>Add Expense</button>
                
                </div>
            </form>
            <div  className={!viewForm ?'D-Block' : 'D-None'}>
            <button onClick={e=> setViewForm(!viewForm)} className='AddBtn' >Add new Expense</button>
        </div>
        </div>
        
    );

}
 export default Newcompform;
