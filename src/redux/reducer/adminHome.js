import actions from '../action/index'

const {
    GET_FIRE_INFO_SUCCESS,
    GET_NEW_INFO_SUCCESS,
    ADD_FIRE_INFO_SUCCESS,
    UPDATE_FIRE_INFO_SUCCESS,
    DELETE_FIRE_INFO_SUCCESS,
} = actions;

export default (state = {},action) =>{
    switch (action.type) {
        case GET_FIRE_INFO_SUCCESS:
            return {
                ...state,
                getFireInfo: action.data,
            };
        case GET_NEW_INFO_SUCCESS:
            return {
                ...state,
                getNewInfo: action.data,
            };
        case ADD_FIRE_INFO_SUCCESS:
            return {
                ...state,
                addFireInfo: action.data,
            };
        case UPDATE_FIRE_INFO_SUCCESS:
            return {
                ...state,
                updateFireInfo: action.data,
            };
        case DELETE_FIRE_INFO_SUCCESS:
            return {
                ...state,
                deleteFireInfo: action.data,
            };
        default:
            return state;
    }
}