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
              <img src="/media/img/light-default.webp" alt="Light Twitter theme" />
              <h3>Light</h3>
              <a href="https://chrome.google.com/webstore/detail/glitter/eemfjchmfdebpajeaaopbjgflhljhbnd" rel="noopener" target="_blank" className="btn">
                Get it
              </a>
            </div>
            <div className="col-md-6 col-lg-4 theme" data-category="light">
              <img src="/media/img/light-red.webp" alt="Light Twitter theme" />
              <h3>Red</h3>
              <a href="https://chrome.google.com/webstore/detail/glitter/eemfjchmfdebpajeaaopbjgflhljhbnd" rel="noopener" target="_blank" className="btn">
                Get it
              </a>
            </div>
            <div className="col-md-6 col-lg-4 theme" data-category="light">
              <img src="/media/img/light-pink.webp" alt="Light Twitter theme" />
              <h3>Pink</h3>
              <a href="https://chrome.google.com/webstore/detail/glitter/eemfjchmfdebpajeaaopbjgflhljhbnd" rel="noopener" target="_blank" className="btn">
                Get it
              </a>
            </div>
            <div className="col-md-6 col-lg-4 theme" data-category="light">
              <img src="/media/img/light-purple.webp" alt="Light Twitter theme" />
              <h3>Purple</h3>
              <a href="https://chrome.google.com/webstore/detail/glitter/eemfjchmfdebpajeaaopbjgflhljhbnd" rel="noopener" target="_blank" className="btn">
                Get it
              </a>
            </div>
            <div className="col-md-6 col-lg-4 theme" data-category="light">
              <img src="/media/img/light-green.webp" alt="Light Twitter theme" />
              <h3>Green</h3>
              <a href="https://chrome.google.com/webstore/detail/glitter/eemfjchmfdebpajeaaopbjgflhljhbnd" rel="noopener" target="_blank" className="btn">
                Get it
              </a>
            </div>

            <div className="col-md-6 col-lg-4 theme" data-category="dark">
              <img src="/media/img/dark-default.webp" alt="Dark Twitter theme" />
              <h3>Dark</h3>
              <a href="https://chrome.google.com/webstore/detail/glitter/eemfjchmfdebpajeaaopbjgflhljhbnd" rel="noopener" target="_blank" className="btn">
                Get it
              </a>
            </div>
            <div className="col-md-6 col-lg-4 theme" data-category="dark">
              <img src="/media/img/dark-white.webp" alt="Dark Twitter theme" />
              <h3>Dark White</h3>
              <a href="https://chrome.google.com/webstore/detail/glitter/eemfjchmfdebpajeaaopbjgflhljhbnd" rel="noopener" target="_blank" className="btn">
                Get it
              </a>
            </div>
            <div className="col-md-6 col-lg-4 theme" data-category="dark">
              <img src="/media/img/dark-red.webp" alt="Dark Twitter theme" />
              <h3>Dark Red</h3>
              <a href="https://chrome.google.com/webstore/detail/glitter/eemfjchmfdebpajeaaopbjgflhljhbnd" rel="noopener" target="_blank" className="btn">
                Get it
              </a>
            </div>
            <div className="col-md-6 col-lg-4 theme" data-category="dark">
              <img src="/media/img/dark-pink.webp" alt="Dark Twitter theme" />
              <h3>Dark Pink</h3>
              <a href="https://chrome.google.com/webstore/detail/glitter/eemfjchmfdebpajeaaopbjgflhljhbnd" rel="noopener" target="_blank" className="btn">
                Get it
              </a>
            </div>
            <div className="col-md-6 col-lg-4 theme" data-category="dark">
              <img src="/media/img/dark-purple.webp" alt="Dark Twitter theme" />
              <h3>Dark Purple</h3>
              <a href="https://chrome.google.com/webstore/detail/glitter/eemfjchmfdebpajeaaopbjgflhljhbnd" rel="noopener" target="_blank" className="btn">
                Get it
              </a>
            </div>
            <div className="col-md-6 col-lg-4 theme" data-category="dark">
              <img src="/media/img/dark-green.webp" alt="Dark Twitter theme" />
              <h3>Dark Green</h3>
              <a href="https://chrome.google.com/webstore/detail/glitter/eemfjchmfdebpajeaaopbjgflhljhbnd" rel="noopener" target="_blank" className="btn">
                Get it
              </a>
            </div>

            <div className="col-md-6 col-lg-4 theme" data-category="minimal">
              <img src="/media/img/minimal-default.webp" alt="Minimal Twitter theme" />
              <h3>Minimal</h3>
              <a href="https://chrome.google.com/webstore/detail/glitter/eemfjchmfdebpajeaaopbjgflhljhbnd" rel="noopener" target="_blank" className="btn">
                Get it
              </a>
            </div>
            <div className="col-md-6 col-lg-4 theme" data-category="minimal">
              <img src="/media/img/minimal-black.webp" alt="Minimal Twitter theme" />
              <h3>Minimal Black</h3>
              <a href="https://chrome.google.com/webstore/detail/glitter/eemfjchmfdebpajeaaopbjgflhljhbnd" rel="noopener" target="_blank" className="btn">
                Get it
              </a>
            </div>
            <div className="col-md-6 col-lg-4 theme" data-category="minimal">
              <img src="/media/img/minimal-red.webp" alt="Minimal Twitter theme" />
              <h3>Minimal Red</h3>
              <a href="https://chrome.google.com/webstore/detail/glitter/eemfjchmfdebpajeaaopbjgflhljhbnd" rel="noopener" target="_blank" className="btn">
                Get it
              </a>
            </div>
            <div className="col-md-6 col-lg-4 theme" data-category="minimal">
              <img src="/media/img/minimal-pink.webp" alt="Minimal Twitter theme" />
              <h3>Minimal Pink</h3>
              <a href="https://chrome.google.com/webstore/detail/glitter/eemfjchmfdebpajeaaopbjgflhljhbnd" rel="noopener" target="_blank" className="btn">
                Get it
              </a>
            </div>
            <div className="col-md-6 col-lg-4 theme" data-category="minimal">
              <img src="/media/img/minimal-purple.webp" alt="Minimal Twitter theme" />
              <h3>Minimal Purple</h3>
              <a href="https://chrome.google.com/webstore/detail/glitter/eemfjchmfdebpajeaaopbjgflhljhbnd" rel="noopener" target="_blank" className="btn">
                Get it
              </a>
            </div>
            <div className="col-md-6 col-lg-4 theme" data-category="minimal">
              <img src="/media/img/minimal-green.webp" alt="Minimal Twitter theme" />
              <h3>Minimal Green</h3>
              <a href="https://chrome.google.com/webstore/detail/glitter/eemfjchmfdebpajeaaopbjgflhljhbnd" rel="noopener" target="_blank" className="btn">
                Get it
              </a>
            </div>

            <div className="col-md-6 col-lg-4 theme" data-category="neon">
              <img src="/media/img/neon-default.webp" alt="neon Twitter theme" />
              <h3>Neon</h3>
              <a href="https://chrome.google.com/webstore/detail/glitter/eemfjchmfdebpajeaaopbjgflhljhbnd" rel="noopener" target="_blank" className="btn">
                Get it
              </a>
            </div>
            <div className="col-md-6 col-lg-4 theme" data-category="neon">
              <img src="/media/img/neon-red.webp" alt="neon Twitter theme" />
              <h3>Neon Red</h3>
              <a href="https://chrome.google.com/webstore/detail/glitter/eemfjchmfdebpajeaaopbjgflhljhbnd" rel="noopener" target="_blank" className="btn">
                Get it
              </a>
            </div>
            <div className="col-md-6 col-lg-4 theme" data-category="neon">
              <img src="/media/img/neon-pink.webp" alt="neon Twitter theme" />
              <h3>Neon Pink</h3>
              <a href="https://chrome.google.com/webstore/detail/glitter/eemfjchmfdebpajeaaopbjgflhljhbnd" rel="noopener" target="_blank" className="btn">
                Get it
              </a>
            </div>
            <div className="col-md-6 col-lg-4 theme" data-category="neon">
              <img src="/media/img/neon-purple.webp" alt="neon Twitter theme" />
              <h3>Neon Purple</h3>
              <a href="https://chrome.google.com/webstore/detail/glitter/eemfjchmfdebpajeaaopbjgflhljhbnd" rel="noopener" target="_blank" className="btn">
                Get it
              </a>
            </div>
            <div className="col-md-6 col-lg-4 theme" data-category="neon">
              <img src="/media/img/neon-green.webp" alt="neon Twitter theme" />
              <h3>Neon Green</h3>
              <a href="https://chrome.google.com/webstore/detail/glitter/eemfjchmfdebpajeaaopbjgflhljhbnd" rel="noopener" target="_blank" className="btn">
                Get it
              </a>
            </div>

            <div className="col-md-6 col-lg-4 theme" data-category="flat">
              <img src="/media/img/flat-default.webp" alt="flat Twitter theme" />
              <h3>Flat</h3>
              <a href="https://chrome.google.com/webstore/detail/glitter/eemfjchmfdebpajeaaopbjgflhljhbnd" rel="noopener" target="_blank" className="btn">
                Get it
              </a>
            </div>
            <div className="col-md-6 col-lg-4 theme" data-category="flat">
              <img src="/media/img/flat-red.webp" alt="flat Twitter theme" />
              <h3>Flat Red</h3>
              <a href="https://chrome.google.com/webstore/detail/glitter/eemfjchmfdebpajeaaopbjgflhljhbnd" rel="noopener" target="_blank" className="btn">
                Get it
              </a>
            </div>
            <div className="col-md-6 col-lg-4 theme" data-category="flat">
              <img src="/media/img/flat-pink.webp" alt="flat Twitter theme" />
              <h3>Flat Pink</h3>
              <a href="https://chrome.google.com/webstore/detail/glitter/eemfjchmfdebpajeaaopbjgflhljhbnd" rel="noopener" target="_blank" className="btn">
                Get it
              </a>
            </div>
            <div className="col-md-6 col-lg-4 theme" data-category="flat">
              <img src="/media/img/flat-purple.webp" alt="flat Twitter theme" />
              <h3>Flat Purple</h3>
              <a href="https://chrome.google.com/webstore/detail/glitter/eemfjchmfdebpajeaaopbjgflhljhbnd" rel="noopener" target="_blank" className="btn">
                Get it
              </a>
            </div>
            <div className="col-md-6 col-lg-4 theme" data-category="flat">
              <img src="/media/img/flat-green.webp" alt="flat Twitter theme" />
              <h3>Flat Green</h3>
              <a href="https://chrome.google.com/webstore/detail/glitter/eemfjchmfdebpajeaaopbjgflhljhbnd" rel="noopener" target="_blank" className="btn">
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
