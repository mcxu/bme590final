import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import leftSideButtons from './leftSideButtons' ;
import {Button, Typography} from '@material-ui/core';
import axios from 'axios'

import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/green';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#43a047'
    },
    secondary: {
      main: '#00c853',
    },
    overrides: {
      MuiButton: {
        root: {
          color: 'green'
        },
      },
    },
  },
});


class App extends Component {
  render() {

    document.body.style = 'background: grey;';
    return (
      <MuiThemeProvider theme={theme}>

      <div>
        
        <Typography component="h2" color="green[700]" variant="h1" gutterBottom>
        X-Ray Enhancer
      </Typography>

        <Button variant="contained" color="primary" style= {{margin: '5px'}} onClick={this.Upload}>
        Upload
        </Button>

        <br />
        
        <Button variant="contained" color="primary" style= {{margin: '5px'}} >
        Enhance
        </Button>

        <br />

        <Button variant="contained" color="primary" style= {{margin: '5px'}} >
        Download
        </Button>

        <br />

        <Button variant="contained" color="primary" style= {{margin: '5px'}}>
        Image Data
        </Button>

        <br />

        <Button variant="contained" color="primary" style= {{margin: '5px'}}>
           Library
        </Button>

        <leftSideButtons />
      
      </div>
      </MuiThemeProvider>
    );
  }



  Upload = (img) => {

    axios.post('http://MYAPI/Upload', {
    firstName: 'Fred',
    lastName: 'Flintstone'
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

  }








}


export default App;
