import axios from 'axios';
import Qs from 'qs';
import action from './index';
import config from './common/config';

const {
	GET_USER_MESSAGE_SUCCESS,
	GET_USER_MESSAGE_FAILURE,
    GET_USER_MESSAGE_LIST_SUCCESS,
    GET_USER_MESSAGE_LIST_FAILURE,
    GET_MESSAGE_LIST_SUCCESS,
    GET_MESSAGE_LIST_FAILURE,
} = action;

const baseUrl=config.baseUrl;

export function getUserMsg(query=''){
	return async (dispatch) => {
		try{
			const data=(await axios.post(`${baseUrl}/user/message`,Qs.stringify(query))).data;
			dispatch({
				type:GET_USER_MESSAGE_SUCCESS,
				data:data,
			})
		}
		catch(error){
			dispatch({
				type:GET_USER_MESSAGE_FAILURE,
				error:new Error('发送用户留言失败'),
			})
		}
	}
}

export function getUserMsgList(query=''){
    return async (dispatch) => {
        try{
            const data=(await axios.post(`${baseUrl}/user/messageList`,Qs.stringify(query))).data;
            dispatch({
                type:GET_USER_MESSAGE_LIST_SUCCESS,
                data:data,
            })
        }
        catch(error){
            dispatch({
                type:GET_USER_MESSAGE_LIST_FAILURE,
                error:new Error('获取用户留言失败'),
            })
        }
    }
}


export function getMsgList(){
    return async (dispatch) => {
        try{
            const data=(await axios(`${baseUrl}/messageList`)).data;
            dispatch({
                type:GET_MESSAGE_LIST_SUCCESS,
                data:data,
            })
        }
        catch(error){
            dispatch({
                type:GET_MESSAGE_LIST_FAILURE,
                error:new Error('获取留言列表失败'),
            })
        }
    }
}