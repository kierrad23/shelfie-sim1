import React from "react";

function Product(props) {
  return (
    <div>
      <h1>Product</h1>
      <p>Name : {props.name}</p>
      <p>Price : {props.price}</p>
      <p>Image: {props.image}</p>
      <button onClick="">Cancel</button>
      <button onClick="">Save Changes</button>
      <button onClick={() => props.deleter(props.i)}>Delete</button>
    </div>
  );
}

export default Product;
