import React, { useEffect, useState } from 'react'
import CardNumber from './components/CardNumber'
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { Pie } from "react-chartjs-2";
import PieChart from './components/PieChart';
import { BarChart } from './components/BarChart';
import LineChart from './components/LineChart';
import axios from 'axios';
import moment from 'moment';


const Home = () => {

    const [report, setReport] = useState([]);
    const [chartData, setChartData] = useState({});
    moment.lang('es', {
        months: 'Enero_Febrero_Marzo_Abril_Mayo_Junio_Julio_Agosto_Septiembre_Octubre_Noviembre_Diciembre'.split('_'),
        monthsShort: 'Enero._Feb._Mar_Abr._May_Jun_Jul._Ago_Sept._Oct._Nov._Dec.'.split('_'),
        weekdays: 'Domingo_Lunes_Martes_Miercoles_Jueves_Viernes_Sabado'.split('_'),
        weekdaysShort: 'Dom._Lun._Mar._Mier._Jue._Vier._Sab.'.split('_'),
        weekdaysMin: 'Do_Lu_Ma_Mi_Ju_Vi_Sa'.split('_')
      }
      );
    useEffect(() => {
        fetchReport();
    }, []);
    

    useEffect(() => {
        setChartData({
            labels: report.map((data) => moment().month(data.mes - 1).format('MMMM')),
            datasets: [
                {
                    label: "Ganancia por mes",
                    data: report.map((data) => data.ganacia),
                    backgroundColor: [
                        "rgba(75,192,192,1)",
                        "#ecf0f1",
                        "#50AF95",
                        "#f3ba2f",
                        "#2a71d0",
                        "rgba(75,192,192,1)",
                        "#ecf0f1",
                        "#50AF95",
                        "#f3ba2f",
                        "#2a71d0",
                        "#ecf0f1",
                        "#50AF95"
                    ],
                    borderColor: "white",
                    borderWidth: 2,
                }
            ]
        });
    }, [report]);

    const fetchReport = async () => {
        try {
            const resp = await axios.get("http://localhost:3000/api/report_gain_month");
            setReport(resp.data.reporte);
            console.log(resp.data.reporte);
        } catch (err) {
            console.log("Ocurrió un error: " + err);
        }
    };




    return (
        <>
            <div className='flex  justify-around'>
                <CardNumber name={"Ventas del mes"} number={"2599"} color={'orange'} />
                <CardNumber name={"Ventas del mes"} number={"2599"} color={'green'} />
                <CardNumber name={"Ventas del mes"} number={"2599"} color={'indigo'} />
                <CardNumber name={"Ventas del mes"} number={"2599"} color={'blue'} />
            </div>

            {
                report.length > 0
                    ?
                    <>
                        <div className='flex justify-around '>
                            <PieChart chartData={chartData} />
                            <BarChart chartData={chartData} />

                        </div>

                        <div className='flex justify-center mt-12  '>
                            <LineChart chartData={chartData} />

                        </div>
                    </>
                    : <></>
            }


        </>
    )
}

export default Home