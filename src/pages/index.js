import React from "react";
import SEO from "../components/SEO";
import Navigation from "../components/Navigation";
import "../styles/partials/pages/_home.scss";
import { Row, Column } from "@react-tiny-grid/core";
import Carousel from "../components/Carousel";
import Collapse from "../components/Collapse";

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
                <span>Customize Twitter</span> With One Click
              </h1>
              <p className="section-description">
                Glitter is a Chrome extension with over 25 customizable Twitter themes to add some pop to your Twitter experience.
              </p>
              <p className="section-description">Each theme is completely customizable, from the colors of the buttons, to the inputs, backgrounds and more.</p>
              <a href="/" className="btn">
                Get it now
              </a>
              <a href="/themes" className="btn outlined">
                View themes
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
                        xlinkHref="/media/img/contrast.png"
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
                        xlinkHref="/media/img/midnight.png"
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
      <section className="themes">
        <div className="container">
          <h2 className="section-heading">1,000s of possibilities</h2>
          <p className="section-description">Choose from 25+ plus Glitter themes, or create your very own.</p>
          <Carousel
            slides={[
              {
                name: "Light",
                image: "/media/img/light-default.png",
              },
              {
                name: "Dark Purple",
                image: "/media/img/dark-purple.png",
              },
              {
                name: "Minimal",
                image: "/media/img/minimal-default.png",
              },
              {
                name: "Neon Red",
                image: "/media/img/neon-red.png",
              },
              {
                name: "Flat",
                image: "/media/img/flat-default.png",
              },
              {
                name: "Dark Red",
                image: "/media/img/dark-red.png",
              },
              {
                name: "Light Pink",
                image: "/media/img/light-pink.png",
              },
              {
                name: "Neon Green",
                image: "/media/img/neon-green.png",
              },
              {
                name: "Dark White",
                image: "/media/img/dark-white.png",
              },
              {
                name: "Light Purple",
                image: "/media/img/light-purple.png",
              },
              {
                name: "Neon Red",
                image: "/media/img/minimal-red.png",
              },
              {
                name: "Dark Green",
                image: "/media/img/dark-green.png",
              },
              {
                name: "Flat Pink",
                image: "/media/img/flat-pink.png",
              },
            ]}
          />
        </div>
        {/* <a href="/themes" className="btn">View all themes</a> */}
      </section>

      <section className="features">
        <div className="container">
          <h2 className="section-heading">Features</h2>
          <p className="section-description">Whether you're looking for a one-click theme or advanced customization, Glitter has you covered.</p>
          <div className="row">
            <div className="col-sm-6 col-md-4">
              <div className="feature">
                <div className="icon one">
                  <img loading="lazy" src="/media/img/icons/icon--shapes.png" alt="Shapes icon" />
                </div>
                <h3>25+ Themes</h3>
                <p>Glitter comes with over 25 ready-made themes, and more are being added all the time. Choose from Light, Neon, Dark and many more.</p>
              </div>
            </div>
            <div className="col-sm-6 col-md-4">
              <div className="feature">
                <div className="icon two">
                  <img loading="lazy" src="/media/img/icons/icon--tools.png" alt="Tools icon" />
                </div>
                <h3>Advanced Customization</h3>
                <p>
                  Can't quite find a theme you like? Not a problem! Glitter lets you create and edit as many themes as you want, so you can find the perfect
                  fit.
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-md-4">
              <div className="feature">
                <div className="icon three">
                  <img loading="lazy" src="/media/img/icons/icon--settings.png" alt="Settings icon" />
                </div>
                <h3>Easy to Use</h3>
                <p>Glitter is built to allow you to easily customize your Twitter theme, without worrying about any issues or complications.</p>
              </div>
            </div>
          </div>
          {/* <div className="row feature">
            <div className="col-md-5">
              <div className="icon one">
                <img loading="lazy" src="/media/img/icons/icon--tools.png" alt="Tools icon" />
              </div>
              <h3 id="custom__title">Make Twitter yours</h3>
              <p>
                Tired of the old Twitter design? With Glitter, you can give your Twitter feed a refresh with custom colors, fonts and more. It's as simple as
                selecting a preset theme and customizing it to your hearts content.
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
                  <image width="100%" height="100%" preserveAspectRatio="xMinYMin slice" xlinkHref="/media/img/teal.jpg" clip-path="url(#twitter-new)" y="25" />
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
              <h3>Custom themes</h3>
              <p>
                Glitter lets you to create <span>unlimited presests</span> and themes, so you can always switch back and forth between your favorite styles.
              </p>
            </div>
            <div className="col-md-6 offset-md-1">
              <img loading="lazy" src="/media/img/light.jpg" className="feature__image" alt="Custom Twitter theme" />
            </div>
          </div> */}
        </div>
      </section>
      <section className="faqs">
        <div className="container">
          <h2 className="section-heading">FAQs</h2>
          <Collapse
            title="How do I use Glitter?"
            content="To use Glitter, just add the Chrome extension to your browser, and it will automatically start working. To change the theme, click on the Glitter icon in your toolbar and select your theme."
            id="collapse-1"
          />
          <Collapse title="How many themes can I save?" content="You can create and save as many themes as you want." id="collapse-2" />
          <Collapse
            title="Can I edit/delete a theme I don't like?"
            content="Absolutely! Glitter lets you edit every theme, including the presets, and even lets you delete your custom themes if needed."
            id="collapse-3"
          />
          <Collapse
            title="I have another question"
            content="If you've got another question, contact me at <a href='mailto:jarodpeachey@gmail.com'>jarodpeachey@gmail.com</a>, or on Twitter <a href='https://twitter.com/jarodpeachey'>@jarodpeachey</a>"
            id="collapse-4"
          />
        </div>
      </section>
      <section className="footer">
        <div className="container">
          <div className="flex">
            <img src="/media/img/logos/glitter-diamond.png" alt="Glitter logo" />
            <div className="flex">
              <div className="menu">
                <h2>Glitter</h2>
                <p>Make Twitter yours</p>
              </div>
              <div className="menu">
                <h3>Contact</h3>
                <a href="mailto:jarodpeachey@gmail.com">Email</a>
                <a href="https://twitter.com/jarodpeachey">Twitter</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
