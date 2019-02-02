//@ts-check
import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

class ResumeIndex extends Component {
  render() {
    return (
      <Row>
        <Col md={12}>
          <section className="about-me line padding_30 padbot_45">
            <div className="section-title">
              <span />
              <h2>Resume</h2>
            </div>
            <Row>
              <Col md={6} className="working-history padding_15 padbot_30">
                <ul className="timeline">
                  <li />
                </ul>
              </Col>
            </Row>
          </section>
        </Col>
      </Row>
    );
  }
}

export default ResumeIndex;
