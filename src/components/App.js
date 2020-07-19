import React, { Component } from "react";
import { connect } from "react-redux";
// import LogOut from "../pages/LogOut";
import Statistic from './Statistic/Statistic'

class App extends Component {
  render() {
    return (
      <div>
        <p>Hello world!!!</p>
        {/* <LogOut /> */}
        <Statistic />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(App);
