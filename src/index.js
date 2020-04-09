import React from 'react';
import ReactDOM from 'react-dom';
import './css/universal.css';
import Header from './components/header';
import Main from './components/main';
// import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Header />, document.querySelector('header'));
// ReactDOM.render(<Filter />, document.querySelector('nav'));
ReactDOM.render(<Main />, document.querySelector('main'));

// serviceWorker.unregister();
