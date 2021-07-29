import { GET_TECHS, ADD_TECH, DELETE_TECH, TECHS_ERROR, SET_LOADING } from "./types";

export const getTechs = () => async (dispatch) => {
    try {
        setLoading();
        const response = await fetch('/technicians');
        const data = await response.json();

        dispatch({
            type: GET_TECHS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: TECHS_ERROR,
            payload: error.response.statusText
        });
    }
}

export const addTech = (firstName, lastName) => async (dispatch) => {

    const tech = {
        firstName: firstName,
        lastName: lastName
    }

    try {
        setLoading();
        const response = await fetch('/technicians', {
            method: 'POST',
            body: JSON.stringify(tech),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();
        dispatch({
            type: ADD_TECH,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: TECHS_ERROR,
            payload: error.response.statusText
        })
    }
}

export const deleteTech = (id) => async(dispatch) =>{
    try {
        setLoading();
        const response = await fetch(`/technicians/${id}`,{
            method: 'DELETE'
        })
        dispatch({
            type: DELETE_TECH,
            payload: id
        })
    } catch (error) {
        dispatch({
            type: TECHS_ERROR,
            payload: error.response.statusText
        })
    }
}

export const setLoading = () => dispatch => {
    dispatch({
        type: SET_LOADING
    })
}