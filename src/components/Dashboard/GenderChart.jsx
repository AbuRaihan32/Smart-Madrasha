import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";

// Register required elements and plugins
Chart.register(ArcElement, Tooltip, Legend, ChartDataLabels);

const GenderChart = () => {
  const data = {
    labels: ["Female", "Male"],
    datasets: [
      {
        data: [484, 799],
        backgroundColor: ["#009688", "#00BCD4"], // Teal for Female, Cyan for Male
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
    },
  };

  return (
    <div className="bg-white shadow rounded-lg p-4 mb-4">
      <h3 className="font-semibold">No. of Male & Female Students</h3>
      <div className="w-[50%] mx-auto">
        <Pie data={data} options={options} />
      </div>
    </div>
  );
};

export default GenderChart;
