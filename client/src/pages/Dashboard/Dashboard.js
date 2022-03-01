import React, { useEffect, useState } from 'react'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@mui/material/Typography';

import './Dashboard.css'
import DoughnutChart from '../../components/DoughnutChart/DoughnutChart'

const Dashboard = () => {

    return (
        <div className="dashboard">
            <Grid justify="space-between" container spacing={2} >
                <Grid item xl={6} md={6} sm={12} xs={12}>
                    < Paper >

                    </ Paper >
                </Grid>

                <Grid item xl={3} md={3} sm={6} xs={12}>
                    < Paper>
                        < DoughnutChart />
                    </ Paper>
                </Grid>
            </Grid>
        </div>
    )
}

export default Dashboard
