import Worklogs from './Worklogs.js'
import Overview from './Overview.js'
import Grid from '@material-ui/core/Grid'

export default function Dashboard() {

    return (
        <Grid container direction="column" spacing={2}>
            <Grid item>
                <Overview />
            </Grid>
            <Grid item>
                <Worklogs />
            </Grid>
        </Grid>
    )
}