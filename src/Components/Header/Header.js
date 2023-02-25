import React from "react";
import { FaSearch,FaNewspaper } from "react-icons/fa";
import { BsPeopleFill, BsBookmarkHeart,BsTools } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <section className="text-center">
        <div className="header-info text-primary fw-semibold">
          <div className="">
            <BsPeopleFill style={{"width":"18px","height":"18px"}} /> <span>50,000+</span>{" "}
          </div>
          <div>
            {" "}
            <BsBookmarkHeart style={{"width":"18px","height":"18px"}}/> <span>130,000+</span>{" "}
          </div>
          <div>
            {" "}
            <BsBookmarkHeart style={{"width":"18px","height":"18px"}}/> <span>50,000+</span>{" "}
          </div>
        </div>
        <h1 className="header-title">FUTUREPEDIA</h1>
        <h4 className="text-secondary header-subtitle mt-3">
          THE LARGEST AI TOOLS DIRECTORY, UPDATED DAILY
        </h4>
        <div className="mt-5 header-link">
          <Link to="/recent" className="btn btn-outline-primary fw-semibold me-lg-5 me-md-5"> < BsTools className="me-1"/> Tools Added Today</Link>
          <Link to="/recent" className="btn btn-outline-secondary fw-semibold"> < FaNewspaper className="me-1"/> News Added Today</Link>
        </div>
      </section>
   

      <section className="">
        <div class="search-field">
          {" "}
          <div class="row d-flex justify-content-center">
            {" "}
            <div class="col-md-9">
              {" "}
              <div class="search-card p-4 mt-3">
                {" "}
                <h3 class="heading text-center">
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
