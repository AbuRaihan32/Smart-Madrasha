'use client'
import {
  Chart,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { useEffect, useRef } from "react";

// Register required elements and plugins
Chart.register(
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
  Tooltip,
  Legend,
  Filler,
  ChartDataLabels
);

const SessionBasedStudentChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const chart = chartRef.current;
    if (chart) {
      const ctx = chart.ctx;
      const gradient = ctx.createLinearGradient(0, 0, 0, ctx.canvas.height);
      gradient.addColorStop(0, "rgba(103, 58, 183, 0.7)");
      gradient.addColorStop(1, "rgba(233, 30, 99, 0.3)");
      chart.data.datasets[0].backgroundColor = gradient;
      chart.update();
    }
  }, []);

  const data = {
    labels: ["2021-22", "New 2022-23", "2023-24", "2024-25"],
    datasets: [
      {
        label: "Session Based Student",
        data: [505, 805, 1114, 1283],
        borderColor: "#673AB7",
        borderWidth: 2,
        pointBackgroundColor: "#673AB7",
        pointBorderColor: "#673AB7",
        fill: true,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: true,
        position: "bottom",
        labels: {
          color: "#673AB7",
        },
      },
      datalabels: {
        color: "#333",
        anchor: "end",
        align: "top",
        font: {
          size: 12,
          weight: "bold",
        },
      },
    },
    scales: {
      y: {
        beginAtZero: false,
        min: 500,
        max: 1300,
        ticks: {
          color: "#333",
        },
      },
      x: {
        ticks: {
          color: "#333",
        },
      },
    },
  };

  return (
    <div className="bg-white shadow rounded-lg p-4 mb-4">
      <h3 className="font-semibold bg-purple-700 text-white p-2 rounded-t-lg">
        Session Based Student
      </h3>
      <div className="p-4">
        <Line ref={chartRef} data={data} options={options} />
      </div>
    </div>
  );
};

export default SessionBasedStudentChart;
