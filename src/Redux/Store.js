import { applyMiddleware, createStore } from "redux";
import ViewsReducer from "./CombineReducer";
import thunk from "redux-thunk"

export const store = createStore(
    ViewsReducer,
    {},
    applyMiddleware(thunk)
)