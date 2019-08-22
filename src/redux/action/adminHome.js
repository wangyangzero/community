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
    ADD_NEW_INFO_SUCCESS,
    ADD_NEW_INFO_FAILURE,
    UPDATE_NEW_INFO_SUCCESS,
    UPDATE_NEW_INFO_FAILURE,
    DELETE_NEW_INFO_SUCCESS,
    DELETE_NEW_INFO_FAILURE,
    GET_USER_LIST_SUCCESS,
    GET_USER_LIST_FAILURE,
    UPDATE_USER_INFO_SUCCESS,
    UPDATE_USER_INFO_FAILURE,
    DELETE_USER_SUCCESS,
    DELETE_USER_FAILURE,
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

export function addNewInfo(query='') {
    return async (dispatch) =>{
        try {
            const data = (await axios.post(`${baseUrl}/resource/newInfo/add`,Qs.stringify(query))).data;
            dispatch({
                type: ADD_NEW_INFO_SUCCESS,
                data: data
            })
        }
        catch (error) {
            dispatch({
                type: ADD_NEW_INFO_FAILURE,
                error: new Error('添加最新信息失败')
            })
        }
    }
}

export function updateNewInfo(query='') {
    return async (dispatch) =>{
        try {
            const data = (await axios.post(`${baseUrl}/resource/newInfo/update`,Qs.stringify(query))).data;
            dispatch({
                type: UPDATE_NEW_INFO_SUCCESS,
                data: data
            })
        }
        catch (error) {
            dispatch({
                type: UPDATE_NEW_INFO_FAILURE,
                error: new Error('修改最新信息失败')
            })
        }
    }
}

export function deleteNewInfo(query='') {
    return async (dispatch) =>{
        try {
            const data = (await axios.post(`${baseUrl}/resource/newInfo/delete`,Qs.stringify(query))).data;
            dispatch({
                type: DELETE_NEW_INFO_SUCCESS,
                data: data
            })
        }
        catch (error) {
            dispatch({
                type: DELETE_NEW_INFO_FAILURE,
                error: new Error('删除最新信息失败')
            })
        }
    }
}

export function getUserList() {
    return async (dispatch) =>{
        try {
            const data = (await axios.get(`${baseUrl}/user/info`)).data;
            dispatch({
                type: GET_USER_LIST_SUCCESS,
                data: data,
            })
        }
        catch (error) {
           dispatch({
               type: GET_USER_LIST_FAILURE,
               error: new Error('获取用户列表失败')
           })
        }
    }
}

export function updateUserInfo(query='') {
    return async (dispatch) =>{
        try {
            const data = (await axios.post(`${baseUrl}/user/update`,Qs.stringify(query))).data;
            dispatch({
                type: UPDATE_USER_INFO_SUCCESS,
                data: data,
            })
        }
        catch (error) {
            dispatch({
                type: UPDATE_USER_INFO_FAILURE,
                error: new Error('修改用户信息失败')
            })
        }
    }
}

export function deleteUser(query='') {
    return async (dispatch) =>{
        try {
            const data = (await axios.post(`${baseUrl}/user/delete`,Qs.stringify(query))).data;
            dispatch({
                type: DELETE_USER_SUCCESS,
                data: data,
            })
        }
        catch (error) {
            dispatch({
                type: DELETE_USER_FAILURE,
                error: new Error('删除用户失败')
            })
        }
    }
}
