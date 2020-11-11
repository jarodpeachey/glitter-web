import React from "react";
import SEO from "../components/SEO";
import Navigation from "../components/Navigation";
import "../styles/partials/pages/_themes.scss";
import { Row, Column } from "@react-tiny-grid/core";

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
          <div className="row">
            <div className="col-md-6 col-lg-4">
              <div className="theme">
                <img src="/media/img/contrast.jpg" alt="Contrast Twitter theme" loading="lazy" />
                <h3>Contrast</h3>
                <a href="/" className="btn">
                  Get it
                </a>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="theme">
                <img src="/media/img/dark.jpg" alt="Default Dark Twitter theme" loading="lazy" />
                <h3>Default Dark</h3>
                <a href="/" className="btn">
                  Get it
                </a>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="theme">
                <img src="/media/img/inverted.jpg" alt="Inverted Twitter theme" loading="lazy" />
                <h3>Inverted</h3>
                <a href="/" className="btn">
                  Get it
                </a>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="theme">
                <img src="/media/img/light.jpg" alt="Default Light Twitter theme" loading="lazy" />
                <h3>Default Light</h3>
                <a href="/" className="btn">
                  Get it
                </a>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="theme">
                <img src="/media/img/mars.jpg" alt="Mars Twitter theme" loading="lazy" />
                <h3>Mars</h3>
                <a href="/" className="btn">
                  Get it
                </a>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="theme">
                <img src="/media/img/neon.jpg" alt="Neon Green Twitter theme" loading="lazy" />
                <h3>Neon Green</h3>
                <a href="/" className="btn">
                  Get it
                </a>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="theme">
                <img src="/media/img/pink.jpg" alt="Retro Pink Twitter theme" loading="lazy" />
                <h3>Retro Pink</h3>
                <a href="/" className="btn">
                  Get it
                </a>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="theme">
                <img src="/media/img/solarized.jpg" alt="Solarized Twitter theme" loading="lazy" />
                <h3>Solarized</h3>
                <a href="/" className="btn">
                  Get it
                </a>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="theme">
                <img src="/media/img/teal.jpg" alt="Retro Teal Twitter theme" loading="lazy" />
                <h3>Retro Teal</h3>
                <a href="/" className="btn">
                  Get it
                </a>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="theme">
                <img src="/media/img/tron.jpg" alt="Tron Twitter theme" loading="lazy" />
                <h3>Tron</h3>
                <a href="/" className="btn">
                  Get it
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Themes;
