import React from "react";
import { Link, Route } from "react-router-dom";
import "./App.css";
import Registration from "./Registration";
import Schedule from "./Schedule";
import Home from "./Home";

class App extends React.Component {
  state = { theme: "day" };
  render() {
    const { theme } = this.state;
    return (
      <div className={theme === "day" ? "App day" : "App night"}>
        <Link to="/">Accueil</Link> <Link to="/registration">Inscriptions</Link>{" "}
        <Link to="/schedule/Dijon">Programmes de Dijon</Link>{" "}
        <Link to="/schedule/Lyon">Programmes de Lyon</Link>{" "}
        <Link to="/schedule">Programmes</Link>{" "}
        <label htmlFor="theme">
          thème{" "}
          <select
            id="name"
            value={theme}
            onChange={e => this.setState({ theme: e.target.value })}
          >
            <option value="day">jour</option>
            <option value="night">nuit</option>
          </select>
        </label>
        <Route exact path="/" component={Home} />
        <Route path="/registration" component={Registration} />
        <Route path="/schedule/:town?" component={Schedule} />
      </div>
    );
  }
}

export default App;
