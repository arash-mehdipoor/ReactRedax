import {
    GET_THECHS,
    ADD_TECH,
    DELETE_TECH,
    TECHS_ERROR,
    LOGS_ERROR,
    SET_LOADING
} from '../action/types';

const initialState = {
    techs: null,
    loading: false,
    error: false
}

const TechReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_THECHS:
            return {
                ...state,
                techs: action.payload,
                loading: false
            }
        case SET_LOADING:
            return {
                ...state,
                loading: true
            }
        default:
            return state;
    }
}

export default TechReducer