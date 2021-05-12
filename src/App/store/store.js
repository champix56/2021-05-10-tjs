import { createStore, combineReducers } from 'redux';
import { REST_SERVER_ADR } from '../config/config';
import currentReducer from './currentReducer';
/**
 * etat initial du state du store redux
 */
export const initialState = {
    memes: [],
    images: []
}
/**
 * actions public du reducer de store redux
 */
export const MEMES_ACTIONS = Object.seal({
    INIT_MEMES: 'INIT_MEMES',
    ADD_MEME: 'ADD_MEME',
    INIT_IMAGES: 'INIT_IMAGES',
    ADD_IMAGE: 'ADD_IMAGE'
});
const MEMES_PRIVATE_ACTIONS = Object.seal({
    INIT: 'INIT'
});

/**
 * reducer du store redux
 * @param {object} state 
 * @param {object} action 
 */
function memesReducer(state = initialState, action) {
    console.warn(action.type);
    const type = action.type.includes('@@redux/INIT') ? MEMES_PRIVATE_ACTIONS.INIT : action.type;
    switch (type) {
        case MEMES_PRIVATE_ACTIONS.INIT://phase d'init
            fetch(`${REST_SERVER_ADR}/memes`, { headers: { "Content-Type": "application/json" } })
                .then((resp) => resp.json(), (error) => { console.log(error); return []; })
                .then(arr => {
                    console.log(arr);
                    store.dispatch({ type: MEMES_ACTIONS.INIT_MEMES, values: arr });
                    return arr;
                });
                fetch(`${REST_SERVER_ADR}/images`, { headers: { "Content-Type": "application/json" } })
                .then((resp) => resp.json(), (error) => { console.log(error); return []; })
                .then(arr => {
                    console.log(arr);
                    store.dispatch({ type: MEMES_ACTIONS.INIT_IMAGES, values: arr });
                    return arr;
                });
            return state;
        case MEMES_ACTIONS.INIT_MEMES: return { ...state, memes: [ ...action.values] }
        case MEMES_ACTIONS.ADD_MEME: return { ...state, memes: [...state.memes, action.value] }
        case MEMES_ACTIONS.INIT_IMAGES: return { ...state, images: [ ...action.values] }
        case MEMES_ACTIONS.ADD_IMAGE: return { ...state, images: [...state.images, action.value] }
        default: return state;
    }
}
/**
 * reducer combiné pour plusieurs "boutiques dans le magasin"
 */
const combinedReducer=combineReducers({srvdata:memesReducer, current:currentReducer})

/**
 * magasin partageable pour les composants avec plusieurs boutiques
 */
const store = createStore(combinedReducer);
export default store;
/**
 * souscription aux changements de l'etat du store
 */
store.subscribe(() => {
    console.log('le store a subit un changement');
    console.log(store.getState());
});

// store.dispatch({type:MEMES_ACTIONS.ADD_MEME,value:{text:'meme1'}});
// store.dispatch({type:MEMES_ACTIONS.ADD_MEME,value:{text:'meme2'}});
// store.dispatch({type:MEMES_ACTIONS.ADD_MEME,value:{text:'meme3'}});
// store.dispatch({type:MEMES_ACTIONS.ADD_MEME,value:{text:'meme4'}});
// store.dispatch({type:MEMES_ACTIONS.ADD_MEME,value:{text:'meme5'}});
