import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <footer className="text-center">
        <div className="container">
          <p>
            Feed and Farm Supplies © <span id="copyright-year" />.{" "}
            <a href="index-5.html" className="text-primary">
              Privacy Policy
            </a>
            {}
          </p>
        </div>
      </footer>
    );
  }
}

export default Footer;
