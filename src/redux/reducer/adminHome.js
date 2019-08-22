import actions from '../action/index'

const {
    GET_FIRE_INFO_SUCCESS,
    GET_NEW_INFO_SUCCESS,
    ADD_FIRE_INFO_SUCCESS,
    UPDATE_FIRE_INFO_SUCCESS,
    DELETE_FIRE_INFO_SUCCESS,
    ADD_NEW_INFO_SUCCESS,
    UPDATE_NEW_INFO_SUCCESS,
    DELETE_NEW_INFO_SUCCESS,
    GET_USER_LIST_SUCCESS,
    UPDATE_USER_INFO_SUCCESS,
    DELETE_USER_SUCCESS,

} = actions;

export default (state = {},action) =>{
    switch (action.type) {
        case GET_FIRE_INFO_SUCCESS:
            return {
                ...state,
                getFireInfo: action.data,
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
        case GET_NEW_INFO_SUCCESS:
            return {
                ...state,
                getNewInfo: action.data,
            };
        case ADD_NEW_INFO_SUCCESS:
            return {
                ...state,
                addNewInfo: action.data,
            };
        case UPDATE_NEW_INFO_SUCCESS:
            return {
                ...state,
                updateNewInfo: action.data,
            };
        case DELETE_NEW_INFO_SUCCESS:
            return {
                ...state,
                deleteNewInfo: action.data,
            };
        case GET_USER_LIST_SUCCESS:
            return {
                ...state,
                getUserList: action.data,
            };
        case UPDATE_USER_INFO_SUCCESS:
            return {
                ...state,
                updateUserInfo: action.data,
            };
        case DELETE_USER_SUCCESS:
            return {
                ...state,
                deleteUser: action.data,
            };
        default:
            return state;
    }
}