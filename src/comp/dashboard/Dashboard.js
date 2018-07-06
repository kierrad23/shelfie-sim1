import React, { Component } from "react";
import axios from "axios";
import Product from "../product/Product";

class Dashboard extends Component {
  constructor() {
    super();
    this.deleteProduct = this.deleteProduct.bind(this);
  }
  deleteProduct(i) {
    axios.delete(`/api/product/${i}`).then(res => {
      this.props.receive();
    });
  }
  render() {
    let products = this.props.list.map((e, i) => {
      return (
        <Product
          key={i}
          name={e.name}
          price={e.price}
          image={e.img}
          i={i}
          deleter={this.deleteProduct}
        />
      );
    });
    return (
      <div>
        Dashboard
        {products}
      </div>
    );
  }
}

export default Dashboard;
