import React from "react";

const ReadInput = ({
	title,
	value,
	name,
}: {
	title: string;
	value: string;
	name: string;
}): JSX.Element => {
	return (
		<div className="form-doublecheck_row">
			<span>{title}</span>
			<input type="text" name={name} disabled value={value} />
		</div>
	);
};

export default ReadInput;
