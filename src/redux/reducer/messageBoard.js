import action from '../action/index';
const {
	GET_USER_MESSAGE_SUCCESS,
}=action;

export default (state={},action) => {
	switch(action.type){
		case GET_USER_MESSAGE_SUCCESS:
		return {
			...state,
			getUserMsg:action.data,
		}
	}
}