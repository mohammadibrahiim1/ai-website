import React from "react";
import { Link } from "react-router-dom";
import { FaLinkedin, FaDiscord, FaYoutube, FaTwitter } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <div className="footer container border-top">
   
  
        <div className="column w-25 m-auto ">
          {/* <h3>Column 1</h3> */}
          <ul className="text-start ms-4">
            <li>
              <Link to="https://www.futurepedia.io/privacy-policy">
                privacy policy
              </Link>
            </li>
            <li>
              <Link to="https://termify.io/terms-and-conditions/1675768266">
                Terms of Services
              </Link>
            </li>
          </ul>
        </div>
        <div className="column w-25 m-auto">
          {/* <h3>Column 2</h3> */}
          <ul className="text-center me-5">
            <li>
              <Link to="">Copyright © 2023 - Futurepedia™</Link>
            </li>
            <li>
              <Link to="vivek@futurepedia.io">Sponsor Us</Link>
            </li>
          </ul>
        </div>
        <div className="column w-25 m-auto">
          {/* <h3>Column 3</h3> */}
          <ul className="text-end">
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
  );
};

export default Footer;
