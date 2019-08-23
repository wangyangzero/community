import action from '../action/index';
const {
	GET_USER_MESSAGE_SUCCESS,
    GET_USER_MESSAGE_LIST_SUCCESS,
    GET_MESSAGE_LIST_SUCCESS
}=action;

export default (state={},action) => {
	switch(action.type){
		case GET_USER_MESSAGE_SUCCESS:
		return {
			...state,
			getUserMsg:action.data,
		};
        case GET_USER_MESSAGE_LIST_SUCCESS:
            return {
                ...state,
                getUserMsgList :action.data,
            };
        case GET_MESSAGE_LIST_SUCCESS:
            return {
                ...state,
                getMsgList: action.data,
            };
		default:
			return state;
	}
}