import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';

export const fetchQuotes = () => dispatch => {
    dispatch(quotesLoading());

    return fetch(baseUrl + 'quotes')
        .then(response => response.json())
        .then(quotes => dispatch(addQuotes(quotes)));
};

export const quotesLoading = () => ({
    type: ActionTypes.QUOTES_LOADING
});

export const quotesFailed = errMess => ({
    type: ActionTypes.QUOTES_FAILED,
    payload: errMess
});

export const addQuotes = quotes => ({
    type: ActionTypes.ADD_QUOTES,
    payload: quotes
});