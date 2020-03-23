import React, { useEffect } from "react";
import Chart from "chart.js";
let chart;

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
    const myChartRef = chartRef.current.getContext("2d");

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
        ]
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

    if (type === "doughnut") {
      doughnutPostSetup(chart, fillText);
    }
  };
  return (
    <div>
      <canvas id="myChart" ref={chartRef} />
    </div>
  );
};

const doughnutPostSetup = (chart, fillText) => {
  // TODO: Need eyes on this, for some reason, it's not working
  const ctx = chart.chart.ctx;
  let height = chart.chart.height;
  let width = chart.chart.width;

  ctx.font = `${(height / 290).toFixed(2)}em Verdana`;
  ctx.textBaseline = "middle";
  ctx.fillStyle = "#000000";

  const textX = Math.round((width - ctx.measureText(fillText).width) / 2);
  const textY = height / 2;

  ctx.fillText(fillText, textX, textY);
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
    }
  };

  chartSettings.options = { ...chartSettings.options, ...doughnutStyles };
};

export default ChartHelper;
