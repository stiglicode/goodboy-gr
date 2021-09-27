import { PrefixerDataObject, PrefixerReducer } from "../types";
import { API } from "../types/enum";

const initialState = {
	pattern: "xxx-xxx-xxx",
	prefix: "+421",
	patternLength: 9,
	flag: "slovak-flag",
};

const reducer = (
	state: PrefixerDataObject = initialState,
	action: PrefixerReducer
): PrefixerDataObject => {
	/* eslint-disable */
	switch (action.type) {
		case API.PREFIXER:
			return (state = action.payload);
		default:
			return state;
	}
	/* eslint-enable */
};

export default reducer;
