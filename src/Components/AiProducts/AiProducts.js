import React, { useEffect, useState } from "react";
// import { useContext } from "react";

// import { ProductContext } from "../../Context/Context";
import AiProduct from "../AiProduct/AiProduct";
import "./AiProducts.css";
// import { data } from "./aiProductsData";
import { HiFilter } from "react-icons/hi";
import { FaSortDown } from "react-icons/fa";

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
          {/* <button
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
          </button> */}
        </div>
        <div>
            <button className="btn btn-light border-info sort">sort by<FaSortDown className="ms-2 mb-2 text-secondary"/></button>
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
