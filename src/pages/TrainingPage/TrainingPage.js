import React, { Component } from 'react';
import Training from '../../components/Training/Training';

export default class TrainingPage extends Component {
  componentDidMount(){
    const { getBooksAction } = this.props;
    getBooksAction();
  }
  render() {
    console.log("Props: ", this.props);
    console.log("State: ", this.state);
    return (
      <Training />
    );
  }
}
