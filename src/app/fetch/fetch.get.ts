import axios from "axios";
import React from "react";

const publicURL = "https://frontend-assignment-api.goodrequest.com";

const getShelters = (state: any): any => {
	const fetchInfo = {
		url: publicURL,
		path: "api/v1/shelters",
		headers: {
			h: {
				"Content-Type": "application/json",
			},
		},
	};
	axios
		.get(`${fetchInfo.url}/${fetchInfo.path}`, {
			headers: fetchInfo.headers.h,
		})
		.then(res => state(res.data))
		.catch(error => console.log(error.response));
};

export { getShelters };
