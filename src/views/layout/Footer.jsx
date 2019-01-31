//@ts-check
import React, { PureComponent } from "react";
import { Col } from "reactstrap";

export default class Footer extends PureComponent {
  render() {
    return (
      <footer>
        <Col md={12} className="footer top_30 bottom_30">
          <Col md={4} className="name hidden-md hidden-sm hidden-xs">
            Henry Rooney.
          </Col>
          <Col md={8} lg={8} className="copyright">
            © 2017 All rights reserved. Designed by{" "}
            <a href="https://themeforest.net/user/tavonline">tavonline</a>
          </Col>
        </Col>
      </footer>
    );
  }
}
