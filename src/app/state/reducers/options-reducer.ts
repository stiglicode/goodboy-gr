import { OptionReducer, OptionSceneObject } from "../types";

const initialState = {
	donateFormat: "",
	shelterSelection: "",
	donationValue: "",
};

const reducer = (
	state: OptionSceneObject = initialState,
	action: OptionReducer<string>
): OptionSceneObject => {
	/* eslint-disable */
	switch (action.type) {
		case "option":
			return (state = action.payload);
		default:
			return state;
	}
	/* eslint-enable */
};

export default reducer;
