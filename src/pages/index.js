import React from "react";
import SEO from "../components/SEO";
import Navigation from "../components/Navigation";
import "../styles/partials/pages/_home.scss";
import { Row, Column } from "@react-tiny-grid/core";
import Carousel from "../components/Carousel";
import Collapse from "../components/Collapse";
import Footer from "../components/Footer";

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
              <a href="https://chrome.google.com/webstore/detail/glitter/eemfjchmfdebpajeaaopbjgflhljhbnd" className="btn">
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
                        xlinkHref="/media/img/contrast.webp"
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
                        xlinkHref="/media/img/midnight.webp"
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
      <main>
        <section className="video">
          <div className="container">
            <h2 className="section-heading">How It Works</h2>
            <iframe
              src="https://www.youtube.com/embed/0voV49sNR28"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </section>
        <section className="themes">
          <div className="container">
            <h2 className="section-heading" id="themes__title">
              1,000s of possibilities
            </h2>
            <p className="section-description">Choose from 25+ plus Glitter themes, or create your very own.</p>
            <Carousel
              slides={[
                {
                  name: "Light",
                  image: "/media/img/light-default.webp",
                },
                {
                  name: "Dark Purple",
                  image: "/media/img/dark-purple.webp",
                },
                {
                  name: "Minimal",
                  image: "/media/img/minimal-default.webp",
                },
                {
                  name: "Neon Red",
                  image: "/media/img/neon-red.webp",
                },
                {
                  name: "Flat",
                  image: "/media/img/flat-default.webp",
                },
                {
                  name: "Dark Red",
                  image: "/media/img/dark-red.webp",
                },
                {
                  name: "Light Pink",
                  image: "/media/img/light-pink.webp",
                },
                {
                  name: "Neon Green",
                  image: "/media/img/neon-green.webp",
                },
                {
                  name: "Dark White",
                  image: "/media/img/dark-white.webp",
                },
                {
                  name: "Light Purple",
                  image: "/media/img/light-purple.webp",
                },
                {
                  name: "Minimal Red",
                  image: "/media/img/minimal-red.webp",
                },
                {
                  name: "Dark Green",
                  image: "/media/img/dark-green.webp",
                },
                {
                  name: "Flat Pink",
                  image: "/media/img/flat-pink.webp",
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
      </main>
      <Footer />
    </>
  );
};

export default Home;
