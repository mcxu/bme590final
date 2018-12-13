import React, { Component } from 'react';
import {ListSubheader, IconButton, GridList, GridListTile, GridListTileBar, Button, Typography, Grid, Paper} from '@material-ui/core';
import axios from 'axios'

export default class EnhanceEditor extends Component {

  state = {
    beforeIM: '',
    afterIM: [],
    enhtype: 0,

  }

setImage = () => {
  var myob = {}
  var iStr2 = this.state.beforeIM.image_id
  //iStr = iStr.split(";").pop();
    myob['email'] = 'myID@no.';
    myob['image_id'] = iStr2 ;
    console.log(iStr2)
  axios.post('http://127.0.0.1:5000/api/process/change_image', myob)
  .then(res => {
   console.log(res)
  })
  .catch(function (error) {
console.log(error);
});
}

beforeSelector = () => {
  if (this.state.beforeIM.length === 0) {
    this.setState({beforeIM: this.props.tile, afterIM: this.props.tile}, () => {
      this.setImage()
    })


  }
  else {
    //console.log(this.state.afterIM)
  }
}

afterSelector = (nu) => {

  if (nu === 0){

  }
  else if (nu === 1) {
    var myob2 = {}
    myob2['email'] = this.state.beforeIM.email
    axios.post('http://127.0.0.1:5000/api/process/blur', myob2)
 	 .then(res => {
     var myAr = []
     myAr.push(res.data)
     this.setState({afterIM: myAr})
 	 })
 	 .catch(function (error) {
  console.log(error);
 });
  }
  else if (nu === 2) {

  }
  else if (nu === 3) {

  }
  else if (nu === 4) {

  }
}

  render() {
    return(
      <div>
      {this.beforeSelector()}

      <Button color='primary' variant='contained' onClick={() => this.afterSelector(1)}>
      Histogram EQ
      </Button>
      <Button color='primary' variant='contained' onClick={() => this.afterSelector(2)}>
      Contrast Stretch
      </Button>
      <Button color='primary' variant='contained' onClick={() => this.afterSelector(3)}>
      Log Compression
      </Button>
      <Button color='primary' variant='contained' onClick={() => this.afterSelector(4)}>
      Reverse Video
      </Button>
      <Button color='primary' variant='contained' onClick={() => this.afterSelector(0)}>
      Other
      </Button>
      <br />
      Before: Upload Date:{this.state.beforeIM.timestamp} Process Time:{this.state.beforeIM.processing_time}
       Imagesize: {this.state.beforeIM.height}x{this.state.beforeIM.width}
      <br />
      <img src={this.state.beforeIM.image_data} />
      <br />
      After: Upload Data:{this.state.afterIM.timestamp} Process Time:{this.state.afterIM.processing_time}
       Image Size:{this.state.afterIM.height}x{this.state.afterIM.width}
      <img src={"data:image/jpeg;" + this.state.afterIM.image_data} />


      </div>
    )
  }
}