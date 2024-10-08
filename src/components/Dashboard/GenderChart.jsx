import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

// Register required elements
Chart.register(ArcElement, Tooltip, Legend);

const GenderChart = () => {
  const data = {
    labels: ["Male", "Female"],
    datasets: [
      {
        data: [799, 494],
        backgroundColor: ["#36A2EB", "#FF6384"],
      },
    ],
  };

  return (
    <div className="bg-white shadow rounded-lg p-4 mb-4 ">
      <h3 className="font-semibold">Number of Male & Female Students</h3>
      <div className='w-[20%]'>
        <Pie data={data} />
      </div>
    </div>
  );
};

export default GenderChart;
