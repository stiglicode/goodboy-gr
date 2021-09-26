import reducers from "../reducers";
import { ScenesActionType } from "./enum";

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
