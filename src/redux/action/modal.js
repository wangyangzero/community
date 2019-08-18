/*模块界面接口*/
import axios from 'axios';
import action from './index';
import config from './common/config';

const {
    GET_LAB_INFO_SUCCESS,
    GET_LAB_INFO_FAILURE,
} = action;

const baseUrl = config.baseUrl;

export function getLabInfo() {
    return async (dispatch) =>{
        try {
            const data = (await axios(`${baseUrl}/Laboratory`)).data;
            dispatch({
                type: GET_LAB_INFO_SUCCESS,
                data: data,
            })
        }
        catch (error) {
            dispatch({
                type: GET_LAB_INFO_FAILURE,
                error: new Error('获取实验室信息失败')
            })
        }
    }
}