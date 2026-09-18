import React from 'react';
import ReactDOM from 'react-dom/client';
import clarity from '@microsoft/clarity';
import App from './App';


clarity.init('xwe9x7jpj4'); // Initialize Clarity with your project ID

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);