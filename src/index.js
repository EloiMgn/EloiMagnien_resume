import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import './reset.css';
import App from './App/App';
import reportWebVitals from './reportWebVitals';
import Cursorfollower from './Components/Cursorfollower/Cursorfollower';


ReactDOM.render(
  <React.StrictMode>
    <Cursorfollower />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
