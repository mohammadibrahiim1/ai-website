import React, { useEffect, useState } from "react";
// import { useContext } from "react";

// import { ProductContext } from "../../Context/Context";
import AiProduct from "../AiProduct/AiProduct";
import "./AiProducts.css";
// import { data } from "./aiProductsData";
import { HiFilter } from "react-icons/hi";
import { SlBadge } from "react-icons/sl";
import { MdFiberNew } from "react-icons/md";
// import { FaSortDown } from "react-icons/fa"; 
import { GoVerified } from "react-icons/go";
import { Link } from "react-router-dom";

const AiProducts = () => {
  
  
  

    const [ allProducts , setAllProducts] = useState([]);
  const [projects, setProjects] = useState([]);

  useEffect( ()=> {
    fetch('api.json')
    .then( res => res.json())
    .then( data => {
        console.log(data)
        setAllProducts(data)
        setProjects(data);
    })
  } ,[])
 


  const filterItem = (categoryItem) => {
    const updateItems = allProducts.filter((currentElement) => {
      return currentElement.category === categoryItem;
    });
  
    setProjects(updateItems);
  };

  const displayAllProjducts = () => {
    const allCategories = allProducts.map((project) => {
      return project;
    });
    setProjects(allCategories);
  };

  return (
    <div>
      <section className="filter-section d-flex justify-content-evenly">
        <div>
            <button className="btn btn-light border-dark filter">Filters<HiFilter className="ms-2 text-secondary"/></button>
        </div>
        <div className="projects-filter-nav mt-2">
          <button className="filter-button" onClick={() => filterItem("art")}>
            art
          </button>

          <button
            className="filter-button"
            onClick={() => filterItem("chatGPT")}
          >
            chatGPT
          </button>
          <button
            className="filter-button"
            onClick={() => filterItem("copywriting")}
          >
            copywriting
          </button>
          <button
            className="filter-button"
            onClick={() => filterItem("customer-support")}
          >
            customer support
          </button>
          <button
            className="filter-button"
            onClick={() => filterItem("audio-editing")}
          >
            audio editing
          </button>
          <button
            className="filter-button"
            onClick={() => filterItem("code-assistant")}
          >
            code assistant
          </button>
          <button className="filter-button" onClick={displayAllProjducts}>
            allProducts
          </button>
        </div>
        <div className="dropdown">
            <div className="btn btn-light border-dark sort dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">sort by
            {/* <FaSortDown className="ms-2 mb-2 text-secondary"/> */}
            </div>
            <ul class="dropdown-menu">
            <li><Link class="dropdown-item" href="#">< GoVerified className="text-primary me-2"/> Verified</Link></li>
            <li><Link class="dropdown-item" href="#">< MdFiberNew className="text-primary me-2"/> New</Link></li>
            <li><Link class="dropdown-item" href="#"> < SlBadge className="text-primary me-2"/>Popular</Link></li>
            
          </ul>
        </div>
      </section>

      <div className="card-container">
        {projects.map((ai) => (
          <AiProduct  ai={ai} id={ai.index}></AiProduct>
        ))}
      </div>
    </div>
  );
};

export default AiProducts;
