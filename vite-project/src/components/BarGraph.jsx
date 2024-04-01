import React from 'react'

import {Bar} from "react-chartjs-2"

import {
Chart as ChartJS,
CategoryScale,
LinearScale,
BarElement,
Title,
Tooltip,
Legend,
} from "chart.js"
import { barChartData } from '../FAKE_DATA.JS'


// now we register the above components we imported from chart.js with our ChartJs , without doing this nothing will be 
// displayed in our website 
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,       
)

const BarGraph = () => {

  //we make objects for options and data and we will then use these names of the objects inside the actual and their respective 
    // options and data fields of our line component 
    const options = { }

  return (
    <div>
    
{/* we here now use the bar component and require two arguments in it that are options and data */}
<Bar options={options} data={barChartData}/>

    </div>
  )
}

export default BarGraph