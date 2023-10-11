const initialState = {
    theme: false
};

export const darkmodeReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'TOGGLE_MODE':
            return {theme: !state.theme}
        default:
            return {...state }
    }
}