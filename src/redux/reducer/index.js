import {combineReducers} from 'redux';
import homepage from './homepage';
import user from './user';
import modal from './modal';

export default combineReducers({
    homepage,
    user,
    modal,
});