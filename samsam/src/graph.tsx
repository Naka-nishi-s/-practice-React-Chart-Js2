import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  indexAxis: "x" as const,
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "社員数",
    },
  },
};

const labels = [
  "1月",
  "2月",
  "3月",
  "4月",
  "5月",
  "6月",
  "7月",
  "8月",
  "9月",
  "10月",
  "11月",
  "12月",
];

const sampleData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 30];

export const Graph = {
  labels,
  datasets: [
    {
      label: "男性",
      data: sampleData,
      backgroundColor: "rgba(53, 162, 235, 0.5)",
      barPercentage: 0.5,
    },
  ],
};
