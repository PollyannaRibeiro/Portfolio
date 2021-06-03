import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home.jsx';
import Projects from './pages/projects.jsx';

import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'

function App() {
  return (
    <Router>  
      <Header />
      <Switch>
        <Route exact path="/"><Home/></Route>
        <Route exact path="/projects"><Projects/></Route>
      </Switch>
    </Router>
  );
}

export default App;