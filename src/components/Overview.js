import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import { Bar, Doughnut } from '@reactchartjs/react-chart.js'
import React from 'react'


const data = {
    labels: ['Office', 'Remote', 'Vacation', 'Holiday', 'Sick'],
    datasets: [
        {
            data: [12, 19, 3, 5, 2],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)'
            ],
            borderWidth: 1,
        },
    ],
    options: [{
        pieceLabel: { render: 'value' }
    }]
}

export default function Overview() {

    return (
        <Paper
            variant="elevation"
            elevation={2}
            className="overview-background">
            <Grid container direction="row">
                <Grid item >
                    <h1 className='title'>Overview</h1>
                </Grid>

                <Grid item style={{ marginLeft: 60 + "%" }}>
                    <h1 className='title' >April 2020</h1>
                </Grid>
            </Grid>
            <Grid container direction="row">
                <Grid item sm={6} xs={6}>
                    <Doughnut data={data}
                        options={{
                            title: {
                                display: true,
                                fontSize: 20
                            },
                            legend: {
                                display: true,
                                position: 'right'
                            }
                        }} />
                </Grid>
                <Grid item sm={6} xs={6}>
                    <Bar data={data}
                        options={{
                            title: {
                                display: true,
                                fontSize: 20
                            },
                            legend: {
                                display: false
                            }
                        }} />
                </Grid>
            </Grid>
        </Paper>
    )

}

