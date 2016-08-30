import React from 'react';
import { createStore } from 'redux';
import RootReducer from '../../reducers/index';

export default function configureStore() {
  return createStore(RootReducer);
}
