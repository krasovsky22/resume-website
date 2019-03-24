//@ts-check
import React, { PureComponent } from "react";
import { Col } from "reactstrap";

export default class Footer extends PureComponent {
  render() {
    return (
      <footer>
        <Col md={12} className="footer top_30 bottom_30">
          <Col md={4} className="name hidden-md hidden-sm hidden-xs">
            Vlad Krasovsky.
          </Col>
          <Col md={8} lg={8} className="copyright">
            © 2019 All rights reserved. Designed by Vlad Krasovsky
          </Col>
        </Col>
      </footer>
    );
  }
}
