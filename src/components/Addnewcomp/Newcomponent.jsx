import React from "react"
import "./Newcomponent.css"
import Newcompform from "./Newcompform"


const Newcomponent=({sendDataApps})=>{

const getNewformData =(dataObj)=>{
    alert("hi from getNewformData");
    // console.log(dataObj);
    sendDataApps(dataObj);
}
      //  const [show, setShow]= useState(false){
      //    return(

      //    ) 
      //  }
    //    const changeShow  =()=>{
    //        let 
    //        setShow("true!")
       
      //  }
// const Addform = () => {

//     setnewform(<Newcompform sendData = {getNewformData} />);
//     setaddbutton();

// }

// const [newform, setnewform] = useState();
// const [addbutton, setaddbutton] = useState(<div className="AddBtn"><button onClick={Addform}>Add New Component</button></div>);

      
   
    return(
        <>
      {/* {newform}
      {addbutton} */}
        
        <div>
        {/* <div className="AddBtn">
        
        <button onClick={()=>setShow(!show)} >Add new Expense</button> 
          </div> */}
            <Newcompform sendData={getNewformData}/>
            {/* <div className="AddBtn">
            <button >Add new Expense</button>
        </div> */}
            
            </div>
        
       
         
         
        </>
    ); 

    }
export default Newcomponent;