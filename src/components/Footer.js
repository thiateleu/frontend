import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-light text-center text-lg-start">
      <div className="container p-4">
        <div className="row">
          <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
            <h5 className="text-uppercase">Thiateleu</h5>
            <p>
              Natural Products from Casamance, Senegal - Bringing you the best
              of nature.
            </p>
          </div>
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">Quick Links</h5>
            <ul className="list-unstyled mb-0">
              <li>
                <Link to="/" className="text-dark">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/cart" className="text-dark">
                  Cart
                </Link>
              </li>
              <li>
                <Link to="/login" className="text-dark">
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center p-3">
        © 2024 Thiateleu: Natural Products from Casamance, Senegal
      </div>
    </footer>
  );
};

export default Footer;
