import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { FaExternalLinkAlt } from "react-icons/fa";
import { BsBookmarkHeart } from "react-icons/bs";

const SelectedProduct = () => {
    const [categories, setCategories] = useState([]);

    const selecItem = useLoaderData();
    // console.log(selecItem);

    useEffect(() => {
        fetch("http://localhost:5000/categories")
          .then((res) => res.json())
          .then((data) => {
            // console.log(data);
            setCategories(data);
          });
      }, []);
    const {
        mainImage,
        toolName,
        toolDescription,
        pricing,
        // tagsIndex,
        startingPrice,
        category,
      } = selecItem;
    return (
        <div>

            <section>
            <section className="categories-section container">
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
            </section>
           
     <section className="card-section container m-auto">
     <div class="card shadow mt-5" style={{ width: "22rem" }}>
        <Link to="/">
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
              #{category}
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
            <Link id="mytooltip" to="" class="btn btn-outline-info ">
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

export default SelectedProduct;