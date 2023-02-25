import React, { useEffect, useState } from "react";
// import { useContext } from "react";

// import { ProductContext } from "../../Context/Context";
import AiProduct from "../AiProduct/AiProduct";
import "./AiProducts.css";
// import { data } from "./aiProductsData";
import { HiFilter } from "react-icons/hi";
import { FiUnlock, FiDollarSign } from "react-icons/fi";

import { SlBadge } from "react-icons/sl";
import { MdFiberNew } from "react-icons/md";
import { FaTag } from "react-icons/fa";
import { GoVerified } from "react-icons/go";
import { Link } from "react-router-dom";

const AiProducts = () => {
  const [allProducts, setAllProducts] = useState([]);
  // const [projects, setProjects] = useState([]);
  // const [categories, setCategories] = useState([]);

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCategories(data);
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:5000/allProducts")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setAllProducts(data);
        // setProjects(data);
      });
  }, []);

  // const {categoryName} = toolCategories;

  //   const { _id } = allProducts;

  // const filterItem = (categoryItem) => {
  //   const updateItems = allProducts.filter((currentElement) => {
  //     return currentElement.category === categoryItem;
  //   });
  //   // console.log("id");
  //   console.log(updateItems);
  //   setProjects(updateItems);
  // };

  // const displayAllProjducts = () => {
  //   const allCategories = allProducts.map((project) => {
  //     return project;
  //   });
  //   setProjects(allCategories);
  // };

  return (
    <div>
      <section className="categories-section container text-center">
        {/* <div>{categories.length}</div> */}
        {categories.map((category) => (
          <span className=" btn btn-light">
            <Link
              //  onClick={()=>filterItem(category.name)}
              to={`/category/${category.name}`}
            >
              {category.name}
            </Link>
          </span>
        ))}
      </section>

  

      <div className="card-container container"> 
        {allProducts.map((ai) => (
          <AiProduct ai={ai} id={ai.index}></AiProduct>
        ))}
      </div> 
    </div>
  );
};

export default AiProducts;
