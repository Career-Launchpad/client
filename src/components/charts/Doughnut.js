
import React from 'react';
import { Doughnut as ChartJSDoughnut } from 'react-chartjs-2';

export const Doughnut = ({ labels, data, title }) => {
    const chartData = {
        labels,
        datasets: [{
            data,
            backgroundColor: ["#0251B7", "#EBEBEB"],

        }]
    };
    return (
        <div>
            <h2>{title}</h2>
            <ChartJSDoughnut data={chartData}
                options={{
                    cutoutPercentage: 75,
                    responsive: true,
                    maintainAspectRatio: true,
                    aspectRatio: 1,
                    legend: {
                        display: false
                    },
                    elements: {
                        arc: {
                            borderWidth: 0
                        }
                    }
                }} 
            />
        </div>
    );
};



export default Doughnut