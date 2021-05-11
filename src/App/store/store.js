import {createStore} from 'redux';
/**
 * etat initial du state du store redux
 */
const initialState={
    memes:[],
    images:[]
}
/**
 * actions public du reducer de store redux
 */
export const MEMES_ACTIONS=Object.seal({ 
    ADD_MEMES : 'ADD_MEMES' ,
    ADD_MEME : 'ADD_MEME' ,
    ADD_IMAGES : 'ADD_IMAGES' ,
    ADD_IMAGE : 'ADD_IMAGE' 
});
/**
 * reducer du store redux
 * @param {object} state 
 * @param {object} action 
 */
function memesReducer(state=initialState,action) {
    switch(action.type)
    {
        case MEMES_ACTIONS.ADD_MEMES: return {...state,memes:[...state.memes,...action.values]}
        case MEMES_ACTIONS.ADD_MEME: return {...state,memes:[...state.memes,action.value]}
        case MEMES_ACTIONS.ADD_IMAGES: return {...state,images:[...state.images,...action.values]}
        case MEMES_ACTIONS.ADD_IMAGE: return {...state,images:[...state.images,action.value]}
        default:return state;
    }
}
/**
 * magasin partageable pour les composants
 */
const store=createStore(memesReducer);
export default store;
/**
 * souscription aux changements de l'etat du store
 */
store.subscribe(()=>{
    console.log('le store a subit un changement');
    console.log(store.getState());
});

store.dispatch({type:MEMES_ACTIONS.ADD_MEME,value:{text:'meme1'}});
store.dispatch({type:MEMES_ACTIONS.ADD_MEME,value:{text:'meme2'}});
store.dispatch({type:MEMES_ACTIONS.ADD_MEME,value:{text:'meme3'}});
store.dispatch({type:MEMES_ACTIONS.ADD_MEME,value:{text:'meme4'}});
store.dispatch({type:MEMES_ACTIONS.ADD_MEME,value:{text:'meme5'}});
