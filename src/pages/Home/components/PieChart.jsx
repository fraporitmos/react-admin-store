import React, { useRef, useEffect } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

// Registro de los componentes necesarios
ChartJS.register(ArcElement, Tooltip, Legend);

function PieChart({ chartData }) {
  const chartRef = useRef(null);

  // Destruye el gráfico cuando el componente se desmonte
  useEffect(() => {
    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, []);

  return (
    <div className="chart-container container w-96 mx-12">
      <h2 style={{ textAlign: "center" }}>Pie Chart</h2>
      <Pie
        ref={chartRef}
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Users Gained between 2016-2020",
            },
          },
        }}
      />
    </div>
  );
}

export default PieChart;
