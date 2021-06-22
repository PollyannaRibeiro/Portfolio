import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import './App.css';
import '../src/assets/stylesheets/css/style.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home.jsx';
import SoleBeauty from './pages/SoleBeauty.jsx';
import Projects from './pages/Projects.jsx';
import Freela from './pages/Freelance';
import Ethos from './pages/EthosData'
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'

function App() {
  return (
    <>
    <Router>  
      <Header />
      <Switch>
        <Route exact path="/"><Home/></Route>
        <Route exact path="/projects"><Projects/></Route>
        <Route exact path="/soleBeauty"><SoleBeauty/></Route>
        <Route exact path="/ethosdata"><Ethos/></Route>
        <Route exact path="/freelance"><Freela/></Route>
        {/* <Route exact path="/wix"><Projects/></Route> */}
        {/* <Route exact path="/digitaldesign"><Projects/></Route> */}
      </Switch>
      <Footer/>   
    </Router>
    </>
  );
}

export default App;