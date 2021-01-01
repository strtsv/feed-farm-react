import React from "react";

class Contact extends React.Component {
  render() {
    return (
      <section className="well-lg text-center">
        <div className="container text-md-left">
          <div className="row flow-offset-1">
            <div className="col-md-4">
              <address className="contact-info">
                <dl>
                  <dt className="heading-5">
                    <span className="icon icon-primary icon-md material-icons-location_on" />
                    Address:
                  </dt>
                  <dd>4578 Marmora Road, Glasgow D04 89GR</dd>
                </dl>
              </address>
            </div>
            <div className="col-md-4">
              <address className="contact-info">
                <dl>
                  <dt className="heading-5">
                    <span className="icon icon-primary icon-md material-icons-local_phone" />
                    Phones:
                  </dt>
                  <dd>
                    <a href="callto:#">800-2345-6789</a>;
                    <a href="callto:#">800-2345-6789</a>
                  </dd>
                </dl>
              </address>
            </div>
            <div className="col-md-4">
              <address className="contact-info">
                <dl>
                  <dt className="heading-5">
                    <span className="icon icon-primary icon-md material-icons-access_time" />
                    Hours:
                  </dt>
                  <dd>7 days a week from 8:00 am to 7:00 pm</dd>
                </dl>
              </address>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;
