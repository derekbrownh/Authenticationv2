import React from "react";

import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Drawer from '@material-ui/core/Drawer';
import MenuIcon from '@material-ui/icons/Menu';

export function SignIn(props) {
  return (
  <div>
       <AppBar position="static" color = "primary">
        <Toolbar>
          <Typography variant= "h6" color ="inherit">
            Sign In
          </Typography>
        </Toolbar>
      </AppBar>

      <div style = {{display:'flex', justifyContent: 'center'}}>
       <Paper style = {{width: 480, marginTop: 50, padding: 30}}>
       <TextField placeholder="Email" fullWidth = "true" />
       <TextField placeholder="Password" fullWidth = "true" style = {{marginTop: 30}} />
       <div style = {{display: 'flex' , justifyContent : "space-between", alignItems: "center", marginTop: 30}}>
          <Typography>Don't have an account? Sign Up!</Typography> 
          <Button variant="contained" color = "primary">Sign In</Button>
       </div>
       </Paper>
      </div>

  </div>);
}

export function SignOut(props) {
  return (
  <div>
       <AppBar position="static" color = "primary">
        <Toolbar>
          <Typography variant= "h6" color ="inherit">
            Sign Out
          </Typography>
        </Toolbar>
      </AppBar>

      <div style = {{display:'flex', justifyContent: 'center'}}>
       <Paper style = {{width: 480, marginTop: 50, padding: 30}}>
       <TextField placeholder="Email" fullWidth = "true" />
       <TextField placeholder="Password" fullWidth = "true" style = {{marginTop: 30}} />
       <div style = {{display: 'flex' , justifyContent : "space-between", alignItems: "center", marginTop: 30}}>
          <Typography>You have an account? Sign In!</Typography> 
          <Button variant="contained" color = "primary">Sign Up</Button>
       </div>
       </Paper>
      </div>

  </div>);
}

export function App(props) {
  return (
  <div>
    <AppBar position="static" color = "primary">
      <Toolbar style = {{display: 'flex'}}>
        <IconButton color = "inherit"><MenuIcon/></IconButton>
        <Typography variant= "h6" color ="inherit" style = {{flexGrow: 1, marginleft: 30}} >
          My App
        </Typography>
        <Typography color = "inherit" style = {{marginRight: 30}}>Hi! brownderekh@gmail.com</Typography>
        <Button color = "inherit">Sign Out</Button>
      </Toolbar>
    </AppBar>

    <Drawer open = {true} >
      <div>Hello</div>

    </Drawer>



  </div>);

}