
import { Bar } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  
  // Register the necessary components
  ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Stats = () => {
  return (
<>
<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2 p-4 md:p-6 xl:p-8">
  <div className="bg-white border rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 transform transition-transform duration-300 hover:scale-105">
    <div className="p-4 flex justify-center">
        <Bar
          data={{
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [
              {
                label: 'Sample Dataset', // Use a single string
                data: [12, 19, 3, 5, 2, 3], // Y-axis data points
                backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)',
                ],
                borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
              },
            ],
          }}
        />
    </div>
    <div className="px-6 pb-4 text-center">
      <h6 className="text-lg font-semibold tracking-tight text-violet-800">
        Simple Search Bar
      </h6>
    </div>
  </div>
</div>

</>
)
}

export default Stats