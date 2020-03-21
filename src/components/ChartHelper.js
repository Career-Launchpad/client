import React, { useEffect } from "react";
import Chart from "chart.js";
import classes from "./LineGraph.module.css";
let myLineChart;

//--Chart Style Options--//
Chart.defaults.global.defaultFontFamily = "'PT Sans', sans-serif";
Chart.defaults.global.legend.display = false;
//--Chart Style Options--//

const ChartHelper = ({ data, labels, title, type, pointLabel }) => {
  useEffect(() => {
    buildChart();
  });

  const chartRef = React.createRef();
  const buildChart = () => {
    const myChartRef = chartRef.current.getContext("2d");

    if (typeof myLineChart !== "undefined") myLineChart.destroy();

    myLineChart = new Chart(myChartRef, {
      type: type,
      data: {
        labels: labels,
        datasets: [
          {
            label: pointLabel,
            data: data,
            fill: true,
            backgroundColor: "#0251B7",
            borderColor: "#6610f2"
          }
        ]
      },
      options: {
        title: {
          display: true,
          text: title
        },
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
                precision: 0
              }
            }
          ]
        }
      }
    });
  };
  return (
    <div className={classes.graphContainer}>
      <canvas id="myChart" ref={chartRef} />
    </div>
  );
};

export default ChartHelper;
