import { combineReducers } from "redux"
import { BlogView } from "./Reducer"

const ViewsReducer = combineReducers({
    Views: BlogView
})

export default ViewsReducer