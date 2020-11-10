import React from "react";
import { Link } from "gatsby";
import "../styles/partials/_navigation.scss";

const Navigation = class extends React.Component {
  render() {
    return (
      <nav role="navigation" aria-label="Main" className="nav">
        <div className="container">
          <div className="logo" id="logo">
            <a href="/">
              <img src="/media/img/logos/glitter.png" alt="Gatsby Starter Plus" />
            </a>
          </div>
          <div className="menu">
            <a href="/" className="btn">
              Get it
            </a>
          </div>
        </div>
      </nav>
    );
  }
};

export default Navigation;
