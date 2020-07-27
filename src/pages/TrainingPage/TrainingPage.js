import React, { Component } from 'react';
import Training from '../../components/Training/Training';

export default class TrainingPage extends Component {
  componentDidMount() {
    this.props.getAllBooks();
  }
  render() {
    // console.log("Props: ", this.props);
    
    return (
      <Training {...this.props}/>
    );
  }
}
