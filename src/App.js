import React from 'react';
import { Link, Route } from 'react-router-dom'
import './App.css';
import Registration from './Registration';
import Schedule from './Schedule';
import Home from './Home';

function App() {
  return (
    <div className="App">
      <Link to="/">Accueil</Link>{" "}
      <Link to="/registration">Inscriptions</Link>{" "}
      <Link to="/schedule">Programme</Link>
      <Route exact path="/" component={Home} />
      <Route path="/registration" component={Registration} />
      <Route path="/schedule" component={Schedule} />
    </div>
  );
}

export default App;
