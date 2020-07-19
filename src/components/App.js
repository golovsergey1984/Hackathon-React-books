import React, { lazy, Suspense, Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';
import Form_Library from './library_addBooks/Form/Form_Library.js'
import './main.module.css';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Library_addBooks from './library_addBooks/Library_addBooks.js';
import LibraryList from './library_addBooks/LibraryList.jsx';
import products from './library_addBooks/data.json';

const App = () => (
  <div>
    <Form_Library/>
    <Library_addBooks>
      <LibraryList items={products} />
    </Library_addBooks>
  </div>
);

export default App;
