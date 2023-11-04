import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import RestaurantList from "./components/RestaurantList/RestaurantList";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RestaurantList/>
  </React.StrictMode>
);

