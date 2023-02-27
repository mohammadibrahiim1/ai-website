import React, { useContext } from "react";
// import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/Context";

import "./FTools.css";
import Tool from "../Tool/Tool";

const FTools = () => {
  const { cart,handleRemoveProduct } = useContext(AuthContext);
  console.log(cart);

  // const {
  //     mainImage,
  //     toolName,
  //     toolDescription,
  //     pricing,
  //     category,
  //     startingPrice,

  //   } = cart;

 

  return (
    <div className="container">
     <p className="mt-4 ms-4 text-muted fs-5"> <span className="text-primary-emphasis"> {cart.length}</span> favourite tools</p>
      <div className="favourite-tool-container container">
        {cart.map((tool) => (
          <Tool tool={tool} key={tool._id} 
          handleRemoveProduct={handleRemoveProduct}></Tool>
        ))}
      </div>
    </div>
  );
};

export default FTools;
