import React from "react"
import { Link, withPrefix } from "gatsby"
import "../styles/partials/_footer.scss"

const Footer = props => {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="d-flex flex-column align-items-center justify-content-start flex-lg-row align-items-lg-start justify-content-lg-between">
            <div className="footer__left d-flex flex-column align-items-center d-lg-block">
              <img width="140" height="45" src="/media/img/logos/logo--zorus.svg" alt="Zorus logo" />
              <p>A tech company dolor cybersecurity</p>
            </div>
            <div className="d-flex flex-sm-nowrap flex-wrap align-items-start justify-content-between flex-sm-row align-items-sm-start justify-content-sm-between">
              <div className="footer__menu">
                <h3>Products</h3>
                <a href="/">Lorem item</a>
                <a href="/">Lorem item</a>
                <a href="/">Lorem item</a>
              </div>
              <div className="footer__menu">
                <h3>Products</h3>
                <a href="/">Lorem item</a>
                <a href="/">Lorem item</a>
                <a href="/">Lorem item</a>
              </div>
              <div className="footer__menu">
                <h3>Products</h3>
                <a href="/">Lorem item</a>
                <a href="/">Lorem item</a>
                <a href="/">Lorem item</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
