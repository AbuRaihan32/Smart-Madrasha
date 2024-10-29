'use client'
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";

// Register required elements and plugins
Chart.register(ArcElement, Tooltip, Legend, ChartDataLabels);

const GenderChart = () => {
  const data = {
    labels: ["Male", "Female"],
    datasets: [
      {
        data: [498, 702],
        backgroundColor: ["#9C27B0", "#00BCD4"], // Purple for Staff, Cyan for Teacher
      },
    ],
  };

  const options = {
    plugins: {
      datalabels: {
        color: "#fff",
        font: {
          weight: "bold",
          size: 16,
        },
        formatter: (value) => value,
      },
      legend: {
        display: true,
        position: "top",
        labels: {
          boxWidth: 15,
          padding: 20,
        },
      },
    },
  };

  return (
    <div className="bg-white shadow rounded-lg  mb-4">
      <div className="bg-slate-100 mb-2 p-3 rounded-t">
        <h3 className="font-semibold">No. Of Male & Female Student</h3>
      </div>
      <div className="w-[80%] mx-auto p-4">
        <Pie data={data} options={options} />
      </div>
    </div>
  );
};

export default GenderChart;
