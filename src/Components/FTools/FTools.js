import React, { useContext } from "react";
// import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/Context";

import "./FTools.css";
import Tool from "../Tool/Tool";

const FTools = () => {
  const { cart,setCart } = useContext(AuthContext);
  console.log(cart);

  // const {
  //     mainImage,
  //     toolName,
  //     toolDescription,
  //     pricing,
  //     category,
  //     startingPrice,

  //   } = cart;

  const handleRemove = (_id)=> {

    const array = cart.filter((item)=> item._id !== _id);
    setCart(array);

  }

  return (
    <div>
      {cart.length}favourite tools
      <div className="favourite-tool-container container">
        {cart.map((tool) => (
          <Tool tool={tool} key={tool._id} 
          handleRemove={handleRemove}></Tool>
        ))}
      </div>
    </div>
  );
};

export default FTools;
