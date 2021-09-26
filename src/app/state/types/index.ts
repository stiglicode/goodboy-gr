import reducers from "../reducers";
import { API, ScenesActionType, ScenesType } from "./enum";

export type RootState = ReturnType<typeof reducers>;

// Types for Scene reducers
interface SceneReducerNext<N> {
	type: ScenesActionType.NEXT_SCENE;
	payload: N;
}

interface SceneReducerPrevious<N> {
	type: ScenesActionType.PREVIOUS_SCENE;
	payload: N;
}

export type RedcuerAction<T> = SceneReducerNext<T> | SceneReducerPrevious<T>;

// Types for Option scene reducers
interface OptionSceneO {
	donateFormat: string;
	shelterSelection: string;
	donationValue: string;
}

interface OptionReducerSave<S> {
	type: ScenesType.OPTION;
	payload: {
		donateFormat: S;
		shelterSelection: S;
		donationValue: S;
	};
}

export type OptionReducer<S> = OptionReducerSave<S>;
export type OptionSceneObject = OptionSceneO;

// Types for Option scene reducers
interface FormSceneO {
	name: string;
	last_name: string;
	email: string;
	phoneNumber: string;
}

interface FormReducerSave<S> {
	type: ScenesType.FORM;
	payload: {
		name: S;
		last_name: S;
		email: S;
		phoneNumber: S;
	};
}

export type FormReducer<S> = FormReducerSave<S>;
export type FormSceneObject = FormSceneO;

// Types for API - Shelters
interface SheltersData {
	shelters: {
		id: number;
		name: string;
	}[];
}

interface SheltersReducerSave {
	type: API.SHELTERS;
	payload: SheltersData;
}

export type SheltersReducer = SheltersReducerSave;
export type SheltersDataObject = SheltersData;
