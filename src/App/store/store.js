import { createStore } from 'redux';
import { REST_SERVER_ADR } from '../config/config';
/**
 * etat initial du state du store redux
 */
const initialState = {
    memes: [],
    images: []
}
/**
 * actions public du reducer de store redux
 */
export const MEMES_ACTIONS = Object.seal({
    ADD_MEMES: 'ADD_MEMES',
    ADD_MEME: 'ADD_MEME',
    ADD_IMAGES: 'ADD_IMAGES',
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
    console.log(action.type);
    const type = action.type.includes('@@redux/INIT') ? MEMES_PRIVATE_ACTIONS.INIT : action.type;
    switch (type) {
        case MEMES_PRIVATE_ACTIONS.INIT://phase d'init
            fetch(`${REST_SERVER_ADR}/memes?_expand=image`, { headers: { "Content-Type": "application/json" } })
                .then((resp) => resp.json(), (error) => { console.log(error); return []; })
                .then(arr => {
                    console.log(arr);
                    store.dispatch({ type: MEMES_ACTIONS.ADD_MEMES, values: arr });
                    return arr;
                });
                fetch(`${REST_SERVER_ADR}/images`, { headers: { "Content-Type": "application/json" } })
                .then((resp) => resp.json(), (error) => { console.log(error); return []; })
                .then(arr => {
                    console.log(arr);
                    store.dispatch({ type: MEMES_ACTIONS.ADD_IMAGES, values: arr });
                    return arr;
                });
            return state;
        case MEMES_ACTIONS.ADD_MEMES: return { ...state, memes: [...state.memes, ...action.values] }
        case MEMES_ACTIONS.ADD_MEME: return { ...state, memes: [...state.memes, action.value] }
        case MEMES_ACTIONS.ADD_IMAGES: return { ...state, images: [...state.images, ...action.values] }
        case MEMES_ACTIONS.ADD_IMAGE: return { ...state, images: [...state.images, action.value] }
        default: return state;
    }
}
/**
 * magasin partageable pour les composants
 */
const store = createStore(memesReducer);
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