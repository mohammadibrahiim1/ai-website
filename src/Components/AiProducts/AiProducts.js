import React, { useEffect, useState } from "react";
// import { useContext } from "react";

// import { ProductContext } from "../../Context/Context";
import AiProduct from "../AiProduct/AiProduct";
import "./AiProducts.css";
// import { data } from "./aiProductsData";
import { HiFilter } from "react-icons/hi";
import { FiUnlock,FiDollarSign } from "react-icons/fi";

import { SlBadge } from "react-icons/sl";
import { MdFiberNew } from "react-icons/md";
import { FaTag } from "react-icons/fa";
import { GoVerified } from "react-icons/go";
import { Link } from "react-router-dom";

const AiProducts = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("api.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setAllProducts(data);
        setProjects(data);
      });
  }, []);

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
      {/* <!-- Modal --> */}
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title" id="exampleModalLabel">
                Select Filters To Apply
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div className="mt-2 ms-4">
                <h6 className="text-secondary text-start">Pricing</h6>
                <div className="pricing-checkbox text-start">
                  <div className="">
                    <div>
                      <input
                        type="checkbox"
                        name="Free"
                        id=""
                        style={{ width: "15px", height: "15px" }}
                      />{" "}
                      <FiUnlock className="mb-2 ms-2 me-1" />
                      <label className="label mb-3" htmlFor="Free">
                        Free
                      </label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        name="Free Trial"
                        id=""
                        style={{ width: "15px", height: "15px" }}
                      />{" "}
                      <FiUnlock className="mb-2 ms-2 me-1" />
                      <label className="label mb-3" htmlFor="Free Trial">Free Trial</label>
                    </div>
                    <div>
                      <input type="checkbox" name="Contact For Pricing" id=""   style={{ width: "15px", height: "15px" }} />{" "} < FiDollarSign className="mb-2 ms-2 me-1" />
                      <label className="label mb-3" htmlFor="Contact For Pricing"> 
                        Contact For Pricing
                      </label>
                    </div>
                  </div>
                  <div>
                  <div>
                      <input type="checkbox" name="Contact For Pricing" id=""   style={{ width: "15px", height: "15px" }} />{" "} < FiDollarSign className="mb-2 ms-2 me-1" />
                      <label className="label mb-3" htmlFor="Freemium"> 
                        Freemium
                      </label>
                    </div>
                  <div>
                      <input type="checkbox" name="Contact For Pricing" id=""   style={{ width: "15px", height: "15px" }} />{" "} < FiDollarSign className="mb-2 ms-2 me-1" />
                      <label className="label mb-3" htmlFor="Paid"> 
                       Paid
                      </label>
                    </div>
                  <div>
                      <input type="checkbox" name="Contact For Pricing" id=""   style={{ width: "15px", height: "15px" }} />{" "} < FaTag className="mb-2 ms-2 me-1" />
                      <label className="label mb-3" htmlFor="Deals"> 
                        Deals
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-5 ms-4">
                <h6 className="text-secondary text-start">Features</h6>
                <div className="pricing-checkbox text-start ">
                  <div className="">
                    <div>
                      <input
                        type="checkbox"
                        name="Free"
                        id=""
                        style={{ width: "15px", height: "15px" }}
                      />{" "}
                      <FiUnlock className="mb-2 ms-2 me-1" />
                      <label className="label mb-3" htmlFor="Free">
                        Free
                      </label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        name="Free Trial"
                        id=""
                        style={{ width: "15px", height: "15px" }}
                      />{" "}
                      <FiUnlock className="mb-2 ms-2 me-1" />
                      <label className="label mb-3" htmlFor="Free Trial">Free Trial</label>
                    </div>
                    <div>
                      <input type="checkbox" name="Contact For Pricing" id=""   style={{ width: "15px", height: "15px" }} />{" "} < FiDollarSign className="mb-2 ms-2 me-1" />
                      <label className="label mb-3" htmlFor="Contact For Pricing"> 
                        Contact For Pricing
                      </label>
                    </div>
                  </div>
                  <div>
                  <div>
                      <input type="checkbox" name="Contact For Pricing" id=""   style={{ width: "15px", height: "15px" }} />{" "} < FiDollarSign className="mb-2 ms-2 me-1" />
                      <label className="label mb-3" htmlFor="Freemium"> 
                        Freemium
                      </label>
                    </div>
                  <div>
                      <input type="checkbox" name="Contact For Pricing" id=""   style={{ width: "15px", height: "15px" }} />{" "} < FiDollarSign className="mb-2 ms-2 me-1" />
                      <label className="label mb-3" htmlFor="Paid"> 
                       Paid
                      </label>
                    </div>
                  <div>
                      <input type="checkbox" name="Contact For Pricing" id=""   style={{ width: "15px", height: "15px" }} />{" "} < FaTag className="mb-2 ms-2 me-1" />
                      <label className="label mb-3" htmlFor="Deals"> 
                        Deals
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Clear
              </button>
              <button type="button" class="btn btn-primary">
                Apply Filter
              </button>
            </div>
          </div>
        </div>
      </div>

      <section className="filter-section d-flex justify-content-evenly">
        <div>
          <button
            className="btn btn-light border-dark filter"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Filters
            <HiFilter className="ms-2 text-secondary" />
          </button>
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
          <div
            className="btn btn-light border-dark sort dropdown-toggle"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            sort by
            {/* <FaSortDown className="ms-2 mb-2 text-secondary"/> */}
          </div>
          <ul class="dropdown-menu">
            <li>
              <Link class="dropdown-item" href="#">
                <GoVerified className="text-primary me-2" /> Verified
              </Link>
            </li>
            <li>
              <Link class="dropdown-item" href="#">
                <MdFiberNew className="text-primary me-2" /> New
              </Link>
            </li>
            <li>
              <Link class="dropdown-item" href="#">
                {" "}
                <SlBadge className="text-primary me-2" />
                Popular
              </Link>
            </li>
          </ul>
        </div>
      </section>

      <div className="card-container">
        {projects.map((ai) => (
          <AiProduct ai={ai} id={ai.index}></AiProduct>
        ))}
      </div>
    </div>
  );
};

export default AiProducts;
