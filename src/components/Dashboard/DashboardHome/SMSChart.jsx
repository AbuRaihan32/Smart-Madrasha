import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";

// Register required elements and plugins
Chart.register(ArcElement, Tooltip, Legend, ChartDataLabels);

const SMSChart = () => {
  const data = {
    labels: ["2021-22", "New 2022-23", "2023-24", "2024-25"],
    datasets: [
      {
        data: [7890, 6314, 10075, 6756],
        backgroundColor: ["#29B6F6", "#4CAF50", "#FFC107", "#1976D2"], // Colors for each segment
        hoverBackgroundColor: ["#29B6F6", "#4CAF50", "#FFC107", "#1976D2"],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    cutout: "70%", // Creates the donut hole
    plugins: {
      legend: {
        display: true,
        position: "top",
        labels: {
          usePointStyle: true,
          color: "#666",
        },
      },
      datalabels: {
        color: "#333",
        font: {
          size: 12,
          weight: "bold",
        },
        formatter: (value) => value,
      },
    },
  };

  return (
    <div className="bg-white shadow rounded-lg p-4 mb-4">
      <div className="bg-green-600 text-white p-2 rounded-t-lg flex justify-between">
        <span>SMS</span>
      </div>
      <div className="flex justify-around mt-4 mb-4">
        <div>
          <p className="text-green-600 text-2xl font-bold">5465</p>
          <p className="text-gray-600">REMAINING SMS</p>
        </div>
        <div>
          <p className="text-red-600 text-2xl font-bold">31035</p>
          <p className="text-gray-600">TOTAL SENT</p>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="w-[50%]">
          <Doughnut data={data} options={options} />
        </div>
      </div>
    </div>
  );
};

export default SMSChart;
