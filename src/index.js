import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Menu from './components/Menu';
import Footer from './components/Footer';
import Board from './components/Board';

ReactDOM.render(
  <React.StrictMode>
    <Menu />
    <Board gridNumber = {480} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
