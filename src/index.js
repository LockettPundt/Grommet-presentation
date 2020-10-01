/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import App from './App';

const Index = () => (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
ReactDOM.render(<Index />, document.getElementById('root'));
