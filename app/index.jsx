import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Router, browserHistory} from 'react-router';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import routes from './routes';
import ConfigStore from './components/store/configureStore';

let store = ConfigStore();

ReactDOM.render(
   <Provider store={ store } >
    <Router history={browserHistory} routes={routes} />
  </Provider>
  , document.querySelector('.main')
);