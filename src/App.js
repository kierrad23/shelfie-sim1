import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Dashboard from "./comp/dashboard/Dashboard";
import Form from "./comp/form/Form";
import Header from "./comp/header/Header";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Dashboard />
        <Header />
        <Form />
      </div>
    );
  }
}

export default App;
