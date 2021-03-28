import { Button, Grid, TextField } from '@material-ui/core';
import React from 'react';

export default class ResetPassword extends React.Component {

    render() {
        return (
            <div>
                <Grid container spacing={0} justify="center" direction="column" alignItems="center">
                    <Grid item>
                        <div>
                            <h1>Password Reset</h1>
                            <h5>Enter Email id for resetting password.</h5>
                        </div>
                    </Grid>
                    <Grid item>
                        <form >
                            <Grid container direction="column" spacing={2}>
                                <Grid item>
                                    <TextField
                                        type="email"
                                        placeholder="Email Id"
                                        fullWidth
                                        name="Email"
                                        variant="outlined"
                                        required
                                        autoFocus
                                    />
                                </Grid>
                                <Grid item style={{ marginLeft: 10 + "%" }}>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        type="submit">
                                        Reset Password
                                                </Button>
                                </Grid>
                            </Grid>
                        </form>
                    </Grid>
                </Grid>

            </div>
        )
    }
}
