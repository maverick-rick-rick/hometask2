import { combineReducers, createStore } from "redux";
import { tableSwitcherReducer } from './tableSwitcherReducer';
import { notesReducer } from "./notesReducer";
import { composeWithDevTools } from "redux-devtools-extension";


const rootReducer  = combineReducers({
    notesReducer: notesReducer,
    tableSwitcherReducer: tableSwitcherReducer
})

export const store = createStore(rootReducer, composeWithDevTools());
