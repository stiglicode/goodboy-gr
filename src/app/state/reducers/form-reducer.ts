import { FormReducer, FormSceneObject } from "../types";

const initialState = {
	name: "",
	last_name: "",
	email: "",
	phoneNumber: "",
};

const reducer = (
	state: FormSceneObject = initialState,
	action: FormReducer<string>
): FormSceneObject => {
	/* eslint-disable */
	switch (action.type) {
		case "form":
			return (state = action.payload);
		default:
			return state;
	}
	/* eslint-enable */
};

export default reducer;
