import React from 'react'

import {Line} from "react-chartjs-2"

import {
Chart as ChartJS,
CategoryScale,
LinearScale,
PointElement,
LineElement,
Title,
Tooltip,
Legend,
} from "chart.js"
import { lineChartData } from '../FAKE_DATA.JS'


// now we register the above components we imported from chart.js with our ChartJs , without doing this nothing will be 
// displayed in our website 
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,       
)

const LineGraph = () => {

    //we make objects for options and data and we will then use these names of the objects inside the actual and their respective 
    // options and data fields of our line component 
    const options = { }


  return (
    <div>

<Line options={options} data={lineChartData} />

    </div>
  )
}

export default LineGraph