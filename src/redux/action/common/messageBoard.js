import axios from 'axios';
import Qs from 'qs';
import action from './index';
import config from './common/config';

const {
	GET_USER_MESSAGE_SUCCESS,
	GET_USER_MESSAGE_FAILURE,
} = action;

const baseUrl=config.baseUrl;

export function getUserMsg(query=''){
	return async (dispatch) => {
		try{
			const data=(await axios.post(`${baseUrl}/user/message`),Qs.stringify(query)).data;
			dispatch({
				type:GET_USER_MESSAGE_SUCCESS,
				data:data,
			})
		}
		catch(error){
			dispatch({
				type:GET_USER_MESSAGE_FAILURE,
				error:new Error('获取用户留言失败'),
			})
		}
	}
}