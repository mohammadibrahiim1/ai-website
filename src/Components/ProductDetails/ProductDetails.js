import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { FaExternalLinkAlt } from "react-icons/fa";
import "./ProductsDetails.css";

const ProductDetails = () => {
  const proDetails = useLoaderData();
  console.log(proDetails);

  const {
    mainImage,
    toolName,
    toolDescription,
    toolShortDescription,
    pricing,
    _createdAt,
    // tagsIndex,
    startingPrice,
    // category,
  } = proDetails;

  // const { } = productDetails;
  return (
    <div>


      <section>
        <div class="container mt-5">
          {/* <!-- product --> */}
     
          <div className="title fw-semibold me-4">{toolName}</div> 
        <Link
            id="my-tooltip"
            to="/"
            class="btn btn-info mb-2  me-4 "
            data-bs-toggle="tooltip"
            data-bs-placement="bottom"
            data-bs-title="Tooltip on bottom"
          > VISIT
            <FaExternalLinkAlt
              className=" ms-3 mb-1 text-center"
              style={{ height: "15px", width: "15px" }}
            />
          </Link>
      
          <p className="fs-6 mt-4 text-start
          fw-semibold">Product Information</p>

          <div class="product-content product-wrap clearfix product-deatil">
            <div class="row">
              <div class="col-md-5 col-sm-12 col-xs-12">
                <div class="product-image">
                  <div id="myCarousel-2" class="carousel slide">
                    <ol class="carousel-indicators">
                      <li
                        data-target="#myCarousel-2"
                        data-slide-to="0"
                        class=""
                      ></li>
                      <li
                        data-target="#myCarousel-2"
                        data-slide-to="1"
                        class="active"
                      ></li>
                      <li
                        data-target="#myCarousel-2"
                        data-slide-to="2"
                        class=""
                      ></li>
                    </ol>
                    <div class="carousel-inner">
                      {/* <!-- Slide 1 --> */}
                      <div class="item active">
                        <img
                          src={mainImage.asset._ref}
                          class="img-responsive border rounded"
                          alt=""
                        />
                      </div>
                    </div>
                    <Link
                      class="left carousel-control"
                      to="#myCarousel-2"
                      data-slide="prev"
                    >
                      {" "}
                      <span class="glyphicon glyphicon-chevron-left"></span>{" "}
                    </Link>
                    <Link
                      class="right carousel-control"
                      to="#myCarousel-2"
                      data-slide="next"
                    >
                      {" "}
                      <span class="glyphicon glyphicon-chevron-right"></span>{" "}
                    </Link>
                  </div>
                </div>
              </div>

              <div class="col-md-6 col-md-offset-1 col-sm-12 col-xs-12">
                <p class="name text-start ms-4 ">
                  {toolDescription}
                  {/* <small>Product by <Link  to="j/">Adeline</Link  ></small>
                    <i class="fa fa-star fa-2x text-primary"></i>
                    <i class="fa fa-star fa-2x text-primary"></i>
                    <i class="fa fa-star fa-2x text-primary"></i>
                    <i class="fa fa-star fa-2x text-primary"></i>
                    <i class="fa fa-star fa-2x text-muted"></i>
                    <span class="fa fa-2x"><h5>(109) Votes</h5></span>
                    <Link  to="j/">109 customer reviews</Link  > */}
                </p>
                <hr />
               
                <h6 class="price-container d-flex ms-4 align-items-center">
                <span className="btn btn-light disabled me-2">{pricing}</span>
                 <span className="pt-3">
                 { startingPrice ? <p>paid course start from {startingPrice}</p> : "" }
                 </span>
                  
                </h6>
                {/* <div class="certified">
                  <ul>
                    <li>
                      <Link to="j/">
                        Delivery time<span>7 Working Days</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="j/">
                        Certified<span>Quality Assured</span>
                      </Link>
                    </li>
                  </ul>
                </div> */}
                {/* <hr /> */}
                <div class="description description-tabs">
                  <ul id="myTab" class="">
                    <li class="active">
                      <p
                       
                        class="no-margin fs-6"
                      >
                       {toolShortDescription}
                      </p>
                    </li>
                    
                    <li class="">
                      <p  data-toggle="tab">
                        {_createdAt}
                      </p>
                    </li>
                    {/* <li class="">
                      <Link to="#reviews" data-toggle="tab">
                        Reviews
                      </Link>
                    </li> */}
                  </ul>
                  <div id="myTabContent" class="tab-content">
                    <div
                      class="tab-pane fade active in"
                      id="more-information"
                    ></div>
                    <div class="tab-pane fade" id="specifications">
                      <br />
                      <dl class="">
                        <dt>Gravina</dt>
                        <dd>Etiam porta sem malesuada magna mollis euismod.</dd>
                        <dd>
                          Donec id elit non mi porta gravida at eget metus.
                        </dd>
                        <dd>Eget lacinia odio sem nec elit.</dd>
                        <br />

                        <dt>Test lists</dt>
                        <dd>
                          A description list is perfect for defining terms.
                        </dd>
                        <br />

                        <dt>Altra porta</dt>
                        <dd>Vestibulum id ligula porta felis euismod semper</dd>
                      </dl>
                    </div>
                    <div class="tab-pane fade" id="reviews">
                      <br />
                      <form
                        method="post"
                        class="well padding-bottom-10"
                        onsubmit="return false;"
                      >
                        <textarea
                          rows="2"
                          class="form-control"
                          placeholder="Write a review"
                        ></textarea>
                        <div class="margin-top-10">
                          <button
                            type="submit"
                            class="btn btn-sm btn-primary pull-right"
                          >
                            Submit Review
                          </button>
                          <Link
                            to="j/"
                            class="btn btn-link profile-link-btn"
                            rel="tooltip"
                            data-placement="bottom"
                            title=""
                            data-original-title="Add Location"
                          >
                            <i class="fa fa-location-arrow"></i>
                          </Link>
                          <Link
                            to="j/"
                            class="btn btn-link profile-link-btn"
                            rel="tooltip"
                            data-placement="bottom"
                            title=""
                            data-original-title="Add Voice"
                          >
                            <i class="fa fa-microphone"></i>
                          </Link>
                          <Link
                            to="j/"
                            class="btn btn-link profile-link-btn"
                            rel="tooltip"
                            data-placement="bottom"
                            title=""
                            data-original-title="Add Photo"
                          >
                            <i class="fa fa-camera"></i>
                          </Link>
                          <Link
                            to="j/"
                            class="btn btn-link profile-link-btn"
                            rel="tooltip"
                            data-placement="bottom"
                            title=""
                            data-original-title="Add File"
                          >
                            <i class="fa fa-file"></i>
                          </Link>
                        </div>
                      </form>

                      <div class="chat-body no-padding profile-message">
                        <ul>
                          <li class="message">
                            <img
                              src="https://bootdey.com/img/Content/Link vatar/Link  vatar1.png"
                              class="online"
                            />
                            <span class="message-text">
                              <Link to="j/" class="username">
                                Alisha Molly
                                <span class="badge">Purchase Verified</span>
                                <span class="pull-right">
                                  <i class="fa fa-star fa-2x text-primary"></i>
                                  <i class="fa fa-star fa-2x text-primary"></i>
                                  <i class="fa fa-star fa-2x text-primary"></i>
                                  <i class="fa fa-star fa-2x text-primary"></i>
                                  <i class="fa fa-star fa-2x text-muted"></i>
                                </span>
                              </Link>
                              Can't divide were divide fish forth fish to. Was
                              can't form the, living life grass darkness very
                              image let unto fowl isn't in blessed fill life
                              yielding above all moved
                            </span>
                            <ul class="list-inline font-xs">
                              <li>
                                <Link to="j/" class="text-info">
                                  <i class="fa fa-thumbs-up"></i> This was
                                  helpful (22)
                                </Link>
                              </li>
                              <li class="pull-right">
                                <small class="text-muted pull-right ultra-light">
                                  {" "}
                                  Posted 1 year ago{" "}
                                </small>
                              </li>
                            </ul>
                          </li>
                          <li class="message">
                            <img
                              src="https://bootdey.com/img/Content/Link  vatar/Link  vatar2.png"
                              class="online"
                            />
                            <span class="message-text">
                              <Link to="j/" class="username">
                                Aragon Zarko
                                <span class="badge">Purchase Verified</span>
                                <span class="pull-right">
                                  <i class="fa fa-star fa-2x text-primary"></i>
                                  <i class="fa fa-star fa-2x text-primary"></i>
                                  <i class="fa fa-star fa-2x text-primary"></i>
                                  <i class="fa fa-star fa-2x text-primary"></i>
                                  <i class="fa fa-star fa-2x text-primary"></i>
                                </span>
                              </Link>
                              Excellent product, love it!
                            </span>
                            <ul class="list-inline font-xs">
                              <li>
                                <Link to="j/" class="text-info">
                                  <i class="fa fa-thumbs-up"></i> This was
                                  helpful (22)
                                </Link>
                              </li>
                              <li class="pull-right">
                                <small class="text-muted pull-right ultra-light">
                                  {" "}
                                  Posted 1 year ago{" "}
                                </small>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <hr />
                {/* <div class="row">
                  <div class="col-sm-12 col-md-6 col-lg-6">
                    <Link to="j/" class="btn btn-success btn-lg">
                      Add to cart ($129.54)
                    </Link>
                  </div>
                  <div class="col-sm-12 col-md-6 col-lg-6">
                    <div class="btn-group pull-right">
                      <button class="btn btn-white btn-default">
                        <i class="fa fa-star"></i> Add to wishlist
                      </button>
                      <button class="btn btn-white btn-default">
                        <i class="fa fa-envelope"></i> Contact Seller
                      </button>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
          {/* <!-- end product --> */}
        </div>
      </section>
    </div>
  );
};

export default ProductDetails;
