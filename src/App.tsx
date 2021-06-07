import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.global.sass';

const Test = () => {
  return <></>;
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
