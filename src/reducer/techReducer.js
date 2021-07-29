import { GET_TECHS, ADD_TECH, DELETE_TECH, TECHS_ERROR, SET_LOADING } from "../actions/types";

//firstName, lastName, error, loading
const initialState = {
    techs: null,
    error: null,
    loading: null
}

export default (state = initialState, action) =>{
    switch(action.type){
        case GET_TECHS:
            return {
                ...state,
                loading: false,
                techs: action.payload
            }
        case ADD_TECH:
            return;
        case DELETE_TECH:
            return;
        case TECHS_ERROR:
            return;
        case SET_LOADING:
            return {
                ...state,
                loading: true
            };
        default:
            return state;
    }
}