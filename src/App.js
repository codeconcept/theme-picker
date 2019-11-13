import React from 'react';
import { Link, Route } from 'react-router-dom'
import './App.css';
import Registration from './Registration';
import Schedule from './Schedule';

function App() {
  return (
    <div className="App">
      <Link to="/registration">Inscriptions</Link>{" "}
      <Link to="/schedule">Programme</Link>
      <Route path="/registration" component={Registration} />
      <Route path="/schedule" component={Schedule} />
    </div>
  );
}

export default App;
