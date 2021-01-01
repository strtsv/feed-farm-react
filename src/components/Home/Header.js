import React from "react";
import $ from "jquery";

import "../../assets/js/jquery.easing.1.3.js";
import "../../assets/js/tmstickup.js";
import "../../assets/js/camera.js";

import i1 from "../../assets/images/logo.jpg";

import c1 from "../../assets/images/page-01_slide-03.jpg";
import c2 from "../../assets/images/page-01_slide-02.jpg";
import c3 from "../../assets/images/page-01_slide-01.jpg";

class Header extends React.Component {
  componentDidMount() {
    $(document).ready(function() {
      $("#stuck_container").TMStickUp({});
      $(document).ready(function() {
        $("#camera").camera({
          autoAdvance: true,
          height: "36.30%",
          minHeight: "350px",
          pagination: false,
          thumbnails: false,
          playPause: false,
          hover: false,
          loader: "none",
          navigation: true,
          navigationHover: false,
          mobileNavHover: false,
          fx: "simpleFade",
        });
      });
    });
  }
  render() {
    return (
      <header>
        <section className="well-sm">
          <div className="container">
            <div className="rd-navbar-brand">
              <img src={i1} alt />
              <h1 className="rd-navbar-brand_name">
                <a href="./">feed</a>
              </h1>
              <p className="rd-navbar-brand_slogan">and Farm Supplies</p>
            </div>
            <ul className="inline-list">
              <li>
                <a href="#" className="icon icon-sm icon-default fa-facebook" />
              </li>
              <li>
                <a href="#" className="icon icon-sm icon-default fa-twitter" />
              </li>
              <li>
                <a
                  href="#"
                  className="icon icon-sm icon-default fa-google-plus"
                />
              </li>
            </ul>
          </div>
        </section>
        <div id="stuck_container" className="stuck_container">
          <nav className="nav">
            <ul className="sf-menu" data-type="navbar">
              <li className="active">
                <a href="./">Home</a>
              </li>
              <li>
                <a href="index-1.html">About us</a>
                <ul>
                  <li>
                    {" "}
                    <a href="#">Farm tour </a>
                  </li>
                  <li>
                    {" "}
                    <a href="#">Our values</a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="#">Our benefits</a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="#">Our team </a>
                  </li>
                  <li>
                    {" "}
                    <a href="#">Our principles</a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="#">Skills</a>{" "}
                  </li>
                </ul>
              </li>
              <li>
                <a href="index-2.html">Products</a>
              </li>
              <li>
                <a href="index-3.html">Services</a>
              </li>
              <li>
                <a href="index-4.html">Contacts</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="camera_container">
          <div id="camera" className="camera_wrap">
            <div data-src={c1}>
              <div className="camera_caption fadeIn">
                <div className="container">
                  <div className="camera_content inset-1">
                    <h2>Offering everything you need for your farm</h2>
                    <h1 className="bold">
                      <a href="callto:#">800-2345-6789</a>
                    </h1>
                    <p>
                      Number one supplier of high quality feeds and supplies{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div data-src={c2}>
              <div className="camera_caption fadeIn">
                <div className="container">
                  <div className="camera_content inset-1">
                    <h2>A complete line of the highest quality products</h2>
                    <h1 className="bold">
                      <a href="callto:#">800-2345-6789</a>
                    </h1>
                    <p>
                      We proudly serve in your area with a great variety of farm
                      and ranch supply products
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div data-src={c3}>
              <div className="camera_caption fadeIn">
                <div className="container">
                  <div className="camera_content inset-1">
                    <h2>
                      Meeting all <br /> of your rural needs
                    </h2>
                    <h1 className="bold">
                      <a href="callto:#">800-2345-6789</a>
                    </h1>
                    <p>The best source for animal nutrition needs</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
