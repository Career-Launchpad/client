import React from "react";
import { Bar as ChartJSBar } from "react-chartjs-2";
import classes from "./LineGraph.module.css";

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
          precision: 0
        }
      }
    ]
  },
  layout: {
    padding: {
        top: 15,
        left: 15,
        right: 15,
        bottom: 15
    }
  }
};

const Bar = ({ labels, label, data, title }) => {
  return (
    <div class={classes.graphContainer}>
      <h2>{title}</h2>
      <ChartJSBar
        data={{
          labels,
          datasets: [
            {
              label: label,
              backgroundColor: "#0251B7",
              borderColor: "#0251B7",
              borderWidth: 1,
              data
            }
          ]
        }}
        options={options}
      />
    </div>
  );
};

export default Bar;
