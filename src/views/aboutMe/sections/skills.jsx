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
                    <h3>PHP</h3>
                    <Progress value={90} />
                  </li>
                  <li>
                    <h3>Symfony 3/4</h3>
                    <Progress value={75} />
                  </li>
                  <li>
                    <h3>Laravel</h3>
                    <Progress value={50} />
                  </li>
                  <li>
                    <h3>Kohana</h3>
                    <Progress value={80} />
                  </li>
                  <li>
                    <h3>Code Ignitor</h3>
                    <Progress value={80} />
                  </li>
                  <li>
                    <h3>Magento</h3>
                    <Progress value={40} />
                  </li>
                </ul>
              </Col>
              <Col md={4} sm={4} xs={4}>
                <ul className="skill-list">
                  <li>
                    <h3>Javascript</h3>
                    <Progress value={85} />
                  </li>
                  <li>
                    <h3>JQuery</h3>
                    <Progress value={80} />
                  </li>
                  <li>
                    <h3>React </h3>
                    <Progress value={70} />
                  </li>
                  <li>
                    <h3>Mob X</h3>
                    <Progress value={70} />
                  </li>
                  <li>
                    <h3>D3</h3>
                    <Progress value={40} />
                  </li>
                  <li>
                    <h3>WebGL</h3>
                    <Progress value={30} />
                  </li>
                </ul>
              </Col>
              <Col md={4} sm={4} xs={4}>
                <ul className="skill-list">
                  <li>
                    <h3>CSS</h3>
                    <Progress value={80} />
                  </li>
                  <li>
                    <h3>LESS/SASS/SCSS</h3>
                    <Progress value={78} />
                  </li>
                  <li>
                    <h3>Bootstrap 3/4</h3>
                    <Progress value={75} />
                  </li>
                  <li>
                    <h3>Foundation</h3>
                    <Progress value={50} />
                  </li>
                  <li>
                    <h3>Materialize </h3>
                    <Progress value={40} />
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
