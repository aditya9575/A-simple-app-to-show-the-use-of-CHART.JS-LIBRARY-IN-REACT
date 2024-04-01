import React from 'react'

import {Pie} from "react-chartjs-2"

import {
Chart as ChartJS,
ArcElement,
Tooltip,
Legend,
} from "chart.js"
import { pieChartData } from '../FAKE_DATA.JS'


// now we register the above components we imported from chart.js with our ChartJs , without doing this nothing will be 
// displayed in our website 
ChartJS.register(
    ArcElement,
    Tooltip,
    Legend,       
)


const PieGraph = () => {

 //we make objects for options and data and we will then use these names of the objects inside the actual and their respective 
    // options and data fields of our line component 
    const options = { }

  return (
    <div>

    <Pie options={options} data={pieChartData}/>
    
    </div>
  )
}

export default PieGraph