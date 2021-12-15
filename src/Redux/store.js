import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import BookReducer from "./Reducer/BookReducer";

const rootReducer = combineReducers({
  books: BookReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;
