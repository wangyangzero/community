import actions from '../action/index'

const {
    GET_LAB_INFO_SUCCESS,
} = actions;

export default (state = {},action) => {
    switch (action.type) {
        case GET_LAB_INFO_SUCCESS:
            return {
                ...state,
                getLabInfo: action.data,
            };
        default:
            return state;
    }
}