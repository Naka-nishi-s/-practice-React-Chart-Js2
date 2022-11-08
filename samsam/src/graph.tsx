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
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
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
const sampleData2 = [1, 1, 3, 5, 7, 4, 8, 10, 12, 20, 30, 70];

export const Graph = {
  labels,
  datasets: [
    {
      label: "男性",
      data: labels.map((elm, index) => sampleData[index]),
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
    {
      label: "女性",
      data: labels.map((elm, index) => sampleData2[index]),
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
  ],
};
