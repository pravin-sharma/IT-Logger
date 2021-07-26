import {
    GET_LOGS, SET_LOADING, LOGS_ERROR,
    ADD_LOG, DELETE_LOG, SET_CURRENT,
    CLEAR_CURRENT, UPDATE_LOG
} from './types';

// get logs from api
export const getLogs = () => async (dispatch) => {
    try {
        setLoading();
        //get logs - api call
        const res = await fetch('/logs')
        const data = await res.json();
        dispatch({
            type: GET_LOGS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: LOGS_ERROR,
            payload: error.response.data
        });
    }
}

// Add log 
export const addLog = (log) => async (dispatch) => {
    try {
        setLoading();
        const res = await fetch('/logs', {
            method: 'POST',
            body: JSON.stringify(log),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await res.json();
        dispatch({
            type: ADD_LOG,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: LOGS_ERROR,
            payload: error.response.data
        });
    }
}

// Delete log
export const deleteLog = (id) => async (dispatch) => {
    try {
        setLoading()
        await fetch(`/logs/${id}`, {
            method: 'DELETE'
        })

        dispatch({
            type: DELETE_LOG,
            payload: id
        })
    } catch (error) {
        dispatch({
            type: LOGS_ERROR,
            payload: error.response.data
        });
    }
}

// Update log
export const updateLog = (log) => async (dispatch) => {
    try {
        setLoading();
        const res = await fetch(`/logs/${log.id}`, {
            method: 'PUT',
            body: JSON.stringify(log),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const data = await res.json();
        dispatch({
            type: UPDATE_LOG,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: LOGS_ERROR,
            payload: error.response.data
        });
    }
}

//set loading to true
export const setLoading = () => {
    return {
        type: SET_LOADING
    }
}

//set current
export const setCurrent = (log) => (dispatch) => {
    dispatch({
        type: SET_CURRENT,
        payload: log
    })
}

//clear current
export const clearCurrent = () => (dispatch) => {
    dispatch({
        type: CLEAR_CURRENT,
    })
}