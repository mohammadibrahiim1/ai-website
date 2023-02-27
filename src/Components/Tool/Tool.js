import React from 'react';
import { Link } from 'react-router-dom';
import { FaExternalLinkAlt } from "react-icons/fa";
import { BsBookmarkHeart } from "react-icons/bs";
import './Tool.css'

const Tool = ({tool,handleRemoveProduct}) => {
    return (
        <div>
            <div class="card shadow mt-5" style={{ width: "22rem" }}>
        <Link to="">
          {" "}
          <img src={tool.mainImage.asset._ref} class="card-img-top" alt="..." />
        </Link>
        <div class="card-body text-start">
          <Link class="card-title" to={`/tool/${tool.category}`}>{tool.toolName}</Link>
          <div class="btn btn-light disabled pricing-tag">{tool.startingPrice}</div>
          <p class="card-text">{tool.toolDescription.slice(0, 100)}...</p>
          <div className="text-info mt-4 mb-4">
            <span class="btn btn-outline-secondary disabled me-4">
              {tool.pricing[0]}
            </span>
            {tool.pricing[1] ? (
              <span class="btn btn-outline-secondary disabled">
                {tool.pricing[1]}
              </span>
            ) : (
              ""
            )}

            {/* <span>{toolCategories[1].categoryName}</span> */}
          </div>
          <div className="mb-4">
            <Link to="" className="text-decoration me-4" disabled>
              {tool.category}
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
            <Link id="mytooltip" to="" class="btn btn-outline-info "
             onClick={()=>handleRemoveProduct (tool)}
             >
              <BsBookmarkHeart 
                className="ms-5 me-5 mb-1 text-center"
                style={{ height: "15px", width: "15px" }}
              />
            </Link>
          </tippy>
        </div>
      </div>
        </div>
    );
};

export default Tool;