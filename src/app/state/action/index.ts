import { Dispatch } from "redux";
import { RedcuerAction } from "../types";
import { ScenesActionType } from "../types/enum";

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

export { nextScene, previousScene };
