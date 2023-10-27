const initialState = {
    id: '',
    userName: '',
    firstName: '',
    lastName: '',
    email: '',
    token: null,
    editMode: false,
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN':
            return { ...state, ...action.payload}
         
        case 'LOGOUT':
            return { ...initialState }

        case 'TOGGLEEDIT':
            return {...state, editMode: !state.editMode}

        default:
            return {...state }
    }
}
