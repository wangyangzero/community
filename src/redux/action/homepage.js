import axios from 'axios';
import config from './common/config';
import action from './index';

const {
    GET_TECHNICAL_WEB_SUCCESS,
    GET_TECHNICAL_WEB_FAILURE,
    GET_FIRE_INFO_SUCCESS,
    GET_FIRE_INFO_FAILURE,
    GET_NEW_INFO_SUCCESS,
    GET_NEW_INFO_FAILURE,
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
