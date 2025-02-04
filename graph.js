import React from "react";
import { Chart, ArcElement } from "chart.js";
import { Doughnut } from "react-chartjs-2";

Chart.register(ArcElement);

const data = {
  labels: ["Red", "Blue", "Yellow"],
  datasets: [
    {
      label: "My First Dataset",
      data: [300, 50, 100],
      backgroundColor: [
        "rgb(255, 99, 132)",
        "rgb(54, 162, 235)",
        "rgb(255, 205, 86)",
      ],
      hoverOffset: 4,
    },
  ],
};

export default function graph() {
  return (
    <div className="flex justify-content max-w-xs mx-auto">
      <div className="item">
        <div className="chart relative">
          <Doughnut data={data}></Doughnut>
        </div>
      </div>
    </div>
  );
}
