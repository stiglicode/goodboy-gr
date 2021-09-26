import { RedcuerAction } from "../types";

const initialState = 0;

const reducer = (
	state: number = initialState,
	action: RedcuerAction<number>
): number => {
	/* eslint-disable */
	switch (action.type) {
		case "next":
			return state + action.payload;
		case "previous":
			if (state !== 0) return state - action.payload;
			else return state;
		default:
			return state;
	}
	/* eslint-enable */
};

export default reducer;
