import React from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <section className="">
        <nav class="navbar navbar-expand-lg p-3">
          <div class="container">
            <Link class="navbar-brand" to="/">
              <img
                src="https://i.ibb.co/brKp5RZ/8ca76aec-f167-425d-8892-7ca993131ed7.jpg"
                alt=""
                style={{ width: "160px", height: "62px" }}
              />
            
            </Link>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarTogglerDemo02"
              aria-controls="navbarTogglerDemo02"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul class="navbar-nav m-auto mb-2 ms-sm-5 mt-sm-3  mb-lg-0">
                <li class="nav-item">
                  <Link class="nav-link me-5" aria-current="page" to="/home">
                    Favourites
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link me-5" to="/shop">
                    Discover
                  </Link>
                </li>
            
                <li class="nav-item dropdown">
                  <Link class="nav-link me-5 dropdown-toggle" to="/about" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Submit
                  </Link>
                  <ul class="dropdown-menu">
            <li><Link class="dropdown-item" href="#">Submit Tool</Link></li>
            <li><Link class="dropdown-item" href="#">Submit News</Link></li>
            
          </ul>
                </li>
                <li class="nav-item dropdown">
                  <Link class="nav-link me-5 dropdown-toggle" to="/about" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Community
                  </Link>
                  <ul class="dropdown-menu">
            <li><Link class="dropdown-item" href="#">Free weekly newsletter</Link></li>
            <li><Link class="dropdown-item" href="#">Latest Ai News</Link></li>
            <li><Link class="dropdown-item" href="#">Join discord</Link></li>
            <li><hr class="dropdown-divider"/></li>
            <li><Link class="dropdown-item" href="#">Join discord</Link></li>
          </ul>
                </li>
              </ul>
            </div>
            <div>
          <Link className="btn btn-light">
            <span className="me-3">
              <FcGoogle style={{height:"25px", width:"25px"}}/>
            </span>
          Login
          </Link>
          </div>
          </div>
         
        </nav>
      </section>
      <hr />
    </div>
  );
};

export default Navbar;
