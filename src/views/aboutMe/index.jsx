//@ts-check
import React, { PureComponent } from "react";
import { Row, Col } from "reactstrap";

import AboutMeSection from "./sections/aboutMe";
import SkillsSection from "./sections/skills";

import "./aboutMe.scss";

export default class AboutMe extends PureComponent {
  render() {
    return (
      <>
        <AboutMeSection />
        <SkillsSection />
      </>
    );
  }
}
