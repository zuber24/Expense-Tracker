import React from "react";
import "./Filteryear.css"


const Filteryear=(props)=> {
  return(
   <div className="filter">
     <label> Filter By Year</label>
     <select onChange= {(e) => {props.filterYear(e.target.value); props.updateFilteryear="All"}}>
     <option value="All"> All </option>
       <option value="2022"> 2022 </option>
       <option value="2021"> 2021 </option>
       <option value="2020"> 2020 </option>
       <option value="2019"> 2019 </option>
       <option value="2018"> 2018 </option>
     </select>
   </div>
    
  );
}

export default Filteryear;