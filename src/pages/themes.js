import React from "react";
import SEO from "../components/SEO";
import Navigation from "../components/Navigation";
import "../styles/partials/pages/_themes.scss";
import { Row, Column } from "@react-tiny-grid/core";
import Collapse from "../components/Collapse";

const Themes = ({ props }) => {
  return (
    <>
      <SEO bodyClass="themes" />

      <header>
        <Navigation />
      </header>

      <section className="hero">
        <div className="container">
          <h1 className="section-heading display" id="hero__title">
            Themes
          </h1>
        </div>
      </section>
      <section className="themes">
        <div className="container">
          <div className="filter">
            <h4>Filter</h4>
            <button className="filter__button active" id="all">
              All
            </button>
            <button className="filter__button" id="light">
              Light
            </button>
            <button className="filter__button" id="dark">
              Dark
            </button>
            <button className="filter__button" id="minimal">
              Minimal
            </button>
            <button className="filter__button" id="neon">
              Neon
            </button>
            <button className="filter__button" id="flat">
              Flat
            </button>
          </div>
          <div className="row" id="themes__wrapper">
            <div className="col-md-6 col-lg-4 theme" data-category="light">
              <img src="/media/img/light-default.png" alt="Light Twitter theme" />
              <h3>Light</h3>
              <a href="/" className="btn">
                Get it
              </a>
            </div>
            <div className="col-md-6 col-lg-4 theme" data-category="light">
              <img src="/media/img/light-red.png" alt="Light Twitter theme" />
              <h3>Red</h3>
              <a href="/" className="btn">
                Get it
              </a>
            </div>
            <div className="col-md-6 col-lg-4 theme" data-category="light">
              <img src="/media/img/light-pink.png" alt="Light Twitter theme" />
              <h3>Pink</h3>
              <a href="/" className="btn">
                Get it
              </a>
            </div>
            <div className="col-md-6 col-lg-4 theme" data-category="light">
              <img src="/media/img/light-purple.png" alt="Light Twitter theme" />
              <h3>Purple</h3>
              <a href="/" className="btn">
                Get it
              </a>
            </div>
            <div className="col-md-6 col-lg-4 theme" data-category="light">
              <img src="/media/img/light-green.png" alt="Light Twitter theme" />
              <h3>Green</h3>
              <a href="/" className="btn">
                Get it
              </a>
            </div>

            <div className="col-md-6 col-lg-4 theme" data-category="dark">
              <img src="/media/img/dark-default.png" alt="Dark Twitter theme" />
              <h3>Dark</h3>
              <a href="/" className="btn">
                Get it
              </a>
            </div>
            <div className="col-md-6 col-lg-4 theme" data-category="dark">
              <img src="/media/img/dark-white.png" alt="Dark Twitter theme" />
              <h3>Dark White</h3>
              <a href="/" className="btn">
                Get it
              </a>
            </div>
            <div className="col-md-6 col-lg-4 theme" data-category="dark">
              <img src="/media/img/dark-red.png" alt="Dark Twitter theme" />
              <h3>Dark Red</h3>
              <a href="/" className="btn">
                Get it
              </a>
            </div>
            <div className="col-md-6 col-lg-4 theme" data-category="dark">
              <img src="/media/img/dark-pink.png" alt="Dark Twitter theme" />
              <h3>Dark Pink</h3>
              <a href="/" className="btn">
                Get it
              </a>
            </div>
            <div className="col-md-6 col-lg-4 theme" data-category="dark">
              <img src="/media/img/dark-purple.png" alt="Dark Twitter theme" />
              <h3>Dark Purple</h3>
              <a href="/" className="btn">
                Get it
              </a>
            </div>
            <div className="col-md-6 col-lg-4 theme" data-category="dark">
              <img src="/media/img/dark-green.png" alt="Dark Twitter theme" />
              <h3>Dark Green</h3>
              <a href="/" className="btn">
                Get it
              </a>
            </div>

            <div className="col-md-6 col-lg-4 theme" data-category="minimal">
              <img src="/media/img/minimal-default.png" alt="Minimal Twitter theme" />
              <h3>Minimal</h3>
              <a href="/" className="btn">
                Get it
              </a>
            </div>
            <div className="col-md-6 col-lg-4 theme" data-category="minimal">
              <img src="/media/img/minimal.png" alt="Minimal Twitter theme" />
              <h3>Minimal Black</h3>
              <a href="/" className="btn">
                Get it
              </a>
            </div>
            <div className="col-md-6 col-lg-4 theme" data-category="minimal">
              <img src="/media/img/minimal-red.png" alt="Minimal Twitter theme" />
              <h3>Minimal Red</h3>
              <a href="/" className="btn">
                Get it
              </a>
            </div>
            <div className="col-md-6 col-lg-4 theme" data-category="minimal">
              <img src="/media/img/minimal-pink.png" alt="Minimal Twitter theme" />
              <h3>Minimal Pink</h3>
              <a href="/" className="btn">
                Get it
              </a>
            </div>
            <div className="col-md-6 col-lg-4 theme" data-category="minimal">
              <img src="/media/img/minimal-purple.png" alt="Minimal Twitter theme" />
              <h3>Minimal Purple</h3>
              <a href="/" className="btn">
                Get it
              </a>
            </div>
            <div className="col-md-6 col-lg-4 theme" data-category="minimal">
              <img src="/media/img/minimal-green.png" alt="Minimal Twitter theme" />
              <h3>Minimal Green</h3>
              <a href="/" className="btn">
                Get it
              </a>
            </div>

            <div className="col-md-6 col-lg-4 theme" data-category="neon">
              <img src="/media/img/neon-default.png" alt="neon Twitter theme" />
              <h3>Neon</h3>
              <a href="/" className="btn">
                Get it
              </a>
            </div>
            <div className="col-md-6 col-lg-4 theme" data-category="neon">
              <img src="/media/img/neon-red.png" alt="neon Twitter theme" />
              <h3>Neon Red</h3>
              <a href="/" className="btn">
                Get it
              </a>
            </div>
            <div className="col-md-6 col-lg-4 theme" data-category="neon">
              <img src="/media/img/neon-pink.png" alt="neon Twitter theme" />
              <h3>Neon Pink</h3>
              <a href="/" className="btn">
                Get it
              </a>
            </div>
            <div className="col-md-6 col-lg-4 theme" data-category="neon">
              <img src="/media/img/neon-purple.png" alt="neon Twitter theme" />
              <h3>Neon Purple</h3>
              <a href="/" className="btn">
                Get it
              </a>
            </div>
            <div className="col-md-6 col-lg-4 theme" data-category="neon">
              <img src="/media/img/neon-green.png" alt="neon Twitter theme" />
              <h3>Neon Green</h3>
              <a href="/" className="btn">
                Get it
              </a>
            </div>

            <div className="col-md-6 col-lg-4 theme" data-category="flat">
              <img src="/media/img/flat-default.png" alt="flat Twitter theme" />
              <h3>Flat</h3>
              <a href="/" className="btn">
                Get it
              </a>
            </div>
            <div className="col-md-6 col-lg-4 theme" data-category="flat">
              <img src="/media/img/flat-red.png" alt="flat Twitter theme" />
              <h3>Flat Red</h3>
              <a href="/" className="btn">
                Get it
              </a>
            </div>
            <div className="col-md-6 col-lg-4 theme" data-category="flat">
              <img src="/media/img/flat-pink.png" alt="flat Twitter theme" />
              <h3>Flat Pink</h3>
              <a href="/" className="btn">
                Get it
              </a>
            </div>
            <div className="col-md-6 col-lg-4 theme" data-category="flat">
              <img src="/media/img/flat-purple.png" alt="flat Twitter theme" />
              <h3>Flat Purple</h3>
              <a href="/" className="btn">
                Get it
              </a>
            </div>
            <div className="col-md-6 col-lg-4 theme" data-category="flat">
              <img src="/media/img/flat-green.png" alt="flat Twitter theme" />
              <h3>Flat Green</h3>
              <a href="/" className="btn">
                Get it
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Themes;
