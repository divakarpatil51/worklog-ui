import { AppBar, Button, Grid, TextField, Toolbar, Typography } from '@material-ui/core';
import React from 'react';

class ResetPasswordComponent extends React.Component {

    render() {
        return (
            <div>
                <AppBar position="static" alignitems="center" color="primary">
                    <Toolbar>
                        <Grid container justify="center" wrap="wrap">
                            <Grid item>
                                <Typography variant="h6">WorkLog</Typography>
                            </Grid>
                        </Grid>
                    </Toolbar>
                </AppBar>
                <Grid container spacing={0} justify="center" direction="row">
        
                    <Grid item>
                    <Grid item>
                        <div>
                            <h1>Password Reset</h1>
                            <h5>Enter Email id for resetting password.</h5>
                        </div>
                    </Grid>
                        <Grid
                            container
                            direction="column"
                            justify="center"
                            spacing={2}
                            className="login-form">
                            
                                <Grid item>
                                    <form >
                                        <Grid container direction="column" spacing={2}>
                                            <Grid item>
                                                <TextField
                                                    type="email"
                                                    placeholder="Email Id"
                                                    fullWidth
                                                    name="username"
                                                    variant="outlined"
                                                    required
                                                    autoFocus
                                                />
                                            </Grid>
                                            <Grid item>
                                                <Button
                                                    variant="contained"
                                                    color="primary"
                                                    type="submit"
                                                    className="button-block">
                                                    Reset Password
                                                </Button>
                                            </Grid>
                                        </Grid>
                                    </form>
                                </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default ResetPasswordComponent;