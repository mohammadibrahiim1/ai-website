import React from "react";
import "./FHeader.css";

const FHeader = () => {
  return (
    <div>
      <section className="container mt-5">
        <div>
          <h2 className="fheader-title">Your Favourite.</h2>
          <p className="fheader-subtitle">
            These are the tools and posts you have favourited. You can remove
            them from your favourites by clicking the bookmark icon.
          </p>
        </div>
      </section>
    </div>
  );
};

export default FHeader;
