import React from "react";

import i1 from "../../assets/images/page-01_img-01.jpg";
import i2 from "../../assets/images/page-01_img-02.jpg";
import i3 from "../../assets/images/page-01_img-03.jpg";
import i4 from "../../assets/images/page-01_img-04.jpg";
import i5 from "../../assets/images/page-01_img-05.jpg";
import i6 from "../../assets/images/page-01_img-06.jpg";

class Products extends React.Component {
  render() {
    return (
      <section className="well-sm well-sm--inset-1 text-center">
        <div className="container">
          <div className="row flow-offset-1">
            <div className="col-sm-6 col-md-4">
              <div className="product">
                <img src={i1} alt />
                <h5>Alfalfa Pellets</h5>
                <div className="product_overlay">
                  <p>
                    Dehydrated alfalfa pellets consist of alfalfa forage
                    harvested at the late bud or early bloom stage.
                  </p>
                  <a href="#" className="link">
                    Read more
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4">
              <div className="product">
                <img src={i2} alt />
                <h5>Alfalfa Cubes</h5>
                <div className="product_overlay">
                  <p>
                    Dehydrated alfalfa pellets consist of alfalfa forage
                    harvested at the late bud or early bloom stage.
                  </p>
                  <a href="#" className="link">
                    Read more
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4">
              <div className="product">
                <img src={i3} alt />
                <h5>Oats</h5>
                <div className="product_overlay">
                  <p>
                    Dehydrated alfalfa pellets consist of alfalfa forage
                    harvested at the late bud or early bloom stage.
                  </p>
                  <a href="#" className="link">
                    Read more
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4">
              <div className="product">
                <img src={i4} alt />
                <h5>Sunflower Pellets</h5>
                <div className="product_overlay">
                  <p>
                    Dehydrated alfalfa pellets consist of alfalfa forage
                    harvested at the late bud or early bloom stage.
                  </p>
                  <a href="#" className="link">
                    Read more
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4">
              <div className="product">
                <img src={i5} alt />
                <h5>Canola Meals</h5>
                <div className="product_overlay">
                  <p>
                    Dehydrated alfalfa pellets consist of alfalfa forage
                    harvested at the late bud or early bloom stage.
                  </p>
                  <a href="#" className="link">
                    Read more
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4">
              <div className="product">
                <img src={i6} alt />
                <h5>Hay</h5>
                <div className="product_overlay">
                  <p>
                    Dehydrated alfalfa pellets consist of alfalfa forage
                    harvested at the late bud or early bloom stage.
                  </p>
                  <a href="#" className="link">
                    Read more
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Products;
