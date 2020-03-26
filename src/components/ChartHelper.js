import React, { useEffect } from "react";
import Chart from "chart.js";
let chart;
let myChartRef;
let initRender = true;

//--Chart Style Options--//
Chart.defaults.global.defaultFontFamily = "'PT Sans', sans-serif";
Chart.defaults.global.legend.display = false;
//--Chart Style Options--//

const ChartHelper = ({
  data,
  labels,
  title,
  type,
  pointLabel,
  backgroundColor,
  borderColor,
  hoverBorderColor,
  fillText
}) => {
  useEffect(() => {
    buildChart();
  });

  const chartRef = React.createRef();
  const buildChart = () => {
    myChartRef = chartRef.current.getContext("2d");

    if (typeof chart !== "undefined") chart.destroy();

    let chartSettings = {
      type: type,
      data: {
        labels: labels,
        datasets: [
          {
            label: pointLabel,
            data: data,
            fill: true,
            backgroundColor: backgroundColor || "#0251B7",
            borderColor: borderColor || "#6610f2",
            hoverBorderColor: hoverBorderColor || "#6610f2"
          }
        ],
        text: fillText || ""
      },
      options: {}
    };

    switch (type) {
      case "bar":
        appendBarChartSettings(chartSettings, title);
        break;
      case "doughnut":
        appendDoughnutSettings(chartSettings);
        break;
      default:
        break;
    }

    chart = new Chart(myChartRef, chartSettings);
  };
  return (
    <div>
      <canvas id="myChart" ref={chartRef} />
    </div>
  );
};

const doughnutPostSetup = () => {
  const ctx = chart.ctx;
  const width = chart.width;
  const height = chart.height;

  let fontSize = (height / 100).toFixed(2);
  ctx.font = fontSize + "em Verdana";
  ctx.textBaseline = "middle";
  ctx.fillStyle = "#000000";

  let text = chart.config.data.text;
  let textX = Math.round((width - ctx.measureText(text).width) / 2);
  let textY = height / 2;

  ctx.fillText(text, textX, textY);
  chart.update();
};

const appendBarChartSettings = (chartSettings, title) => {
  const lineChartStyles = {
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
  };

  chartSettings.options = { ...chartSettings.options, ...lineChartStyles };
};

const appendDoughnutSettings = chartSettings => {
  const doughnutStyles = {
    cutoutPercentage: 75,
    responsive: true,
    maintainAspectRatio: true,
    aspectRatio: 1,
    tooltips: {
      enabled: false
    },
    elements: {
      arc: {
        borderWidth: 0
      }
    },
    animation: {
      onProgress: () => {
        doughnutPostSetup();
      }
    }
  };

  chartSettings.options = { ...chartSettings.options, ...doughnutStyles };
};

export default ChartHelper;
