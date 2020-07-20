import React, { Component } from "react";
import { connect } from "react-redux";
import LogOut from "../pages/LogOut";
import Library from "../pages/Library/Library";

class App extends Component {
  render() {
    return (
      <div>
        {/* <p>Hello world!!!</p> */}
        <Library />
        {/* <LogOut /> */}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(App);
