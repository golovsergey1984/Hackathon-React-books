import React, { Component } from "react";
import { connect } from "react-redux";
import LogOut from "../pages/LogOut";
import Library_all_categories from "../pages/Library_all_categories";

class App extends Component {
  render() {
    return (
      <div>
        <p>Hello world!!!</p>
        <Library_all_categories />
        {/* <LogOut /> */}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(App);
