import React, { useEffect, useState } from 'react'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@mui/material/Typography';
import OneUser from '../components/OneUser/OneUser.js';

import './Dashboard.css'

export default function Dashboard() {

    return (
        <div className="dashboard">
            <Grid justify="space-between" container spacing={2} >
                <Grid item xs={6}>
                    < Paper >

                    </ Paper >
                </Grid>

                <Grid item xs={6}>
                    < Paper>

                    </ Paper>
                </Grid>
            </Grid>

            // ID will update based on dropdown of contributors. Currently set to "24" to test
            // All data associated with user 24 returns
            <OneUser id={"24"}/>
        </div>
    )
}
