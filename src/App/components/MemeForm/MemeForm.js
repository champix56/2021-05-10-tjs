import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './MemeForm.module.scss';
import { CURRENT_ACTION, initialState as currentInitialState } from '../../store/currentReducer';
import store, { initialState as srvdatainitialState } from '../../store/store';

const MemeForm = () => {
  const [current, setcurrent] = useState(currentInitialState)
  const [images, setimages] = useState(srvdatainitialState.images)
  useEffect(() => {
    setimages(store.getState().srvdata.images)
    setcurrent(store.getState().current)
    store.subscribe(() => {
      setimages(store.getState().srvdata.images)
      setcurrent(store.getState().current)

    })
  }, [])

  return (
    <form className={styles.MemeForm} data-testid="MemeForm" onReset={e => store.dispatch({ type: CURRENT_ACTION.RESET_CURRENT })}
      onSubmit={evt => {
        evt.preventDefault();
        store.dispatch({ type: CURRENT_ACTION.SAVE_CURRENT });
        store.dispatch({type:'INIT'});
      }}>
      <label htmlFor="current-title">Titre</label><br /><input type="text" id="current-title" value={current.titre} onChange={(evt) => {
        //contrairement a l'etat des classes ..... spread obligatoire de l'ancien content d'etat
        store.dispatch({ type: CURRENT_ACTION.SET_CURRENT, value: { ...current, titre: evt.target.value } })
      }} />
      <hr />
      <label htmlFor="select-img">Image</label><br />
      <select id="select-img" value={current.imageId} onChange={(evt) => {
        store.dispatch({ type: CURRENT_ACTION.SET_CURRENT, value: { ...current, imageId: Number(evt.target.value) } })
      }}>
        <option value="">Pas d'image</option>
        {images.map((e, i) => <option value={e.id} key={'optionimg-' + i}>{e.url}</option>)}
      </select>
      <hr />
      <label htmlFor="current-text">Text</label><br /><input type="text" id="current-text" value={current.text} onChange={evt =>
        store.dispatch({ type: CURRENT_ACTION.SET_CURRENT, value: { ...current, text: evt.target.value } })
      } />
      <br />
      <label htmlFor="current-x">X : </label><input className={styles.smallInput} type="number" id="current-x" value={current.x} onChange={evt =>
        store.dispatch({ type: CURRENT_ACTION.SET_CURRENT, value: { ...current, x: evt.target.value } })
      } /><label htmlFor="current-y">Y : </label><input className={styles.smallInput} type="number" id="current-y" value={current.y} onChange={evt =>
        store.dispatch({ type: CURRENT_ACTION.SET_CURRENT, value: { ...current, y: evt.target.value } })
      } />
      <hr />
      <label htmlFor="current-underline">underline : </label><input type="checkbox" id="current-underline" checked={current.underline} onChange={evt =>
        store.dispatch({ type: CURRENT_ACTION.SET_CURRENT, value: { ...current, underline: evt.target.checked } })
      } /><label htmlFor="current-italic">italic : </label><input type="checkbox" id="current-italic" checked={current.italic} onChange={evt =>
        store.dispatch({ type: CURRENT_ACTION.SET_CURRENT, value: { ...current, italic: evt.target.checked } })
      } />
      <br />
      <label htmlFor="current-fsize">fontSize : </label><input className={styles.smallInput} type="number" id="current-fsize" value={current.fontSize} onChange={evt =>
        store.dispatch({ type: CURRENT_ACTION.SET_CURRENT, value: { ...current, fontSize: evt.target.value } })
      } /><label htmlFor="current-fweight">fontWeight : </label><input className={styles.smallInput} type="number" max="900" min="100" step="100" id="current-fweight" value={current.fontWeight} onChange={evt =>
        store.dispatch({ type: CURRENT_ACTION.SET_CURRENT, value: { ...current, fontWeight: evt.target.value } })
      } />
      <br />
      <label htmlFor="current-color">color</label>
      <br />
      <input type="color" id="current-color" value={current.color} onChange={evt =>
        store.dispatch({ type: CURRENT_ACTION.SET_CURRENT, value: { ...current, color: evt.target.value } })
      } />
      <hr />
      <input type="submit" value="save" />
      <input type="reset" value="reset" />
      {/* {JSON.stringify(current)} */}
    </form>
  );
}

MemeForm.propTypes = {};

MemeForm.defaultProps = {};

export default MemeForm;
