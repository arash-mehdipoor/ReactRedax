import {
    GET_THECHS,
    ADD_TECH,
    DELETE_TECH,
    TECHS_ERROR,
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

export const addTech = tech => async dispatch => {
    try {
        setLoading()
        const res = await fetch('/techs', {
            method: 'POST',
            body: JSON.stringify(tech),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await res.json();
        dispatch({
            type: ADD_TECH,
            payload: data
        })

    } catch (err) {
        dispatch({
            type: TECHS_ERROR,
            payload: err.response.statusText
        })
    }

}

export const deleteTech = id => async dispatch => {
    try {
        await fetch(`/techs/${id}`, {
            method: 'DELETE'
        });
        dispatch({
            type: DELETE_TECH,
            payload: id
        })
    } catch (err) {
        dispatch({
            type: TECHS_ERROR,
            payload: err.response.statusText
        })
    }


}
export const setLoading = () => {
    return {
        type: SET_LOADING
    }
}