import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './MemeEditor.module.scss';
import MemeSVGViewer from '../MemeSVGViewer/MemeSVGViewer';
import MemeForm from '../MemeForm/MemeForm';
import { initialState } from '../../store/editorReducer';
import store from '../../store/store';

const MemeEditor = () => {
  const [current, setcurrent] = useState(initialState);
  const [images, setimages] = useState([]);
  useEffect(() => {
    setcurrent(store.getState().current);
    setimages(store.getState().srvdata.images);
    store.subscribe(() => {
      setcurrent(store.getState().current)
      setimages(store.getState().srvdata.images);

    });
  }, []);
  return (
    <div className={styles.MemeEditor} data-testid="MemeEditor">
      <div className={styles.viewer}>
        <MemeSVGViewer meme={{ ...current, image:images.find(e=>e.id==current.imageId)}} />
      </div>
      <MemeForm />
    </div>
  );
}

MemeEditor.propTypes = {};

MemeEditor.defaultProps = {};

export default MemeEditor;
