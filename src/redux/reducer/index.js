import {combineReducers} from 'redux';
import homepage from './homepage';
import user from './user';
import modal from './modal';
import userInfo from './userInfo'

export default combineReducers({
    homepage,
    user,
    modal,
    userInfo,
});