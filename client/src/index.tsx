import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Fonts, GlobalStyles } from 'styles';

ReactDOM.render(
  <React.StrictMode>
    <Fonts />
    <GlobalStyles />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
