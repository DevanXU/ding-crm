const customerReducer = (state = {
    name: ''
}, action) => {
    console.log('customerReducer:', state, action)
    switch (action.type) {
        case 'SET_NAME':
            state = {
                ...state,
                name: state.name
            }
            break
        default:
            break
    }

    return state
}

export default customerReducer