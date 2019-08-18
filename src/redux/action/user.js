import axios from 'axios';
//import Qs from 'qs';
import action from './index';
import config from './common/config';

const {
    GET_USER_BLOG_SUCCESS,
    GET_USER_BLOG_FAILURE,
} = action;

const baseUrl = config.baseUrl;

export function getUserBlog() {
    return async (dispatch) =>{
        try {
            const data = (await axios(`${baseUrl}/user/blog`)).data;
            dispatch({
                type: GET_USER_BLOG_SUCCESS,
                data: data
            })
        }
        catch (error) {
            dispatch({
                type: GET_USER_BLOG_FAILURE,
                error: new Error('获取实验室信息失败')
            })
        }
    }
}