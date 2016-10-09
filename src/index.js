import React from 'react';
import ReactDOM from 'react-dom';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import News from './News';
import Map from './Map';
import './index.css';
import MainLayout from './MainLayout';
import { Router, Route, browserHistory } from 'react-router';

ReactDOM.render((
    <Router history={browserHistory}>
      <Route component={MainLayout}>
        <Route path="/" component={News}/>
        <Route path="/map" component={Map}/>
        <Route path="/news" component={News}/>
      </Route>
    </Router>
  ), document.getElementById('root')
);
