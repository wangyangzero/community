import actions from '../action/index'

const {
    GET_USER_BLOG_SUCCESS
} = actions;

export default (state = {},action) => {
    switch (action.type) {
        case GET_USER_BLOG_SUCCESS:
            return {
                ...state,
                getUserBlog: action.data,
            }
        default:
            return state;
    }
}