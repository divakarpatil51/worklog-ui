import { Button, Input, InputLabel, MenuItem, Select, Typography } from '@material-ui/core'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import MuiDialogTitle from '@material-ui/core/DialogTitle'
import Grid from '@material-ui/core/Grid'
import IconButton from '@material-ui/core/IconButton'
import { withStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import CloseIcon from '@material-ui/icons/Close'
import React from 'react'

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

export default class CreateWorklog extends React.Component {

  constructor(props) {
    super(props);
    console.log("in Createworklog")
    this.state = {
      worklogType: 'Remote',
      project: 'Backend'
    }
    this.worklogTypeChange = this.worklogTypeChange.bind(this)
    this.createWorklog = this.createWorklog.bind(this)
    this.showCreateWorklogDialog = this.closeDialog.bind(this)
  }

  worklogTypeChange(event) {
    console.log(event.target.value)
    this.setState({
      worklogType: event.target.value
    })
  }

  projectChange(event) {
    this.setState({
      project: event.target.value
    })
  }

  createWorklog() {
    console.log(this.state)
    this.closeDialog()
  }

  closeDialog(){
    this.props.showDialog(false)
  }

  render() {
    return (

      <Dialog open={this.props.createWorklog} aria-labelledby="customized-dialog-title" fullWidth spacing={5}>
        <DialogTitle id="customized-dialog-title" onClose={this.closeDialog}>
          Add Worklog
        </DialogTitle>
        <DialogContent dividers>
          <Grid container direction="column" spacing={3} justify="space-around">
            <Grid item>
              
              <InputLabel id="worklogType">Worklog Type</InputLabel>
              <Select labelId="worklogType" value={this.state.worklogType}
                onChange={this.worklogTypeChange}>
                <MenuItem value="Remote" >Remote</MenuItem>
                <MenuItem value="Office">Office</MenuItem>
                <MenuItem value="Vacation">Vacation</MenuItem>
                <MenuItem value="Holiday">Holiday</MenuItem>
                <MenuItem value="Sick">Sick</MenuItem>
              </Select>
            </Grid>
            <Grid item>
              <InputLabel id="project">Project</InputLabel>
              <Select labelId="project" value={this.state.project}
                onChange={this.projectChange}>
                <MenuItem value="Backend">Backend</MenuItem>
                <MenuItem value="User Interface">User Interface</MenuItem>
                <MenuItem value="UX">UX</MenuItem>
                <MenuItem value="Admin">Admin</MenuItem>
                <MenuItem value="HR">HR</MenuItem>
              </Select>
            </Grid>
            <Grid item>
              <InputLabel id="project">Date</InputLabel>
              <form noValidate>
                <TextField
                  id="date"
                  type="date"
                  defaultValue="2017-05-24"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </form>
            </Grid>
            <Grid item>
              <InputLabel id="project">Comment</InputLabel>
              <Input />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" color="primary" onClick={this.closeDialog}>Cancel</Button>
          <Button variant="contained" color="primary" onClick={this.createWorklog}>Create</Button>
        </DialogActions>
      </Dialog>

    )
  }
}