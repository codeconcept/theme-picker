import React, { Component } from 'react';

class Schedule extends Component {
  state = {  }
  render() { 
    console.log(this.props);
    const {params} = this.props.match
    return (<h1>{params.town ? (`Programmes de ${params.town}`) : ("Programmes")}</h1>);
  }
}
 
export default Schedule;