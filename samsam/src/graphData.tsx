import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

import { Bar, Line } from "react-chartjs-2";

const GraphData = (props: any) => {
  const { labels, sampleData, axis, graphType }: any = props;

  const options = {
    indexAxis: axis,
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

  const data = {
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

  return (
    <>
      {graphType === "Bar" && <Bar options={options} data={data} redraw />}
      {graphType === "Line" && <Line options={options} data={data} redraw />}
    </>
  );
};

export default GraphData;
