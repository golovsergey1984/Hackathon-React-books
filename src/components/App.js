import React, { Component } from "react";
import { connect } from "react-redux";
import AllCategoriesModal from "../components/library/all_categories-modal/all_categories-modal";

class App extends Component {
  render() {
    return <AllCategoriesModal />;
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(App);
