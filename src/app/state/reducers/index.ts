import { combineReducers } from "redux";
import sceneReducer from "./scene-reducer";

const reducers = combineReducers({
	scene: sceneReducer,
});

export default reducers;
