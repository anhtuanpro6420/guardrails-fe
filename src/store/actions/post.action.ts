import { GET_POSTS_SUCCESS } from 'store/action-constants/post.action.constant';

export const getPostsSuccess = (payload?: any) => {
    return {
        type: GET_POSTS_SUCCESS,
        payload,
    };
};
