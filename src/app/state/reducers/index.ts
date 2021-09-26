import { combineReducers } from "redux";
import sceneReducer from "./scene-reducer";
import optionReducer from "./options-reducer";
import formReducer from "./form-reducer";
import apiReducer from "./sheltersAPI-reducer";

const reducers = combineReducers({
	scene: sceneReducer,
	optionData: optionReducer,
	formData: formReducer,
	_API: apiReducer,
});

export default reducers;
