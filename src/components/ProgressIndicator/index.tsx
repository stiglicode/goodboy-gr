import React from "react";
import relativeLength from "./length-setter";

const Progress = (props: {
	count: number | string;
	status: number | string;
}): JSX.Element => {
	return (
		<div
			className="progress-box"
			style={{
				width: relativeLength(+props.count),
			}}
		>
			{[...Array(+props.count)].map((e, i): JSX.Element => {
				return (
					<div
						className={`progress-box_item ${
							i === +props.status ? "active" : ""
						}`}
						key={i}
					></div>
				);
			})}
		</div>
	);
};

export default Progress;
