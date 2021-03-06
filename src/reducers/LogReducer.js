import {
    ADD_LOG, GET_LOGS, SET_LOADING, LOGS_ERROR, DELETE_LOG, UPDATE_LOG, SET_CURRENT,
    CLEAR_CURRENT, SEARCH_LOGS
} from '../action/types';

const initialState = {
    logs: null,
    loading: false,
    current: null,
    error: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_LOG:
            return {
                ...state,
                logs: [...state.logs, action.payload],
                loading: false
            }
        case GET_LOGS:
            return {
                ...state,
                logs: action.payload,
                loading: false
            }
        case UPDATE_LOG:
            return {
                ...state,
                logs: state.logs.map(log => log.id === action.payload.id ? action.payload : log),
                loading: false
            }
        case SEARCH_LOGS:
            return {
                ...state,
                logs: action.payload,
                loading: false
            }
        case SET_CURRENT:
            return {
                ...state,
                current: action.payload
            }
        case CLEAR_CURRENT:
            return {
                ...state,
                current: null
            }
        case DELETE_LOG:
            return {
                ...state,
                logs: state.logs.filter(log => log.id !== action.payload),
                loading: false
            }
        case SET_LOADING:
            return {
                ...state,
                loading: true
            }
        case LOGS_ERROR:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
}