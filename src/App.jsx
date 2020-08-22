import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { store } from './store/root'
import { Routes } from './routes'
import '../node_modules/jquery/dist/jquery.min.js';
import './config/global'

class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <Routes/>
      </Provider>
    );
  }
}

export default App;
