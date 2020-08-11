import * as ActionTypes from './ActionTypes';

export const Quotes = (state = { errMess: null, quotes: [] }, action) => {
    switch (action.type) {
        case ActionTypes.QUOTES_LOADING:
            return { ...state, isLoading: true, errMess: null, quotes: [] };
            
        case ActionTypes.QUOTES_FAILED:
            return { ...state, errMess: action.payload };
        case ActionTypes.ADD_QUOTES:
            return { ...state, isLoading: false, errMess: null, quotes: action.payload }
        default:
            return state;
    }
};