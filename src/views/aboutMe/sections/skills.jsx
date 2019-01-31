//@ts-check
import React, { PureComponent } from "react";
import { Col, Row, Progress } from "reactstrap";

export default class SectionSkills extends PureComponent {
  render() {
    return (
      <Row>
        <Col md={12}>
          <section className="skills line padding_30 padbot_45">
            <div className="section-title bottom_45">
              <span />
              <h2>Code Skills</h2>
            </div>
            <Row>
              <Col md={4} sm={4} xs={4}>
                <ul className="skill-list">
                  <li>
                    <h3>Skill 1</h3>
                    <Progress value={75} />
                  </li>
                  <li>
                    <h3>Skill 2</h3>
                    <Progress value={75} />
                  </li>
                  <li>
                    <h3>Skill 3</h3>
                    <Progress value={75} />
                  </li>
                  <li>
                    <h3>Skill 4</h3>
                    <Progress value={75} />
                  </li>
                </ul>
              </Col>
              <Col md={4} sm={4} xs={4}>
                <ul className="skill-list">
                  <li>
                    <h3>Skill 1</h3>
                    <Progress value={75} />
                  </li>
                  <li>
                    <h3>Skill 2</h3>
                    <Progress value={75} />
                  </li>
                  <li>
                    <h3>Skill 3</h3>
                    <Progress value={75} />
                  </li>
                  <li>
                    <h3>Skill 4</h3>
                    <Progress value={75} />
                  </li>
                </ul>
              </Col>
              <Col md={4} sm={4} xs={4}>
                <ul className="skill-list">
                  <li>
                    <h3>Skill 1</h3>
                    <Progress value={75} />
                  </li>
                  <li>
                    <h3>Skill 2</h3>
                    <Progress value={75} />
                  </li>
                  <li>
                    <h3>Skill 3</h3>
                    <Progress value={75} />
                  </li>
                  <li>
                    <h3>Skill 4</h3>
                    <Progress value={75} />
                  </li>
                </ul>
              </Col>
            </Row>
          </section>
        </Col>
      </Row>
    );
  }
}
