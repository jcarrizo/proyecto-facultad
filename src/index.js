import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Rutas from './ruta/Rutas';


ReactDOM.render(
  <React.StrictMode>
    <Rutas></Rutas>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

