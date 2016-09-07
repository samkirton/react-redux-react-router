import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import './styles/style.css';
import './styles/home.css';
import './styles/radio.css';
import './styles/event.css';


render(
  <Router history={browserHistory} routes={routes}/>,
  document.getElementById('app')
);
