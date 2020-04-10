import React from 'react'
import { Bar as ChartJSBar } from 'react-chartjs-2';

const options = {
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true,
                precision: 0
            }
        }]
    }
}

const Bar = ({ labels, label, data, title }) => {
    return (
        <div>
            <h2>{title}</h2>
            <ChartJSBar
                data={{
                    labels,
                    datasets: [
                        {
                            label: label,
                            backgroundColor: '#0251B7',
                            borderColor: '#0251B7',
                            borderWidth: 1,
                            data
                        }
                    ]
                }}
                options={options}
            />
        </div>
    );
}

export default Bar
