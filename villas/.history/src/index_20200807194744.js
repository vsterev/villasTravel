import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import Register from './components/register'
// import Login from './components/login'
import Auth from './utils/auth'
import * as serviceWorker from './serviceWorker';
import Navigation from './navigation';

ReactDOM.render(
  <React.StrictMode>
    {/* <Register /> */}
    {/* <Login /> */}
    <Auth>
      <Navigation />
    </Auth>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
