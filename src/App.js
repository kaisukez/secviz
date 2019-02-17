import React, { Component } from 'react';
// import { BrowserRouter, Switch, Route } from 'react-router-dom'

import './App.css';
import Dashboard from './containers/Dashboard'

class App extends Component {
  render() {
    return (
      // <BrowserRouter>
      //   <Switch>
      //     <Route path='/' component={Dashboard} />
      //   </Switch>
      // </BrowserRouter>
      <Dashboard />
    );
  }
}

export default App;
