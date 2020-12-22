import {combineReducers} from "redux";
import postsReducer from "./postsReducer";
import usersReducer from "./usersReducer";


export default combineReducers({
  posts: postsReducer,
  users: usersReducer
});


// rules of reducers:
// - reducer must return any value besides 'undefined'
// - reducer have to operate only on 'state' and 'action' inputs
// - reducer should not reach for anything outside reducer (any API calls, anything - reducers are pure)
// - reducer must not modify it's input 'state' object