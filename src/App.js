import React from 'react';
//import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './components/Home';
import DashBoard from './components/DashBoard';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Dashboard" component={DashBoard} />
      </Switch>

    </BrowserRouter>
  );
}

export default App;
