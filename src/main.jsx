import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import '@richaadgigi/stylexui/css/xui.min.css';
import './index.css';
import { apply } from '@richaadgigi/stylexui';
apply();


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <section className='xui-font-2'>
      <App />
      </section>
    </BrowserRouter>
  </React.StrictMode>
);
