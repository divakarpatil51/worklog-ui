import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TopBar from './components/TopBar'
import Dashboard from './components/Dashboard'

ReactDOM.render(
  <div>
    <TopBar />
    <Dashboard />
  </div>,
  document.getElementById('root')
);

