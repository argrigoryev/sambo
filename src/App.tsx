import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.global.sass';

import Strings from './Strings/strings';

const Test = () => {
  return (
    <>
      <span>{Strings.ui.test}</span>
    </>
  );
};

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Test} />
      </Switch>
    </Router>
  );
}
