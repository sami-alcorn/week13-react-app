import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import LoginForm from './loginform';
import reportWebVitals from './reportWebVitals';
import MyNavbar from './navbar';
/*Added imports for bootstrap and my navbar and login compentents*/
const root = ReactDOM.createRoot(document.getElementById('root'));
/*renders my navbar and login functions in the root div*/
root.render(
  <React.StrictMode>
    <MyNavbar />
    <LoginForm />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
