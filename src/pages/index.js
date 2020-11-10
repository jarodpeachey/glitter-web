import React from "react";
import SEO from "../components/SEO";
import Navigation from "../components/Navigation";
import "../styles/partials/pages/_home.scss";
import { Row, Column } from "@react-tiny-grid/core";

const Home = ({ props }) => {
  return (
    <>
      <SEO bodyClass="home" />

      <header>
        <Navigation />
      </header>

      <section className="hero">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <h1 className="section-heading display" id="hero__title">
                <span>Customize Twitter</span> With Just A Few Clicks
              </h1>
              <p className="section-description">
                Glitter is the first Twitter extension that gives you total control over how Twitter looks. Customize everything from the background colors to
                buttons, box-shadows to inputs, and more.
              </p>
              <a href="/" className="btn">
                Get it now
              </a>
              <a href="/" className="btn outlined">
                How it works
              </a>
            </div>
            <div className="col-lg-6">
              <div className="image__wrapper">
                <div className="image__inner">
                  <figure aria-labelledby="hero__title">
                    <svg viewBox="0 0 700 450" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <clipPath id="hero-image" clipPathUnits="userSpaceOnUse">
                          <path d="M0 8.00001C0 3.58173 3.58172 0 8 0H692C696.418 0 700 3.58172 700 8V442C700 446.418 696.418 450 692 450H8.00002C3.58174 450 0 446.418 0 442V8.00001Z" />
                        </clipPath>
                      </defs>
                      <image
                        width="100%"
                        height="100%"
                        preserveAspectRatio="xMinYMin slice"
                        xlinkHref="/media/img/pink.jpg"
                        clip-path="url(#hero-image)"
                        y="25"
                      />
                      <g className="browser-top">
                        <path d="M0 8C0 3.58172 3.58172 0 8 0H692C696.418 0 700 3.58172 700 8V28H0V8Z" fill="black" />
                        <rect x="90" y="9" width="500" height="10" fill="white" fill-opacity="0.2" />
                        <circle cx="15" cy="14" r="4" fill="red" fill-opacity="0.8" />
                        <circle cx="31" cy="14" r="4" fill="yellow" fill-opacity="0.8" />
                        <circle cx="47" cy="14" r="4" fill="green" fill-opacity="0.8" />
                      </g>
                    </svg>
                  </figure>

                  <figure aria-labelledby="hero__title">
                    <svg viewBox="0 0 700 450" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <clipPath id="hero-image-small" clipPathUnits="userSpaceOnUse">
                          <path d="M0 8.00001C0 3.58173 3.58172 0 8 0H692C696.418 0 700 3.58172 700 8V442C700 446.418 696.418 450 692 450H8.00002C3.58174 450 0 446.418 0 442V8.00001Z" />
                        </clipPath>
                      </defs>
                      <image
                        width="100%"
                        height="100%"
                        preserveAspectRatio="xMinYMin slice"
                        xlinkHref="/media/img/solarized.jpg"
                        clip-path="url(#hero-image-small)"
                        y="25"
                      />
                      <g className="browser-top">
                        <path d="M0 8C0 3.58172 3.58172 0 8 0H692C696.418 0 700 3.58172 700 8V28H0V8Z" fill="black" />
                        <rect x="90" y="9" width="500" height="10" fill="white" fill-opacity="0.2" />
                        <circle cx="15" cy="14" r="4" fill="red" fill-opacity="0.8" />
                        <circle cx="31" cy="14" r="4" fill="yellow" fill-opacity="0.8" />
                        <circle cx="47" cy="14" r="4" fill="green" fill-opacity="0.8" />
                      </g>
                    </svg>
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="features">
        <div className="container">
          <h2 className="section-heading">Some video headline</h2>
          <p className="section-description">Some description for the video</p>
          <div className="row feature">
            <div className="col-md-5">
              <div className="icon one">
                <img loading="lazy" src="/media/img/icons/icon--tools.png" alt="Tools icon" />
              </div>
              <h3 id="custom__title">Make Twitter yours</h3>
              <p>
                Tired of the old Twitter design? With Glitter, you can give your Twitter feed a refresh with custom colors, fonts and more. Use your own theme,
                or use one of our 4 presets: dark, light, solarized and inverted.
              </p>
            </div>
            <div className="col-md-6">
              <figure aria-labelledby="custom__title">
                <svg viewBox="0 0 700 450" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <clipPath id="twitter-old" clipPathUnits="userSpaceOnUse">
                      <path d="M0 8.00001C0 3.58173 3.58172 0 8 0H692C696.418 0 700 3.58172 700 8V442C700 446.418 696.418 450 692 450H8.00002C3.58174 450 0 446.418 0 442V8.00001Z" />
                    </clipPath>
                  </defs>
                  <image
                    width="100%"
                    height="100%"
                    preserveAspectRatio="xMinYMin slice"
                    xlinkHref="/media/img/original.jpg"
                    clip-path="url(#twitter-old)"
                    y="25"
                  />
                  <g className="browser-top">
                    <path d="M0 8C0 3.58172 3.58172 0 8 0H692C696.418 0 700 3.58172 700 8V28H0V8Z" fill="black" />
                    <rect x="90" y="9" width="500" height="10" fill="white" fill-opacity="0.2" />
                    <circle cx="15" cy="14" r="4" fill="red" fill-opacity="0.8" />
                    <circle cx="31" cy="14" r="4" fill="yellow" fill-opacity="0.8" />
                    <circle cx="47" cy="14" r="4" fill="green" fill-opacity="0.8" />
                  </g>
                </svg>
              </figure>
              <figure aria-labelledby="custom__title">
                <svg viewBox="0 0 700 450" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <clipPath id="twitter-new" clipPathUnits="userSpaceOnUse">
                      <path d="M0 8.00001C0 3.58173 3.58172 0 8 0H692C696.418 0 700 3.58172 700 8V442C700 446.418 696.418 450 692 450H8.00002C3.58174 450 0 446.418 0 442V8.00001Z" />
                    </clipPath>
                  </defs>
                  <image
                    width="100%"
                    height="100%"
                    preserveAspectRatio="xMinYMin slice"
                    xlinkHref="/media/img/teal.jpg"
                    clip-path="url(#twitter-new)"
                    y="25"
                  />
                  <g className="browser-top">
                    <path d="M0 8C0 3.58172 3.58172 0 8 0H692C696.418 0 700 3.58172 700 8V28H0V8Z" fill="black" />
                    <rect x="90" y="9" width="500" height="10" fill="white" fill-opacity="0.2" />
                    <circle cx="15" cy="14" r="4" fill="red" fill-opacity="0.8" />
                    <circle cx="31" cy="14" r="4" fill="yellow" fill-opacity="0.8" />
                    <circle cx="47" cy="14" r="4" fill="green" fill-opacity="0.8" />
                  </g>
                </svg>
              </figure>
            </div>
          </div>
          <div className="row feature">
            <div className="col-md-6">
              <div className="image__wrapper">
                <div className="image__inner">
                  <figure aria-labelledby="1000s__title">
                    <svg viewBox="0 0 700 450" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <clipPath id="twitter-light" clipPathUnits="userSpaceOnUse">
                          <path d="M0 8.00001C0 3.58173 3.58172 0 8 0H692C696.418 0 700 3.58172 700 8V442C700 446.418 696.418 450 692 450H8.00002C3.58174 450 0 446.418 0 442V8.00001Z" />
                        </clipPath>
                      </defs>
                      <image
                        width="100%"
                        height="100%"
                        preserveAspectRatio="xMinYMin slice"
                        xlinkHref="/media/img/light.jpg"
                        clip-path="url(#twitter-light)"
                        y="25"
                      />
                      <g className="browser-top">
                        <path d="M0 8C0 3.58172 3.58172 0 8 0H692C696.418 0 700 3.58172 700 8V28H0V8Z" fill="black" />
                        <rect x="90" y="9" width="500" height="10" fill="white" fill-opacity="0.2" />
                        <circle cx="15" cy="14" r="4" fill="red" fill-opacity="0.8" />
                        <circle cx="31" cy="14" r="4" fill="yellow" fill-opacity="0.8" />
                        <circle cx="47" cy="14" r="4" fill="green" fill-opacity="0.8" />
                      </g>
                    </svg>
                  </figure>

                  <figure aria-labelledby="1000s__title">
                    <svg viewBox="0 0 700 450" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <clipPath id="twitter-solarized" clipPathUnits="userSpaceOnUse">
                          <path d="M0 8.00001C0 3.58173 3.58172 0 8 0H692C696.418 0 700 3.58172 700 8V442C700 446.418 696.418 450 692 450H8.00002C3.58174 450 0 446.418 0 442V8.00001Z" />
                        </clipPath>
                      </defs>
                      <image
                        width="100%"
                        height="100%"
                        preserveAspectRatio="xMinYMin slice"
                        xlinkHref="/media/img/solarized.jpg"
                        clip-path="url(#twitter-solarized)"
                        y="25"
                      />
                      <g className="browser-top">
                        <path d="M0 8C0 3.58172 3.58172 0 8 0H692C696.418 0 700 3.58172 700 8V28H0V8Z" fill="black" />
                        <rect x="90" y="9" width="500" height="10" fill="white" fill-opacity="0.2" />
                        <circle cx="15" cy="14" r="4" fill="red" fill-opacity="0.8" />
                        <circle cx="31" cy="14" r="4" fill="yellow" fill-opacity="0.8" />
                        <circle cx="47" cy="14" r="4" fill="green" fill-opacity="0.8" />
                      </g>
                    </svg>
                  </figure>

                  <figure aria-labelledby="1000s__title">
                    <svg viewBox="0 0 700 450" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <clipPath id="twitter-dark" clipPathUnits="userSpaceOnUse">
                          <path d="M0 8.00001C0 3.58173 3.58172 0 8 0H692C696.418 0 700 3.58172 700 8V442C700 446.418 696.418 450 692 450H8.00002C3.58174 450 0 446.418 0 442V8.00001Z" />
                        </clipPath>
                      </defs>
                      <image
                        width="100%"
                        height="100%"
                        preserveAspectRatio="xMinYMin slice"
                        xlinkHref="/media/img/dark.jpg"
                        clip-path="url(#twitter-dark)"
                        y="25"
                      />
                      <g className="browser-top">
                        <path d="M0 8C0 3.58172 3.58172 0 8 0H692C696.418 0 700 3.58172 700 8V28H0V8Z" fill="black" />
                        <rect x="90" y="9" width="500" height="10" fill="white" fill-opacity="0.2" />
                        <circle cx="15" cy="14" r="4" fill="red" fill-opacity="0.8" />
                        <circle cx="31" cy="14" r="4" fill="yellow" fill-opacity="0.8" />
                        <circle cx="47" cy="14" r="4" fill="green" fill-opacity="0.8" />
                      </g>
                    </svg>
                  </figure>

                  <figure aria-labelledby="1000s__title">
                    <svg viewBox="0 0 700 450" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <clipPath id="twitter-pink" clipPathUnits="userSpaceOnUse">
                          <path d="M0 8.00001C0 3.58173 3.58172 0 8 0H692C696.418 0 700 3.58172 700 8V442C700 446.418 696.418 450 692 450H8.00002C3.58174 450 0 446.418 0 442V8.00001Z" />
                        </clipPath>
                      </defs>
                      <image
                        width="100%"
                        height="100%"
                        preserveAspectRatio="xMinYMin slice"
                        xlinkHref="/media/img/pink.jpg"
                        clip-path="url(#twitter-pink)"
                        y="25"
                      />
                      <g className="browser-top">
                        <path d="M0 8C0 3.58172 3.58172 0 8 0H692C696.418 0 700 3.58172 700 8V28H0V8Z" fill="black" />
                        <rect x="90" y="9" width="500" height="10" fill="white" fill-opacity="0.2" />
                        <circle cx="15" cy="14" r="4" fill="red" fill-opacity="0.8" />
                        <circle cx="31" cy="14" r="4" fill="yellow" fill-opacity="0.8" />
                        <circle cx="47" cy="14" r="4" fill="green" fill-opacity="0.8" />
                      </g>
                    </svg>
                  </figure>
                </div>
              </div>
            </div>
            <div className="col-md-5 offset-md-1">
              <div className="icon two">
                <img loading="lazy" src="/media/img/icons/icon--shapes.png" alt="Shapes icon" />
              </div>
              <h3 id="1000s__title">1,000s of possibilities</h3>
              <p>
                With the ability to <span>customize everything</span> from backgrounds to buttons and colors to spacing, no two custom themes are alike. Go
                ahead and make yours unique!
              </p>
            </div>
          </div>
          <div className="row feature">
            <div className="col-md-5">
              <div className="icon three">
                <img loading="lazy" src="/media/img/icons/icon--settings.png" alt="Settings icon" />
              </div>
              <h3>Custom presets</h3>
              <p>
                Glitter lets you to create <span>unlimited presests</span> and themes, so you can always switch back and forth between your favorite styles.
              </p>
            </div>
            <div className="col-md-6 offset-md-1">
              <img loading="lazy" src="/media/img/light.jpg" className="feature__image" alt="Custom Twitter theme" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
