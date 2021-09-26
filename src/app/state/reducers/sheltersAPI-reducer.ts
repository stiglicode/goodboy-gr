import { SheltersReducer, SheltersDataObject } from "../types";
import { API } from "../types/enum";

const initialState: {
	shelters: {
		id: number;
		name: string;
	}[];
} = {
	shelters: [
		{
			id: 0,
			name: "",
		},
	],
};

const reducer = (
	state: SheltersDataObject = initialState,
	action: SheltersReducer
): SheltersDataObject => {
	/* eslint-disable */
	switch (action.type) {
		case API.SHELTERS:
			return (state = action.payload);
		default:
			return state;
	}
	/* eslint-enable */
};

export default reducer;
