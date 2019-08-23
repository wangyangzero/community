import actions from '../action/index'

const {
    GET_TECHNICAL_WEB_SUCCESS,
    GET_FIRE_INFO_SUCCESS,
    GET_NEW_INFO_SUCCESS,
    GET_MESSAGE_LIST_SUCCESS,
    GET_NEWS_INFO_SUCCESS
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
        case GET_MESSAGE_LIST_SUCCESS:
            return {
                ...state,
                getMsgList: action.data,
            };
        case GET_NEWS_INFO_SUCCESS:
            return {
                ...state,
                getNewsInfo: action.data,
            };
        default:
            return state;
    }
}