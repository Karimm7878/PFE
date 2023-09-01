import { combineReducers } from "redux";
import authReducer from "./authReducer"
import { ProductReducer } from "./Productreducer";

export const rootReducer=combineReducers({
    authReducer,
    ProductReducer,
    
})