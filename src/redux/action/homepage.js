import axios from 'axios';
import config from './common/config';
import action from './index';
import Qs from "qs";

const {
    GET_TECHNICAL_WEB_SUCCESS,
    GET_TECHNICAL_WEB_FAILURE,
    GET_FIRE_INFO_SUCCESS,
    GET_FIRE_INFO_FAILURE,
    GET_NEW_INFO_SUCCESS,
    GET_NEW_INFO_FAILURE,
    GET_MESSAGE_LIST_SUCCESS,
    GET_MESSAGE_LIST_FAILURE,
    GET_NEWS_INFO_SUCCESS,
    GET_NEWS_INFO_FAILURE,
} = action;

const baseUrl = config.baseUrl;

export function getTechnicalWeb() {
    return async (dispatch) =>{
        try {
            const data = (await axios(`${baseUrl}/resource/website`)).data;
            dispatch({
                type: GET_TECHNICAL_WEB_SUCCESS,
                data: data
            })
        }
        catch (error) {
            dispatch({
                type: GET_TECHNICAL_WEB_FAILURE,
                error: new Error('获取技术网站失败')
            })
        }
    }
}

export function getFireInfo(){
    return async (dispatch) =>{
        try {
            const data = (await axios(`${baseUrl}/resource/fireInfo`)).data;
            dispatch({
                type: GET_FIRE_INFO_SUCCESS,
                data: data
            })
        }
        catch (error) {
            dispatch({
                type: GET_FIRE_INFO_FAILURE,
                error: new Error('获取最热信息失败')
            })
        }
    }
}

export function getNewInfo(){
    return async (dispatch) =>{
        try {
            const data = (await axios(`${baseUrl}/resource/newInfo`)).data;
            dispatch({
                type: GET_NEW_INFO_SUCCESS,
                data: data
            })
        }
        catch (error) {
            dispatch({
                type: GET_NEW_INFO_FAILURE,
                error: new Error('获取最新信息失败')
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

export function getNewsInfo(query=''){
    return async (dispatch) => {
        try{
            const data=(await axios.post(`${baseUrl}/news/check`,Qs.stringify(query))).data;
            dispatch({
                type:GET_NEWS_INFO_SUCCESS,
                data:data,
            })
        }
        catch(error){
            dispatch({
                type:GET_NEWS_INFO_FAILURE,
                error:new Error('获取新闻失败'),
            })
        }
    }
}