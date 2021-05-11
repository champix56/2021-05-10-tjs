export const initialState = {
    titre: "",
    text: "",
    x: 10,
    y: 0,
    color: "#d67171",
    fontSize: 10,
    imageId: null,
    fontWeight: "800",
    underline: true,
    italic: true,
    frameSizeX: 0,
    frameSizeY: 0,
    image:{}
}

const editorReducer=(state = initialState, action) => {
    switch (action.type) {

        case 'SET_CURRENT': return { ...action.value };
        case 'RESET_CURRENT': return { ...initialState };

        default:return state
    }
};

export default editorReducer;