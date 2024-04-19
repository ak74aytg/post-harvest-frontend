import React from "react";
import CardWrapper from "./CardWrapper";

function Products() {
  return (
    <div className="mb-5">
      <h1 className="nav-green text-3xl md:text-5xl roboto-regular mb-5 mt-5 text-center">
        Featured Products
      </h1>
      <CardWrapper />
    </div>
  );
}

export default Products;
