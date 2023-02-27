import React, { useContext, useEffect, useState } from "react";
// import Slider from 'react-touch-drag-slider'
// import { useContext } from "react";

// import { ProductContext } from "../../Context/Context";
import AiProduct from "../AiProduct/AiProduct";
import "./AiProducts.css";
// import { data } from "./aiProductsData";
// import { HiFilter } from "react-icons/hi";
// import { FiUnlock, FiDollarSign } from "react-icons/fi";

// import { SlBadge } from "react-icons/sl";
// import { MdFiberNew } from "react-icons/md";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
// import { GoVerified } from "react-icons/go";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/Context";

const AiProducts = () => {
  const [allProducts, setAllProducts] = useState([]);
  // const [projects, setProjects] = useState([]);
  // const [categories, setCategories] = useState([]);
  // const [isChecked, setIsChecked] = useState(false);

  const [categories, setCategories] = useState([]);
  const { handleAddtoFavourite } = useContext(AuthContext);

  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setCategories(data);
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:5000/allProducts")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setAllProducts(data);
        // setProjects(data);
      });
  }, []);

  

  // const handleChange = (props) => {
  //   setIsChecked(!isChecked);
  //   if (props.onChange) {
  //     props.onChange(!isChecked);
  //   }
  // };

  // const {categoryName} = toolCategories;

  //   const { _id } = allProducts;

  // const filterItem = (categoryItem) => {
  //   const updateItems = allProducts.filter((currentElement) => {
  //     return currentElement.category === categoryItem;
  //   });
    // console.log("id");
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
      <section className="categories-section container wrapper  text-center">
        {/* <div>{categories.length}</div> */}
        <FaArrowLeft />
        {categories.map((category) => (
          <span className="  btn btn-light border rounded-pill me-2">
            <Link
              //  onClick={()=>filterItem(category.name)}
              to={`/category/${category.name}`}
            >
              {category.name}
            </Link>
          </span>
        ))}
        <FaArrowRight />
        {/* <div>
<div className="slider">
      <input
        type="checkbox"
        id={props.id}
        checked={isChecked}
        onChange={handleChange}
      />
      <label htmlFor={props.id}></label>
</div>
</div> */}

        {/* <Slider
      onSlideComplete={(i) => {
        console.log('finished dragging, current slide is', i)
      }}
      onSlideStart={(i) => {
        console.log('started dragging on slide', i)
      }}
      activeIndex={0}
      threshHold={100}
      transition={0.5}
      scaleOnDrag={true}
    >
      {categories.map(({ url, title }, index) => (
        <img src={url} key={index} alt={title} />
      ))}
    </Slider> */}
      </section>

      <div className="card-container container">
        {allProducts.map((product) => (
          <AiProduct product={product} id={product.index}
          handleAddtoFavourite={handleAddtoFavourite}
          ></AiProduct>
        ))}
      </div>
    </div>
  );
};

export default AiProducts;
