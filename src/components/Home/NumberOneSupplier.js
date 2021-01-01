import React from "react";

class NumberOneSupplier extends React.Component {
  render() {
    return (
      <section className="well-xs text-center">
        <div className="container">
          <h3>
            Number one supplier <br /> of high quality feeds and supplies{" "}
          </h3>
          <div className="row flow-offset-1 text-sm-left">
            <div className="col-xs-6 col-sm-4">
              <h5>100% quality feeds</h5>
              <p>
                From ducks to cattle, we have feed for all your animals. We sell
                only US sourced feed, from preferred suppliers. We offer
                high-quality feed for horses, cattle, pets, birds, rabbits,
                goats, sheep, pigs, poultry, exotic animals, and more.
              </p>
            </div>
            <div className="col-xs-6 col-sm-4">
              <h5>Fast delivery to your home</h5>
              <p>
                Experience how a regular dog food delivery, cat food delivery
                and other pet supply delivery shipment helps you conveniently
                take care of your pets. Enjoy great prices and save up to 15% on
                every qualifying order with Repeat Delivery.
              </p>
            </div>
            <div className="col-xs-6 col-xs-offset-3 col-sm-4 col-sm-offset-0">
              <h5>Large variety of feeds</h5>
              <p>
                We proudly serve in your area with a great variety of farm and
                ranch supply products, pet foods & supplies, lawn and garden
                supplies, horse and tack supplies, hay, animal health products,
                and unique gifts for your home.{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default NumberOneSupplier;
