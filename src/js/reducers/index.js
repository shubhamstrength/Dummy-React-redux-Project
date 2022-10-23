import { combineReducers } from "redux";
import OverviewReducer from './OverviewReducer.js'

const reducers = combineReducers({
    overview: OverviewReducer
})

export default reducers;