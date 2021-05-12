import React from 'react';
import PropTypes from 'prop-types';
import styles from './NavBar.module.scss';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import '../../../../node_modules/bootstrap/dist/css/bootstrap.css'
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap'
const NavBar = () => (
  <div className={styles.NavBar} data-testid="NavBar">
    <Navbar inverse collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <Link to="/"><span style={{ color: 'skyblue', fontWeight: 900 }}>Meme</span><span style={{ color: 'grey', fontWeight: 900 }}>.</span><span style={{ color: 'tomato', fontWeight: 900, fontStyle: 'italic' }}>js</span></Link>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <Navbar.Brand><Link to="/thumb">thumbnail</Link></Navbar.Brand>
          <Navbar.Brand><Link to="/editor">editor</Link></Navbar.Brand>
          <Navbar.Brand><Link to="/thumb/1">view id 1</Link></Navbar.Brand>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </div>
);

NavBar.propTypes = {};

NavBar.defaultProps = {};

export default NavBar;
