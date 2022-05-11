import {combineReducers, createStore} from 'redux'
import {loginReducer} from "./loginReducer";
import {profileReducer} from "./profileReducer";
import {registerReducer} from "./registerReducer";

const reducers = combineReducers({
    login: loginReducer,
    profile: profileReducer,
    registration: registerReducer
})

const store = createStore(reducers)

export default store

export type AppStoreType = ReturnType<typeof reducers>

// @ts-ignore
window.store = store
