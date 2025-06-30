import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement } from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

export const Chart = ({ labels, dataPoints }) => {
  const data = {
    labels,
    datasets: [
      {
        label: "Trend",
        data: dataPoints,
        borderColor: "#1E40AF",
        backgroundColor: "rgba(30,64,175,0.2)",
        tension: 0.4,
      },
    ],
  };

  return <Line data={data} />;
};