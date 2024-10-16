import React, { useState } from 'react'
import CardNumber from './components/CardNumber'
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { Pie } from "react-chartjs-2";
import PieChart from './components/PieChart';
import { BarChart } from './components/BarChart';
import LineChart from './components/LineChart';

const Home = () => {
    const Data = [
        {
            id: 1,
            year: 2016,
            userGain: 80000,
            userLost: 823
        },
        {
            id: 2,
            year: 2017,
            userGain: 45677,
            userLost: 345
        },
        {
            id: 3,
            year: 2018,
            userGain: 78888,
            userLost: 555
        },
        {
            id: 4,
            year: 2019,
            userGain: 90000,
            userLost: 4555
        },
        {
            id: 5,
            year: 2020,
            userGain: 80000,
            userLost: 3000
        }
    ];
    const [chartData, setChartData] = useState({
        labels: Data.map((data) => data.year),
        datasets: [
            {
                label: "Users Gained ",
                data: Data.map((data) => data.userGain),
                backgroundColor: [
                    "rgba(75,192,192,1)",
                    "#ecf0f1",
                    "#50AF95",
                    "#f3ba2f",
                    "#2a71d0"
                ],
                borderColor: "white",
                borderWidth: 2,
                
            }
        ]
    });



    return (
        <>
            <div className='flex  justify-around'>
                <CardNumber name={"Ventas del mes"} number={"2599"} color={'orange'} />
                <CardNumber name={"Ventas del mes"} number={"2599"} color={'green'} />
                <CardNumber name={"Ventas del mes"} number={"2599"} color={'indigo'} />
                <CardNumber name={"Ventas del mes"} number={"2599"} color={'blue'} />
            </div>

            <div className='flex justify-around '>
            <PieChart chartData={chartData} />
            <BarChart chartData={chartData} />

            </div>
            
            <div className='flex justify-center mt-12  '>
            <LineChart chartData={chartData} />

            </div>

        </>
    )
}

export default Home