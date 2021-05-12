import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './MemeViewer.module.scss';
import { withRouter } from 'react-router-dom';
import MemeSVGViewer from '../MemeSVGViewer/MemeSVGViewer';
import { initialState } from '../../store/currentReducer';
import store, { initialState as srvdataInitialState } from '../../store/store';

const MemeViewer = (props) => {
  const [state, setstate] = useState(initialState)
  const [memes, setmemes] = useState(srvdataInitialState.memes)
  const [images, setimages] = useState(srvdataInitialState.images)

  useEffect(() => {
    setimages(store.getState().srvdata.images)
    setmemes(store.getState().srvdata.memes)
    if(store.getState().memes!==undefined)setstate(store.getState().srvdata.memes.find(e => e.id === props.match.params.idDuMeme))
    store.subscribe(() => {
      setimages(store.getState().srvdata.images)
      setmemes(store.getState().srvdata.memes)
      if(store.getState().memes!==undefined)setstate(store.getState().srvdata.memes.find(e => e.id === props.match.params.idDuMeme))

    })
  }, [])
  console.log(props);
  let image = state !== undefined ? images.find(e => e.id === state.imageId) : undefined;

  return (
    <div className={styles.MemeViewer} data-testid="MemeViewer">
      {JSON.stringify(state)}
      <MemeSVGViewer meme={{ ...state, image: image }} />
    </div>
  );
}

MemeViewer.propTypes = {};

MemeViewer.defaultProps = {};

export default withRouter(MemeViewer);
