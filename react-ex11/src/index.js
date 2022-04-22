import React from 'react';
import ReactDOM from 'react-dom/client';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import App from './App';
import Reducers from './Reducers';

const store = configureStore(Reducers);

ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>
, document.getElementById('root'));

/*
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
      <App />
    </Provider>
);
*/