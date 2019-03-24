//@ts-check
import React, { PureComponent } from "react";
import { Col } from "reactstrap";

import "./profile.scss";
import { Download as DownloadIcon } from "icons";

import resume from 'files/resume.pdf';

export default class Profile extends PureComponent {
  render() {
    return (
      <div className="profile">
        <div className="profile-name">
          <span className="name">Vlad Krasovsky</span>
          <br />
          <span className="job">Software Engineer</span>
        </div>
        <figure className="profile-image">
          <img src="http://tavonline.net/html/mat/default/images/profile.jpg" />
        </figure>
        <ul className="profile-information">
          <li />
          <li>
            <p>
              <span>Name:</span> Vlad Krasovsky
            </p>
          </li>
          <li>
            <p>
              <span>Birthday:</span> 22 April 1991
            </p>
          </li>
          <li>
            <p>
              <span>Job:</span> Software Engineer
            </p>
          </li>
          <li>
            <p>
              <span>Email:</span> vlad_krasovsky@yahoo.com
            </p>
          </li>
          <li>
            <p>
              <span>Skype:</span> vlad_krasovsky2
            </p>
          </li>
        </ul>
        <Col md="12">
          <a className="btn site-btn icon stretched-link" href={resume} rel="noopener noreferrer" target="_blank">
            {/* <button className="btn site-btn icon"> */}
              Download Cv <DownloadIcon />
            {/* </button> */}
          </a>
        </Col>
      </div>
    );
  }
}
