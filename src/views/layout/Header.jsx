//@ts-check
import React, { PureComponent } from "react";
import { Nav, NavItem, NavLink, Col, Row } from "reactstrap";

import {
  Home as HomeIcon,
  Facebook as FacebookIcon,
  Twitter as TwitterIcon,
  Instagram as InstagramIcon,
  Github as GithubIcon
} from "icons";

class Header extends PureComponent {
  render() {
    return (
      <header>
        <Row>
          <Col md={8} sm={8} xs={4}>
            <Nav>
              <NavItem>
                <NavLink href="/" active className="home-btn">
                  <HomeIcon />
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink href="/resume">RESUME</NavLink>
              </NavItem>

              <NavItem>
                <NavLink href="#">PORTFOLIO</NavLink>
              </NavItem>

              <NavItem>
                <NavLink href="#">BLOG</NavLink>
              </NavItem>

              <NavItem>
                <NavLink href="#">CONTACT</NavLink>
              </NavItem>
            </Nav>
          </Col>
          <Col md={4} sm={4} xs={8}>
            <div className="hidden-md social-icons float-right">
              <a className="fb" href="#">
                <FacebookIcon />
              </a>
              <a className="tw" href="#">
                <TwitterIcon />
              </a>
              <a className="ins" href="#">
                <InstagramIcon />
              </a>
              <a className="gt" href="#">
                <GithubIcon />
              </a>
            </div>
          </Col>
        </Row>
      </header>
    );
  }
}

export default Header;
