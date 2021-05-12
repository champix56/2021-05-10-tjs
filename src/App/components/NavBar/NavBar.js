import React from 'react';
import PropTypes from 'prop-types';
import styles from './NavBar.module.scss';
import { Nav, Navbar,  NavItem } from 'react-bootstrap';
import '../../../../node_modules/bootstrap/dist/css/bootstrap.css'

const NavBar = () => (
  <div className={styles.NavBar} data-testid="NavBar">
    <Navbar inverse collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#brand">React-Bootstrap</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <NavItem eventKey={1} href="#">
            Link
      </NavItem>
          <NavItem eventKey={2} href="#">
            Link
      </NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </div>
);

NavBar.propTypes = {};

NavBar.defaultProps = {};

export default NavBar;
