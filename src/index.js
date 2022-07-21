import React from 'react';
import ReactDOM from 'react-dom';
import { transitions, positions, types, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
import './styles/index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <AlertProvider template={AlertTemplate} position={positions.BOTTOM_CENTER} type={types.SUCCESS} transition={transitions.FADE}>
      <App />
    </AlertProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
