import React from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <section>
        <div>
          {/* <ul>
            <li></li>
          </ul> */}
        </div>
        <h1 className="header-title">FUTUREPEDIA</h1>
        <h4 className="text-secondary">
          THE LARGEST AI TOOLS DIRECTORY, UPDATED DAILY
        </h4>
      </section>

      <section>
        <div class="search-field mt-4">
          {" "}
          <div class="row d-flex justify-content-center">
            {" "}
            <div class="col-md-9">
              {" "}
              <div class="search-card p-4 mt-3">
                {" "}
                <h3 class="heading mt-5 text-center">
                  Hi! How can we help You?
                </h3>{" "}
                <div class="d-flex justify-content-center px-5">
                  {" "}
                  <div class="search">
                    {" "}
                    <input
                      type="text"
                      class="search-input"
                      placeholder="Search..."
                      name=""
                    />{" "}
                    <Link href="#" class="search-icon">
                      {" "}
                      <i class="fLink fa-search">
                        <FaSearch />
                      </i>
                    </Link>{" "}
                  </div>{" "}
                </div>{" "}
              
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>
      </section>
    </div>
  );
};

export default Header;
