import React, { useEffect, useState } from 'react'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@mui/material/Typography';

import './Dashboard.css'
import DoughnutChart from '../components/DoughnutChart/DoughnutChart'
import ContributorSelect from '../components/ContributorSelect/ContributorSelect'
import TotalArticles from '../components/TotalArticles/TotalArticles'
import OneUser from '../components/OneUser/OneUser.js';

const Dashboard = () => {

    return (
        <div className="dashboard">
      
            <Grid justify="space-between" container spacing={2} >
      
                <Grid item xl={3} md={3} sm={4} xs={6}>
                    < Paper >
                        < ContributorSelect />
                    </ Paper >
                </Grid>

                <Grid item xl={3} md={3} sm={6} xs={12}>
                    < Paper>
                        < TotalArticles />
                    </ Paper>
                </Grid>

                <Grid item xl={3} md={3} sm={6} xs={12}>
                    < Paper>
                        < DoughnutChart />
                    </ Paper>
                </Grid>

            </Grid>
  
              // ID will update based on dropdown of contributors. Currently set to "24" to test
            // All data associated with user 24 returns
            <OneUser id={"24"}/>
              
        </div>
    )
}

export default Dashboard
