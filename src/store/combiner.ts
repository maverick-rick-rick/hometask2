import { composeWithDevTools } from "redux-devtools-extension";
import { combineReducers, createStore } from "redux";

import { tableSwitcherReducer } from './tableSwitcherReducer';
import { notesReducer } from "./notesReducer";
import { statsReducer } from "./statsReducer";


const rootReducer  = combineReducers({
    notesReducer: notesReducer,
    tableSwitcherReducer: tableSwitcherReducer,
    statsReducer: statsReducer
})

export const store = createStore(rootReducer, composeWithDevTools());
