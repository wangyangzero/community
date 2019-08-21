import axios from 'axios';
import Qs from 'qs';
import action from './index';
import config from './common/config';

const {
    GET_FIRE_INFO_SUCCESS,
    GET_FIRE_INFO_FAILURE,
    GET_NEW_INFO_SUCCESS,
    GET_NEW_INFO_FAILURE,
    ADD_FIRE_INFO_SUCCESS,
    ADD_FIRE_INFO_FAILURE,
    UPDATE_FIRE_INFO_SUCCESS,
    UPDATE_FIRE_INFO_FAILURE,
    DELETE_FIRE_INFO_SUCCESS,
    DELETE_FIRE_INFO_FAILURE,
} = action;

const baseUrl = config.baseUrl;

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

export function addFireInfo(query='') {
    return async (dispatch) =>{
        try {
            const data = (await axios.post(`${baseUrl}/resource/fireInfo/add`,Qs.stringify(query))).data;
            dispatch({
                type: ADD_FIRE_INFO_SUCCESS,
                data: data
            })
        }
        catch (error) {
            dispatch({
                type: ADD_FIRE_INFO_FAILURE,
                error: new Error('添加最热信息失败')
            })
        }
    }
}

export function updateFireInfo(query='') {
    return async (dispatch) =>{
        try {
            const data = (await axios.post(`${baseUrl}/resource/fireInfo/update`,Qs.stringify(query))).data;
            dispatch({
                type: UPDATE_FIRE_INFO_SUCCESS,
                data: data
            })
        }
        catch (error) {
            dispatch({
                type: UPDATE_FIRE_INFO_FAILURE,
                error: new Error('修改最热信息失败')
            })
        }
    }
}

export function deleteFireInfo(query='') {
    return async (dispatch) =>{
        try {
            const data = (await axios.post(`${baseUrl}/resource/fireInfo/delete`,Qs.stringify(query))).data;
            dispatch({
                type: DELETE_FIRE_INFO_SUCCESS,
                data: data
            })
        }
        catch (error) {
            dispatch({
                type: DELETE_FIRE_INFO_FAILURE,
                error: new Error('删除最热信息失败')
            })
        }
    }
}

