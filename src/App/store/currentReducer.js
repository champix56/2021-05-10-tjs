export const initialState = {
    titre: '',
    text: '',
    x: 0,
    y: 20,
    color: '#d67171',
    fontSize: 20,
    imageId: '',
    fontWeight: '800',
    underline: true,
    italic: true,
    frameSizeX: 0,
    frameSizeY: 0,
}
export const CURRENT_ACTION=Object.seal({
    SET_CURRENT:'SET_CURRENT',
    RESET_CURRENT:'RESET_CURRENT',
    SAVE_CURRENT:'SAVE_CURRENT'
})
const currentReducer=(state = initialState, action) => {
  switch (action.type) {

  case CURRENT_ACTION.SET_CURRENT:return {...action.value }
  case CURRENT_ACTION.RESET_CURRENT:return { ...initialState }
  case CURRENT_ACTION.SAVE_CURRENT:/*TODO : fetch POST current to server*/return { ...initialState }

  default:
    return state
  }
}
export default currentReducer;
