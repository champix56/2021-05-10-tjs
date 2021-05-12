import React from 'react';
import PropTypes from 'prop-types';
import styles from './MemeThumbnail.module.scss';

const MemeThumbnail = (props) =>{
  console.log(props)
  return (
  <div className={styles.MemeThumbnail} data-testid="MemeThumbnail">
     {props.children}
     {/* {props.children.map((e)=>e)} */}
  </div>
);}

MemeThumbnail.propTypes = {
  children:PropTypes.array.isRequired,
};

MemeThumbnail.defaultProps = {};

export default MemeThumbnail;
