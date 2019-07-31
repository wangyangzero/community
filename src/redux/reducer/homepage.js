import actions from '../action/index'

const {
    GET_TECHNICAL_WEB_SUCCESS,
    GET_FIRE_INFO_SUCCESS,
    GET_NEW_INFO_SUCCESS,
} = actions;

export default (state = {},action) =>{
    switch (action.type) {
        case GET_TECHNICAL_WEB_SUCCESS:
            return {
                ...state,
                getTechnicalWeb: action.data,
            };
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
        default:
            return state;
    }
}