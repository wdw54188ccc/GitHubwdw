import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import store from './store';
/* import fn from './mock';
fn(); */
ReactDOM.render(<Provider store={ store }><Router><App /></Router></Provider>, document.getElementById('root'));
registerServiceWorker();
