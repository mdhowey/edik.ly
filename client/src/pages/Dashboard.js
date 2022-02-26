import React, { useEffect, useState } from 'react'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@mui/material/Typography';

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
        </div>
    )
}
