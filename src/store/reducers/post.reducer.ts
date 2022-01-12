import {
    GET_POSTS_ERROR,
    GET_POSTS_START,
    GET_POSTS_SUCCESS,
} from 'store/action-constants/post.action.constant';

const initState = {
    isLoading: false,
    posts: [],
    error: null,
};

const mockPosts = [
    {
        id: 1,
        title: 'Post 1',
        description: 'Des 1',
    },
    {
        id: 2,
        title: 'Post 1',
        description: 'Des 1',
    },
    {
        id: 3,
        title: 'Post 1',
        description: 'Des 1',
    },
    {
        id: 4,
        title: 'Post 1',
        description: 'Des 1',
    },
    {
        id: 5,
        title: 'Post 1',
        description: 'Des 1',
    },
];

const postReducer = (state = initState, action: any) => {
    switch (action.type) {
        case GET_POSTS_START:
            return {
                ...state,
                isLoading: true,
                posts: [],
                error: null,
            };
        case GET_POSTS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                posts: mockPosts,
                error: null,
            };
        case GET_POSTS_ERROR:
            return {
                ...state,
                isLoading: false,
                posts: [],
                error: {
                    message: 'Can not load posts',
                },
            };
        default:
            return state;
    }
};

export default postReducer;
