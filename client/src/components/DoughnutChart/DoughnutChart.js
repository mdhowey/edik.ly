import React from 'react'
import { Doughnut } from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto'
import { Chart } from 'react-chartjs-2'

import './DoughnutChart.css'

const DoughnutChart = (props) => {

    return (
        <div className="doughnut-container">
            < Doughnut
                const data={{
                    labels: [
                        'Eric',
                        'Michael',
                        'Kevin'
                        ],
                    datasets: [{
                        label: 'My First Dataset',
                        data: [300, 50, 100],
                        backgroundColor: [
                            'rgb(255, 99, 132)',
                            'rgb(54, 162, 235)',
                            'rgb(255, 205, 86)'
                            ],
                        hoverOffset: 4
                        }
                    ]
                }
            }
            />
        </div>
    )
}

export default DoughnutChart
