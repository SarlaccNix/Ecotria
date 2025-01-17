import React from 'react';
import {render} from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { App }  from './app/App';
import { Provider } from 'react-redux'
import { store } from './helpers';
import reportWebVitals from './reportWebVitals';

render(
  <BrowserRouter >
   <Provider store={store}>
      <App/>
    </Provider>
  </BrowserRouter>,
  document.getElementById('app')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();