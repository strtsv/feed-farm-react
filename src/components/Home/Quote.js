import React from "react";

import i from "../../assets/images/page-01_img-07.jpg";

class Quote extends React.Component {
  render() {
    return (
      <section className="well-lg well-lg--inset-1 bg-primary text-center">
        <div className="container">
          <div className="quote box-sm">
            <div className="box_left">
              <img src={i} className="round inset-5" alt />
            </div>
            <div className="box_cnt text-left">
              <p className="inset-2">
                <q>
                  Thank you very much for your rapid response. It's no doubt
                  that your company is worth admiring!{" "}
                </q>
              </p>
              <p className="text-right text-lg-left light">
                <cite className="bold">Tom Adams</cite> -  farmer
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Quote;
