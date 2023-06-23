import React from "react";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";

const BarChart = ({ value }) => {
  const labels = ["14", "15", "16", "17", "18", "19"];
  const data = {
    labels: labels,
    datasets: [
      {
        label: value === "time" ? "Time Spent" : "Number ",
        backgroundColor: "skyblue",
        borderColor: "rgb(255, 99, 132)",
        data: value === "time" ? [0, 1, 5, 6, 2] : [2, 5, 0, 1, 2],
      },
    ],
  };
  return (
    <div
      style={{
        border: "1px solid gray",
        borderRadius: "5px",
        margin: "10px auto",
        padding: "5px",
        height: "400px",
        width: "800px",
      }}
    >
      <Bar data={data} />
    </div>
  );
};

export default BarChart;
