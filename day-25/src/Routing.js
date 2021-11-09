import React from 'react'
import { Switch, Route, NavLink } from "react-router-dom";
import Home from './Home';
import About from './About';
import Dashboard from './Dashboard';



export const Routing = () => {
    return (
        <div>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        </div>
    )
}

export const Linking = () => {
  return (
    <div style={{display: "flex", position: "sticky", zIndex: '100', top: '0'}}>
      <NavLink style={{marginLeft: "-20px", marginRight: "45px", textDecoration: "none"}} to='/'>
        <h3>Home</h3>
      </NavLink>
      <NavLink style={{marginRight: "45px", textDecoration: "none"}} to='/about'>
        <h3>About</h3>
      </NavLink>
      <NavLink style={{marginRight: "45px", textDecoration: "none"}} to='/dashboard'>
        <h3>Dashboard</h3>
      </NavLink>
    </div>
  );
}
