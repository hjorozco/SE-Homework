import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// Text that will be displayed in "DivThree" components
const TARDI = "Time and Relative Dimension in Space";

ReactDOM.render(
  <React.StrictMode>
    <App text={TARDI} />
  </React.StrictMode>,
  document.getElementById('root')
);