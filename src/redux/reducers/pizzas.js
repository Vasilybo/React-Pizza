const initialState = {
    items: [],
    isLoaded: false,
}

function pizzas(state = initialState, action) {
    switch (action.type) {
        case 'SET_PIZZAS':
            return {
                ...state,
                items: action.payload,
                isLoaded: true,
            };
        case 'SET_LOADED':
            return {
                ...state,
                isLoaded: action.payload,
            };
        default:
            break;
    }
    return state;
}

export default pizzas;
