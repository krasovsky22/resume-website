//@ts-check
import React, { PureComponent } from "react";
import { Row, Col } from "reactstrap";

export default class SectionAboutMe extends PureComponent {
  render() {
    return (
      <Row>
        <Col md={12}>
          <section className="about-me line padding_30 padbot_45">
            <div className="section-title">
              <span />
              <h2>About Me</h2>
            </div>
            <p className="top_30">
              Started earnest brother believe an exposed so. Me he believing
              daughters if forfeited at furniture. Age again and stuff downs
              spoke. Late hour new nay able fat each sell. Nor themselves age
              introduced frequently use unsatiable devonshire get. They why quit
              gay cold rose deal park. One same they four did ask busy. Reserved
              opinions fat him nay position. Breakfast as zealously incommode do
              agreeable furniture. One too nay led fanny allow plate.
              <br />
              <br />
              Quick six blind smart out burst. Perfectly on furniture dejection
              determine my depending an to. Add short water court fat. Her
              bachelor honoured perceive securing but desirous ham required.
              Questions deficient acuteness to engrossed as. Entirely led ten
              humoured greatest and yourself. Besides ye country on observe. She
              continue appetite endeavor she judgment interest the met. For she
              surrounded motionless fat resolution may.
            </p>
          </section>
        </Col>
      </Row>
    );
  }
}
