import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";

import axios from "axios";
import routes from "./routes";

import Dashboard from "./comp/dashboard/Dashboard";
import Form from "./comp/form/Form";
import Header from "./comp/header/Header";

class App extends Component {
  constructor() {
    super();
    this.state = {
      inventory: []
    };

    this.componentDidMount = this.componentDidMount.bind(this);
  }
  componentDidMount() {
    axios
      .get("/api/inventory")
      .then(res => this.setState({ inventory: res.data }));
  }

  render() {
    return (
      <div>
        <nav>
          <Link to="/">DashBoard</Link>
          <Link to="/add">Add to Inventory</Link>
        </nav>
        {routes}
      </div>
    );
  }
}

export default App;
