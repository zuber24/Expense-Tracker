import React from 'react'
import "./Chartlist.css"

const Chartlist = (props) => {

  let barHeight= "0%";

  if(props.maxValue > 0){
    barHeight = ((props.value / props.maxValue) * 100)+ "%";
     console.log(barHeight);
  }
  

  
  return (
    <div className='chart-bar'>
        <div className='chart-bar_inner'>
          <div className='chart-bar_fill'style={{height:barHeight}}></div>
        </div>
        <div className='chart-bar_label'>{props.label}</div>
    </div>
  )
}

export default Chartlist