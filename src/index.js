import React from 'react';
// import { render } from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import AuthProvider from './context/authContext'
import App from './App';
import { render } from 'react-snapshot';
import './index.css'



render(
  <AuthProvider>
    <Router hashType='noslash'>
      <App />
    </Router>
  </AuthProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
