import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Fonts } from './styles/fonts';
import { GlobalStyles } from './styles/global';

ReactDOM.render(
  <React.StrictMode>
    <Fonts />
    <GlobalStyles />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
