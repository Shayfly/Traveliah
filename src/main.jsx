import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './pages/App'; // ✅ נתיב נכון

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
