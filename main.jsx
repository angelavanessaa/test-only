import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './tokens-studio/build/css/variables.css'; // Import the generated CSS variables

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
