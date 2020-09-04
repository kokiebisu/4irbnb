import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Fonts, Global } from 'styles';

ReactDOM.render(
  <React.StrictMode>
    <Fonts />
    <Global />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
