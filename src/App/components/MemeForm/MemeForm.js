import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './MemeForm.module.scss';
import { initialState } from '../../store/editorReducer';
import store from '../../store/store';

const MemeForm = () => {
  const [images, setimages] = useState([]);
  const [current, setcurrent] = useState(initialState);
  useEffect(() => {
    setcurrent(store.getState().current);
    setimages(store.getState().srvdata.images)
    store.subscribe(() => {
    // console.log(store.getState());

      setcurrent(store.getState().current);
      setimages(store.getState().srvdata.images)
    })
  }, []);
  return (

    <div className={styles.MemeForm} data-testid="MemeForm">
      <form>
        <label>Titre:<br /><input type="text" value={current.titre} onChange={(evt)=>store.dispatch({type:'SET_CURRENT',value:{...current,titre:evt.target.value}})} /></label>
        <hr /><label>Image:<br />
          <select value={current.imageId} onChange={(evt)=>store.dispatch({type:'SET_CURRENT',value:{...current,imageId:evt.target.value}})}  >
            <option value=""></option>
            {images.map((e,i)=>
              <option value={e.id} key={'img-'+i}>{e.url}</option>
            )}
            </select>
        </label>
        <hr /><label>text:<br /><input type="text" value={current.text} onChange={(evt)=>store.dispatch({type:'SET_CURRENT',value:{...current,text:evt.target.value}})} /></label>
        <hr />

        <br />
        <label>x:<input type="number" className={styles.smallInput} value={current.x} onChange={(evt)=>store.dispatch({type:'SET_CURRENT',value:{...current,x:Number(evt.target.value)}})} /></label>
        <label>y:<input type="number" className={styles.smallInput} value={current.y} onChange={(evt)=>store.dispatch({type:'SET_CURRENT',value:{...current,y:Number(evt.target.value)}})}/></label>
        <hr />
        <label>color:<input type="color" className={styles.smallInput} value={current.color} onChange={(evt)=>store.dispatch({type:'SET_CURRENT',value:{...current,color:evt.target.value}})}/></label>
        <br />
        <label>font-size:<input type="number" className={styles.smallInput} value={current.fontSize} onChange={(evt)=>store.dispatch({type:'SET_CURRENT',value:{...current,fontSize:Number(evt.target.value)}})} /></label>
        <label>weight:<input type="number" min="100" max="900" step="100" className={styles.smallInput} value={current.fontWeight} onChange={(evt)=>store.dispatch({type:'SET_CURRENT',value:{...current,fontWeight:evt.target.value}})} /></label>

        <br />
        <label>underline:<input type="checkbox" checked={current.underline} onChange={(evt)=>store.dispatch({type:'SET_CURRENT',value:{...current,underline:evt.target.checked}})}/></label>
        <label>italic:<input type="checkbox" checked={current.italic} onChange={(evt)=>store.dispatch({type:'SET_CURRENT',value:{...current,italic:evt.target.checked}})} /></label>
        <hr />
        <input type="submit" value="save"></input>
        <input type="reset" value="reset"></input>
        {/* {JSON.stringify(current)} */}
      </form>
    </div>
  );
}

MemeForm.propTypes = {};

MemeForm.defaultProps = {};

export default MemeForm;
