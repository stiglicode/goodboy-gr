import { Field } from "formik";
import React from "react";

const ReadInput = (
	props: React.InputHTMLAttributes<HTMLInputElement>
): JSX.Element => {
	return (
		<div className="form-doublecheck_row">
			<span>{props.title}</span>
			<Field {...props} disabled />
		</div>
	);
};

export default ReadInput;
