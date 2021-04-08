import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { ButtonGroup, Button, Checkbox, FormControlLabel, TextField } from '@material-ui/core';
import { Save, Delete } from '@material-ui/icons';

import { makeStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { green, orange } from '@material-ui/core/colors';

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #654321,#123456)',
    border: 0,
    borderRadius: 15,
    marginBottom: 15,
    color: 'white',
    padding: '5px 30px'
  }
})

const theme = createMuiTheme({
  palette: {
    primary: {
      main: green[500],
    },
    secondary: {
      main: orange[500],
    }
  }
})

function ButtonStyled() {
  const classes = useStyles();
  return <Button size="large" className={classes.root}>Stylin'</Button>
}

function CheckboxEx() {
  const [checked, setChecked] = useState(true);
  return (
    <div>
      <FormControlLabel 
        control={
          <Checkbox 
            checked={checked}
            icon={<Save />}
            checkedIcon={<Save />}
            onChange={(e) => setChecked(e.target.checked)}
            inputProps={{
              'aria-label': 'secondary checkbox'
            }}
          />
        }
        label="testing checkbox"
      />
      
      
    </div>
  )
}

function App() {
  return (
    <ThemeProvider theme={ theme}>
      <div className="App">      
        <header className="App-header">
          <ButtonStyled />
          <TextField 
            variant="filled"
            color="secondary"
            type="email"
            label="Email"
            placeholder="test@test.com"
          />
          <CheckboxEx />
          <ButtonGroup variant="contained" color="primary">
            <Button startIcon={<Save />}  >
              Save
            </Button>
            <Button startIcon={<Delete />} size="large" color="secondary">
              Delete
            </Button>
          </ButtonGroup>
          
          <img src={logo} className="App-logo" alt="logo" />        
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
