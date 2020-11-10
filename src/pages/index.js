import React from "react";
import SEO from "../components/SEO";
import Navigation from "../components/Navigation";
import "../styles/partials/pages/_home.scss";
import { Row, Column } from "@react-tiny-grid/core";

const Home = () => {
  return (
    <>
      <SEO bodyClass="home" />

      <header>
        <Navigation />
      </header>

      <section className="hero">
        <div className="container">
          <h1 className="section-heading display">Make Twitter Yours</h1>
          <p className="section-description">
            Glitter is the first Twitter extension that gives you total control over how Twitter looks. Customize everything from the background colors to buttons, box-shadows to inputs, and more.
          </p>
          <a href="/" className="btn">
            Get it now
          </a>
          <a href="/" className="btn outlined">
            How it works
          </a>
        </div>
      </section>
      <section className="features">
        <div className="container">
          <h2 className="section-heading">Some video headline</h2>
          <p className="section-description">
            Some description for the video
          </p>
        </div>
      </section>
    </>
  );
};

export default Home;
