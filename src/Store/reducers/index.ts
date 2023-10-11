import cellsReducers from "./cellsReducers";
import bundleReducers from "./bundleReducers";

import { combineReducers } from "redux";

const reducers = combineReducers({
  cells: cellsReducers,
  bundle: bundleReducers,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
