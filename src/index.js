import React from 'react';
import ReactDOM from 'react-dom';
import './css/universal.css';
import Header from './components/header';
import Main from './components/main';
import Footer from './components/footer.jsx';
// import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Header />, document.querySelector('header'));
ReactDOM.render(<Main />, document.querySelector('main'));
ReactDOM.render(<Footer />, document.querySelector('footer'));

// serviceWorker.unregister();
