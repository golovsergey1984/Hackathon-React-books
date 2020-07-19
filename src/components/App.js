import React, { Component } from "react";
import { connect } from "react-redux";
import StartTraining from "../components/StartTraining/StartTraining";

class App extends Component {
  render() {
    return (
      <div>
        <StartTraining />
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(App);
