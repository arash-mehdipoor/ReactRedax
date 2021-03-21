import {
    GET_THECHS,
    ADD_TECH,
    DELETE_TECH,
    TECHS_ERROR,
    LOGS_ERROR,
    SET_LOADING
} from './types';

export const getTech = () => async dispatch => {
    setLoading()
    const res = await fetch('/techs');
    const data = await res.json();
    dispatch({
        type: GET_THECHS,
        payload: data
    });
}

export const setLoading = () => {
    return {
        type: SET_LOADING
    }
}