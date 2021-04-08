import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { ButtonGroup, Button, Checkbox, FormControlLabel, TextField, Typography, Container, Grid, Paper, AppBar, Toolbar, IconButton } from '@material-ui/core';
import { Save, Delete, Menu } from '@material-ui/icons';

import { makeStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { green, orange } from '@material-ui/core/colors';
import 'fontsource-roboto';

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
  typography: {
    h2: {
      fontSize: 36,
      marginBottom: 15,
    }
  },
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
      <Container maxWidth="xs">
        <div className="App">      
          <header className="App-header">
              <AppBar color="secondary">
                <Toolbar>
                  <IconButton>
                    <Menu />
                  </IconButton>
                  <Typography variant="h6">
                    MUI Themeing
                  </Typography>
                  <Button>
                    Login
                  </Button>
                </Toolbar>
              </AppBar>

            <Typography variant="h2">
              Yay Material-UI!!
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Learning how to use MUI...
            </Typography>
            <ButtonStyled />

            <Grid container spacing={2} justify="center">
              <Grid item xs={3} sm={6}>
                <Paper style={{ height: 75, width: "100%"}} />
              </Grid>
              <Grid item xs={3} sm={6}>
                <Paper style={{ height: 75, width: "100%"}} />
              </Grid>
              <Grid item xs={3} sm={6}>
                <Paper style={{ height: 75, width: "100%"}} />
              </Grid>
            </Grid>

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
      </Container>
    </ThemeProvider>
  );
}

export default App;
