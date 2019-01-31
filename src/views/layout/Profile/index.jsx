//@ts-check
import React, { PureComponent } from "react";
import { Col } from "reactstrap";

import "./profile.scss";
import { Download as DownloadIcon } from "icons";

export default class Profile extends PureComponent {
  render() {
    return (
      <div className="profile">
        <div className="profile-name">
          <span className="name">Henry Rooney</span>
          <br />
          <span className="job">Creative Designer</span>
        </div>
        <figure className="profile-image">
          <img src="http://tavonline.net/html/mat/default/images/profile.jpg" />
        </figure>
        <ul className="profile-information">
          <li />
          <li>
            <p>
              <span>Name:</span> Chris Johnson
            </p>
          </li>
          <li>
            <p>
              <span>Birthday:</span> 06 December 1987
            </p>
          </li>
          <li>
            <p>
              <span>Job:</span> Freelancer
            </p>
          </li>
          <li>
            <p>
              <span>Email:</span> henry@domain.com
            </p>
          </li>
          <li>
            <p>
              <span>Skype:</span> henryrooney85
            </p>
          </li>
        </ul>
        <Col md="12">
          <button className="site-btn icon">
            Download Cv <DownloadIcon />
          </button>
        </Col>
      </div>
    );
  }
}
