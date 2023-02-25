import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaLinkedin,FaYoutube,FaTwitter,FaDiscord } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import "./Navbar.css";
import { AuthContext } from "../../Context/Context";

const Navbar = () => {
  const [error, setError] = useState();
  const Navigate = useNavigate();

  const { signInWithGoogle, user, logOut } = useContext(AuthContext);
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        console.log(user);
        // Navigate("/favourite");
        Navigate(from, { replace: true });
        // from.reset();
        setError("");
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  };

  const handleSignOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
    Navigate("/signin");
  };

  return (
    <div>
      {/* <section className="d-none">
        <nav class="navbar">
        
          <div class="logo">Logo</div>

        
          <ul class="menu">
            <li>
              <Link to="#">Home</Link>
            </li>
            <li>
              <Link to="#">About</Link>
            </li>
            <li>
              <Link to="#">Contact</Link>
            </li>
          </ul>

       
          <Link class="login-btn" to="#">
            Log In
          </Link>
        </nav>
      </section> */}

      <section className="d-sm-none d-md-block d-lg-block d-none">
        <nav class="navbar navbar-expand-lg navbar-expand-md p-3 ">
          <div class="container">
            <Link class="navbar-brand" to="/">
              <img
                src="https://i.ibb.co/brKp5RZ/8ca76aec-f167-425d-8892-7ca993131ed7.jpg"
                alt=""
                style={{ width: "100px", height: "32px" }}
              />
            </Link>
            {/* <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarTogglerDemo02"
              aria-controls="navbarTogglerDemo02"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button> */}
            <div class="">
              <ul class="navbar-nav m-auto ms-md-auto mb-2  mt-sm-3  mb-lg-0">
                <li class="nav-item">
                  <Link
                    class="nav-link me-lg-5 me-md-1"
                    aria-current="page"
                    to="/favourite"
                  >
                    Favourites
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link me-lg-5 me-md-1" to="/discover">
                    Discover
                  </Link>
                </li>

                <li class="nav-item dropdown">
                  <Link
                    class="nav-link me-lg-5 me-md-1 dropdown-toggle"
                    to="/about"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Submit
                  </Link>
                  <ul class="dropdown-menu dropdown-center">
                    <li>
                      <Link class="dropdown-item" to="#">
                        Submit Tool
                      </Link>
                    </li>
                    <li>
                      <Link class="dropdown-item" to="#">
                        Submit News
                      </Link>
                    </li>
                  </ul>
                </li>
                <li class="nav-item dropdown">
                  <Link
                    class="nav-link me-lg-5 me-md-1 dropdown-toggle"
                    to="/about"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Community
                  </Link>
                  <ul class="dropdown-menu dropdown-start">
                    <li>
                      <Link class="dropdown-item" to="#">
                        Free weekly newsletter
                      </Link>
                    </li>
                    <li>
                      <Link class="dropdown-item" to="#">
                        Latest Ai News
                      </Link>
                    </li>
                    <li>
                      <Link class="dropdown-item" to="#">
                        Join discord
                      </Link>
                    </li>
                    <li>
                      <hr class="dropdown-divider" />
                    </li>
                    <li>
                      <Link class="dropdown-item" to="#">
                        Join discord
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="d-sm-none d-lg-block d-md-block d-none">
              {user?.email ? (
                // <div class=""
                //   onClick={handleSignOut}
                //   className="btn btn-light text-danger-emphasis nav-item dropdown"
                // >
                //   <span><img src={user.photoURL} alt="" style={{height:"25px",width:"25px"}} className="border rounded-circle" /></span>
                //   {" "}
                //   {/* <FiLogOut
                //     className="me-3"
                //     style={{ height: "25px", width: "25px" }}
                //   /> */}
                //   {user.displayName}
                //   <li>
                //   <Link
                //     class="nav-link me-5 dropdown-toggle"
                //     to="/about"
                //     role="button"
                //     data-bs-toggle="dropdown"
                //     aria-expanded="false"
                //   >
                //     Submit
                //   </Link>
                //   <ul class="dropdown-menu">
                //     <li>
                //       <Link class="dropdown-item" to="#">
                //         Submit Tool
                //       </Link>
                //     </li>
                //     <li>
                //       <Link class="dropdown-item" to="#">
                //         Submit News
                //       </Link>
                //     </li>
                //   </ul>
                // </li>
                // </div>

                <div className="ms-5">
                  <div class="nav-item dropdown">
                    <Link
                      class="nav-link me-5 dropdown-toggle"
                      to="/about"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <div className="btn btn-light border rounded-pill">
                        <span>
                          <img
                            src={user.photoURL}
                            alt=""
                            style={{ height: "25px", width: "25px" }}
                            className="border rounded-circle  me-2"
                          />
                        </span>
                        <span className="userName">{user.displayName}</span>
                      </div>
                    </Link>
                    <ul class="dropdown-menu dropdown-center">
                      <li>
                        <Link class="dropdown-item" to="#">
                          Your Favourite
                        </Link>
                      </li>
                      <li>
                        <Link
                          class="dropdown-item"
                          to="#"
                          onClick={handleSignOut}
                        >
                          Log Out
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              ) : (
                <>
                  {" "}
                  <Link to="/signin">
                    {" "}
                    <button class="btn btn-light" onClick={handleGoogleSignIn}>
                      <FcGoogle
                        className="me-3"
                        style={{ height: "25px", width: "25px" }}
                      />
                      Login
                    </button>
                    {/* <span className="me-3">
              <FcGoogle style={{height:"25px", width:"25px"}}/>
            </span> */}
                  </Link>
                </>
              )}
            </div>
          </div>
        </nav>
      </section>

      {/* offcanvas navbar */}

      <section className="d-lg-none d-md-none d-block d-sm-block">
        <nav class="navbar fixed-top">
          <div class="container">
            <Link class="navbar-brand" to="/">
              <img
                src="https://i.ibb.co/brKp5RZ/8ca76aec-f167-425d-8892-7ca993131ed7.jpg"
                alt=""
                style={{ width: "120px", height: "42px" }}
              />
            </Link>
            
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbar"
              aria-controls="offcanvasNavbar"
            >
           
              <span class="navbar-toggler-icon"></span>
            </button>
            <div
              class="offcanvas offcanvas-end"
              tabindex="-1"
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
            >
              <div class="offcanvas-header">
                <Link to="/" class="offcanvas-title" id="offcanvasNavbarLabel">
                  Futurepedia
                </Link>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div class="offcanvas-body">
                {/* <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li class="nav-item">
            <Link class="nav-link active" aria-current="page" to="#">Home</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="#">Link</Link>
          </li>
          <li class="nav-item dropdown">
            <Link class="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown
            </Link>
            <ul class="dropdown-menu">
              <li><Link class="dropdown-item" to="#">Action</Link></li>
              <li><Link class="dropdown-item" to="#">Another action</Link></li>
              <li>
                <hr class="dropdown-divider"/>
              </li>
              <li><Link class="dropdown-item" to="#">Something else here</Link></li>
            </ul>
          </li>
        </ul> */}

                <ul class="navbar-nav m-auto mb-2 ms-sm-5 mt-sm-3  mb-lg-0">
                  <li class="nav-item">
                    <Link
                      class="nav-link me-5"
                      aria-current="page"
                      to="/favourite"
                    >
                      Favourites
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link me-5" to="/discover">
                      Discover
                    </Link>
                  </li>

                  <li class="nav-item dropdown">
                    <Link
                      class="nav-link me-5 dropdown-toggle"
                      to="/about"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Submit
                    </Link>
                    <ul class="dropdown-menu dropdown-center">
                      <li>
                        <Link class="dropdown-item" to="#">
                          Submit Tool
                        </Link>
                      </li>
                      <li>
                        <Link class="dropdown-item" to="#">
                          Submit News
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li class="nav-item dropdown">
                    <Link
                      class="nav-link me-5 dropdown-toggle"
                      to="/about"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Community
                    </Link>
                    <ul class="dropdown-menu dropdown-start">
                      <li>
                        <Link class="dropdown-item" to="#">
                          Free weekly newsletter
                        </Link>
                      </li>
                      <li>
                        <Link class="dropdown-item" to="#">
                          Latest Ai News
                        </Link>
                      </li>
                      <li>
                        <Link class="dropdown-item" to="#">
                          Join discord
                        </Link>
                      </li>
                      <li>
                        <hr class="dropdown-divider" />
                      </li>
                      <li>
                        <Link class="dropdown-item" to="#">
                          Join discord
                        </Link>
                      </li>
                    </ul>
                  </li>
              
                </ul>
                {/* <form class="d-flex mt-3" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form> */}

                <div className="offcanvas-login">
                  {user?.email ? (
                    // <div class=""
                    //   onClick={handleSignOut}
                    //   className="btn btn-light text-danger-emphasis nav-item dropdown"
                    // >
                    //   <span><img src={user.photoURL} alt="" style={{height:"25px",width:"25px"}} className="border rounded-circle" /></span>
                    //   {" "}
                    //   {/* <FiLogOut
                    //     className="me-3"
                    //     style={{ height: "25px", width: "25px" }}
                    //   /> */}
                    //   {user.displayName}
                    //   <li>
                    //   <Link
                    //     class="nav-link me-5 dropdown-toggle"
                    //     to="/about"
                    //     role="button"
                    //     data-bs-toggle="dropdown"
                    //     aria-expanded="false"
                    //   >
                    //     Submit
                    //   </Link>
                    //   <ul class="dropdown-menu">
                    //     <li>
                    //       <Link class="dropdown-item" to="#">
                    //         Submit Tool
                    //       </Link>
                    //     </li>
                    //     <li>
                    //       <Link class="dropdown-item" to="#">
                    //         Submit News
                    //       </Link>
                    //     </li>
                    //   </ul>
                    // </li>
                    // </div>

                    <div className="">
                       <Link
                              class="text-danger-emphasis btn btn-light"
                              to="#"
                              onClick={handleSignOut}
                            >
                              <span>< FiLogOut className="me-2"/></span>
                              Log Out
                            </Link>
                      {/* <div class="nav-item dropdown">
                        <Link
                          class="nav-link me-5 dropdown-toggle"
                          to="/about"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <div className="btn btn-light">
                            <span>
                              <img
                                src={user.photoURL}
                                alt=""
                                style={{ height: "25px", width: "25px" }}
                                className="border rounded-circle me-2"
                              />
                            </span>
                            <span className="userName">{user.displayName}</span>
                          </div>
                        </Link>
                        <ul class="dropdown-menu dropdown-center">
                          <li>
                            <Link class="dropdown-item" to="#">
                              Your Favourite
                            </Link>
                          </li>
                          <li>
                            <Link
                              class="dropdown-item"
                              to="#"
                              onClick={handleSignOut}
                            >
                              Log Out
                            </Link>
                          </li>
                        </ul>
                      </div> */}
                    </div>
                  ) : (
                    <>
                      {" "}
                      <Link to="/signin">
                        {" "}
                        <button
                          class="btn btn-light "
                          onClick={handleGoogleSignIn}
                        >
                          <FcGoogle
                            className="me-2"
                            style={{ height: "25px", width: "25px" }}
                          />
                          Login
                        </button>
                        {/* <span className="me-3">
              <FcGoogle style={{height:"25px", width:"25px"}}/>
            </span> */}
                      </Link>
                    </>
                  )}
                </div>
     
              </div>

              <div className="column w-25 m-auto offcanvas-social-link">
          {/* <h3>Column 3</h3> */}
          <ul className="text-end link-container">
            <Link
              to="https://www.linkedin.com/company/futurepedia/"
              className="me-4 text-primary-emphasis"
            >
              <FaLinkedin style={{ height: "29px", width: "29px" }} />
            </Link>

            <Link
              to="https://www.youtube.com/@futurepediaio"
              className="me-4 text-danger"
            >
              <FaYoutube style={{ height: "29px", width: "29px" }} />
            </Link>
            <Link
              to="https://twitter.com/futurepedia_io"
              className="me-4 text-info-emphasis"
            >
              <FaTwitter style={{ height: "29px", width: "29px" }} />
            </Link>
            <Link
              to="https://discord.gg/jkfjCB9qx6"
              className="me-4 text-danger-emphasis "
            >
              <FaDiscord style={{ height: "29px", width: "29px" }} />
            </Link>
          </ul>
        </div>
        
            </div>
          </div>
        </nav>
      </section>
      <hr />
    </div>
  );
};

export default Navbar;
