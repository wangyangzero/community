import actions from '../action/index'

const {
    GET_LOGIN_STATUS_SUCCESS,
    GET_USER_REGISTER_SUCCESS,
    GET_USER_INFO_SUCCESS,
} = actions;

export default (state = {},action) => {
    switch (action.type) {
        case GET_LOGIN_STATUS_SUCCESS:
            return {
                ...state,
                getLoginStatus: action.data,
            };
        case GET_USER_REGISTER_SUCCESS:
            return {
                ...state,
                userRegister: action.data
            };
        case GET_USER_INFO_SUCCESS:
            return {
                ...state,
                getUserInfo: action.data
            };
        default:
            return state;
    }
}