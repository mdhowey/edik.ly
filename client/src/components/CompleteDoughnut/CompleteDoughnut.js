import React from 'react'
import { Doughnut } from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto'
import { Chart } from 'react-chartjs-2'

import './CompleteDoughnut.css'

const CompleteDoughnut = (props) => {

    let data = props

    let chartDataIncome = null
    let chartDataExpense = null

    for (let i = 0; i < data.expenses.length; i++) {

        chartDataExpense += data.expenses[i].amount
    }

    for (let i = 0; i < data.incomes.length; i++) {

        chartDataIncome += data.incomes[i].amount
    }

    return (
        <div className="budget-container">
            < Doughnut

            />
        </div>
    )
}

export default CompleteDoughnut
