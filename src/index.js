import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeParse } from '@parse/react';


initializeParse(
  'http://parseserver-7b32c0b898b4.herokuapp.com/parse',
  'APP_IDCuaNguyenTrongThanh',
  'JAVASCRIPT_KEYCuaNguyenTrongThanh'
);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
