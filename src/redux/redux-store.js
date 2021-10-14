import {combineReducers, createStore, applyMiddleware, compose} from "redux";
import thunk from "redux-thunk";
import { reducer as formReducer } from "redux-form";
import calculateReduser from "./calculateReduser";
import studentReduser from "./studentReduser";

const reducers = combineReducers({
    calculate: calculateReduser,
    student: studentReduser,
    form: formReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

window.store = store;

export default store;