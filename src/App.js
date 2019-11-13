import React from "react";
import { NavLink, Route, Switch } from "react-router-dom";
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
        <NavLink exact activeClassName="selected" to="/">
          Accueil
        </NavLink>{" "}
        <NavLink activeClassName="selected" to="/registration">
          Inscriptions
        </NavLink>{" "}
        <NavLink exact activeClassName="selected" to="/schedule/Dijon">
          Programmes de Dijon
        </NavLink>{" "}
        <NavLink exact activeClassName="selected" to="/schedule/Lyon">
          Programmes de Lyon
        </NavLink>{" "}
        <NavLink exact activeClassName="selected" to="/schedule">
          Programmes
        </NavLink>{" "}
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
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/registration" component={Registration} />
          <Route path="/schedule/:town?" component={Schedule} />
        </Switch>
      </div>
    );
  }
}

export default App;
