import React, { lazy, Suspense, Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';
import './main.module.css';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Library_addBooks from './library_addBooks/Library_addBooks.js';
import LibraryList from './library_addBooks/LibraryList.jsx';
import products from './library_addBooks/data.json';

const App = () => (
  <div>
    <Library_addBooks>
      <LibraryList items={products} />
    </Library_addBooks>
  </div>
);

export default App;
