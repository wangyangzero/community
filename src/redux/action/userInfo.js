import axios from 'axios';
import Qs from 'qs';
import action from './index';
import config from './common/config';

const {
    GET_LOGIN_STATUS_SUCCESS,
    GET_LOGIN_STATUS_FAILURE,
    GET_USER_REGISTER_SUCCESS,
    GET_USER_REGISTER_FAILURE,
    GET_USER_INFO_SUCCESS,
    GET_USER_INFO_FAILURE,
    GET_MESSAGE_LIST_SUCCESS,
    GET_MESSAGE_LIST_FAILURE,
} = action;

const baseUrl = config.baseUrl;

export function getLoginStatus(query = '') {
    return async (dispatch) =>{
        try {
            const data = (await axios.post(`${baseUrl}/user/login`,Qs.stringify(query))).data;
            dispatch({
                type: GET_LOGIN_STATUS_SUCCESS,
                data: data
            });
        }
        catch (error) {
            dispatch({
                type: GET_LOGIN_STATUS_FAILURE,
                error: new Error('获取登陆状态失败')
            })
        }
    }
}

export function userRegister(query = '') {
    return async (dispatch) =>{
        try {
            const data = (await axios.post(`${baseUrl}/user/register`,Qs.stringify(query))).data;
            dispatch({
                type: GET_USER_REGISTER_SUCCESS,
                data: data
            });
        }
        catch (error) {
            dispatch({
                type: GET_USER_REGISTER_FAILURE,
                error: error
            })
        }
    }
}

export function getUserInfo(token) {
    return async (dispatch) =>{
        const header = Object.assign({},{'Authorization': token});
        try {
            const data = (await axios({
                method: 'get',
                url:`${baseUrl}/user/current`,
                responseType: 'stream',
                headers: header,
            })).data;
            dispatch({
                type: GET_USER_INFO_SUCCESS,
                data: data
            });
        }
        catch (error) {
            dispatch({
                type: GET_USER_INFO_FAILURE,
                error: error
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
