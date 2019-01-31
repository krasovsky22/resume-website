//@ts-check
import React, { PureComponent } from "react";
import Header from "./Header";
import Main from "./Main";
import Profile from "./Profile";
import Footer from "./Footer";

import { Container, Row, Col } from "reactstrap";

export default class MainContent extends PureComponent {
  render() {
    return (
      <Container className="top_60">
        <Row>
          <Col lg={3} md={4}>
            <Profile />
          </Col>
          <Col lg={9} md={8} className="tab-container">
            <Row>
              <Col md={12}>
                <Header />
              </Col>
              <Col md={12}>
                <Main />
              </Col>
            </Row>

            <Footer />
          </Col>
        </Row>
      </Container>
    );
  }
}
