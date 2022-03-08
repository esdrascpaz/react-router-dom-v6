import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Tem que importar o BrowserRouter
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
  // Encapsular/envolver o App com o BrowserRouter
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();
