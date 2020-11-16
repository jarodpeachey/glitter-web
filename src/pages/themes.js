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
          <Collapse
            outlined
            title="Light Themes"
            content={
              <div className="row">
                <div className="col-md-6 col-lg-4">
                  <div className="theme">
                    <img src="/media/img/light-default.png" alt="Light Twitter theme" />
                    <h3>Default</h3>
                    <a href="/" className="btn">
                      Get it
                    </a>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4">
                  <div className="theme">
                    <img src="/media/img/light-red.png" alt="Light Twitter theme" />
                    <h3>Red</h3>
                    <a href="/" className="btn">
                      Get it
                    </a>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4">
                  <div className="theme">
                    <img src="/media/img/light-pink.png" alt="Light Twitter theme" />
                    <h3>Pink</h3>
                    <a href="/" className="btn">
                      Get it
                    </a>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4">
                  <div className="theme">
                    <img src="/media/img/light-purple.png" alt="Light Twitter theme" />
                    <h3>Purple</h3>
                    <a href="/" className="btn">
                      Get it
                    </a>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4">
                  <div className="theme">
                    <img src="/media/img/light-green.png" alt="Light Twitter theme" />
                    <h3>Green</h3>
                    <a href="/" className="btn">
                      Get it
                    </a>
                  </div>
                </div>
              </div>
            }
            id="collapse-1"
          />
          <Collapse
            outlined
            title="Dark Themes"
            content={
              <div className="row">
                <div className="col-md-6 col-lg-4">
                  <div className="theme">
                    <img src="/media/img/dark-default.png" alt="Dark Twitter theme" />
                    <h3>Default</h3>
                    <a href="/" className="btn">
                      Get it
                    </a>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4">
                  <div className="theme">
                    <img src="/media/img/dark-white.png" alt="Dark Twitter theme" />
                    <h3>White</h3>
                    <a href="/" className="btn">
                      Get it
                    </a>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4">
                  <div className="theme">
                    <img src="/media/img/dark-red.png" alt="Dark Twitter theme" />
                    <h3>Red</h3>
                    <a href="/" className="btn">
                      Get it
                    </a>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4">
                  <div className="theme">
                    <img src="/media/img/dark-pink.png" alt="Dark Twitter theme" />
                    <h3>Pink</h3>
                    <a href="/" className="btn">
                      Get it
                    </a>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4">
                  <div className="theme">
                    <img src="/media/img/dark-purple.png" alt="Dark Twitter theme" />
                    <h3>Purple</h3>
                    <a href="/" className="btn">
                      Get it
                    </a>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4">
                  <div className="theme">
                    <img src="/media/img/dark-green.png" alt="Dark Twitter theme" />
                    <h3>Green</h3>
                    <a href="/" className="btn">
                      Get it
                    </a>
                  </div>
                </div>
              </div>
            }
            id="collapse-2"
          />

          <Collapse
            outlined
            title="Minimal Themes"
            content={
              <div className="row">
                <div className="col-md-6 col-lg-4">
                  <div className="theme">
                    <img src="/media/img/minimal-default.png" alt="Minimal Twitter theme" />
                    <h3>Default</h3>
                    <a href="/" className="btn">
                      Get it
                    </a>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4">
                  <div className="theme">
                    <img src="/media/img/midnight.png" alt="Minimal Twitter theme" />
                    <h3>Black</h3>
                    <a href="/" className="btn">
                      Get it
                    </a>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4">
                  <div className="theme">
                    <img src="/media/img/minimal-red.png" alt="Minimal Twitter theme" />
                    <h3>Red</h3>
                    <a href="/" className="btn">
                      Get it
                    </a>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4">
                  <div className="theme">
                    <img src="/media/img/minimal-pink.png" alt="Minimal Twitter theme" />
                    <h3>Pink</h3>
                    <a href="/" className="btn">
                      Get it
                    </a>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4">
                  <div className="theme">
                    <img src="/media/img/minimal-purple.png" alt="Minimal Twitter theme" />
                    <h3>Purple</h3>
                    <a href="/" className="btn">
                      Get it
                    </a>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4">
                  <div className="theme">
                    <img src="/media/img/minimal-green.png" alt="Minimal Twitter theme" />
                    <h3>Green</h3>
                    <a href="/" className="btn">
                      Get it
                    </a>
                  </div>
                </div>
              </div>
            }
            id="collapse-3"
          />
          <Collapse
            outlined
            title="Neon Themes"
            content={
              <div className="row">
                <div className="col-md-6 col-lg-4">
                  <div className="theme">
                    <img src="/media/img/neon-default.png" alt="neon Twitter theme" />
                    <h3>Default</h3>
                    <a href="/" className="btn">
                      Get it
                    </a>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4">
                  <div className="theme">
                    <img src="/media/img/neon-red.png" alt="neon Twitter theme" />
                    <h3>Red</h3>
                    <a href="/" className="btn">
                      Get it
                    </a>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4">
                  <div className="theme">
                    <img src="/media/img/neon-pink.png" alt="neon Twitter theme" />
                    <h3>Pink</h3>
                    <a href="/" className="btn">
                      Get it
                    </a>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4">
                  <div className="theme">
                    <img src="/media/img/neon-purple.png" alt="neon Twitter theme" />
                    <h3>Purple</h3>
                    <a href="/" className="btn">
                      Get it
                    </a>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4">
                  <div className="theme">
                    <img src="/media/img/neon-green.png" alt="neon Twitter theme" />
                    <h3>Green</h3>
                    <a href="/" className="btn">
                      Get it
                    </a>
                  </div>
                </div>
              </div>
            }
            id="collapse-4"
          />
          <Collapse
            outlined
            title="Flat Themes"
            content={
              <div className="row">
                <div className="col-md-6 col-lg-4">
                  <div className="theme">
                    <img src="/media/img/flat-default.png" alt="flat Twitter theme" />
                    <h3>Default</h3>
                    <a href="/" className="btn">
                      Get it
                    </a>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4">
                  <div className="theme">
                    <img src="/media/img/flat-white.png" alt="flat Twitter theme" />
                    <h3>White</h3>
                    <a href="/" className="btn">
                      Get it
                    </a>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4">
                  <div className="theme">
                    <img src="/media/img/flat-red.png" alt="flat Twitter theme" />
                    <h3>Red</h3>
                    <a href="/" className="btn">
                      Get it
                    </a>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4">
                  <div className="theme">
                    <img src="/media/img/flat-pink.png" alt="flat Twitter theme" />
                    <h3>Pink</h3>
                    <a href="/" className="btn">
                      Get it
                    </a>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4">
                  <div className="theme">
                    <img src="/media/img/flat-purple.png" alt="flat Twitter theme" />
                    <h3>Purple</h3>
                    <a href="/" className="btn">
                      Get it
                    </a>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4">
                  <div className="theme">
                    <img src="/media/img/flat-green.png" alt="flat Twitter theme" />
                    <h3>Green</h3>
                    <a href="/" className="btn">
                      Get it
                    </a>
                  </div>
                </div>
              </div>
            }
            id="collapse-1"
          />
        </div>
      </section>
    </>
  );
};

export default Themes;
