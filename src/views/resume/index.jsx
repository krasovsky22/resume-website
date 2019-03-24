//@ts-check
import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import IFrame from "react-iframe";

import resume from 'files/resume.pdf';

class ResumeIndex extends Component {
  render() {
    return (
      <Row>
        <Col md={12}>
          <div className="bottom_30">
            <div className="section-title">
              <span />
              <h2>Resume</h2>
            </div>
          </div>
        </Col>
        <Col md={12}>
          <div style={{height:'800px'}}>
            <IFrame url={resume} width="100%" height="800" />
          </div>
        </Col>
      </Row>
    );
  }
}

export default ResumeIndex;
