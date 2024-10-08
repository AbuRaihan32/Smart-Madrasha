import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";

// Register required elements and plugins
Chart.register(ArcElement, Tooltip, Legend, ChartDataLabels);

const EmployeeChart = () => {
  const data = {
    labels: ["Staff", "Teacher"],
    datasets: [
      {
        data: [9, 71],
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
    <div className="bg-white shadow rounded-lg p-4 mb-4">
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-semibold">No. Of Employee</h3>
        <span className="bg-teal-500 text-white px-2 py-1 rounded-full">
          Total 80
        </span>
      </div>
      <div className="w-[50%] mx-auto">
        <Pie data={data} options={options} />
      </div>
    </div>
  );
};

export default EmployeeChart;
