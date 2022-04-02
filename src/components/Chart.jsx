import React from 'react'
import "./Chart.css"
import Chartlist from './Chartlist'

const chart = (props) => {

  let chartDataPoints = [
    {label:"Jan",price : 0},
    {label:"Feb",price : 0},
    {label:"Mar",price : 0},
    {label:"Apr",price : 0},
    {label:"May",price : 0},
    {label:"Jun",price : 0},
    {label:"July",price : 0},
    {label:"Aug",price : 0},
    {label:"Sep",price : 0},
    {label:"Oct",price : 0},
    {label:"Nov",price : 0},
    {label:"Dec",price : 0},
  ];
for (let record of props.filteredRecord){
    let month = record.date.getMonth();
  chartDataPoints[month].price += record.price;
}
let pricesArray = props.filteredRecord.map(row => row.price);
console.log(...pricesArray);
let maxPrice = Math.max(...pricesArray)
console.log(maxPrice);

  console.log(props.filteredRecord);

  
  return (
    <div className='chart'>
        <Chartlist label="Jan" value={799} maxValue={1000}/>
        <Chartlist label="Feb" value={599} maxValue={1000}/>
        <Chartlist label ="Mar" value={499} maxValue={1000}/>
    </div>
  )
}

export default chart