import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './MemeEditor.module.scss';
import MemeSVGViewer from '../MemeSVGViewer/MemeSVGViewer';
import MemeForm from '../MemeForm/MemeForm';
import store,{initialState as srvdatainitialState} from '../../store/store'
import {initialState as currentInitialState} from '../../store/currentReducer'


const MemeEditor = () => {
  const [current, setcurrent] = useState(currentInitialState)
  const [images, setimages] = useState(srvdatainitialState.images)

  useEffect(() => {
    setimages(store.getState().srvdata.images)
    setcurrent(store.getState().current)
    store.subscribe(()=>{
      setimages(store.getState().srvdata.images)
      setcurrent(store.getState().current)
    })
  }, [])
  return (
  <div className={styles.MemeEditor} data-testid="MemeEditor">
    <div>
    <MemeSVGViewer meme={{...current,image:images.find(e=>e.id===current.imageId)}}/>
    </div>
    <MemeForm/>
  </div>
);}

MemeEditor.propTypes = {};

MemeEditor.defaultProps = {};

export default MemeEditor;
