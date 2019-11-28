import { combineReducers } from "redux"

// IMPORT REDUCERS
import authReducer from "./authReducer"

// COMBINE REDUCERS
const reducer = combineReducers({
  auth: authReducer
})

export default reducer
