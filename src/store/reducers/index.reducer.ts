import { combineReducers } from 'redux';
import postsReducer from './post.reducer';

const rootReducer = combineReducers({
    postsReducer,
});

export default rootReducer;
