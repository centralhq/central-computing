import React from "react"
import PropTypes from "prop-types";
import { Link } from "gatsby";
import { Button, SHAPE, KIND } from 'baseui/button';

import "./_header.scss";
import NavDrawer from "./navDrawer";
import { SIZE } from "baseui/input";

const Header = ({ siteTitle, menuLinks }) => {

  return (
  <header
    className="header active"
  >
    <div className="header--base">
      <div className="header--title">
        <div className="header-logo">
          <Link
            className="header--surf-title-link"
            to="/"
          >
            {siteTitle}
          </Link>
        </div>
      </div>
      <div className="header-nav">
        <nav className="header-nav--content">
          <ul className="header-nav--content-unordered-list topnav" id="mySurfboardNav">
            {menuLinks.map(link => (
              <li
                key={link.name}
                className="header-nav--list-link"
              >
                <Link className="header-nav--link" to={link.link}>
                  <Button
                    shape={SHAPE.pill}
                    kind={KIND.tertiary}
                    size={SIZE.compact}
                  >
                    {link.name}
                  </Button>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="header-nav--content_sm">
          <NavDrawer menuLinks={menuLinks} />
        </div>
      </div>
    </div>
  </header>
  )
}
Header.propTypes = {
  siteTitle: PropTypes.object,
}
Header.defaultProps = {
  siteTitle: `Surfboard`,
}
export default Header