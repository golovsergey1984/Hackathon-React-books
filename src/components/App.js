import React, { Component } from "react";
import { connect } from "react-redux";
import Library_addBooks from "./library_addBooks/Library_addBooks";
import LibraryList from "./library_addBooks/LibraryList.jsx";
import products from "./library_addBooks/data.json";

const App = () => (
  <div>
    <Library_addBooks>
      <LibraryList items={products} />
    </Library_addBooks>
  </div>
);

export default App;

/* const mapStateToProps = state => ({

})

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(App) */
