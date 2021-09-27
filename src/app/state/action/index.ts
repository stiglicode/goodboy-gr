import { Dispatch } from "redux";
import {
	RedcuerAction,
	OptionReducer,
	OptionSceneObject,
	FormSceneObject,
	FormReducer,
	SheltersDataObject,
	SheltersReducer,
	PrefixerDataObject,
	PrefixerReducer,
} from "../types";
import { API, ScenesActionType, ScenesType } from "../types/enum";

const nextScene = () => {
	return (dispatch: Dispatch<RedcuerAction<number>>): void => {
		dispatch({
			type: ScenesActionType.NEXT_SCENE,
			payload: 1,
		});
	};
};

const previousScene = () => {
	return (dispatch: Dispatch<RedcuerAction<number>>): void => {
		dispatch({
			type: ScenesActionType.PREVIOUS_SCENE,
			payload: 1,
		});
	};
};

const optionSceneData = (state: OptionSceneObject) => {
	return (dispatch: Dispatch<OptionReducer<string>>): void => {
		dispatch({
			type: ScenesType.OPTION,
			payload: state,
		});
	};
};

const formSceneData = (state: FormSceneObject) => {
	return (dispatch: Dispatch<FormReducer<string>>): void => {
		dispatch({
			type: ScenesType.FORM,
			payload: state,
		});
	};
};

const api_sheltersData = (state: SheltersDataObject) => {
	return (dispatch: Dispatch<SheltersReducer>): void => {
		dispatch({
			type: API.SHELTERS,
			payload: state,
		});
	};
};

const prefixer = (state: PrefixerDataObject) => {
	return (dispatch: Dispatch<PrefixerReducer>): void => {
		dispatch({
			type: API.PREFIXER,
			payload: state,
		});
	};
};

export {
	nextScene,
	previousScene,
	optionSceneData,
	formSceneData,
	api_sheltersData,
	prefixer,
};
