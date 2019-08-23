import {combineReducers} from 'redux';
import homepage from './homepage';
import user from './user';
import modal from './modal';
import userInfo from './userInfo'
import adminHome from './adminHome'
import messageBoard from './messageBoard'

export default combineReducers({
    homepage,
    user,
    modal,
    userInfo,
    adminHome,
    messageBoard,
});