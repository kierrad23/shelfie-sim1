import React, { Component } from "react";
import axios from "axios";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      url: "",
      pname: "",
      price: "0"
    };
    this.handleReset = this.handleReset.bind(this);
    this.handleUrl = this.handleUrl.bind(this);
    this.handlePName = this.handlePName.bind(this);
    this.handlePrice = this.handlePrice.bind(this);
    this.createProduct = this.createProduct.bind(this);
  }
  handleUrl(val) {
    this.setState({
      url: val
    });
  }

  handlePName(val) {
    this.setState({
      pname: val
    });
  }
  handlePrice(val) {
    this.setState({
      price: val
    });
  }

  handleReset() {
    this.setState({
      url: "",
      pname: "",
      price: ""
    });
  }

  createProduct() {
    axios
      .post("/api/product", {
        name: this.state.pname,
        price: this.state.price,
        image: this.state.url
      })
      .then(res => {
        this.props.receive();
        this.handleReset();
      });
  }

  render() {
    return (
      <div>
        Form
        <input
          placeholder="URL"
          value={this.state.url}
          onChange={e => this.handleUrl(e.target.value)}
        />
        <input
          placeholder="Name"
          value={this.state.pname}
          onChange={e => this.handlePName(e.target.value)}
        />
        <input
          value={this.state.price}
          onChange={e => this.handlePrice(e.target.value)}
          placeholder="0"
        />
        <button onClick={this.handleReset}>Cancel</button>
        <button onClick={this.createProduct}>Add to Inventory</button>
      </div>
    );
  }
}

export default Form;
