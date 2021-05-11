import React from 'react';
import PropTypes from 'prop-types';
import styles from './NavBar.module.scss';
import '../../../../node_modules/bootstrap/dist/css/bootstrap.css';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';
const NavBar = () =><div className="navbar navbar-inverse">
        <LinkContainer className="navbar-brand" to="/"><Link>Title</Link></LinkContainer>
        <ul className="nav navbar-nav">
            <li ><Link to='/thumb'>thumbnail</Link></li>
            <li ><Link to='/edit'>Editor</Link></li>

        </ul>
    </div>;

NavBar.propTypes = {};

NavBar.defaultProps = {};

export default NavBar;
