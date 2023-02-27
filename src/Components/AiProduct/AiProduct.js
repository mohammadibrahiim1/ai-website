// import { Button } from 'bootstrap';
import React from "react";
import { Link } from "react-router-dom";
import { FaExternalLinkAlt } from "react-icons/fa";
import { BsBookmarkHeart } from "react-icons/bs";
import tippy from "tippy.js";
import "tippy.js/dist/tippy.css";
import "tippy.js/themes/light.css";
import "./AiProduct.css";

const AiProduct = ({ product,handleAddtoFavourite}) => {
  tippy("#mytooltip", {
    content: "add to favourite",
    arrow: false,
    placement: "bottom",
    theme: "light-border",
  });
  tippy("#my-tooltip", {
    content: "visit the website",
    arrow: false,
    placement: "bottom",
    theme: "light-border",
  });

  const {
    mainImage,
    toolName,
    toolDescription,
    pricing,
    category,
    startingPrice,
    
  } = product;
 

  return (
    <div>
   

     <section className="card-section">
     <div class="card shadow mt-5" style={{ width: "22rem" }}>
        <Link to="">
          {" "}
          <img src={mainImage.asset._ref} class="card-img-top" alt="..." />
        </Link>
        <div class="card-body text-start">
          <Link class="card-title" to={`/tool/${category}`}>{toolName}</Link>
          <div class="btn btn-light disabled pricing-tag">{startingPrice}</div>
          <p class="card-text">{toolDescription.slice(0, 100)}...</p>
          <div className="text-info mt-4 mb-4">
            <span class="btn btn-outline-secondary disabled me-4">
              {pricing[0]}
            </span>
            {pricing[1] ? (
              <span class="btn btn-outline-secondary disabled">
                {pricing[1]}
              </span>
            ) : (
              ""
            )}

            {/* <span>{toolCategories[1].categoryName}</span> */}
          </div>
          <div className="mb-4">
            <Link to="" className="text-decoration me-4" disabled>
              {category}
            </Link>
            {/* <Link to="" className=" text-decoration me-4" disabled>
              {tagsIndex[1]}
            </Link>
            <Link to="" className=" text-decoration" disabled>
              {tagsIndex[2]}
            </Link> */}
          </div>

          <Link
            id="my-tooltip"
            to=""
            class="btn btn-info me-4 "
            data-bs-toggle="tooltip"
            data-bs-placement="bottom"
            data-bs-title="Tooltip on bottom"
          >
            <FaExternalLinkAlt
              className="ms-5  me-5 mb-1 text-center"
              style={{ height: "15px", width: "15px" }}
            />
          </Link>
          <tippy>
            <Link id="mytooltip" to="" class="btn btn-outline-info " onClick={()=>handleAddtoFavourite(product)}>
              <BsBookmarkHeart 
                className="ms-5 me-5 mb-1 text-center"
                style={{ height: "15px", width: "15px" }}
              />
            </Link>
          </tippy>
        </div>
      </div>
     </section>
    </div>
  );
};

export default AiProduct;
