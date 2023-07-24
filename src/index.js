import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const uno = document.getElementById('root');
const dos = ReactDOMClient.createRoot(uno)
dos.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

reportWebVitals();
