import { composeWithDevTools } from "redux-devtools-extension";
import { combineReducers, createStore } from "redux";

import { tableSwitcherReducer } from "./tableSwitcherReducer";
import { notesReducer } from "./notesReducer";
import { statsReducer } from "./statsReducer";
import { popupReducer } from "./popupReducer";

const rootReducer = combineReducers({
	notesReducer: notesReducer,
	tableSwitcherReducer: tableSwitcherReducer,
	statsReducer: statsReducer,
	popupReducer: popupReducer,
});

export const store = createStore(rootReducer, composeWithDevTools());
