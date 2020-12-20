import React from "react";
import { Link, withPrefix } from "gatsby";
import "../styles/partials/_footer.scss";

const Footer = props => {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="flex flex-column justify-content-start align-items-center flex-md-row justify-content-md-between">
            <p>Built by <a href="https://twitter.com/jarodpeachey" target="_blank" rel="noopener">Jarod Peachey</a></p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
