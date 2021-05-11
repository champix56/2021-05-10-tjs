import React from 'react';
import PropTypes from 'prop-types';
import styles from './MemeThumbnail.module.scss';
import { useParams } from 'react-router';

const MemeThumbnail = (props) => (
  <div className={styles.MemeThumbnail} data-testid="MemeThumbnail">
    {props.children}
  </div>
);

MemeThumbnail.propTypes = {};

MemeThumbnail.defaultProps = {};

export default MemeThumbnail;
