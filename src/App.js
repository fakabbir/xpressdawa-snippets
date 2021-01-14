import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import "./style.css";
import MgTool from "./components/MobileView/1mg";

export default function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <MgTool />
        </Route>
        <Route path="/a">
          <About />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
      </Switch>
    </div>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}
